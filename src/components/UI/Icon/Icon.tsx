import * as React from 'react';

interface IIcon {
    clicked?: () => void;
    type: string;
}

const Icon = ({type, clicked}: IIcon) => {
    return (
        <span className={`icon icon-${type}`} onClick={clicked}>{type}</span>
    );
}

export default Icon;