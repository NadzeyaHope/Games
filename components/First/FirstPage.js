import PropTypes from "prop-types";
import Link from "next/link";
import classes from './FirstPage.module.css';
const FirstPage = (props) => {
    const {children, onClick, link} = props;
    return (
        <button className={classes.root}  onClick={onClick} >
            <Link className={classes.link} href={link} >{children}</Link>
        </button>
    )
}

FirstPage.propTypes = {
    onClick : PropTypes.func.isRequired,
    children : PropTypes.string,
    link : PropTypes.string
}
export default FirstPage;