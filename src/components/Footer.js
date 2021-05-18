import React from 'react';
import GitHub from './../img/github.svg';
import './../styles/Footer.css';

export default function Footer() {

  return (
    <>
      <div className="footer">
        <p><img src={GitHub} className="github-logo" alt=""></img>   Jeroen</p>
      </div>
    </>
  );
}