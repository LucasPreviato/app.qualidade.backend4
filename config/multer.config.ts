import multer from 'multer'
import AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

export default {
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimeType.match(/pdf|doc|docx|xls|xlsx|ppt|pptx/)) {
      return cb(new Error('File type not allowed'), false)
    }
    cb(null, true)
  },
  async onFileUpload(req, file) {
    const fileName = `${uuidv4()}-${file.originalname}`
    const fileBuffer = Buffer.from(file.buffer)
    try {
      const result = await s3
        .putObject({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: fileName,
          Body: fileBuffer,
          ContentType: file.mimeType,
          ACL: 'public-read',
        })
        .promise()
      console.log(result)
      const url = s3.getSignedUrl('getObject', {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Expires: 60 * 60 * 24 * 7,
      })
      req.fileUrl = url
    } catch (e) {
      console.log(e)
    }
  },
}
