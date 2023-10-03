import React, {useEffect, useState} from 'react';
import Link from "next/link";
import classes from './Sidebar.module.css';
import IconLeftMenu from "@/components/nav/Sidebar/icon/IconLeftMenu";
import GoalsContainer from "@/sections/goals/GoalsContainer";
import AboutContainer from "@/sections/about/AboutContainer";
import SettingsContainer from "@/sections/settings/SettingsContainer";
import GoalsIcon from "@/components/nav/Sidebar/icon/GoalsIcon";
import SettingsIcon from "@/components/nav/Sidebar/icon/SettingsIcon";
import AboutUsIcon from "@/components/nav/Sidebar/icon/AboutUsIcon";
import SignInIcon from "@/components/nav/signIn/SignInIcon";

const list = [
    {
        name: 'Goals',
        path : <GoalsContainer/>,
        icon: <GoalsIcon/>
    },
    {
        name: 'About',
        path : <AboutContainer/>,
        icon: <AboutUsIcon/>
    },
    {
        name : 'Settings',
        path : <SettingsContainer/>,
        icon: <SettingsIcon/>
    }
]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [children, setChildren] = useState('');

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const onAddPage = (path) => {
        setChildren(path);
    }
    return (
        <div className={classes.root}>
            <div style={{width: isOpen ? '250px' : '60px'}} className={classes.container}>
                <div onClick={toggle} className={classes.top_section}>
                    <div ><IconLeftMenu/></div>
                    <div>Logo</div>
                </div>
                {list.map((el)=>{
                    return (
                        <div>
                            <div className={classes.elements} onClick={()=>{onAddPage(el.path) }} >
                                <div className={classes.logo}>{el.icon}</div>
                                <div className={classes.list}>{el.name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Sidebar;