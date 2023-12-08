import api from './httpService'

const loginUser = async (userName, passWord) => {
  try {
    return await api
      .post(`users/loginAdmin`, {
        userName,
        passWord,
      })
      .then((res) => {
        console.log('res', res)
        return res
      })
  } catch (error) {
    console.log('error', error)
  }
}

const logoutUser = async (dispatch, navigate) => {
  try {
    dispatch({ type: 'set', user: {} })
    localStorage.clear('user')
    navigate('/login', { replace: true })
  } catch (error) {
    console.log('error', error)
  }
}

export { loginUser, logoutUser }
