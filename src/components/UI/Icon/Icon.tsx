import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IIcon {
    clicked?: () => void;
    type: string;
}

const Icon = ({type, clicked}: IIcon) => {
    return (
        <span className={`icon icon-${type}`} onClick={clicked}>
            <FontAwesomeIcon icon={['far','comment-dots']} />
        </span>
    );
}

export default Icon;