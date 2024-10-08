'use client'
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';


const GoogleAd = dynamic(() => import('./GoogleAd'))

export default function DownloadBook(props) {
  const [email, setEmail] = useState()
  const [spinner, setSpinner] = useState(false)
  const {t} = useTranslation();

  const isEmail = localStorage.getItem('email')
  
  const message = useRef()

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }

  const seveEmail = async () => {
    setSpinner(true)
    if (email !== '') {
      await fetch('https://books.amtar.shop/en/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })
        .then((respons) => {
          if (validateEmail(email)) {
            if (typeof window !== 'undefined') {
              window.localStorage.setItem('email', true)
              window.open(`https://books.amtar.shop${props.file}`, '_blank')
            }
            setSpinner(false)
          } else {
            message.current.innerHTML = t('Your email is not valid!')
            setSpinner(false)
          }
        })
        .catch((error) => {
          message.current.innerHTML = t('Your email is not valid!')
          setSpinner(false)
        })
    } else {
      message.current.innerHTML = t('Please first enter your email to download!')
      setSpinner(false)
    }

    setSpinner(false)
  }

  return (
    <>
      <div className='text-danger p-0'></div>
      <div className='row p-0'>
        {isEmail ? (
          <div className='col-md-12  text-center mt-3'>
            <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
            {props.file === null ? (
              <button
                href={`https://books.amtar.shop${props.file}`}
                className='btn border-0 btn-danger rounded-pill w-75 ms-1'
                target='_blanck'
                disabled={true}
              >
                {t("Sorry you can't download this book")}
              </button>
            ) : (
              <a
                href={`https://books.amtar.shop${props.file}`}
                className='btn border-0 btn-success rounded-pill w-75 ms-1'
                target='_blanck'
                disabled={true}
              >
                {t('Download')}
              </a>
            )}
            <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
          </div>
        ) : (
          <>
            <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
            {
              props.file === null ?
                <p className='h6 text-center text-danger'>{t("Sorry you can't download this book")}</p>
                : ''
            }
            <span className='text-danger' ref={message}></span>
            <div className='row d-flex w-100 p-0 m-0'>
              <div className='col-md-8'>
                <input
                  type='email'
                  placeholder={t('Enter you email')}
                  className='form-control rounded-pill'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='col-md-4 text-center mt-md-3 mt-3 mt-xl-0 mt-lg-0'>
                <button
                  disabled={props.file === null ? true : false}
                  className={`btn border-0 ${
                    props.file === null ? 'btn-danger' : 'btn-success'
                  } rounded-pill ms-1 w-75`}
                  onClick={seveEmail}
                >
                  {!spinner ? (
                    t('Download')
                  ) : (
                    <div
                      className='spinner-border'
                      style={{ height: '25px', width: '25px' }}
                      role='status'
                    ></div>
                  )}
                </button>
              </div>
            </div>
            <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
          </>
        )}
      </div>
    </>
  )
}
