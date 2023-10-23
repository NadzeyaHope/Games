import React, {useState} from 'react';
import Sidebar from "@/components/nav/Sidebar/Sidebar";
import classes from './SettingsContainer.module.css';
const SettingsContainer = () => {

    return (
        <div className={classes.root}>
            <Sidebar/>
        </div>
    );
};

export default SettingsContainer;