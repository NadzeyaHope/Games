import React from 'react';
import PropTypes from 'prop-types';
import classes from './TitleElement.module.css';

const TitleElement = props => {
    const {title} = props;
    return (
        <div className={classes.root}>
            {title}
        </div>
    );
};

TitleElement.propTypes = {
    title : PropTypes.string
};

export default TitleElement;