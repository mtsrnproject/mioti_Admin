import React from 'react'

const Inicio = React.lazy(() => import('./views/pages/Inicio'))
const Data_strategy = React.lazy(() => import('./views/pages/data_strategy'))
const Pricing = React.lazy(() => import('./views/pages/pricing'))

const routes = [
  // { path: '/login', exact: true, name: 'Login Admin', element: Login },
  { path: '/', exact: true, name: 'Inicio', element: Inicio },
  { path: '/data_strategy', exact: true, name: 'Data Strategy', element: Data_strategy },
  { path: '/pricing', exact: true, name: 'Pricing', element: Pricing },
]

export default routes
