import React, {useState} from 'react';
import classes from './LoginContainer.module.css';
import Button from '@/components/form/Button';
import Spacer from '@/components/layout/Spacer';
import Header from '@/components/typography/Header';
import TextInput from '@/components/form/TextInput';
import Error from '@/components/form/Error';
import {useRouter} from 'next/router';
import CircleSpinner from '@/components/loaders/CircleSpinner';
import {isEmail, validate, validateValues} from '@/lib/validation';
import {isRequired} from '@/lib/validation';

const validations = {
  email: [
    {validator: isRequired, errorMessage: 'Please enter email'},
    {validator: isEmail, errorMessage: 'Please enter correct Email'},
  ],
  password: [
    {validator: isRequired, errorMessage: 'Please enter Password'},
  ],
  name: [
    {validator: isRequired, errorMessage: 'Please enter Name'},
  ],
}

const LoginContainer = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: ''
  });

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false);


  const router = useRouter();

  const onChange = (name) => (value) => {
    setValues({...values, [name]: value});
  }

  const onSubmit = async () => {
    const validationErrors = validateValues(validations, values);

    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    setIsLoading(false);

    if (!response.ok) {
      setErrors({message: 'your email or password is wrong'})
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
      <TextInput
        error={errors.email}
        fullWidth
        onChange={onChange('email')}
        value={values.email}
        placeholder={'Enter Email'}
        label={'Email'}
        isRequired
      />
      <TextInput
        error={errors.password}
        onChange={onChange('password')}
        value={values.password}
        placeholder={'Enter password'}
        label={'Password'}
        type={'password'}
        isRequired
        fullWidth
      />
      <TextInput
        error={errors.name}
        onChange={onChange('name')}
        value={values.name}
        placeholder={'Enter name'}
        label={'name'}
        isRequired
        fullWidth
      />
      <Button onClick={onSubmit} fullWidth>
        {isLoading ? (<CircleSpinner diameter={32}/>) : 'Login'}
      </Button>
      <Error>{errors.message}</Error>
    </div>
  );
};

export default LoginContainer;