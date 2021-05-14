import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Piggy from './../img/piggy.png';
import './../styles/Home.css'

export default function Home() {

  return (
    <>
      <img className="main-logo"
        alt=""
        src={Piggy}
        />
      <h1 className="slogan">every positive change begins with a fullbelly</h1>
    </>
  )
}