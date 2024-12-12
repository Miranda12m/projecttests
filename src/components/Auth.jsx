import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { loginWithGoogle, logoutUser, getUser } from '../appwrite/auth'

const Auth = () => {
  const [user, setUser] = useState(null)
    const navigate = useNavigate()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        if (userData) {
          navigate('/')
        }
      } catch (error) {
        setUser(null)
        localStorage.removeItem('user')
      }
    }

    checkUser();
  }, [navigate])

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  )
}

export default Auth

