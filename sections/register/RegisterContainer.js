import React, {useState} from 'react';
import classes from './RegisterContainer.module.css';
import Button from '@/components/form/Button';
import Spacer from '@/components/layout/Spacer';
import Header from '@/components/typography/Header';
import TextInput from '@/components/form/TextInput';
import Error from '@/components/form/Error';
import {useRouter} from 'next/router';
import CircleSpinner from '@/components/loaders/CircleSpinner';
import {isEmail, isRequired} from '@/lib/validation';
import useForm from '@/hooks/useForm';
import api from '@/api';

const validations = {
    email: [
        {validator: isRequired, errorMessage: 'Please enter email'},
        {validator: isEmail, errorMessage: 'Please enter correct Email'},
    ],
    userName: [
        {validator: isRequired, errorMessage: 'Please enter Name'},
    ],
    password: [
        {validator: isRequired, errorMessage: 'Please enter Password'},
    ],
}

const RegisterContainer = () => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e)
    }

    const router = useRouter();

    const onValidate = () => {
        return api.users.register(values);
    }

    const onSuccess = () => {
        return router.push('/dashboard/goals');
    }


    const {
        onChange,
        onSubmit,
        isLoading,
        errors,
        values,
        errorConfirmPassword
    } = useForm({
        validations, onValidate, onSuccess, initialValues: {
            email: '',
            userName: '',
            password: '',
        },
        confirmPassword
    });


    return (
        <div className={classes.root}>
            <Header>Register</Header>
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
                error={errors.userName}
                fullWidth
                onChange={onChange('userName')}
                value={values.userName}
                placeholder={'Enter Name'}
                label={'Name'}
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
                error={errorConfirmPassword}
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
                placeholder={'Enter confirm password'}
                label={'Confirm Password'}
                type={'password'}
                isRequired
                fullWidth
            />
            <Button onClick={onSubmit} fullWidth>
                {isLoading ? (<CircleSpinner diameter={32}/>) : 'Create an account'}
            </Button>
            <Error>{errors.message}</Error>
        </div>
    );
};

export default RegisterContainer;