/* eslint-disable indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { setLoggedUser } from './reducers/userReducer'
import { initializeUsers } from './reducers/allUsersReducer'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Blogs from './components/Blogs'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import CreateBlogForm from './components/CreateBlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import AllUsers from './components/AllUsers'
import Menu from './components/Menu'
import SingleUser from './components/SingleUser'

import './App.css'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedUser')
		if (loggedUserJSON) {
			dispatch(setLoggedUser(JSON.parse(loggedUserJSON)))
		}
		dispatch(initializeBlogs())
		dispatch(initializeUsers())
	}, [dispatch])

	const notification = useSelector((state) => state.notification)
	const user = useSelector((state) => state.user)
	const allUsers = useSelector((state) => state.users)
	const blogs = useSelector((state) => state.blogs)

	const userMatch = useRouteMatch('/users/:id')
	const matchingUser = userMatch
		? allUsers.find((u) => u.id === userMatch.params.id)
		: null

	const blogMatch = useRouteMatch('/blogs/:id')
	const blog = blogMatch
		? blogs.find((b) => b.id === blogMatch.params.id)
		: null

	if (user) {
		return (
			<div className="container">
				<h2>Blogs</h2>
				<Notification message={notification.message} type={notification.type} />
				<Menu user={user} />

				<Switch>
					<Route path='/users/:id'>
						<SingleUser user={matchingUser} />
					</Route>
					<Route path='/users'>
						<AllUsers />
					</Route>
					<Route path='/blogs/:id'>
						<Blog blog={blog} />
					</Route>
					<Route path='/new-blog'>
						<CreateBlogForm />
					</Route>
					<Route path='/'>
						<Blogs blogs = {blogs} />
					</Route>
				</Switch>
			</div>
		)
	} else {
		return (
			<div>
				<Notification message={notification.message} type={notification.type} />
				<Togglable buttonLabel='Log in'>
					<LoginForm />
				</Togglable>
			</div>
		)
	}
}

export default App
