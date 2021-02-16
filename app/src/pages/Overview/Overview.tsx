import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import { userLogout } from '../../redux/user/userActions';
import { userSelector } from '../../redux/user/userSelector';

const Overview: React.FunctionComponent<{}> = props => {

  const user = useSelector(userSelector);

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
        <p>Overview :) {user.displayName}</p>
      </div>
    </>
  )
}


export default Overview

