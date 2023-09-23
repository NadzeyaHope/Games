import React, {useState} from 'react';
import InputGoals from "@/components/goals/InputGoals";
import classes from './CreateGoals.module.css';
import Element from "@/components/goals/Element";
import Spacer from "@/components/layout/Spacer";
import ItemAdd from "@/components/goals/addItem/ItemAdd";

const CreateGoals = () => {
    const [add, setAdd ] = useState(false)
    const onAdd = () => {
        setAdd(!add);
    }
    return (
        <div className={classes.root}>
            <InputGoals/>
            {add ? <InputGoals/> : <ItemAdd onClick={onAdd}/>}
            <Spacer value={100}/>
            <Element/>
        </div>
    );
};

export default CreateGoals;