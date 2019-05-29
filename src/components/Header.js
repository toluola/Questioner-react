/* eslint-disable react/prop-types */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { userLogout } from "../state/actions";

const Header = ({ isAuthenticated, logout }) => {
  return (
    <div className="header">
      <a href="/" className="logo">
        QUESTIONER
      </a>

      <div className="header-right">
        {isAuthenticated.profile ? (
          <div>
            <a href="/" className="links" onClick={() => logout()}>
            LOGOUT
          </a>
          </div>
        ) : (
          <div>
          <a href="/signup" className="links">
              CREATE ACCOUNT
            </a>
            <a href="/signin" className="links">
              LOGIN
            </a>
            </div>
        )}
      </div>

      <a href="javascript:void(0);" className="icon">
        <i className="fa fa-bars" />
      </a>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.State.loggedinUser
});

export default connect(
  mapStateToProps,
  { logout: userLogout }
)(Header);
