import React, {useState} from 'react';

const UseOpenWindow = (params) => {
    const [add, setAdd] = useState(true);
    const onOpenCloseWindow = () => {
        setAdd(!add)
    }
    return (
        {onOpenCloseWindow, add}
    );
};

export default UseOpenWindow;