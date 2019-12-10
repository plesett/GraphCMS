import * as constants from '../constants/';
import { 
    GetAllData, 
    GetHome, 
    GetTitle,
    GetInfo
} from '../../utils/api';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

// test
export interface getDataList {
    type: constants.GETDATALIST,
    data: any
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | getDataList;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}
// test
export function SendDetaHome(data: any): getDataList {
    return {
        type: constants.GETDATALIST,
        data
    }
}

// test
export const getDataList = () => {
    return (dispatch: any) => {
        GetAllData([GetHome(), GetTitle(), GetInfo()])
            .then((res: any) => {
                console.log(res);
                dispatch(SendDetaHome(res[0]))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
