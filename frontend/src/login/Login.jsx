import React, { useState } from 'react'

/**
 * A UI component page allowing a user to login
 */
export const LoginView = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  /**
   * Allows the user to login
   */
  function handleLogin() {
    setUsername()
    setPassword('also liska')
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {username && <p>This is the username: {username}</p>}
      {password && <p>This is the password: {password}</p>}
    </div>
  )
}
