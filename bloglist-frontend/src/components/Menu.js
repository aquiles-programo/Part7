/* eslint-disable indent */
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setnotification } from '../reducers/notificationReducer'
import { setLoggedUser } from '../reducers/userReducer'


const Menu = ({ user }) => {
  const dispatch = useDispatch()

	const padding = {
		paddingRight: 5,
  }

  const handleLogout = () => {
		window.localStorage.clear()
		dispatch(setLoggedUser(null))
		dispatch(
			setnotification({
				message: 'User logged out successfully',
				type: 'success',
			})
		)
	}
	return (
		<div>
			<Link to='/' style={padding}>
				Blogs
			</Link>
			<Link to='/new-blog' style={padding}>
				New Blog
			</Link>
			<Link to='/users' style={padding}>
				Users
			</Link>
			{user ? <em>{user.name} logged in <button onClick={handleLogout}>Logout</button></em>  : ''}
		</div>
	)
}

export default Menu
