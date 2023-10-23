import React from 'react';
import PropTypes from 'prop-types';
import classes from './Error.module.css';

const Error = (props) => {
  const {children} = props;
  return (
      <div className={classes.root}>
        {children}
      </div>
  );
};

Error.propTypes = {
  children: PropTypes.node.isRequired
};

export default Error;