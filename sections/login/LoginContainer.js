import React, {useState} from 'react';
import Input from "@/components/form/Input";
import classes from './LoginContainer.module.css';
import Label from "@/components/form/Label";
import Button from "@/components/form/Button";
import Spacer from "@/components/layout/Spacer";
import Header from "@/components/typography/Header";

const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [list, setList] = useState([])
    const onChangeEmail = (e) => {
        return setEmail(e)
    }
    const onChangePassword = (e) => {
        return setPassword(e)
    }
    const refresh = async () => {
        const response = await fetch('/api/goals/list');
        const json = await response.json();
        setList(json);
    }
    return (
        <div className={classes.root}>
            <Header>Login</Header>
            <Spacer value={40}/>
            <Label>Email</Label>
            <Spacer value={10}/>
            <Input value={email} onChange={onChangeEmail} fullWidth/>
            <Spacer value={20}/>
            <Label>Password</Label>
            <Spacer value={10}/>
            <Input value={password} onChange={onChangePassword} fullWidth/>
            <Spacer value={22}/>
            <Button onClick={refresh} fullWidth>Login</Button>
        </div>
    );
};

export default LoginContainer;