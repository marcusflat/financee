import React, { useEffect, useState } from 'react';
import './App.css';
import Routes from "./routes/Routes";
import firebase from './config/firebase';
import { LoadingOverlay } from './components';
import { useUserLogin } from './redux/user/hooks/useUseLogin';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useUserLogin(setIsLoading);

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
