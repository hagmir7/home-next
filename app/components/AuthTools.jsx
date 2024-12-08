'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext';
import { useTranslation } from 'react-i18next';


export default function AuthTools() {
  const {authTokens, User } = useContext(AuthContext);
  const {t} = useTranslation();
  return (
    <>
      {authTokens ? (
        <>
          <Link
            href={`/user/${User ? User.user.username : ''}`}
            className='nav-item mx-4'
          >
            <img
              title='Profile'
              loading='eager'
              className='nav-icon'
              src={`https://api.facepy.com/${User ? User.profile.avatar : ''}`}
              alt='Profile'
              width='35px'
              height='35px'
            />
          </Link>
        </>
      ) : (
        <>
          <Link
            className='btn-primary btn rounded-pill mx-2'
            title={t('Log in')}
            href='/accounts/login'
          >
            {t('Log in')}
          </Link>
          <Link
            className='border btn rounded-pill mx-2'
            href='/accounts/register'
            title={t('Create new account')}
          >
            {t('Register')}
          </Link>
        </>
      )}
    </>
  )
}
