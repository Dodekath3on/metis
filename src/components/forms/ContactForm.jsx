import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactForm() {

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <form onSubmit={ handleSubmit } className='bg-secondary text-primary shadow-md rounded px-8 pt-8 pb-12'>
        <h2 className='text-2xl pb-4'>Reach our team</h2>
        <div className='px-4'>
          <label className='block' htmlFor="first_name">First Name <p className='inline text-red-400'>*</p></label>
          <input className='block shadow appearance-none border rounded w-3/4 px-2 py-2 mb-2' placeholder='e.g., John' type="text" />
          <label className='block' htmlFor="email">Last Name <p className='inline text-red-400'>*</p></label>
          <input className='block shadow border rounded w-3/4 px-2 py-2 mb-2' placeholder='Smith' type="text" />
          <label className='block' htmlFor="last_name">Email <p className='inline text-red-400'>*</p></label>
          <input className='block shadow border rounded w-3/4 px-2 py-2 mb-2' placeholder='Smith' type="text" />
          <label className='block' htmlFor="last_name">Job Titles</label>
          <input className='block shadow border rounded w-3/4 px-2 py-2 mb-2' placeholder='Mr. Manager' type="email" />
          <label className='block' htmlFor="last_name">What can we help you with? <p className='inline text-red-400'>*</p></label>
          <input className='block shadow border rounded w-3/4 px-2 pt-2 pb-20 mb-2' placeholder='Tell us about your quesiton here...' type="text" />
          <button className='bg-accent text-primary font-bold px-5 py-2 rounded-full'>Sign In</button>
        </div>
      </form>
      <p className='text-center text-xs text-secondary pt-2'>&copy;2024 Dodekath3on LLC. All rights reserved.</p>
    </>
  )
}

export default ContactForm