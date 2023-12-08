import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

// axios.defaults.baseURL = 'https://app-22c52576-ffaa-44f5-8dc7-968c2c19ecda.cleverapps.io/'
axios.defaults.baseURL = 'http://127.0.0.1:3001'
// axios.defaults.baseURL = 'https://api.onegroupinnovate.com/'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
