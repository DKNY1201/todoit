import * as React from 'react';

export interface IHelloProps {
    name: string;
    enthusiasmLvl?: number;
}

class Hello extends React.Component<IHelloProps, object> {
    render() {
        const {name, enthusiasmLvl = 1} = this.props;
        if (enthusiasmLvl <= 0) {
            throw new Error('You should have move exciting level');
        }

        return (
            <div className="hello">
                <h3>Hello {name}{getExclaiminationMarks(enthusiasmLvl)}</h3>
            </div>
        );
    }
}

export default Hello;

// Helper
const getExclaiminationMarks = (enthusiasmLvl: number): string => {
    return Array(enthusiasmLvl + 1).join('!');
}