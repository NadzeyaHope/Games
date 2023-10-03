import React, {useState} from 'react';
import classes from './CreateGoal.module.css';
import useOpenWindow from "@/hooks/useOpenWindow";
import IconAdd from "@/components/goals/addItem/IconAddSquare";
import InputGoals from "@/components/goals/InputGoals";
const CreateGoal = () => {
    const {add, onOpenCloseWindow} = useOpenWindow();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {add ? <IconAdd width={100} onOpenCloseWindow={onOpenCloseWindow}/> : <div className={classes.InputGoals}><InputGoals onOpenCloseWindow={onOpenCloseWindow}/></div>}
            </div>
        </div>
    );
};

export default CreateGoal;