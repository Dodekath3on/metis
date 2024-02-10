import React from 'react'

function BodyDesktop() {
  return (
    <main className='py-40 max-sm:hidden bg-primary'>
      <section className='px-8 text-left'>
        <h2 className='text-5xl  text-secondary pb-4'>Welcome </h2>
        <p className='text-secondary pb-4'>Some text to go here...</p>
        <p className='text-secondary pb-4'>More text to go here...</p>
        
        {/* TODO: Make actionBtn its own micro component to use in app */}
        <button className='bg-accent text-primary font-bold px-5 py-2 rounded-full'>Action</button>
      </section>
    </main>
  )
}

export default BodyDesktop