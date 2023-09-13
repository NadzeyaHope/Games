import React from 'react';
import Input from '@/components/form/Input';
import Label from '@/components/form/Label';
import Button from '@/components/form/Button';
import Spacer from '@/components/layout/Spacer';
import classes from './RegisterContainer.module.css';
import {useState} from 'react';
import Header from '@/components/typography/Header';
import Error from '@/components/form/Error';
import TextInput from '@/components/form/TextInput';
import {useRouter} from 'next/router';

const RegisterContainer = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dataRegister, setDataRegister] = useState([]);
  const router = useRouter();
  const [errors, setErrors] = useState({});

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
    if (password !== confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: 'Confirm password is not equal to password'
      })
      return;
    }
    if(email.length === 0){
      setErrors({
        ...errors,
        email: 'You are not enter the email'
      })
      return;
    }
    if(password.length === 0){
      setErrors({
        ...errors,
        password : 'You are not enter the password'
      })
      return;
    }
    if(password.length <= 7){
      setErrors({
        ...errors,
        password : 'The password need to consist more than 7 elements'
      })
      return;
    }
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({email, fullName, password})
    })
    setEmail('')
    setPassword('');
    setFullName('');
    setConfirmPassword('');
    setErrors('');
    return router.push('/dashboard/goals');
  }
  return (
    <div className={classes.root}>
      <Header>Registration</Header>
      <Spacer value={40}/>

      <TextInput
        label={'Email'}
        isRequired
        value={email}
        onChange={onChangeEmail}
        error={errors.email}
        fullWidth
      />

      <TextInput
        label={'Full Name'}
        isRequired
        value={fullName}
        onChange={onChangeName}
        error={''}
        fullWidth
      />

      <TextInput
        label={'Password'}
        isRequired
        value={password}
        error={errors.password}
        onChange={onChangePassword}
        fullWidth
      />

        <TextInput
            label={'Confirm password'}
            isRequired
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            fullWidth
            error={errors.confirmPassword}
        />
      <Button onClick={onSend} fullWidth>Create an account</Button>
    </div>
  );
};

export default RegisterContainer;