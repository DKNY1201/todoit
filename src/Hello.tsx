import * as React from 'react';

interface IHelloProps {
    name: string;
    enthusiasmLvl?: number;
}

interface IHelloState {
    currentEnthusiasm: number;
}

class Hello extends React.Component<IHelloProps, IHelloState> {
    state = {
        currentEnthusiasm: this.props.enthusiasmLvl || 1,
    };

    constructor(props: IHelloProps) {
        super(props);
    }

    onIncrement = () => this.updateCurrentEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateCurrentEnthusiasm(this.state.currentEnthusiasm - 1);
    updateCurrentEnthusiasm = (currentEnthusiasm: number) => this.setState({currentEnthusiasm});

    render() {
        const {name} = this.props;
        const {currentEnthusiasm} = this.state;

        if (currentEnthusiasm <= 0) {
            throw new Error('You should have move exciting level');
        }

        return (
            <div className="hello">
                <h3>Hello {name}{getExclaiminationMarks(currentEnthusiasm)}</h3>
                <hr/>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }
}

export default Hello;

// Helper
const getExclaiminationMarks = (enthusiasmLvl: number): string => {
    return Array(enthusiasmLvl + 1).join('!');
}