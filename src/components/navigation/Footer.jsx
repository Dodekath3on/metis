import React from 'react'

function Footer() {
  return (
    <footer className='flex bg-secondary bottom-0 px-8 py-4 w-full text-sm'>
      {/* TODO: Update to use footerConsts and change to icons */}
      <ul className='flex'>
        <li className='px-2'>
          <a href="#">Instagram</a>
        </li>
        <li className='px-2'>
            <a href="#">X</a>
        </li>
        <li className='px-2'>
            <a href="#">X</a>
        </li>
      </ul>
      <p>&copy;2024 Dodekath3on LLC</p>
    </footer>
  )
}

export default Footer