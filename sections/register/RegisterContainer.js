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
    confirmPassword: [
        {validator: isRequired, errorMessage: 'Please enter Confirm password'},
    ],
}

const RegisterContainer = () => {
    const [values, setValues] = useState({
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
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
        if(values.password !== values.confirmPassword){
             setErrors({...errors, confirmPassword: 'The  confirm password is wrong'})
            return
        }
        const response = await fetch('/api/users/register', {
            method: 'POST',
            body: JSON.stringify(values)
        });
        setIsLoading(false);


        setErrors({})

        return router.push('/dashboard/goals');
    }

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
                error={errors.confirmPassword}
                onChange={onChange('confirmPassword')}
                value={values.confirmPassword}
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