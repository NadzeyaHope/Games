import React from 'react';
import InputGoals from "@/components/goals/InputGoals";
import classes from './CreateGoals.module.css';
import Element from "@/components/goals/Element";
import Spacer from "@/components/layout/Spacer";

const CreateGoals = () => {
    return (
        <div className={classes.root}>
            <InputGoals />
            <Spacer value={100}/>
            <Element/>
        </div>
    );
};

export default CreateGoals;