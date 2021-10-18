import * as actionTypes from './constants';
import { fromJS } from 'immutable';

// 引入immutable  帮助生成一个immutable（不可改变）的对象 避免改变state
const defaultState = fromJS({
  focused: false,
  list: []
});

// reducer导出的内容为纯函数 ，给固定的输入就会有固定的输出， 同时没有副作用， 不要把参数state改变了 
// 这里接受两个参数 state和action
// eslint-disable-next-line
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // return {
    //   focused: true
    // }
    // 引入immutable写成
    return state.set('focused', true); //此时的state已经是immutable不可改变对象了， .set的意思是结合之前immutable对象的值和设置的值，返回一个全新的对象， 并不会改变原始的immutable数据
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    // return {
    //   focused: false
    // }
    // 引入immutable写成
    return state.set('focused', false); //此时的state已经是immutable不可改变对象了， .set的意思是结合之前immutable对象的值和设置的值，返回一个全新的对象， 并不会改变原始的immutable数据
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set('list', action.data);
  }
  return state;
}