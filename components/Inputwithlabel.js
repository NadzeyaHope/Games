import classes from './Inputwithlabel.module.css';

const Inputwithlabel = (props) => {
    const {label} = props;
    return (
        <div className={classes.main}>
            <div className={classes.label}>{label}</div>
            <input className={classes.root}/>
        </div>
    )
}
export default Inputwithlabel;