import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './components/error-page.jsx'

import Login from './components/login/index.jsx'
import Dashboard from './components/Dashboard/index.jsx'
import Consults from './components/consults/index.jsx'
import RegisterPatient from './components/register-patient'

import MedicalRecordList from './components/medical-record-list'
import PatientDetails from './components/patient'
// import {Exames} from './components/exams'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,

    errorElement: <ErrorPage />
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: 'cadastro-paciente',
    element: <RegisterPatient />
  },
  {
    path: 'prontuarios',
    element: <MedicalRecordList />
  },
  {
    path: 'consultas',
    element: <Consults />
  },
  // {
  //   path: 'exames',
  //   element: <Exames />
  // },

  {
    path: '/paciente/:id',
    element: <PatientDetails />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
