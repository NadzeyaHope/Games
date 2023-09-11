import React, {useState} from 'react';
import Input from "@/components/form/Input";
import classes from './LoginContainer.module.css';
import Label from "@/components/form/Label";
import Button from "@/components/form/Button";
import Spacer from "@/components/layout/Spacer";
import Header from "@/components/typography/Header";
import TextInput from '@/components/form/TextInput';
import Error from "@/components/form/Error";
import {useRouter} from 'next/router';

const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})

    const router = useRouter();

    const onChangeEmail = (e) => {
        return setEmail(e)
    }
    const onChangePassword = (e) => {
        return setPassword(e)
    }
    const refresh = async () => {
        if(email.length === 0){
            setErrors({
                ...errors,
                email : 'You are not enter the email'
            })
            return ;
        }
        if(password.length === 0){
            setErrors({
                ...errors,
                password : 'You are not enter the password'
            })
            return ;
        }
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        if(!response.ok){
            setErrors({
                ...errors,
                message : 'your email or password is wrong'
            })
            return;
        }
        setEmail('');
        setPassword('');
        setErrors({})

        return router.push('/dashboard/goals');
    }
    return (
        <div className={classes.root}>
            <Header>Login</Header>
            <Spacer value={40}/>
            <TextInput error={errors.email} fullWidth onChange={onChangeEmail} value={email} placeholder={email} label={'Email'} isRequired/>
            <TextInput error={errors.password} fullWidth onChange={onChangePassword} value={password} placeholder={password} label={'Password'} isRequired/>
            <Button onClick={refresh} fullWidth>Login</Button>
            <Error>{errors.message}</Error>
        </div>
    );
};

export default LoginContainer;