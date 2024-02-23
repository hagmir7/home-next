"use client"
import React, {useContext, useEffect} from 'react';
import Link from 'next/link';
import AuthContext from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';


export default function LoginPage() {
  const { login, sniper, Message, User } = useContext(AuthContext)
  const router = useRouter();
  const {t} = useTranslation()


  useEffect(() => {
    if (User) {
      router.push('/')
    }
  })



  return (
    <div className='container my-3'>
      <div className='row m-0 d-flex justify-content-center w-100'>
        <div className='text-center mb-1'>
          <img src='/favicon.ico' alt='Freewsa' width='70px' height='auto' />
          <p className='h5 my-3'>{t('Log in to manage your account')}</p>
        </div>
        <div className='col-md-5 shadow-sm card p-3'>
          <h1 className='d-none h4'>{t('Login to freewsad')}</h1>
          <form onSubmit={login}>
            <div></div>
            <label htmlFor='username' className='text-muted h6'>
              {t('Username')}
            </label>
            <input
              type='text'
              name='username'
              className='form-control rounded-pill mb-3'
              placeholder={t('Enter your username')}
            />
            <label htmlFor='password' className='text-muted h6'>
              {t('Password')}
            </label>
            <input
              type='password'
              name='password'
              className='form-control rounded-pill mb-3'
              placeholder={t('Enter your password')}
            />
            <button
              type='submit'
              className='w-100 rounded-pill btn btn-primary my-2'
            >
              {!sniper ? (
                t('Login')
              ) : (
                <div
                  className='spinner-border'
                  style={{ height: '20px', width: '20px' }}
                  role='status'
                ></div>
              )}
            </button>
          </form>
        </div>
      </div>
      <div className='row m-0 d-flex justify-content-center w-100 mt-3'>
        <div className='col-md-5 card shadow-sm p-4 text-center'>
          <p className='m-0'>
            {t('Not yet registered')} ?{' '}
            <Link className='text-info' href='/accounts/register/'>
              {t('Create your account')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
