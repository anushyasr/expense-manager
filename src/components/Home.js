import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ isUserLoggedIn }) => (
  <>
    <h2>Welcome to Expense Manager Application.</h2>
    {!isUserLoggedIn && (
      <div>
        Please
        <Link to="/login"> login </Link>
        or
        <Link to="/register"> register </Link>
        to continue!
      </div>
    )}
  </>
);

Home.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
  };
}

export default connect(mapStateToProps)(Home);
