const aws = require('aws-sdk');
require('dotenv').config();

const s3 = new aws.S3({
  secretAccessKey: process.env.aws_secret,
  accessKeyId: process.env.aws_id,
  region: process.env.aws_region,

});

const s3delete = (files) => {
  console.log('in s3delete', files);
  const params = files.map(file => { 
      return {
      Bucket : process.env.aws_bucket,
      Key : `files_from_node/${file}`
      }
    });
    console.log('params', params);
  return new Promise((resolve, reject) => {
      params.forEach(image => {
        s3.deleteObject(image, (err, data) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(data);
          };
        })        
      });
    
  })
};

module.exports = {
  s3delete
}
