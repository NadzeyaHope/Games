import React from 'react';
import Sidebar from "@/components/nav/Sidebar/Sidebar";
import classes from './SettingsContainer.module.css';

const SettingsContainer = () => {
    return (
        <div className={classes.root}>
            <Sidebar/>
            <div>settings</div>
        </div>
    );
};

export default SettingsContainer;