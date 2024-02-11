import React from 'react'
import { footerConsts } from '../consts/footerConsts'

function Footer() {
  return (
    <footer className='flex bg-secondary bottom-0 px-8 py-4 w-full text-sm'>
      {/* TODO: Update to use footerConsts and change to icons */}
      <ul className='flex'>
        { footerConsts.map( footer => {
          return (
            <li className='px-2'>
              <a className='text-lg hover:text-accent' href={ footer.href } target='_blank' rel='noreferrer noopener'>{ footer.icon }</a>
            </li>
        )})}
      </ul>
      <p className='text-md font-semibold'>&copy;2024 Dodekath3on LLC</p>
    </footer>
  )
}

export default Footer