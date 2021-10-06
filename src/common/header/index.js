import React from 'react';
import { connect } from 'react-redux'; //帮助该组件和store建立连接的方法
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper, 
  Logo, 
  Nav,
  NavItem, 
  NavSearch,
  Addition, 
  Button,
  SearchWrapper
} from './style'

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
    focused: state.focused //state.focused指的就是store里的focused， 映射到当前组件props里的focused上
  }
}

//从组件传数据出去到store， 通过dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    }, 
    handleInputBlur(){
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Header);