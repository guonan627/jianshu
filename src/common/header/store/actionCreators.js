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
  // data: data
  data: fromJS(data)
});

export const getList = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res)=> {
      const data = res.data;
      // const action = {
      //   type: 'change_list',
      //   data: data.data
      // }
      // dispatch(action);
      dispatch(changeList(data.data));
    }).catch(()=> {
      console.log('error');
    })
  }
};