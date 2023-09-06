import React from 'react';
import PropTypes from 'prop-types';
import classes from './Label.module.css';

const Label = (props) => {
  const {children, isRequired = false} = props;
    return (
        <div className={classes.root}>{children}{isRequired && '*'}</div>
    );
};

Label.propTypes = {
  children : PropTypes.string.isRequired,
  isRequired: PropTypes.bool,

};

export default Label;