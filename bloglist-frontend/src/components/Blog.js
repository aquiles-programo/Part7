import React from 'react'
import { useDispatch } from 'react-redux'
import { setnotification } from '../reducers/notificationReducer'
import { likeBlog } from '../reducers/blogReducer'

const Blog = ({ blog }) => {

  const dispatch = useDispatch()
 
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleBlogLike = async () => {
    dispatch(
      setnotification({ message: 'Blog liked successfully', type: 'success' })
    )
    dispatch(likeBlog({ ...blog, likes: parseInt(blog.likes) + 1 }))
  }
  if (!blog) {
    return null
  }

  return (
    <div className='blog' style={blogStyle}>
      <div>
        <h2>{blog.title}</h2>
      </div>
      <div className='blog-details'>
        {blog.url} <br></br>
				Likes: {blog.likes}{' '}
        <button id='like-blog' onClick={handleBlogLike}>
          {' '}
					like{' '}
        </button>{' '}
        <br></br>
				Added by: {blog.author} <br></br>
      </div>
    </div>
  )
}

export default Blog
