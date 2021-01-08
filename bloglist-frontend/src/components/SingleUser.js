/* eslint-disable indent */
import React from 'react'

const SingleUser = ({ user }) => {
	if (!user) {
		return null
	}
	return (
		<div>
			<h2>{user.name}</h2>
			<p>added blogs</p>
			<ul>
				{user.blogs.map((blog) => (
					<li key={blog.id}>{blog.title}</li>
				))}
			</ul>
		</div>
	)
}

export default SingleUser