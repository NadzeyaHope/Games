import Image from "next/image";
import classes from './Item.module.css';
import PropTypes from 'prop-types';

const Item = (props) => {
    const {icon, label} = props;
    return (
        <div className={classes.item}>
            <Image className={classes.icon} src={icon} />
            <label className={classes.label} >{label}</label>
        </div>
    )
}
Item.PropTypes = {
    label : PropTypes.node.isRequired,
    icon : PropTypes.node.isRequired,
}
export default Item;