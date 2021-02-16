import { IUserActionPayload } from "./userActions";
import { LOGIN_SUCCESS, LOGOUT } from "./userConstants"

interface IUserAction extends IUserActionPayload {
  type: string
}

export default (state = {}, action: IUserAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS : 
      return {
        ...state,
        loggedIn: action.loggedIn,
        displayName: action.displayName,
        email: action.email,
        id: action.id
      }
    case LOGOUT : 
      return {
        loggedIn: false,
      }
  
    default:
      return state;
  }
}