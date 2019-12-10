import { EnthusiasmAction } from '../actions/';
import { StoreState } from '../type/';
import * as constants from '../constants/index';

const HomeReduce = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
    info: []
}

const Reducer = (state: StoreState = HomeReduce, action: EnthusiasmAction) => {
    switch (action.type) {
        case constants.INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case constants.DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        case constants.GETDATALIST:
            return { ...state, info: action.data}
    }
    return state;
}



export default Reducer;