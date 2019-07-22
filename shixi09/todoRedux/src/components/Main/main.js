//中间部分的js
import React, { Component } from "react";
import {connect} from 'react-redux'
import {toggleOneTodo,toggleAllTodo,completed, deleteOneTodo,updateOneTodo} from '../../actions'

import './main.css' 

class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleAll = (allCompleted,length) => {
    let {handleAllChange,setCompleted} = this.props
    if(allCompleted) {
      setCompleted(length)
    }else {
      setCompleted(0)
    }
    handleAllChange(allCompleted)
  }

  hanleOne = (completed,id,number) => {
    let {handleOneChange,setCompleted} = this.props
    
    // *  换一种写法   
    if(completed) {
      setCompleted(++number)
    }else {
      setCompleted(--number)
    }

    handleOneChange(id)
  }

  handleDel = (id) => {
    let {onDel,setCompleted,completed} = this.props
    onDel(id)
    setCompleted(--completed)
  }

  handleUpdate = (id) => {
    let {onUpdate,todos} = this.props
    let oldValue
    todos.forEach(item => {
      if(item.id==id){
        oldValue = item.value
    }})
    const value = window.prompt(`原先为${oldValue}`)
    onUpdate(id,value)
  }
  render() {
    // 接受store传过来的item数据 
    let {todos,completed} = this.props
    let list = todos.map((item) => {
      let display = item.checked ? 'block':'none'
      return (
        <li key={item.id} className={item.checked ? "done" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.checked}
              // 当checked发生改变，传递给父组件来处理这个状态
              onChange={(e)=>{this.hanleOne(e.target.checked,item.id,completed)}}
            />
            <label> {item.value} </label>
            {/* 删除操作 onClick={this.props.onDel(item.id)}*/}
            <a className="destroy" style={{display}} onClick={() => this.handleDel(item.id) }>删除</a>
            <a className="update"  onClick={() => this.handleUpdate(item.id)}>更新</a>
          </div>
        </li>
      );
    });
    
    return (
      <div>
        <div className="main">
        <input
          id="toggle-all"
          type="checkbox"
          checked={completed==list.length}
          onChange={(e)=>this.handleAll(e.target.checked,list.length)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{list}</ul>
      </div>
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
    handleOneChange: (id) => {
      dispatch(toggleOneTodo(id))
    },
    handleAllChange: (checked) => {
      dispatch(toggleAllTodo(checked))
    },
    setCompleted:(number) => {
      dispatch(completed(number))
    },
    onDel:(id) => {
      dispatch(deleteOneTodo(id))
    },
    onUpdate: (id,msg) => {
      dispatch(updateOneTodo(id,msg))
    }
  }
}
export default connect(mapTostate,mapDispatchProps)(Main)