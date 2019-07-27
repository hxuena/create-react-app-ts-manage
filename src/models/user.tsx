import { CurrentUser } from '../globalType'
import { useReducer } from 'react';

export type UserAction = {
  type: 'initUserInfo',
  payload: CurrentUser
}

const userReducer = (state: CurrentUser, action: UserAction) => {
  switch (action.type) {
    case "initUserInfo":
      console.log(action.payload)
      return {
        ...state,
        currentUser: action.payload || {},
      };
    default:
      throw new Error();
  }
};


export default userReducer;