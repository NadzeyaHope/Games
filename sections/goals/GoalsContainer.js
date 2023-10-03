import React, {useState} from 'react';
import CreateGoal from "@/sections/goals/CreateGoal";
import classes from './GoalsContainer.module.css';
import ListGoals from "@/sections/goals/ListGoals";
import Spacer from "@/components/layout/Spacer";
import VerticalSpacer from "@/components/layout/VerticalSpacer";
import Header from "@/components/typography/Header";
const GoalsContainer = () => {
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Header>Create your goal</Header>
                <div className={classes.createGoal}>
                    <CreateGoal/>
                </div>
                {/*<ListGoals/>*/}
            </div>
        </div>
    );
};

export default GoalsContainer;