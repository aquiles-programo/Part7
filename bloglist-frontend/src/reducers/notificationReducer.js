/* eslint-disable indent */

const notificationReducer = (
  state = {
    message: null,
    type: null,
  },
  action
) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, message: action.data.message, type: action.data.type }

    default:
      return state
  }
}

export const setnotification = (notification) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification,
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: { message: null, type: null },
      })
    }, 5000)
  }
}

export default notificationReducer
