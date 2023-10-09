import React from "react";

function SignInIcon(props) {
    const {width= 35} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="var(--text-accent-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 4v16M4 12h12m0 0l-4-4m4 4l-4 4"
                opacity={0.8}
            ></path>
        </svg>
    );
}

export default SignInIcon;
