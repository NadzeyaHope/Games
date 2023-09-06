import React, {useEffect, useState} from "react";
const styles = {
}


const Cards = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [list, setList] = useState([]);

    const refresh = async () => {
        const response = await fetch('/api/goals/list');
        const json = await response.json();
        setList(json);
    }

    const inputChange = (e) => {
        return setName(e.target.value)
    }
    const descriptionChange = (e) => {
        return setDescription(e.target.value)
    }

    useEffect(()=>{
        refresh();
    }, [])

    const onSend = async () => {
        if(name === '' || name.length >= 16){
            return ;
        }
        const response = await fetch('/api/goals/create', {
            method : 'POST',
            body : JSON.stringify({name, description})
        })
        setDescription('')
        setName('');
        refresh();
    }

    return (
        <div style={styles.main}>
            <div style={styles.header}>Add your goal !</div>
            <div style={styles.icon}>
                <div>
                    <input style={styles.inputName} value={name} onChange={inputChange} />
                    <input style={styles.inputDescription} value={description} onChange={descriptionChange} />
                </div>
                <button style={styles.buttonSend} onClick={onSend} >send</button>
            </div>
            <ol>{list.map((el)=>{
                return <div style={styles.itemGoal}>
                    <div style={styles.nameGoal}>{el.name}</div>
                    <div style={styles.descriptionItem}>{el.description}</div>
                </div>
            })}</ol>
        </div>
    )
}
export default Cards;