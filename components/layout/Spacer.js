import React from 'react';
import PropTypes from 'prop-types';

const Spacer = (props) => {
  const {value} = props;

  return (
    <div style={{marginTop: value}} />
  );
};

Spacer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Spacer;