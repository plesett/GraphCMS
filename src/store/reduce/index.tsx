import { StoreState } from '../type/';
import * as actionTypes from '../constants/index';
import { handleActions } from 'redux-actions';

const Reduce = {
    Header: []
}


const Reducer = handleActions({
    [actionTypes.GETTEST]: (state: StoreState, action) => {
        return {
            ...state,
            Header: action.payload,
        };
    },
}, Reduce);


export default Reducer;