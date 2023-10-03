import React from 'react';
import classes from './menu.module.css'
import MenuLogo from "@/components/nav/menuLogo/MenuLogo";
import MenuSignIn from "@/components/nav/signIn/MenuSignIn";

const Menu = (props) => {
    return (
            <div className={classes.root}>
                        <MenuLogo/>
                        <MenuSignIn/>
            </div>
    );
};

export default Menu;