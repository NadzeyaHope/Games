import React from 'react';
import IconGoal from "@/components/nav/menuLogo/IconGoal";
import classes from './menuLogo.module.css';
import Spacer from "@/components/layout/Spacer";
import VerticalSpacer from "@/components/layout/VerticalSpacer";
const MenuLogo = (props) => {
    return (
        <div className={classes.root}>
            <p className={classes.logotext}>Reach your goals</p>
            <VerticalSpacer value={10}/>
            <IconGoal width={35} />
        </div>
    );
};

export default MenuLogo;