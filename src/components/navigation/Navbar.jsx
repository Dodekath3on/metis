import React from 'react'
import NavDesktop from './NavDesktop'

function Navbar() {
  return (
    <header className='flex fixed justify-between px-8 py-6 bg-primary text-secondary w-full'>
      <a href='/' className='text-3xl font-bold text-accent'>Metis</a>
      <NavDesktop />
      {/* TODO: Add <NavMobile /> */}
    </header>
  )
}

export default Navbar