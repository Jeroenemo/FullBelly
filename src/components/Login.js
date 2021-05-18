import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '563181395121-hanlc6g1gqp652gmrj77p8psu9o2jfgq.apps.googleusercontent.com';

export default function Login()  {
  const onSuccess = (response) => {
    console.log('[LOGIN SUCCESS] currentUser:', response.profileObj);
  };

  const onFailure = (response) => {
    console.log('[Login Failed] response:', response);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </>
  );
}