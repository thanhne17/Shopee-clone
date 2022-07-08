import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Aside from "../components/User/Aside"

type Props = {}

const UserLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="bg-[#f5f5f5] p-8">
        <div className="grids flex">
          <Aside />
          <div className="bg-white flex-1 rounded px-10 py-6">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout