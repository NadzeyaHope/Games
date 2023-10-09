import React, {useEffect, useState} from 'react';
import image from './png/be0c2bdad605ff797d5249614efecbe6.jpg';
import classes from './Element.module.css';
import Image from "next/image";

const Element = (props) => {
    const [list, setList] = useState([]);
    const pageSize = 5;
    let currentPage = 0;
    const startIndex = currentPage * pageSize;

    const Delete =  (elem) => {
        const arr = elem.split();
        arr.map((el, i)=>{
            if(i === 14) {
                el = ''
            }
            return el
        })
        return arr;
    }


    const refresh = async () => {
        const response = await fetch('/api/goals/list');
        const json = await response.json();
        setList(json);
    }
    useEffect(()=>{
        refresh();
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.elements}>{list.map((el)=>{
                        return (
                                <div className={classes.element}>
                                    <div className={classes.image} >imagejklljkljkljkljkjkl</div>
                                    <div className={classes.title}>{el.title.length >= 14 ? Delete(el.title) : el.title}</div>
                                    <div className={classes.description}>{el.description}</div>
                                </div>)})}
            </div>
            <div></div>
        </div>
    );
};
export default Element;