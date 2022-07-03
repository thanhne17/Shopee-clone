import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../page/HomePage'

type Props = {}

const SiteLayout = (props: Props) => {
  return (
    <div>
        <Header />
        <HomePage />
        <Outlet />
    </div>
  )
}

export default SiteLayout