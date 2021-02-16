import { IUserActionPayload } from "./userActions"
import { DefaultRootState } from "react-redux";

interface IDefaultRootStateUser extends DefaultRootState {
  user: IUserActionPayload
}

export const userSelector = (store : IDefaultRootStateUser) => store.user