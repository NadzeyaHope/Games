import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

// https://www.figma.com/file/ZgXpvtrH3QgKbb9tY825nz/Grocery-E-Commerce-Website-Template-(Community)?type=design&node-id=8-2343&mode=design&t=ShybUHpM4nRtwsLs-0

const Button = (props) => {
    const {children, onClick, fullWidth = false} = props;
    return (
        <button onClick={onClick} className={`${classes.root} ${fullWidth ? classes.fullWidth : ''}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    fullWidth: PropTypes.bool,
}

export default Button;