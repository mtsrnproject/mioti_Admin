import React from 'react'

const Home = React.lazy(() => import('./views/pages/Home'))
const Inicio = React.lazy(() => import('./views/pages/Inicio'))
const Data_strategy = React.lazy(() => import('./views/pages/data_strategy'))
const AI_strategy = React.lazy(() => import('./views/pages/ai_strategy'))
const Nosotros = React.lazy(() => import('./views/pages/nosotros'))

const routes = [
  { path: '/home', exact: true, name: 'Home', element: Home },
  { path: '/inicio', exact: true, name: 'Inicio', element: Inicio },
  { path: '/data_strategy', exact: true, name: 'Data Strategy', element: Data_strategy },
  { path: '/ai_strategy', exact: true, name: 'AI Strategy', element: AI_strategy },
  { path: '/nosotros', exact: true, name: 'Nosotros', element: Nosotros },
]

export default routes
