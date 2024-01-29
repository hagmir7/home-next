'use client'
import React, { useState, createContext, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [sniper, setSniper] = useState(false);
  const [Message, setMessage] = useState('');
  const router = useRouter();

  const storedToken = localStorage.getItem('authTokens')
  const DecodeToken = storedToken ? jwtDecode(storedToken) : null

  let [authTokens, setAuthTokens] = useState(() => DecodeToken)

  const [User, setUser] = useState(authTokens)

  const getUser = async () => {
    if (DecodeToken !== null) {
      const response = await fetch(`https://freesad.com/en/api/user/${DecodeToken.username}`)
      const responsData = response.json()

      if (response.status == 200) {
        setUser({ ...responsData[0], ...responsData[1] })
      } else {
        console.log('User is not authenticated!');
      }
    }else{
        setUser(null);
    }
  }

  const LoinUser = (event) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data.username, data.password)
  }

  const login = async (username, password) => {
    const data = JSON.stringify({
      username: username,
      password: password,
    })

    setMessage('')
    setSniper(true)

    try {
      const response = await fetch('https://freesad.com/en/api/token/', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const responseData = await response.json()
      if (response.status == 200) {
        localStorage.setItem('authTokens', JSON.stringify(responseData));
        setSniper(false);
        router.push('/');
      } else {
        setMessage('The username or password is incorrect.')
        setTimeout(() => {
          setMessage('')
        }, 3000)
        setSniper(false)
      }
    } catch (error) {}
  }

  const register = async (event) => {
    setMessage('')
    event.preventDefault()
    setSniper(true)
    const data = new FormData(event.target)
    await fetch('https://freesad.com/en/api/register', {
      method: 'POST',
      body: data,
    })
      .then((respons) => {
        setSniper(false)
      })
      .catch((error) => {
        setSniper(false)
        const usernameError = error.response.data.username
        const emailError = error.response.data.email
        if (usernameError) {
          setMessage(usernameError)
        } else {
          setMessage(emailError)
        }
      })
  }

  const logout = () => {
    setAuthTokens(null)
    localStorage.removeItem('authTokens')
  }

  let contextData = {
    login: LoinUser,
    sniper: sniper,
    Message: Message,
    register: register,
    User: User,
    logout: logout,
    authTokens,
    authTokens,
  }

  useEffect(() => {
    getUser()
  }, [history])

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
