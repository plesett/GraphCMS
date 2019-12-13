import * as constants from '../constants/';
import { Dispatch, AnyAction } from "redux";
import { GetHeaderInfo } from '../../utils/api';
import { createAction } from 'redux-actions';


export const GetTest = createAction(constants.GETTEST, (data: AnyAction): AnyAction => {
    return data
})


export const HeaderInfo = (): object => {
    return (dispatch: Dispatch<any>) => {
        GetHeaderInfo()
            .then((res:any) => {
                // 发送数据到redux
                dispatch(GetTest(res.data))
                console.log('请求一次');
            })
    }
}


