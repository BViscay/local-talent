const { uploadImage, deleteImage } = require('../middlewares/claudinary')
// const fs = require('fs-extra')

const uploadImageCreate = async (data) => {
  const resultImage = await uploadImage(data.image.tempFilePath)
  // await fs.unlink(data.image.tempFilePath)
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
