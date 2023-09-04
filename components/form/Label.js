import React from 'react';
import classes from './Label.module.css';

const Label = (props) => {
  const {children} = props
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Label;