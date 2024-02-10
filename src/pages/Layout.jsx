import React from 'react'
import { Outlet } from 'react-router-dom'
import NavContainer from '../components/containers/NavContainer'
import Footer from '../components/navigation/Footer'

function Layout() {
  return (
    <>
      <NavContainer />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout