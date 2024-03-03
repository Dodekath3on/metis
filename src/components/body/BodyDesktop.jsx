import React from 'react'
import { bodyConsts } from '../consts/bodyConsts'
import { Link } from 'react-router-dom'
import CTABtn from '../../micro/CTABtn'

function BodyDesktop() {
  return (
    <main className='py-40 max-sm:hidden bg-primary'>
      {bodyConsts.map( body => {
        return (
          <section className='px-8 text-left'>
            {/* TODO: Sections to be broken into their own components - Ex. Welcome, Body, Analytics, */}
            <h2 className='text-6xl  text-secondary pb-4'>{ body.section.h2 }</h2>
            <p className='text-secondary pb-4'>{ body.section.p1 }</p>
            <p className='text-secondary pb-4'>{ body.section.p2 }</p>
            {/* TODO: Make actionBtn its own micro component to use in app */}
            <CTABtn text={ 'Get Started' } url={ '/sign_in' } />
          </section>
        )})}
    </main>
  )
}

export default BodyDesktop