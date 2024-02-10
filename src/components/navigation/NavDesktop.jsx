import React from 'react'
import { Link } from 'react-router-dom'
import { navConsts } from '../consts/navConsts'

function NavDesktop() {
  return (
    <nav className='hidden md:block top-0'>
      <ul className='flex pt-2'>
        { navConsts.map( nav => {
          return (
            <li>
              <Link to={ nav.href } className='px-2 text-xl font-semibold text-secondary'>{ nav.name }</Link>
            </li>
        )})}
      </ul>
    </nav>
  )
}

export default NavDesktop