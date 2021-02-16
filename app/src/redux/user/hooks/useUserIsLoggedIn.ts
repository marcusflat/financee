import { useSelector} from "react-redux";
import { userSelector } from "../userSelector"

export const useUserSelector = (): boolean => {
  const { loggedIn } = useSelector(userSelector);
  return loggedIn
}