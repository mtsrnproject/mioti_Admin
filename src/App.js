import React, { Suspense } from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './scss/style.scss'
import './css/adminlte.css'
import './css/adminlte.min.css'
import { useDispatch, useSelector } from 'react-redux'
import Home from './views/pages/Home'
import Inicio from './views/pages/Inicio'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

function App() {
  // const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  console.log('user.lenght', user)
  return (
    <div>
      {' '}
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            {/* <Route path="*" name="Main" element={<Page404 />} /> */}
            <Route path="*" exact name="Home" element={user.token ? <DefaultLayout /> : <Login />}>
              {/* <Route path="/layout" name="LayOut" element={<DefaultLayout />} />
              <Route path="/inicio" name="Inicio" element={<Inicio />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  )
}
export default App
