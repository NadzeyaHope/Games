import React from 'react';
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Button from "@/components/form/Button";
import Spacer from "@/components/layout/Spacer";
import classes from './RegisterContainer.module.css';

const RegisterContainer = () => {
    return (
        <div className={classes.root}>
            <Label>Email</Label>
            <Input fullWidth onChange={()=>{}}/>
            <Label>Full Name</Label>
            <Input fullWidth onChange={()=>{}}/>
            <Label>Password</Label>
            <Input fullWidth onChange={()=>{}}/>
            <Label>Confirm password</Label>
            <Input fullWidth onChange={()=>{}}/>
            <Spacer value={20}/>
            <Button onClick={()=>{}} fullWidth>Create an account</Button>
        </div>
    );
};

export default RegisterContainer;