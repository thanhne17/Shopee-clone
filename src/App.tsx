import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import SiteLayout from './layout/siteLayout'
import SignUp from './page/auth/SignUp'
import SIgnIn from './page/auth/SIgnIn'
import AuthLayout from './layout/authLayout'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='' element={<SiteLayout />} />
        <Route path='auth' element={<AuthLayout />} >
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SIgnIn />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
