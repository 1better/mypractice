import React, { Component } from "react";

import "./header.css";
//头部组件
class Header extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
      // 如果是回车键 父组件来处理这个内容
      // 按下回车键 如果内容是空 提示信息
      if (e.target.value.trim() == "") {
        alert("添加内容不可以为空");
        return;
      }
      // 1. 交给父组件来添加数据
      this.props.onHandleAdd(e.target.value);
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

export default Header;
