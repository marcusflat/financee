import { useSelector} from "react-redux";
import { userSelector } from "../userSelector"

export const useUserIsLoggedIn = (): boolean => {
  const { loggedIn } = useSelector(userSelector);
  return loggedIn
}