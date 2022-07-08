import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import SiteLayout from './layout/siteLayout'
import SignUp from './page/auth/SignUp'
import SIgnIn from './page/auth/SIgnIn'
import AuthLayout from './layout/authLayout'
import ProductDetail from './components/ProductDetail'
import UserLayout from './layout/UserLayout'
import UserProfile from './components/User/UserProfile'
import Cart from './components/User/Cart'
import Notify from './components/User/Notify'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='' element={<SiteLayout />} >
          <Route index element={<HomePage />} />
          <Route path=':id' element={<ProductDetail />} />
        </Route>
        <Route path='user' element={<UserLayout />}>
          <Route path='profile' element={<UserProfile />}  />
          <Route path='cart' element={<Cart />}  />
          <Route path='noti' element={<Notify />}  />
        </Route>
        <Route path='auth' element={<AuthLayout />} >
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SIgnIn />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
