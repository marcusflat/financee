import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import { userLogout } from '../../redux/user/userActions';

const Overview: React.FunctionComponent<{}> = props => {

  const dispatch = useDispatch();

  const handleLogout = async () => {
    await firebase.auth().signOut()
    dispatch(userLogout());
  }

  return (
    <>
      <div>
        <Link to="/add-register">Add Register</Link>
        <a onClick={handleLogout}>Sign-out</a>
      </div>
      <div>
        <p>Overview :)</p>
      </div>
    </>
  )
}


export default Overview

