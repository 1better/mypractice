//中间部分的js
import React, { Component } from "react";
import './main.css'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleAllChange = e => {
    //3. 父组件来管理这个状态
    this.props.onAllCheck(e.target.checked);
  };

  handleOneChange = (e,index) => {
    // 2. 需要父组件来处理这个状态以便其它组件来处理
    this.props.onCheck(index, e.target.checked);
  };

  hanleUpdate = (index,msg) => {
    let updateMsg = window.prompt(`${msg}`)
    this.props.onUpdate(index,updateMsg)
  }

  render() {
    // 接受父组件传过来的item数据
    let {list,allCompleted} = this.props
    list = list.map((item, index) => {
      let display = item.checked ? 'block':'none'
      return (
        <li key={index} className={item.checked ? "done" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.checked}
              // 当checked发生改变，传递给父组件来处理这个状态
              onChange={(e)=>this.handleOneChange(e,index)}
            />
            <label> {item.msg} </label>
            {/* 删除操作 onClick={this.props.onDel(index)}*/}
            <a className="destroy" style={{display}} onClick={() => this.props.onDel(index)}>删除</a>
            <a className="update"  onClick={() => this.hanleUpdate(index,item.msg)}>更新</a>
          </div>
        </li>
      );
    });
    return (
      <div className="main">
        <input
          id="toggle-all"
          type="checkbox"
          checked={allCompleted}
          onChange={this.handleAllChange}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{list}</ul>
      </div>
    );
  }
}

export default Main