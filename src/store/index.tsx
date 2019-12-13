import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import Reducer from './reduce/';
import { StoreState } from './type/index';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const myPersistReducer = persistReducer<StoreState, any>(persistConfig, Reducer)

// 创建Store 增加中间件 添加redux调试工具
const store = createStore(myPersistReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export const persistor = persistStore(store)
export default store;