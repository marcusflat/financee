import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../../config/firebase";

import { userLogin, userLogout } from "../../redux/user/userActions";
import { useDispatch, useSelector} from "react-redux";
import { userSelector } from "../../redux/user/userSelector"
import { Link } from 'react-router-dom';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const handleLogin = (user: any) => {

    const success = !!user;

    setIsSignedIn(success);
    setIsLoading(false);

    if (!success) return;

    const { displayName, email, uid } : any = firebase.auth()?.currentUser;

    dispatch(userLogin({
      loggedIn: true,
      displayName,
      email,
      id: uid
    })); 
  };

  const handleLogout = async () => {
    await firebase.auth().signOut()
    dispatch(userLogout());
  }

  useEffect(() => {
    console.log('user :>> ', user);
  }, [user])


  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(handleLogin);
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if(isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (!isSignedIn) {
    return (
      <div>
        <h1>Financee</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  } 

  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {firebase.auth()?.currentUser?.displayName}! You are now signed-in!</p>
      <p>Nome: {JSON.stringify(user, null, 2)}</p>
      <a onClick={handleLogout}>Sign-out</a>
      <Link to="/overview">Overview</Link>
    </div>
  );
  
}

export default Login;