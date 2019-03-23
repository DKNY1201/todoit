import * as constants from '../constants';

export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM_TYPE;
}

export interface IDecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM_TYPE;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}