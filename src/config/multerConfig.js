import multer from 'multer';
import Multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);


export default {
  fileFilter: (req, file, cb) => {
    const extensaoImg =[ 'image/png', 'image/jpeg', 'image/jpg' ].find
    (formatoAceito => formatoAceito == file.mimetype);

    if (extensaoImg) {
      return cb(null, true);
    }
    return cb(new multer.MulterError('Arquivo presica ser PNG, JPEG ou JPG'));
  },

  storage: Multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },

    filename: (req, file, cb) => {
      cb(null,`${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  })
};



