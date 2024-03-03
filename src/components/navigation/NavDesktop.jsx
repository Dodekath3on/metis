import React from 'react'
import { Link } from 'react-router-dom'
import { navConsts } from '../consts/navConsts'

function NavDesktop() {
  return (
    <nav className='hidden md:block top-0'>
      <ul className='flex pt-1'>
        { navConsts.map( nav => {
          return (
            <li>
              <Link to={ nav.href } className='px-2 text-lg text-secondary hover:text-accent'>{ nav.name }</Link>
            </li>
        )})}
      </ul>
    </nav>
  )
}

export default NavDesktop