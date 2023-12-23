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
import { Navigate, useNavigate, useNavigation } from 'react-router-dom'

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
  const navigate = useNavigate()

  const navigations = (route) => {
    navigate(route, { replace: true })
  }
  return (
    <div className="wrapper p-4">
      <div
        style={{ marginBottom: 200, marginTop: 50 }}
        className="d-flex p-5 justify-content-center"
      >
        <h1 style={{ fontSize: 50 }} className="font-weight-bold">
          Welcome to mioti admin panel
        </h1>
      </div>
      <div className="row">
        <div onClick={() => navigations('/inicio')} className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>Inicio</h3>
            </div>
            <div className="icon">
              <i className="ion ion-bag"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div onClick={() => navigations('/data_strategy')} className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>Data Strategy</h3>{' '}
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div onClick={() => navigations('/ai_strategy')} className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>AI Strategy</h3>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div onClick={() => navigations('/nosotros')} className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>Nosotros</h3>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <a href="/layout" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
