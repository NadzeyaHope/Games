import classes from './Input.module.css';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {nameLabel, fullWidth = false} = props;
    return (
        <div className={`${classes.inputItem} ${fullWidth ? classes.fullWidth : ''}`}>
            <h3 className={classes.label}>{nameLabel}</h3>
            <input className={classes.input} />
        </div>
    )
}
Input.PropTypes = {
    nameLabel : PropTypes.node.isRequired,
    fullWidth: PropTypes.bool,
}

export default Input;