import { MulterMiddleware } from './multer.middleware'

describe('MulterMiddleware', () => {
  it('should be defined', () => {
    expect(new MulterMiddleware()).toBeDefined()
  })
})
