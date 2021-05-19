import React from 'react';
import Piggy from './../img/piggy.png';
import './../styles/Loading.css';

const Loading = () => {

  return(
    <>
    <img className="logo"
        alt=""
        src={Piggy}
        />
    </>
  );
}

export default Loading;