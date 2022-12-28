import { Injectable, NestMiddleware } from '@nestjs/common'
import * as multer from 'multer'

@Injectable()
export class MulterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    multer().array('files')(req, res, (err: any) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        })
      }
      next()
    })
  }
}
