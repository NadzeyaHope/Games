import React from 'react';
import PropTypes from 'prop-types';
import classes from './Description.module.css'
import Spacer from "@/components/layout/Spacer";

const Description = props => {
    const {description} = props;
    return (
        <div className={classes.root}>
            <Spacer value={10}/>
            {description}
        </div>
    );
};

Description.propTypes = {
    description : PropTypes.string
};

export default Description;