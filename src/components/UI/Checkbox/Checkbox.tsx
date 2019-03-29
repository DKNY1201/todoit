import * as React from 'react';

interface ICheckbox {
    clicked: () => void;
}

const Checkbox = ({clicked}: ICheckbox) => (
    <div className="checkbox" onClick={clicked}>
        a check box
    </div>
);

export default Checkbox;