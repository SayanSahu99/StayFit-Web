import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = ({ isAuthenticated }) => {
  return (
    <section id="hero">
      <div className="jumbotron jumbotron-fluid">
        <div className="container box text-center my-md-0 h-100">
          <h1 className="display-4 pt-14 mx-auto">Control your weight</h1>
          <p className="my-5 mx-auto">
          StayFit allows you to monitor your daily calorie intake, assisting you in determining the necessary adjustments for weight gain or loss.
          </p>
          <Link
            className="primary-button btn-lg rounded-pill mt-5 py-2 px-4"
            to={isAuthenticated ? '/today' : '/register'}
            role="button"
          >
            {isAuthenticated ? 'Consumption List' : 'Get Started'}
          </Link>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Hero.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Hero);
