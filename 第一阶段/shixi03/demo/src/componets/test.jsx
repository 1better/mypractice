import React, { Component } from "react";
class  Button extends Component{
  constructor(props) {
    super(props);
  }
  go() {
    console.log(1)
  }
  handleClick() {
    console.log('哈哈哈，真开心，显示屏真好用'+ this)
  }
  render() {
    return (
      <div>
        {/* 正常的操作  onClick = function () {console.log(1)} */}
        {/* 所以需要 onClick = () => {this.go()} 
      (箭头函数的this指向包裹它的普通函数 方便go方法的使用)*/}
        <button onClick={()=>{
          this.handleClick()
        }}>111</button>
      </div>
    )
  }
}

export default Button
