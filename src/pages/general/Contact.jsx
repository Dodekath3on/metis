import React from 'react'

function Contact() {
  return (
    <main className='pt-40 pl-4 pr-8 bg-primary grid grid-cols-2'>
      <section className='w-full px-4 pb-[113%]'>
        <h2 className='text-4xl text-secondary pb-2'>Have questions?</h2>
        <p className='text-md text-secondary py-2'>Fill out your information and someone from our team will get back to you as soon as we can.</p>
        <p className='text-md text-secondary py-2'>Check out our <a className='underline' href='#'>FAQ</a> page to see some already answered questions.</p>
      </section>
      <section lassName='px-8'>
        {/* TODO: Update Contact Form */}
        <form className='bg-secondary text-primary shadow-md rounded px-8 py-8 pb-18'>
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
          </div>

        </form>
        <p className='text-center text-xs text-secondary pt-2'>&copy;2024 Dodekath3on LLC. All rights reserved.</p>
      </section>
    </main>
  )
}

export default Contact