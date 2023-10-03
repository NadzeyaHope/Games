import React, {useState} from 'react';
import classes from './ListGoals.module.css';
import Element from "@/components/goals/Element";

const ListGoals = (props) => {
    return (
        <div className={classes.root}>
            <Element/>
        </div>
    );
};

export default ListGoals;