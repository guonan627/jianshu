import * as actionTypes from './constants';
import axios from 'axios'
import { fromJS } from 'immutable';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  // data
  // 上面为简写， 其实就是 
  // data: data
  // data是axios获取到的数据，是普通数组，为了保证它变成immutable的数据（与header reducer里初始的list一致 用了fromJS）
  // 这里要用fromJS把data变成immutable数组
  data: fromJS(data) 
});

export const getList = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res)=> {
      const data = res.data;
      // 最原始的写法
      // const action = {
      //   type: 'change_list',
      //   data: data.data
      // }
      // dispatch(action);

      // 在同一个文件actionCreator里，创建了changeList函数之后写成
      // const action = changeList(data.data);
      // dispatch(action);

      // 最终简写成
      dispatch(changeList(data.data));
    }).catch(()=> {
      console.log('error');
    })
  }
};