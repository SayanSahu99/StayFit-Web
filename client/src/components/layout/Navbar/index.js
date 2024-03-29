import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from 'src/actions/auth';
import menu from 'src/utils/menu';

import UserMenu from './UserMenu';
import AuthButtons from './AuthButtons';

const Navbar = ({ user, isAuthenticated, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-static-top">
      <div className="container-fluid box">
        <NavLink className="navbar-brand" to="/">
          StayFit
        </NavLink>
        <button
          className="navbar-toggler btn-circle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars fa-lg"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar"
        >
          <ul className="navbar-nav">
            {menu.map((item) => (
              <li key={item.id} className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact={item.exact}
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <UserMenu user={user} logout={logout} location="collapse" />
              </li>
            ) : (
              <AuthButtons location="collapse" />
            )}
          </ul>
        </div>
        {isAuthenticated ? (
          <UserMenu user={user} logout={logout} location="outside" />
        ) : (
          <AuthButtons location="outside" />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

Navbar.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout })(Navbar);
