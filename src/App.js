import React, { Suspense } from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './scss/style.scss'
import { useDispatch, useSelector } from 'react-redux'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))

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
            <Route
              path="*"
              exact
              name="Main"
              element={user.token ? <DefaultLayout /> : <Login />}
            />
            {/* <Route path="/main" exact name="Main" element={!user ? <DefaultLayout /> : <Login />} /> */}
            <Route path="/login" exact name="Login Page" element={<Login />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  )
}
export default App
