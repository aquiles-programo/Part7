/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({ blogs }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  return (
    <div>
      <h2>Latest blogs</h2>
      {blogs.map((blog) => (
        <div className='blog' style={blogStyle} key={blog.id}>
          <div>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs

