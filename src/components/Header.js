/* eslint-disable react/prop-types */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo">
        QUESTIONER
      </a>
      <a href="javascript:void(0);" className="icon">
        <i className="fa fa-bars" />
      </a>
    </div>
  );
};

// {menu.map(menus => (
//   <div className="header-right">
//     <a href='' className="links">
//       {menus}
//     </a>
//   </div>
// ))}