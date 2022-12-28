import { Injectable } from '@nestjs/common'
import { S3 } from 'aws-sdk'
import { Uploads } from './entities/uploads.entity'

@Injectable()
export class UploadsService {
  private readonly s3: S3
  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      endpoint: process.env.AWS_ENDPOINT,
      s3ForcePathStyle: true,
      signatureVersion: 'v4',
    })
  }

  async uploadFile(file: any): Promise<Uploads> {
    const fileName = `${Date.now()}-${file.originalname}`
    const fileType = file.mimetype
    const s3Params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: file.buffer,
      ContentType: fileType,
      ACL: 'public-read',
    }
    try {
      await this.s3.upload(s3Params).promise()
      return {
        fileName,
        fileType,
        fileUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`,
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
