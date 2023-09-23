import React from 'react';
import IconAdd from "@/components/goals/addItem/IconAdd";
import classes from './ItemAdd.module.css'
const ItemAdd = () => {
    return (
        <div className={classes.root}>
            <IconAdd width={70} />
        </div>
    );
};

export default ItemAdd;