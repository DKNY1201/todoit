import * as enzyme from 'enzyme';
import * as React from 'react';

import Hello from './Hello';

describe('<Hello />', () => {
    // let wrapper;
    //
    // beforeEach(() => {
    //     wrapper = enzyme.shallow(<Hello name="Kevin" />);
    // });

    it('should render name with default enthusiasm level', () => {
        const hello = enzyme.shallow(<Hello name="Kevin" />);
        expect(hello.find('h3.greeting').text()).toEqual('Hello Kevin!');
    });

    it('should render name and provided enthusiasm level', () => {
        const hello = enzyme.shallow(<Hello name="Kevin" enthusiasmLvl={3} />);
        expect(hello.find('h3.greeting').text()).toEqual('Hello Kevin!!!');
    });

    it('should throw an error when provided enthusiasm level is 0', () => {
        expect(() => {
            enzyme.shallow(<Hello name="Kevin" enthusiasmLvl={0} />)
        }).toThrow();
    });

    it('should throw an error when provided enthusiasm level is negative', () => {
        expect(() => {
            enzyme.shallow(<Hello name="Kevin" enthusiasmLvl={-3} />)
        }).toThrow();
    });
});

