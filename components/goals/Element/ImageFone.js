import React, {useState} from 'react';
import Image from "next/image";
import classes from './ImageFone.module.css';

const ImageFone = (props) => {
    const {image} = props;
    return (
            <Image className={classes.root} src={image} width={250} height={250} alt={'kjklj'}/>
    );
};

export default ImageFone;