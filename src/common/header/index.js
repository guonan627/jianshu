import React from 'react';
import { connect } from 'react-redux'; //帮助该组件和store建立连接的方法
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWrapper, 
  Logo, 
  Nav,
  NavItem, 
  NavSearch,
  Addition, 
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle, 
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

const getListArea = (show) =>{
  if(show) {
    return(
      <SearchInfo >
        <SearchInfoTitle>
          trending topics
          <SearchInfoSwitch>change</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>education</SearchInfoItem>
          <SearchInfoItem>education</SearchInfoItem>
          <SearchInfoItem>education</SearchInfoItem>
          <SearchInfoItem>education</SearchInfoItem>
          <SearchInfoItem>education</SearchInfoItem>
          <SearchInfoItem>education</SearchInfoItem>
          <SearchInfoItem>education</SearchInfoItem>
          <SearchInfoItem>education</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo> 
    )
  } else {
    return null;
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href='./'/>
      <Nav>
        <NavItem className="left active">Home</NavItem>
        <NavItem className="left">Download App</NavItem>
        <NavItem className="right">Login</NavItem>
        <NavItem className="right">
          <span className="iconfont icon-Aa"></span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            in={props.focused}
            classNames="slide"
          >
            <NavSearch 
              className={props.focused ? 'focused' : ''}
              onFocus= {props.handleInputFocus}
              onBlur= {props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span 
            className={props.focused ? 'focused iconfont icon-fangdajing' : 'iconfont icon-fangdajing'}
          ></span>
          {getListArea(props.focused)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <span className='iconfont icon-yongyan'></span>
          Write
        </Button>
        <Button className="reg">Register</Button>
      </Addition>
    </HeaderWrapper>
  );
}

//从store传数据进来， 通过props
const mapStateToProps = (state) => {
  return {
    // focused: state.focused //state.focused指的就是store里的focused， 映射到当前组件props里的focused上
    //用了combineReducers分类reducer之后， 在header文件夹里多建立一个store/reducer.js 写成
    // focused: state.header.focused  
    //用了immutable.js以后 要用.get方法来传入focused的属性 写成
    // focused: state.header.get('focused')
    // 可以工作但是看着难受 因为state是一个js对象， state.header是一个immutable对象， 所以数据获取行为是不统一的（先.， 然后get）
    // 我们希望state也变成immutable对象 要引入redux-immutable 写成
    //  focused: state.get('header').get('focused')
    // 也可以写成 完全一样的
     focused: state.getIn(['header','focused'])
  }
}

//从组件传数据出去到store， 通过dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      // const action = {
      //   type: 'search_focus'
      // };
      //使用了actionCreators之后， 写成
      // const action = actionCreators.searchFocus();
      // dispatch(action);
      // 简写成
      dispatch(actionCreators.searchFocus());
    }, 
    handleInputBlur(){
      // const action = {
      //   type: 'search_blur'
      // };
      // dispatch(action);
       //使用了actionCreators之后， 简写成
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Header);