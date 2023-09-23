import React from 'react';
import CreateGoals from "@/sections/goals/CreateGoals";
import Menu from "@/components/nav/menu/Menu";

const Goals = () => {
    return (
        <div>
            <Menu/>
            <CreateGoals/>
        </div>
    );
};

export default Goals;