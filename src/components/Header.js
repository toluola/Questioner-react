/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Header = () => {
  // const onclickButton = () => {
  //   const buttonClicked = document.getElementById('links');
  //   if (buttonClicked.style.display === 'block') {
  //     buttonClicked.style.display === 'none';
  //   } else {
  //     buttonClicked.style.display === 'block';
  //   }
  // }

  return (
    <div className="header">
  <a href="/" className="logo">QUESTIONER</a>
  <div className="header-right">
    <a href="/signup" className='links'>CREATE ACCOUNT</a>
    <a href="/signin" className='links'>LOGIN</a>
  </div>
  <a href="javascript:void(0);" className="icon" >
    <i className="fa fa-bars"></i>
  </a>
</div>
  )
}
