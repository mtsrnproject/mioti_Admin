import { toast } from 'react-toastify'
import api from './httpService'

const getPageData = async (pageName) => {
  try {
    return await api
      .get(`pages/get/?page=${pageName}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res.data[pageName]
      })
  } catch (error) {
    console.log('error', error)
  }
}

const updataPageData = async (pageName, pageData) => {
  try {
    return await api
      .post(`pages/update`, {
        pageName,
        pageData,
      })
      .then((res) => {
        if (res.data.message === 'ok') {
          toast('Update Success!')
        }
        return res
      })
  } catch (error) {
    console.log('error', error)
  }
}

const uploadImages = async (pageImages) => {
  var imagesForm = new FormData()
  Object.keys(pageImages).forEach((key) => imagesForm.append(key, pageImages[key]))
  imagesForm.append('files', imagesForm)
  try {
    return await api
      .post(`pages/upload_images`, imagesForm, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        return res
      })
  } catch (error) {
    console.log('error', error)
  }
}

export { getPageData, updataPageData, uploadImages }
