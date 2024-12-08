'use client'
import React, { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

const GoogleAd = dynamic(() => import('./GoogleAd'))

export default function DownloadBook(props) {
  const [email, setEmail] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [hasStoredEmail, setHasStoredEmail] = useState(false)
  const { t } = useTranslation()
  const message = useRef()

  // Safely check localStorage after mount
  useEffect(() => {
    const storedEmail = window?.localStorage?.getItem('email')
    setHasStoredEmail(!!storedEmail)
  }, [])

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }

  const saveEmail = async () => {
    if (!email) {
      message.current.innerHTML = t(
        'Please first enter your email to download!'
      )
      return
    }

    if (!validateEmail(email)) {
      message.current.innerHTML = t('Your email is not valid!')
      return
    }

    try {
      setSpinner(true)
      const response = await fetch(
        'https://api.facepy.com/en/api/save-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to save email')
      }

      window?.localStorage?.setItem('email', 'true')
      setHasStoredEmail(true)
      window?.open(`https://api.facepy.com${props.file}`, '_blank')
    } catch (error) {
      console.error('Error saving email:', error)
      message.current.innerHTML = t('An error occurred. Please try again.')
    } finally {
      setSpinner(false)
    }
  }

  const fileUrl = `https://api.facepy.com${props.file}`
  const isFileAvailable = props.file !== null

  return (
    <div className='row p-0'>
      <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />

      {!isFileAvailable && (
        <p className='h6 text-center text-danger'>
          {t("Sorry you can't download this book")}
        </p>
      )}

      <span className='text-danger' ref={message}></span>

      {hasStoredEmail ? (
        <div className='col-md-12 text-center mt-3'>
          {isFileAvailable ? (
            <a
              href={fileUrl}
              className='btn border-0 btn-success rounded-pill w-75 ms-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('Download')}
            </a>
          ) : (
            <button
              className='btn border-0 btn-danger rounded-pill w-75 ms-1'
              disabled
            >
              {t("Sorry you can't download this book")}
            </button>
          )}
        </div>
      ) : (
        <div className='row d-flex w-100 p-0 m-0'>
          <div className='col-md-8'>
            <input
              type='email'
              placeholder={t('Enter your email')}
              className='form-control rounded-pill'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='col-md-4 text-center mt-md-3 mt-3 mt-xl-0 mt-lg-0'>
            <button
              disabled={!isFileAvailable || spinner}
              className={`btn border-0 ${
                isFileAvailable ? 'btn-success' : 'btn-danger'
              } rounded-pill ms-1 w-75`}
              onClick={saveEmail}
            >
              {spinner ? (
                <div
                  className='spinner-border'
                  style={{ height: '25px', width: '25px' }}
                  role='status'
                >
                  <span className='visually-hidden'>Loading...</span>
                </div>
              ) : (
                t('Download')
              )}
            </button>
          </div>
        </div>
      )}

      <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
    </div>
  )
}
