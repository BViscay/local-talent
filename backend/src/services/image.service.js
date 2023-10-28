const { uploadImage, deleteImage } = require('../middlewares/claudinary')

const uploadImageCreate = async (data) => {
  const buffer = data.image.data
  const urlImage = await uploadImage(buffer)
  return urlImage
}

const deleteImageDestroy = async (data) => {
  const imageBuffer = Buffer.from(data.image.data, 'base64')
  const resultImage = await deleteImage(imageBuffer)
  return resultImage
}

module.exports = {
  uploadImageCreate,
  deleteImageDestroy
}
