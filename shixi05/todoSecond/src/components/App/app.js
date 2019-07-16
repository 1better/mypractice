import React, { Component } from "react";
import "./app.css";

import Header from "../Header/header.js";
import Main from "../Main/main.js";
import Footer from "../Footer/footer.js";
import NoUse from "../Nouse/nouse.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 未完成的数量
      leftNumber: 0,
      // 已经完成的数量
      completedNumber: 0,
      //这个list需要传递给Main组件来渲染数据 list 应该是对象数组（msg 信息  checked 是否选中（针对复选框））
      list: [],
      //  是否全部完成
      allCompleted: false
    };
  }

  //1. 处理Header中添加的事件
  onHandleAdd = value => {
    // let leftNumber = this.state.leftNumber;
    // let list = this.state.list

    // 用解构赋值的方式来获取 leftNumber 和 list
    let { leftNumber, list } = this.state;

    /*  添加一个数据，可以这样写，比较繁琐
     let listItem = {msg:value,checked:false}
     list.unshift(listItem)
      this.setState({list}) */
    leftNumber++;

    this.setState({
      // 可以这样添加
      list: [{ msg: value, checked: false }, ...list],
      leftNumber,
      //将 所有完成的复选框更改状态为 false
      allCompleted: false
    });
  };

  // 2. 处理li元素checked改变的事件
  onCheck = (index, checked) => {
    // 修改数组的某一值
    /* const list = this.state.list.map((item, index) =>
      index == indexC ? { ...item, checked: checked } : item
    ); */

    let { list,  completedNumber, leftNumber } = this.state;
    list[index].checked = checked;

    let allCompleted = false;
    // 改变这个li的状态
    /* 只判断这一个的状态就可以
    let leftNumber = 0;
    list[index].checked = checked
    list.forEach(item => {
      if (!item.checked) {
        // 有一个未完成 全部完成的状态就是false
        allCompleted = false;
        // 如果item.checked 状态是false 未完成  leftNumber加1
        leftNumber += 1;
      }
    }); */
    // completedNumber的数量
    if (checked) {
      leftNumber--;
      completedNumber++;
    } else {
      leftNumber++;
      completedNumber--;
    }

    if(completedNumber === list.length) {
      allCompleted = true
    }

    this.setState({
      list,
      allCompleted,
      leftNumber,
      completedNumber
    });
  };

  // 处理mark all  completed
  onAllCheck = checked => {
    let { leftNumber, completedNumber, list, allCompleted } = this.state;
    if (!checked) {
      leftNumber = list.length;
    } else {
      leftNumber = 0;
    }

    completedNumber = list.length - leftNumber;
    allCompleted = checked;

    this.setState({
      // map 所有list数据的checked都变成 对应的checked
      list: list.map(item => {
        return { ...item, checked: checked };
      }),
      allCompleted,
      leftNumber,
      completedNumber
    });
  };

  // 4. 过滤数组
  onFilter = () => {
    let list = this.state.list.filter(item => !item.checked);
    this.setState({
      list,
      completedNumber: 0
    });
  };

  // 5 删除某一项
  onDel = index => {
    let { list, completedNumber } = this.state;
    list.splice(index, 1);
    completedNumber--;
    this.setState({ list,completedNumber });
  };

  // 6 更新某一项
  onUpdate = (index,msg) => {
    let {list} = this.state
    list[index].msg = msg
    this.setState({list})
  }

  render() {
    const leftNumber = this.state.leftNumber;
    const completedNumber = this.state.completedNumber;
    const list = this.state.list;
    const allCompleted = this.state.allCompleted;
    let main, footer;
    // 条件渲染
    if (list.length) {
      main = (
        <Main
          list={list}
          onCheck={this.onCheck}
          allCompleted={allCompleted}
          onAllCheck={this.onAllCheck}
          onDel={this.onDel}
          onUpdate = {this.onUpdate}
        />
      );
      footer = (
        <Footer
          leftNumber={leftNumber}
          completedNumber={completedNumber}
          onFilter={this.onFilter}
        />
      );
    }
    return (
      <div>
        <div className="todoapp">
          <Header onHandleAdd={this.onHandleAdd} />
          {main}
          {footer}
        </div>
        <NoUse />
      </div>
    );
  }
}

export default App;
