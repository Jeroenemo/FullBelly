import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '563181395121-hanlc6g1gqp652gmrj77p8psu9o2jfgq.apps.googleusercontent.com';

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

