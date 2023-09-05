import React from 'react';
import Input from "@/components/form/Input";
import classes from './LoginContainer.module.css';
import Label from "@/components/form/Label";
import Button from "@/components/form/Button";
import Spacer from "@/components/layout/Spacer";

const LoginContainer = () => {
    return (
        <div className={classes.root}>
            <Label>Email</Label>
            <Input fullWidth onChange={()=>{}}/>
            <Label>Password</Label>
            <Input fullWidth onChange={()=>{}}/>
            <Spacer value={20}/>
            <Button onClick={()=>{}} fullWidth>Login</Button>
        </div>
    );
};

export default LoginContainer;