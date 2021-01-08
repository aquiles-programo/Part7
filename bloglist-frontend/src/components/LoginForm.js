import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import { setLoggedUser } from '../reducers/userReducer'
import { setnotification } from '../reducers/notificationReducer'


const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const loggedUser = await loginService.login({ username, password })
      dispatch(setLoggedUser(loggedUser))
      window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

      dispatch(
        setnotification({
          message: `${loggedUser.name} has logged in`,
          type: 'success',
        })
      )
    } catch (error) {
      dispatch(
        setnotification({
          message: 'Wrong username or password',
          type: 'error',
        })
      )
    }

  }

  return (
    <div>
      <form onSubmit = {handleLogin}>
        <div>
          username
          <input
            id="username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            id="password"
            type="password"
            value={password}
            name="Password"
            autoComplete="1113"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id="login-button" type="submit">login</button>
      </form>
    </div>
  )
}


export default LoginForm

