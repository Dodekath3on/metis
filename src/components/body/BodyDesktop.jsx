import React from 'react'
import { bodyConsts } from '../consts/bodyConsts'

function BodyDesktop() {
  return (
    <main className='py-40 max-sm:hidden bg-primary'>
      {bodyConsts.map(body => {
        return (
          <section className='px-8 text-left'>
            <h2 className='text-6xl  text-secondary pb-4'>{ body.section.h2 }</h2>
            <p className='text-secondary pb-4'>{ body.section.p1 }</p>
            <p className='text-secondary pb-4'>{ body.section.p2 }</p>
            {/* TODO: Make actionBtn its own micro component to use in app */}
            <button className='bg-accent text-primary font-bold px-5 py-2 rounded-full'>Action</button>
          </section>
        )})}
    </main>
  )
}

export default BodyDesktop