// import { combineReducers } from 'redux';
// 引入redux-immutable之后 写成
import { combineReducers } from 'redux-immutable';
// import headerReducer from '../common/header/store/reducer'; 
 // 在header/store里加index.js之后写成
import {reducer as headerReducer} from '../common/header/store'

const reducer = combineReducers ({
  header: headerReducer
})
// 改成 import { combineReducers } from 'redux-immutable'之后
// 所有combineReducers生成的reducer内容都是immutable的对象


export default reducer;

