import React from 'react';
import Input from '@/components/form/Input';
import Label from '@/components/form/Label';
import Button from '@/components/form/Button';
import Spacer from '@/components/layout/Spacer';
import classes from './RegisterContainer.module.css';
import {useState} from "react";
import Header from "@/components/typography/Header";

const RegisterContainer = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dataRegister, setDataRegister] = useState([]);

    const onChangeEmail = (e) => {
        return setEmail(e)
    }
    const onChangeName = (e) => {
        return setFullName(e)
    }
    const onChangePassword = (e) => {
        return setPassword(e)
    }
    const onChangeConfirmPassword = (e) => {
        return setConfirmPassword(e)
    }
    const onSend = async () => {
        if(password !== confirmPassword){
            alert('your pass is wrong');
            return;
        }
        const response = await fetch('/api/goals/create', {
            method : 'POST',
            body : JSON.stringify({email, fullName, password})
        })
        setEmail('')
        setPassword('');
        setFullName('');
        setConfirmPassword('');
    }
    return (
        <div className={classes.root}>
            <Header>Registration</Header>
            <Spacer value={40}/>
            <Label>Email</Label>
            <Spacer value={10}/>
            <Input  fullWidth onChange={onChangeEmail} value={email} />
            <Spacer value={20}/>
            <Label>Full Name</Label>
            <Spacer value={10}/>
            <Input value={fullName} onChange={onChangeName} fullWidth/>
            <Spacer value={20}/>
            <Label>Password</Label>
            <Spacer value={10}/>
            <Input value={password} onChange={onChangePassword} fullWidth/>
            <Spacer value={20}/>
            <Label>Confirm password</Label>
            <Spacer value={10}/>
            <Input value={confirmPassword} fullWidth onChange={onChangeConfirmPassword}/>
            <Spacer value={22}/>
            <Button onClick={onSend} fullWidth>Create an account</Button>
        </div>
    );
};

export default RegisterContainer;