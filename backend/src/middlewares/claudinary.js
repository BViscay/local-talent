const cloudinary = require('cloudinary').v2
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
const CLOUDINARY_APY_SECRET = process.env.CLOUDINARY_APY_SECRET

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_APY_SECRET,
  secure: true
})

const uploadImage = (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
      if (error) {
        reject(error.message)
      } else {
        resolve({ secureUrl: result.secure_url, publicId: result.public_id })
      }
    }).end(buffer)
  })
}

const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId)
}

module.exports = {
  uploadImage,
  deleteImage
}
