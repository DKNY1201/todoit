import {connect} from 'react-redux';
import {Dispatch} from "redux";

import * as action from '../actions';
import Hello from '../components/Hello';
import {IStoreState} from '../types';

export function mapStateToProps({enthusiasmLevel, languageName}: IStoreState) {
    return {
        enthusiasmLevel,
        name: languageName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<action.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(action.decrementEnthusiasm()),
        onIncrement: () => dispatch(action.incrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);