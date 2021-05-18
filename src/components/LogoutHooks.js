import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '563181395121-hanlc6g1gqp652gmrj77p8psu9o2jfgq.apps.googleusercontent.com';

export default function LogoutHooks() {
  const onSuccess = () => {
    alert('Logout made successfully');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="" className="icon"></img>
      <span className="buttonText">Sign out</span>
    </button>
  );
}
