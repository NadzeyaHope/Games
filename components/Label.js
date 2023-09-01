import React from 'react';

const Label = (props) => {
  const {children} = props
  return (
    <label>
      {children}
    </label>
  );
};

export default Label;