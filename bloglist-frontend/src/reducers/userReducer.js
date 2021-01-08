/* eslint-disable indent */
import blogService from '../services/blogs'

const userReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_USER':
			return action.data

		default:
			return state
	}
}

export const setLoggedUser = (user) => {
  return async dispatch => {
    if (user) {
      blogService.setToken(user.token)
    }
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}


export default userReducer
