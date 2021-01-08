import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setnotification } from '../reducers/notificationReducer'
import { addBlog } from '../reducers/blogReducer'

const CreateBlogForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

  const handleBlogCreate = async (e) => {
    e.preventDefault()
    dispatch(
      addBlog({
        title,
        author,
        url,
      })
    )
    dispatch(
      setnotification({ message: 'A new blog has been added', type: 'success' })
    )
  }

  return (
    <div>
      <form id='add.blog.form' onSubmit={handleBlogCreate}>
        <div>
					title:
          <input
            type='text'
            value={title}
            name='title'
            id='title'
            required
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
					author:
          <input
            type='text'
            value={author}
            name='author'
            id='author'
            required
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
					url:
          <input
            type='text'
            value={url}
            name='url'
            id='url'
            required
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button id='new-blog-button' type='submit'>
					Create
        </button>
      </form>
    </div>
  )
}

export default CreateBlogForm
