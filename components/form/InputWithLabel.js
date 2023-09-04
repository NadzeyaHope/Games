import classes from './InputWithLabel.module.css';

const InputWithLabel = (props) => {
    const {label} = props;
    return (
        <div className={classes.root}>
            <div>{label}</div>
            <input className={classes.root}/>
        </div>
    )
}
export default InputWithLabel;