'use client'

import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function Logout() {
  const { logout, authTokens } = useContext(AuthContext)
  return  authTokens ? <button className='btn btn-danger btn-sm' onClick={logout}>Logout</button> : <></>
}
