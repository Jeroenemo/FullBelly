import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = `${process.env.YOUR_CLIENT_ID}`;

export default function Login()  {
  const onSuccess = (response) => {
    console.log('[LOGIN SUCCESS] currentUser:', res.preofileObj);
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