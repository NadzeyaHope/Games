import React, {useState} from 'react';
import classes from './GoalsContainer.module.css';
import ListGoals from "@/sections/goals/ListGoals";
import Header from "@/components/typography/Header";
import Sidebar from "@/components/nav/Sidebar/Sidebar";
import useOpenWindow from "@/hooks/useOpenWindow";
import IconAdd from "@/components/goals/addItem/IconAddSquare";
import InputGoals from "@/components/goals/InputGoals";
import VerticalSpacer from "@/components/layout/VerticalSpacer";
const GoalsContainer = () => {
    const {add, onOpenCloseWindow} = useOpenWindow();
    return (
        <div className={classes.root}>
            <Sidebar/>
            <div className={classes.content}>
                <div className={classes.head}>
                    <div className={classes.addGoal}>
                        <VerticalSpacer value={50}/>
                        {add ?
                            <div className={classes.IconAdd}>
                                <Header>Create your goal</Header>
                                <IconAdd width={100} onOpenCloseWindow={onOpenCloseWindow}/>
                            </div>
                            :
                            <InputGoals onOpenCloseWindow={onOpenCloseWindow}/>}
                    </div>
                </div>
                    <ListGoals/>
            </div>
        </div>
    );
};

export default GoalsContainer;