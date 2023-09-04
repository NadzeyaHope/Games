import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';

const Header = (props) => {
  const {children} = props;

  return (
    <h1 className={classes.root}>
      {children}
    </h1>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;