import { Injectable } from '@nestjs/common'
import { S3 } from 'aws-sdk'
import {
  CreateBucketCommand,
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'
import { CreateBucketRequest } from 'aws-sdk/clients/s3'
import { FileUpload } from 'graphql-upload-minimal'
import { Uploads } from './entities/uploads.entity'

@Injectable()
export class UploadsService {
  private readonly s3: S3
  private readonly s3Client: S3Client

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })

    this.s3Client = new S3Client({ region: process.env.AWS_REGION })
  }

  async checkBucket(bucketName: string) {
    try {
      const res = await this.s3.headBucket({ Bucket: bucketName }).promise()
      console.log('Bucket already exists', res.$response.data)
      return { success: true, message: 'Bucket already exists', data: {} }
    } catch (e) {
      console.log("Error: bucket doesn't exist", e)
      return { success: false, message: "Error: bucket doesn't exist", data: e }
    }
  }

  async createBucket(bucketName: string) {
    const params: CreateBucketRequest = {
      Bucket: bucketName,
      CreateBucketConfiguration: {
        LocationConstraint: process.env.AWS_REGION,
      },
      ACL: '',
    }

    try {
      const res = await this.s3Client.send(new CreateBucketCommand(params))

      console.log('Bucket created successfully')

      return {
        success: true,
        message: 'Bucket created successfully',
        data: res,
      }
    } catch (error) {
      console.log('Error: unable to create bucket \n', error)

      return {
        success: false,
        message: 'Error: unable to create bucket',
        data: error,
      }
    }
  }

  async uploadFile(
    file: Express.Multer.File,
    bucketName: string
  ): Promise<Uploads> {
    const bucketStatus = await this.checkBucket(bucketName)

    if (!bucketStatus.success) {
      const bucket = await this.createBucket(bucketName)
      console.log(bucket)
    }

    const fileName = `${Date.now()}-${file.originalname}`
    const fileType = file.mimetype
    const s3Params = {
      Bucket: bucketName,
      Key: fileName,
      Body: file.buffer,
      ContentType: fileType,
      ACL: 'public-read',
    }
    try {
      await this.s3Client.send(new PutObjectCommand(s3Params))
      return {
        fileName,
        fileType,
        fileUrl:
          `https://arn:aws:s3:::` +
          bucketName +
          `.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`,
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async deleteFile(fileName: string, bucketName: string): Promise<boolean> {
    await this.checkBucket(bucketName)

    const s3Params = {
      Bucket: bucketName,
      Key: fileName,
    }
    try {
      const deletion = await this.s3Client.send(
        new DeleteObjectCommand(s3Params)
      )
      return deletion.DeleteMarker
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async uploadFileGQL(
    file: Promise<FileUpload>,
    bucketName: string
  ): Promise<Uploads> {
    const fileName = `${Date.now()}-${(await file).filename}`
    const fileType = (await file).mimetype
    const s3Params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: (await file).createReadStream(),
      ContentType: fileType,
      ACL: 'public-read',
    }
    try {
      await this.s3.upload(s3Params).promise()
      return {
        fileName,
        fileType,
        fileUrl:
          `https://arn:aws:s3:::` +
          bucketName +
          `.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`,
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
