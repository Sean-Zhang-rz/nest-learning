import * as multer from 'multer'
import * as fs from 'fs'
import * as path from 'path'

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      fs.mkdirSync(path.join(process.cwd(), 'my-upload'))
    } catch(e) {}
    cb(null, path.join(process.cwd(), 'my-uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})