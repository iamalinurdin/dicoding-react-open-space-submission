import createComment from "../../api/services/comment"

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    }
  }
}


function asyncAddCommentActionCreator({ content, id }) {
  return async (dispatch) => {
    try {
      const response = await createComment({ content, id })
      
      console.log(response)
      // putAccessToken(token)
      // const profile = await me()

      // dispatch(setLoginActionCreator(profile))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  addCommentActionCreator,
  asyncAddCommentActionCreator
}