exports.stripDomain = (newImages) => {
  return newImages.map(image => 
    image.replace('https://divercity-bucket.s3.us-east-2.amazonaws.com/files_from_node/', '')
  );
};

