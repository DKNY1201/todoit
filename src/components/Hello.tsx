import * as React from 'react';

export interface IHelloProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement}: IHelloProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Hello;

// Helper
const getExclamationMarks = (enthusiasmLvl: number): string => {
    return Array(enthusiasmLvl + 1).join('!');
}