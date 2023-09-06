import classes from './Input.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = (props) => {
    const { fullWidth = false, onChange, ...rest} = props;
    const onChangeOriginal = (e) => {
        onChange(e.target.value)
    }
    return (
      <input
        className={clsx(classes.root, fullWidth && classes.fullWidth)}
        onChange={onChangeOriginal}
        {...rest}
      />
    )
}

Input.propTypes = {
    fullWidth: PropTypes.bool.isRequired,
    placeholder : PropTypes.string,
    onChange : PropTypes.func.isRequired,
    value: PropTypes.string,
}

export default Input;