import React from 'react'
import { Link } from 'react-router-dom'

import ContactForm from '../../components/forms/ContactForm'

function Contact() {
  return (
    <main className='pt-40 pl-4 pr-8 bg-primary grid grid-cols-2'>
      {/* TODO: Update styling to to be responsive, Desktop vs Mobile */}
      <section className='w-full px-4 pb-[97%]'>
        <h2 className='text-4xl text-secondary pb-2'>Have questions?</h2>
        <p className='text-md text-secondary py-2'>Fill out your information and someone from our team will get back to you as soon as we can.</p>
        <p className='text-md text-secondary py-2'>Check out our <Link to={ '/faq' } className='underline'>FAQ</Link> page to see some already answered questions.</p>
      </section>
      <section className='px-8'>
        {/* TODO: Update Contact Form */}
        <ContactForm />
      </section>
    </main>
  )
}

export default Contact