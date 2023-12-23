import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { loginUser } from 'src/services/auth_services'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkAuth = async () => {
    await loginUser(userName, passWord).then((res) => {
      if (res?.status) {
        dispatch({ type: 'set', user: res.data })
        localStorage.setItem('user', JSON.stringify(res.data))
        axios.defaults.headers.common['Authorization'] = res.data.token
        navigate('/home', { replace: true })
      } else {
        return toast('Wrong Password')
      }
    })
  }

  const styles = {
    container: {
      backgroundImage: `url(back.jpg)`,
      backgroundPosition: 'cover',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
    },
  }

  return (
    <div
      style={styles.container}
      className="bg-light min-vh-100 d-flex flex-row align-items-center"
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => {
                          setUserName(e.target.value)
                        }}
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => {
                          setPassWord(e.target.value)
                        }}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={checkAuth} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
