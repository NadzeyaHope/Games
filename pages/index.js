import React from 'react';
import FirstPage from './../components/First/FirstPage';
import Label from "@/components/Label";
import classes from './index.module.css'

const Index = () => {
  return (
    <div className={classes.elem}>
        <Label children={'Achive your goal !'}/>
        <FirstPage onClick={()=>{}} children={'Login'} link={'/first/login'}/>
        <div className={classes.textOr} >or</div>
        <FirstPage onClick={()=>{}} children={'Create account'} link={'/first/registration'}   />
    </div>
  );
};

export default Index;