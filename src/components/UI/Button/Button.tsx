import * as React from 'react';

interface IButton {
    label: string;
    id: string;
    style?: string;
    clicked?: () => void;
}

const Button = ({label, style, clicked, id}: IButton) => {
    return (
        <div id={id} className={`button-container ${style}`}>
            <button onClick={clicked}>{label}</button>
        </div>
    );
}

export default Button;