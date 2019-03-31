import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import {IconType} from "../../../constants";

interface IIcon {
    clicked?: () => void;
    type: IconType;
}

const Icon = ({type, clicked}: IIcon) => {
    return (
        <span className={`icon icon-${type}`} onClick={clicked}>
            <FontAwesomeIcon icon={[type.version, type.name]} />
        </span>
    );
}

export default Icon;