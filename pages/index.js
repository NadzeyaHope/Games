import React from 'react';
import FirstPage from './../components/First/FirstPage';


const Index = () => {
  return (
    <div>
        <FirstPage onClick={()=>{}} children={'Login'} link={'/first/login'}/>
        <div>or</div>
        <FirstPage onClick={()=>{}} children={'Create account'} link={'/first/registration'}   />
    </div>
  );
};

export default Index;