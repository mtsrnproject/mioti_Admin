import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import { Navigate, useNavigation } from 'react-router-dom'

const styles = {
  container: {
    backgroundImage: `url(https://img.freepik.com/free-photo/landscape-green-grassland_1409-5576.jpg?t=st=1702540510~exp=1702544110~hmac=2daae7bf9ee5e529eb81190bf9d673629562eea5f1bb94a68de71aab459e0083&w=1380)`,
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
  },
}

const Home = () => {
  return (
    <div className="bg-light">
      <CContainer style={styles.container}>
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <CButton
            onClick={() => {
              return <Navigate to="/inicio" replace={true} />
            }}
            style={{ marginLeft: '3%', marginRight: '3%', width: '13%' }}
            color="primary"
            size="lg"
          >
            Inicio
          </CButton>
          <CButton style={{ marginRight: '3%', width: '13%' }} color="primary" size="lg">
            Data Strategy{' '}
          </CButton>
          <CButton style={{ marginRight: '3%', width: '13%' }} color="primary" size="lg">
            AI Strategy
          </CButton>
          <CButton style={{ marginRight: '3%', width: '13%' }} color="primary" size="lg">
            Nosotros
          </CButton>
        </div>
      </CContainer>
    </div>
  )
}

export default Home
