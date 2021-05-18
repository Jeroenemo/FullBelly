import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = `${process.env.YOUR_CLIENT_ID}`;

export default function Logout() {
  const onSuccess = () => 
    alert('Logout made successfully');

  return (
    <>
      <GoogleLogout
        clientId={clientId}
        buttonText="Lougout"
        onLogoutSuccess={onSuccess} />
    </>
  );
};

