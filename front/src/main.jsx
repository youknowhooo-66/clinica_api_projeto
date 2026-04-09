import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './components/consuts/index.jsx'
import Login from './components/login/index.jsx'


const router = createBrowserRouter([
{
  path: '/',
  element: <Login />
},
{
  path: '/consultas',
  element: <Dashboard />
},
// {
//   path: '/cadastro-pacie',
//   element: <Dashboard />
// },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
