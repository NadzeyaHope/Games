import React, {useEffect, useState} from "react";
const styles = {
    main : {
      background:  '#536791',
        position : 'relative',
    },
    header : {
        fontSize: 30,
        textAlign: 'center',
        padding : 30
    },
    icon : {
        marginLeft: 250,
        width : 400,
        border: '2px solid #06060c',
        borderRadius : 10,
        color : '#f8f1f6',
        background: '#98a0e1',
        textAlign: 'center',
        padding: 10
    },
    inputName : {
        padding: 10,
        marginTop: 20,
        fontSize: 20,
        width: 300,
        borderRadius: 10,
    },
    inputDescription : {
        padding: 10,
        height: 100,
        marginTop: 20,
        fontSize: 13,
        width: 300,
        borderRadius: 10,
    },
    buttonSend : {
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        width : 100,
        marginTop: 20
    },
    itemGoal : {
        border: '3px solid  #8c91e4',
        marginTop: 30,
        marginLeft: 20,
        padding : 20,
        height: 300,
        overflowY: 'auto',
        borderRadius : 10,
        background: '#51588e',
        maxWidth: 300,
        wordBreak: 'break-word',
    },
    nameGoal : {
      fontSize : 30,
        textAlign: 'center',
        width: 100,
        color : '#110f20',
    },
    descriptionItem : {
        fontSize: 20,
        marginTop: 20
    }

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