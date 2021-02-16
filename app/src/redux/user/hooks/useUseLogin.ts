import { useEffect } from "react";
import { useDispatch } from "react-redux";
import firebase from "../../../config/firebase";
import { userLogin } from "../userActions";


export const useUserLogin = (setIsLoading: Function) => {
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

  useEffect(() => {
    
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {

      handleLogin(user);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);

    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

}


