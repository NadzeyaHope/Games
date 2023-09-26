import React, {useState} from 'react';
import classes from './RegisterContainer.module.css';
import Button from '@/components/form/Button';
import Spacer from '@/components/layout/Spacer';
import Header from '@/components/typography/Header';
import TextInput from '@/components/form/TextInput';
import Error from '@/components/form/Error';
import {useRouter} from 'next/router';
import CircleSpinner from '@/components/loaders/CircleSpinner';
import {isEmail, validate, validateValues} from '@/lib/validation';
import {isRequired} from '@/lib/validation';
import api from '@/api';
import useForm from "@/hooks/useForm";

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
    ]
}

const RegisterContainer = () => {
    const router = useRouter();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    let errorConfirm = '';


    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e);
    }

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
    } = useForm({
        validations, onValidate, onSuccess, initialValues: {
            email: '',
            userName: '',
            password: '',
        }
    });

    return (
        <div className={classes.root}>
            <Header>Registration</Header>
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
                onChange={onChange('userName')}
                value={values.userName}
                placeholder={'Enter name'}
                label={'User name'}
                isRequired
                fullWidth
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
                error={errorConfirm}
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
                placeholder={'Enter confirm password'}
                label={'Confirm password'}
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