import React from 'react';
import PropTypes from 'prop-types';

const VerticalSpacer = (props) => {
    const {value} = props;

    return (
        <div style={{marginLeft: value}} />
    );
};

VerticalSpacer.propTypes = {
    value: PropTypes.number.isRequired,
};

export default VerticalSpacer;