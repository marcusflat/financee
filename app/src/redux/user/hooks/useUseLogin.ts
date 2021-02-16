import { useDispatch } from "react-redux";
import firebase from "../../../config/firebase";
import { userLogin } from "../userActions";


export const useUserLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = async (user: any) => {
    const success = !!user;
    if (!success) return;
  
    const { displayName, email, uid } : any = firebase.auth()?.currentUser;
  
    dispatch(userLogin({
      loggedIn: true,
      displayName,
      email,
      id: uid
    })); 
  
  };

  return [handleLogin];
}


