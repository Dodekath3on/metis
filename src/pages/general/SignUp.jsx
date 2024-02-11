import React from 'react'
import SignUpForm from '../../components/forms/SignUpForm'

function SignUp() {
  return (
    <main className='pt-40 pb-[16.75%] px-64 bg-primary'>
      <section>
        <h2 className='text-3xl pb-8 text-secondary font-semibold'>Create your account</h2>
        <SignUpForm />
      </section>
    </main>
  )
}

export default SignUp