import React, { useEffect, useState } from 'react';
import './App.css';
import Routes from "./routes/Routes";
import firebase from './config/firebase';
import { LoadingOverlay } from './components';
import { useUserLogin } from './redux/user/hooks/useUseLogin';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [ handleLogin ] = useUserLogin();

  useEffect(() => {
    
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {

      handleLogin(user);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);

    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  

  if(isLoading) {
    return <LoadingOverlay />
  }

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
