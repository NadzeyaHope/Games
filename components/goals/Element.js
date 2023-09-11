import React, {useEffect, useState} from 'react';
import ImageFone from "@/components/goals/Element/ImageFone";
import TitleElement from "@/components/goals/Element/TitleElement";
import Description from "@/components/goals/Element/Description";
import image from './png/be0c2bdad605ff797d5249614efecbe6.jpg';
import classes from './Element.module.css';

const Element = (props) => {
    const [list, setList] = useState([]);

    const refresh = async () => {
        const response = await fetch('/api/goals/list');
        const json = await response.json();
        setList(json);
    }
    useEffect(()=>{
        refresh();
    }, [])

    return (
        <div className={classes.root}>{
            list.map((el)=>{
                return (
                    <div className={classes.element}>
                        <ImageFone image={image} />
                        <TitleElement title={el.title} />
                        <Description description={el.description} />
                    </div>
                )
            })
        }
        </div>
    );
};
export default Element;