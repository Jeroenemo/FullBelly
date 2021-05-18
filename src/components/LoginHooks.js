import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './../utils/refreshTokenSetup';

const clientId = '563181395121-hanlc6g1gqp652gmrj77p8psu9o2jfgq.apps.googleusercontent.com';

export default function LoginHooks() {
  const onSuccess = (response) => {
    console.log('[LOGIN SUCCESS] currentUser:', response.profileObj);

    refreshTokenSetup(response);
  };

  const onFailure = (response) => {
    console.log('[Login Failed] response:', response);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg"></img>
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}