import * as React from 'react';

interface IButton {
    label: string;
    style?: string;
    clicked?: () => void;
}

const Button = ({label, style, clicked}: IButton) => {
    return (
        <div className={`button-container ${style}`}>
            <button onClick={clicked}>{label}</button>
        </div>
    );
}

export default Button;