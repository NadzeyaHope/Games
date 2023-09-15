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
import CircleSpinner from '@/components/loaders/CircleSpinner';

const RegisterContainer = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [Loading, setLoading] = useState(false);

  function isValidEmail(email) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
  }

  const onChangeEmail = (e) => {
    setErrors({})
    return setEmail(e)
  }
  const onChangeName = (e) => {
    setErrors({})
    return setFullName(e)
  }
  const onChangePassword = (e) => {
    setErrors({})
    return setPassword(e)
  }
  const onChangeConfirmPassword = (e) => {
    setErrors({})
    return setConfirmPassword(e)
  }
  const onSend = async () => {
    if(!isValidEmail(email)){
      setErrors({
        ...errors, email : 'You are enter not valid email'
      })
      return
    }
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
    setLoading(true);
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({email, fullName, password})
    })
    setLoading(false);
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
      <Button onClick={onSend} fullWidth>
        {Loading ? (<CircleSpinner diameter={32} />) : 'Create an account'}
      </Button>
    </div>
  );
};

export default RegisterContainer;