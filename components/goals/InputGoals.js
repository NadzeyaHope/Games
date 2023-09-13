import React, {useEffect, useState} from "react";
import TextInput from "@/components/form/TextInput";
import classes from './InputGoals.module.css';
import Button from "@/components/form/Button";
import Header from "@/components/typography/Header";
import Spacer from "@/components/layout/Spacer";
import png from './png/be0c2bdad605ff797d5249614efecbe6.jpg';

const InputGoals = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(png)
    // const [list, setList] = useState([]);
    const [errors, setErrors] = useState({})

    // const refresh = async () => {
    //     const response = await fetch('/api/goals/list');
    //     const json = await response.json();
    //     setList(json);
    // }

    const titleChange = (e) => {
        return setTitle(e)
    }
    const descriptionChange = (e) => {
        return setDescription(e)
    }
    const imageChange = (e) =>{
        return setImage(e)
    }
    //
    // useEffect(()=>{
    //     refresh();
    // }, [])

    const onSend = async () => {
        if(title === ''){
            setErrors({
                ...errors,
                titleGoal : 'You are did not write the title '
            })
            return ;
        }
        if(title.length >= 22){
            setErrors({
                ...errors,
                titleGoal : 'You cant to enter more 22 elements'
            })
        }
        if(description === ''){
            setErrors({
                ...errors,
                description : 'You are did not write the description '
            })
            return ;
        }
        const response = await fetch('/api/goals/create', {
            method : 'POST',
            body : JSON.stringify({title, description, image})
        })
        setDescription('');
        setTitle('');
        setImage('');
    }

    return (
        <div className={classes.root}>
            <Header>Add your goal</Header>
            <Spacer value={40} />
            <TextInput fullWidth onChange={titleChange} error={errors.titleGoal} value={title} label={'Title your goal'} isRequired />
            <TextInput fullWidth onChange={descriptionChange} error={errors.description} value={description} label={'Description your goal'} isRequired />
            {/*<TextInput fullWidth onChange={imageChange} value={image} label={'Image your goal'} isRequired={false} />*/}
            <Button onClick={onSend} fullWidth>Add Goal</Button>
        </div>
    )
}
export default InputGoals;