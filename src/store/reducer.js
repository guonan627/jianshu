const defaultState = {
  focused: false
};

// reducer导出的内容为纯函数 ，给固定的输入就会有固定的输出， 同时没有副作用， 不要把参数改变了， 这里接受两个参数 state和action
// eslint-disable-next-line
export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    return {
      focused: true
    }
  }
  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state;
}