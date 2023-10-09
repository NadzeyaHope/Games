import React, {useEffect, useState} from 'react';
import Link from "next/link";
import classes from './Sidebar.module.css';
import IconLeftMenu from "@/components/nav/Sidebar/icon/IconLeftMenu";
import GoalsIcon from "@/components/nav/Sidebar/icon/GoalsIcon";
import SettingsIcon from "@/components/nav/Sidebar/icon/SettingsIcon";
import AboutUsIcon from "@/components/nav/Sidebar/icon/AboutUsIcon";

const list = [
    {
        name: 'Goals',
        path : '/dashboard/goals',
        icon: <GoalsIcon/>
    },
    {
        name: 'About',
        path : '/dashboard/about',
        icon: <AboutUsIcon/>
    },
    {
        name : 'Settings',
        path : '/dashboard/settings',
        icon: <SettingsIcon/>
    }
]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [children, setChildren] = useState('');

    const toggle = () => {
        setIsOpen(!isOpen)
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
                            <Link className={classes.elements} href={el.path}>
                                <div className={classes.logo}>{el.icon}</div>
                                <div className={classes.list}>{el.name}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Sidebar;