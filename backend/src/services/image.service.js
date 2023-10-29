const { uploadImage, deleteImage } = require('../middlewares/claudinary')
const fs = require('fs-extra')

const uploadImageCreate = async (data) => {
  console.log(data.image)
  const resultImage = await uploadImage(data.image.mimetype)
  await fs.unlink(data.image.tempFilePath)
  return resultImage
}

const deleteImageDestroy = async (data) => {
  const resultImage = await deleteImage(data)
  return resultImage
}

module.exports = {
  uploadImageCreate,
  deleteImageDestroy
}
