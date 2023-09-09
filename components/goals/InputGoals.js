import React, {useEffect, useState} from "react";
import TextInput from "@/components/form/TextInput";

const InputGoals = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [list, setList] = useState([]);
    const [errors, setErrors] = useState({})

    const refresh = async () => {
        const response = await fetch('/api/goals/list');
        const json = await response.json();
        setList(json);
    }

    const inputChange = (e) => {
        return setTitle(e.target.value)
    }
    const descriptionChange = (e) => {
        return setDescription(e.target.value)
    }

    useEffect(()=>{
        refresh();
    }, [])

    const onSend = async () => {
        if(title === ''){
            setErrors({
                ...errors,
                titleGoal : 'You are did not write the title '
            })
            return ;
        }
        const response = await fetch('/api/goals/create', {
            method : 'POST',
            body : JSON.stringify({name, description})
        })
        setDescription('')
        setTitle('');
        refresh();
    }

    return (
        <div>
            <TextInput fullWidth onChange={inputChange} error={errors.titleGoal} value={title} label={'Title your goal'} isRequired />
            <TextInput fullWidth onChange={inputChange} error={errors.titleGoal} value={title} label={'Title your goal'} isRequired />
        </div>
    )
}
export default InputGoals;