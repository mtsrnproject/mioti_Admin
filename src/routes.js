import React from 'react'

const Inicio = React.lazy(() => import('./views/pages/Inicio'))
const Pricing = React.lazy(() => import('./views/pages/pricing'))

const routes = [
  // { path: '/login', exact: true, name: 'Login Admin', element: Login },
  { path: '/', exact: true, name: 'Inicio', element: Inicio },
  { path: '/pricing', exact: true, name: 'Pricing', element: Pricing },
]

export default routes
