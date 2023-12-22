import { getUsers } from '../../api/services/user';

const ActionType = {
  RETRIEVE_USERS: 'RETRIEVE_USERS',
};

function retrieveUsersActionCreator(users) {
  return {
    type: ActionType.RETRIEVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRetrieveUsersActionCreator() {
  return async (dispatch) => {
    try {
      const response = await getUsers();
      dispatch(retrieveUsersActionCreator(response.data.users));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  retrieveUsersActionCreator,
  asyncRetrieveUsersActionCreator,
};
