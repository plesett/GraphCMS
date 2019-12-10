import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './reduce/';

// 创建Store 增加中间件 添加redux调试工具
const store = createStore(Reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;