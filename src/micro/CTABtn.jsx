import React from 'react'
import { Link } from 'react-router-dom'

function CTABtn({ text, url }) {
  return (
    <Link to={ url } className='bg-accent text-primary font-bold px-5 py-2 rounded-full'>{ text }</Link>
  )
}

CTABtn.defaultProps = {
  url: '#'
}

export default CTABtn