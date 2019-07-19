import React, { Component } from "react";
import {connect} from 'react-redux';
import {addTodo} from '../../actions'

import "./header.css";
//头部组件
class Header extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    const {onHandleAdd} = this.props
    if (e.keyCode === 13) {
      // 如果是回车键 父组件来处理这个内容
      // 按下回车键 如果内容是空 提示信息
      if (e.target.value.trim() == "") {
        alert("添加内容不可以为空");
        return;
      }
      // 1. 交给redux来添加数据
      onHandleAdd(e.target.value)
      //清空value
      e.target.value = "";
    }
  };
  render() {
    return (
      <header>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={this.handleChange}
        />
      </header>
    );
  }
}
// 引入store中的数据
const mapStateToProps = (state) => {
  return {
    ...state.todos
  }
}

// 触发数据的改变
const mapDispatchToProps = (dispatch) => {
  return {
    onHandleAdd:(value) => {
      dispatch(addTodo(value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
