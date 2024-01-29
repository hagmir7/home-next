'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

export default function AuthTools() {
  const {authTokens, User } = useContext(AuthContext);
  return (
    <>
      <Link className='btn-primary btn rounded-pill mx-2' href='/accounts/login'>Log in</Link>
      <Link className='border btn rounded-pill mx-2' href='/accounts/register'>Register</Link>

      {authTokens ? (
        <>
          <Link href={`/user/${User ? User.username : ''}`} className='nav-item mx-4'>
            <img
              title='Profile'
              loading='eager'
              className='nav-icon'
              src={`https://freesad.com/${User ? User.avatar : ''}`}
              alt='Profile'
              width='35px'
              height='35px'
            />
          </Link>
        </>
      ) : (
        'loading'
      )}
    </>
  )
}
