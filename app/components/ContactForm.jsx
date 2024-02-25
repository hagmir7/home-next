"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


export default function ContactForm() {
      const [spinner, setSpinner] = React.useState(false)
      const router = useRouter()

      const sendMessage = async (e) => {
        setSpinner(true)
        e.preventDefault()
        const form = new FormData(e.target)
        await fetch('https://freesad.com' + '/api/contact', {
          method: 'POST',
          body: form,
        })
          .then((response) => {
            setSpinner(false)
            e.target.reset()
            router.push('/')
          })
          .catch((error) => {
            console.error('Error:', error)
            setSpinner(false)
            router.push('/')
          })
      }
  return (
    <form onSubmit={sendMessage}>
      <label htmlFor='name'>Full name</label>
      <input
        type='text'
        maxLength={60}
        placeholder='Full name'
        className='form-control rounded-pill'
        name='name'
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        maxLength={60}
        placeholder='Email'
        className='form-control rounded-pill'
        name='email'
      />
      <label htmlFor='body'>Message</label>
      <textarea
        name='body'
        id='body'
        placeholder='Message'
        cols='30'
        rows='5'
        className='form-control contact-body'
      ></textarea>
      <button type='submit' className='btn btn-primary w-100 mt-3 rounded-pill'>
        {!spinner ? (
          'Send'
        ) : (
          <div
            className='spinner-border'
            style={{ height: '25px', width: '25px' }}
            role='status'
          ></div>
        )}
      </button>
    </form>
  )
}
