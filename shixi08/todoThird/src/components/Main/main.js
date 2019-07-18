//中间部分的js
import React, { Component } from "react";
import {connect} from 'react-redux'
import {toggleOneTodo,toggleAllTodo} from '../../actions'

import './main.css' 

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {allCompleted:false}
  }

  // handleAllChange = e => {
  //   //3. 父组件来管理这个状态
  //   this.props.onAllCheck(e.target.checked);
  // };

  handleAll = (allCompleted) => {
    console.log(allCompleted)
    // let {handleAllChange} = this.props
    this.setState({allCompleted:true})
    // handleAllChange(allCompleted)
  }

  // hanleUpdate = (index,msg) => {
  //   let updateMsg = window.prompt(`${msg}`)
  //   this.props.onUpdate(index,updateMsg)
  // }

  render() {
    // 接受store传过来的item数据 
    let {todos,handleOneChange} = this.props
    let {allCompleted} = this.state
    let list = todos.map((item, index) => {
      let display = item.checked ? 'block':'none'
      return (
        <li key={item.id} className={item.checked ? "done" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.checked}
              // 当checked发生改变，传递给父组件来处理这个状态
              onChange={()=>handleOneChange(index)}
            />
            <label> {item.value} </label>
            {/* 删除操作 onClick={this.props.onDel(index)}*/}
            <a className="destroy" style={{display}} onClick={() => this.props.onDel(index) }>删除</a>
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
          onChange={(e)=>this.handleAll(e.target.checked)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{list}</ul>
      </div>
    );
  }
}

function mapTostate(state) {
  return {...state}
}

function mapDispatchProps(dispatch) {
  return {
    // handleAllChange: dispatch()
    handleOneChange: (index) => {
      dispatch(toggleOneTodo(index))
    },
    handleAllChange: (checked) => {
      dispatch(toggleAllTodo(checked))
    }
  }
}
export default connect(mapTostate,mapDispatchProps)(Main)