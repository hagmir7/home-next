"use client"
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next';


export default function ContactForm() {
      const [spinner, setSpinner] = React.useState(false);
      const { t } = useTranslation();
      const router = useRouter();
      const errorMessage = useRef()

      const sendMessage = async (e) => {
        setSpinner(true)
        e.preventDefault()
        const form = new FormData(e.target)
        // Check if any input field is empty
        let isAnyFieldEmpty = false;
        form.forEach((value) => {
            if (!value.trim()) {
                isAnyFieldEmpty = true;
            }
        });

        if (isAnyFieldEmpty) {
            errorMessage.current.textContent = t('Please fill in all fields.')
            setSpinner(false);
            return;
        }
        await fetch('https://freesad.com/api/contact', {
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
    <form
      onSubmit={sendMessage}
      onChange={() => errorMessage.current.textContent = ""}
    >
      <p className='h6 text-danger' ref={errorMessage}></p>
      <label htmlFor='name'>{t('Full name')}</label>
      <input
        type='text'
        maxLength={60}
        placeholder={t('Full name')}
        className='form-control rounded-pill'
        name='name'
      />
      <label htmlFor='email'>{t('Email')}</label>
      <input
        type='text'
        maxLength={60}
        placeholder={t('Email')}
        className='form-control rounded-pill'
        name='email'
      />
      <label htmlFor='body'>{t('Message')}</label>
      <textarea
        name='body'
        id='body'
        placeholder={t('Message')}
        cols='30'
        rows='5'
        className='form-control contact-body'
      ></textarea>
      <button type='submit' className='btn btn-primary w-100 mt-3 rounded-pill'>
        {!spinner ? (
          t('Send')
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
