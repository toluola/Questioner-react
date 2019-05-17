/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Header = () => {
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
