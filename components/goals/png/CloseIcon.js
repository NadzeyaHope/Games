import React from "react";

function Icon(props) {
    const {width, onOpenCloseWindow} = props;
    return (
        <svg
            onClick={onOpenCloseWindow}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 1024 1024"
        >
            <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
        </svg>
    );
}

export default Icon;