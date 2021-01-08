/* eslint-disable indent */
import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'LIKE_BLOG':
      return state.map((e) => (e.id === action.data.id ? action.data : e))
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.data)
    default:
      return state
  }
}

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export const addBlog = (newBlog) => {
  return async (dispatch) => {
    await blogService.create(newBlog)
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export const likeBlog = (likedBlog) => {
  return async (dispatch) => {
    await blogService.like(likedBlog, likedBlog.id)
    dispatch({
      type: 'LIKE_BLOG',
      data: likedBlog,
    })
  }
}

export const deleteBlog = (id) => {
  return async (dispatch) => {
    await blogService.removeBlog(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: id,
    })
  }
}

export default blogReducer
