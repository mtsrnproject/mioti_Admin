/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export const httpConfig = async (token) => {
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response && error.response.status >= 400 && error.response.status < 500
  if (!expectedErrors) {
    console.log(error)
  }
  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
