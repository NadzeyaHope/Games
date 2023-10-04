import React, {useEffect, useState} from "react";
import TextInput from "@/components/form/TextInput";
import classes from './InputGoals.module.css';
import Button from "@/components/form/Button";
import Header from "@/components/typography/Header";
import Spacer from "@/components/layout/Spacer";
import CircleSpinner from "@/components/loaders/CircleSpinner";
import CloseIcon from "@/components/goals/png/CloseIcon";
import {isRequired} from "@/lib/validation";
import useForm from "@/hooks/useForm";
import api from "@/api";


const validations = {
    title : [
        {validator : isRequired, errorMessage : 'You are not enter the title of goal'}
    ],
    description : [
        {validator : isRequired, errorMessage : 'You are not enter description'}
    ]
}

const CreateGoals = (props) => {
    const {onOpenCloseWindow, add} = props;
    const [list, setList] = useState([]);

    const onValidate = async () => {
        return api.goals.createGoal(values);
    };

    const onSuccess = () => {
    }



    // useEffect(()=>{
    //     onValidate();
    // }, [])

    const {values,
        errors,
        onChange,
        onSubmit,
        isLoading,

    } = useForm(
        {
            initialValues: {
                title: '',
                description: ''},
            validations,
            onValidate,
            onSuccess
        })


    return (
        <div className={classes.root}>
            <div className={classes.close}><CloseIcon onOpenCloseWindow={onOpenCloseWindow}  width={20}/></div>
            <Header>Add your goal</Header>
            <Spacer value={40} />
            <TextInput fullWidth onChange={onChange('title')} error={errors.errorMessage} value={values.title} label={'Title your goal'} isRequired />
            <TextInput fullWidth onChange={onChange('description')} error={errors.errorMessage} value={values.description} label={'Description your goal'} isRequired />
            <Button onClick={onSubmit} fullWidth>{isLoading ? (<CircleSpinner diameter={32}/>) : 'Add goal'}</Button>
        </div>
    )
}
export default CreateGoals;