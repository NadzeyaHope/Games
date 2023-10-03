import React from "react";

const IconGoal = (props) => {
    const {width} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            className="icon"
            viewBox="0 0 1024 1024"
        >
            <path
                fill="var(--bg-accent-color)"
                d="M49.105999999999995 486.692a463.698 463.698 0 10927.396 0 463.698 463.698 0 10-927.396 0z"
            ></path>
            <path
                fill='#fff'
                d="M160.64999999999998 486.692a352.154 352.154 0 10704.307 0 352.154 352.154 0 10-704.307 0z"
            ></path>
            <path
                fill="var(--bg-accent-color)"
                d="M289.93499999999995 486.692a222.868 222.868 0 10445.737 0 222.868 222.868 0 10-445.737 0z"
            ></path>
            <path
                fill='#fff'
                d="M416.02599999999995 486.692a96.778 96.778 0 10193.556 0 96.778 96.778 0 10-193.556 0z"
            ></path>
        </svg>
    );
}

export default IconGoal;