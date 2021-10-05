import React, { Component } from "react";
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

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);

  }
  render() {
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
              in={this.state.focused}
              classNames="slide"
            >
              <NavSearch 
                className={this.state.focused ? 'focused' : ''}
                onFocus= {this.handleInputFocus}
                onBlur= {this.handleInputBlur}
                >
              </NavSearch>
            </CSSTransition>
            {/* <span className="iconfont icon-fangdajing"></span> */}
            <span 
              className={this.state.focused ? 'focused iconfont icon-fangdajing' : 'iconfont icon-fangdajing'}
            >
            </span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont icon-yongyan"></span>
            Write
          </Button>
          <Button className="reg">Register</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState ({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState ({
      focused: false
    })
  }
}



export default Header;