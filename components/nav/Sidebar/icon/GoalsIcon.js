import React from 'react';

const GoalsIcon = (props) => {
    const {width = 35} = props;
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
                strokeWidth="1.5"
                d="M14.13 11.34a2.206 2.206 0 00-2.68-2.68c-.77.19-1.4.82-1.59 1.59a2.206 2.206 0 002.68 2.68c.78-.19 1.41-.82 1.59-1.59z"
                opacity={0.8}
            ></path>
            <path
                stroke="var(--text-accent-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.01 17.19a8.731 8.731 0 002.78-6.4 8.79 8.79 0 10-17.58 0c0 2.54 1.08 4.83 2.81 6.43"
                opacity={0.8}
            ></path>
            <path
                stroke="var(--text-accent-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 14.55c-.92-.98-1.49-2.3-1.49-3.76C6.51 7.76 8.97 5.3 12 5.3c3.03 0 5.49 2.46 5.49 5.49 0 1.46-.57 2.77-1.49 3.76M10.3 16.66l-1.44 1.79c-1.14 1.43-.13 3.54 1.7 3.54h2.87c1.83 0 2.85-2.12 1.7-3.54l-1.44-1.79c-.86-1.09-2.52-1.09-3.39 0z"
                opacity={0.8}
            ></path>
        </svg>
    );
};

export default GoalsIcon;