import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IIcon {
    clicked?: () => void;
    name: IconProp,
}

const Icon = ({name, clicked}: IIcon) => {
    const classes = (typeof name === 'string') ? name : (name as string[]).join('-');

    return (
        <span className={`icon icon-${classes}`} onClick={clicked}>
            <FontAwesomeIcon icon={name} />
        </span>
    );
}

export default Icon;