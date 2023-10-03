import React from 'react';
import classes from './MenuSignIn.module.css'
import SignInIcon from "@/components/nav/signIn/SignInIcon";
import VerticalSpacer from "@/components/layout/VerticalSpacer";
import {useRouter} from 'next/router';

const MenuSignIn = () => {
    const router = useRouter();
    const routeSerch = () => {
        router.push('/')
    }
    return (
        <div className={classes.root} onClick={routeSerch} >
            <p>sign in</p>
            <VerticalSpacer value={3}/>
            <SignInIcon width={20} />
        </div>
    );
};

export default MenuSignIn;