import React from 'react';
import PropTypes from 'prop-types';
import classes from './Label.module.css';

const Label = (props) => {
  const {children} = props;
    return (
        <div className={classes.root}>{children}</div>
    );
};

Label.propTypes = {
  children : PropTypes.string.isRequired
};

export default Label;