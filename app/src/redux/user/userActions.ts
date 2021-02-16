import { LOGIN_SUCCESS, LOGOUT } from "./userConstants";


export interface IUserActionPayload {
  loggedIn: boolean,
  displayName: string,
  email: string,
  id: string
}

export const userLogin = (payload: IUserActionPayload) => {
  return {
    type: LOGIN_SUCCESS,
    ...payload
  }
}

export const userLogout = () => {
  return {
    type: LOGOUT
  }
}