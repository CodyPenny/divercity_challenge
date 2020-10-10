const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();
const path = require('path');

const s3 = new aws.S3({
  secretAccessKey: process.env.aws_secret,
  accessKeyId: process.env.aws_id,
  region: process.env.aws_region,
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  if (mimetype && extname) {
    cb(null, true);
  } else {
    return cb(
      new Error(`File upload only supports following types: ${filetypes}`),
      false
    );
  }
};

const upload = multer({
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: process.env.aws_bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: 'TESTING_METADATA' });
    },
    key: (req, file, cb) => {
      req.body = {
        url: '',
      };

      cb(null, 'files_from_node/' + Date.now().toString() + file.originalname);
    },
  }),
});

const parseMultiform = (req, res, next) => {
  const uploadFile = upload.single('image');

  uploadFile(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Error occurred when uploading' }] });
    } else if (err) {
      return res.status(400).json({ errors: [{ msg: `${err}` }] });
    }
    next();
  });
};

module.exports = {
  parseMultiform,
};
