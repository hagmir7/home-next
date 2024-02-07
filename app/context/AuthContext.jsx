'use client'
import React, { useState, createContext, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [sniper, setSniper] = useState(false)
  const [Message, setMessage] = useState('')
  const router = useRouter()


  let storedToken
  let DecodeToken
  if (typeof window !== 'undefined') {
    storedToken = window.localStorage.getItem('authTokens')
    DecodeToken = storedToken ? jwtDecode(storedToken) : null
  }

  let [authTokens, setAuthTokens] = useState(() => DecodeToken)

  const [User, setUser] = useState(null)

  useEffect(() => {
    getUser()
  }, [])



  const getUser = async () => {
    if (DecodeToken !== null) {
      const response = await fetch(
        `https://freesad.com/en/api/user/${DecodeToken.username}`
      )

      if (response.status === 200) {
        const responseData = await response.json() // Wait for JSON parsing
        setUser({ ...responseData[0], ...responseData[1] })
      } else {
        setUser(null)
      }
    } else {
      setUser(null)
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
        if(typeof window !== 'undefined'){
          window.localStorage.setItem('authTokens', JSON.stringify(responseData));
        }
       
        setSniper(false)
        router.push('/')
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
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authTokens')
    }
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

  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
