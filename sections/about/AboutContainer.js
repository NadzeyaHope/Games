import React from 'react';
import Sidebar from "@/components/nav/Sidebar/Sidebar";
import classes from './AboutContainer.module.css';


const AboutContainer = () => {
    return (
        <div className={classes.root}>
           <Sidebar/>
            <div>about</div>
        </div>
    );
};

export default AboutContainer;