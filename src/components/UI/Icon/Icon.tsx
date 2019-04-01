import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import {IconType, IconVersion} from "../../../constants";

interface IIcon {
    clicked?: () => void;
    type: IconType;
    version: IconVersion
}

const Icon = ({type, version, clicked}: IIcon) => {
    return (
        <span className={`icon icon-${version}-${type}`} onClick={clicked}>
            <FontAwesomeIcon icon={[version, type]} />
        </span>
    );
}

export default Icon;