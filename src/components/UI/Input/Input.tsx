import * as React from 'react';

interface IInput {
    placeholder: string;
    value?: string;
    changed?: () => void;
}

const Input = ({placeholder, value, changed}: IInput) => (
    <div className="input-container">
        <input placeholder={placeholder} value={value} onChange={changed} />
    </div>
);

export default Input;