import React, { Component } from "react";

import ReactDOM from "react-dom";

import "./index.css";

class Header extends  Component{
  constructor(props){
    super(props)
  }
  handleChange = (e)=>{
    // console.log(e.keyCode)
    if(e.keyCode===13){
      // 如果是回车键 父组件来处理这个内容
      this.props.onHandleAdd(e.target.value)
      //清空value
      e.target.value = ''
    }
    
  }
  render() {
    return (
      <header >
        <h1>Todos</h1>
        <input type="text" placeholder="What needs to be done?" onKeyDown={this.handleChange}/>
      </header>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index:1,
    }
  }

  handleAllChange = (e) => {
    //父组件来管理这个状态
    this.props.onAllCheck(e.target.checked)
  }

  handleOneChange = (e,index) => {
    // 需要父组件来处理这个状态以便其它组件来处理
    this.props.onCheck(e.target.value,e.target.checked)
  }
  render() {
    const listItem = this.props.list
    const list = listItem.map((item,index) => {
      return (
        //应该取id值，但是没有就选择了索引来取
        <li key={index} className={(item.checked) ? "done":"" }>
          <div className="view" >
            <input className="toggle" type="checkbox"  checked={item.checked} onChange={this.handleOneChange} value={index}></input>
            <label> {item.msg} </label>
            <a className="destroy"></a>
          </div>
        </li> 
      )   
    })
    return (
      <div className="main">
        <input id="toggle-all" type="checkbox" checked={this.props.allCompleted} onChange={this.handleAllChange} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list" >
          {list}
        </ul>
      </div>
    );
  }
}




class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let completedNumber = this.props.completedNumber
    let a
    if(completedNumber){
      a = <a className="clear-completed" onClick={this.props.onFilter}>Clear <span>{completedNumber}</span> completed item</a>
    }
    return (
      <footer>
        {a}
        <div className="todo-count" ><b>{this.props.leftNumber}</b>&nbsp;items left</div>
      </footer>
    );
  }
  
}

function NoUse(props) {
  return <div>{props.children}</div>;
}
class UseFul extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      leftNumber: 0,
      completedNumber: 0,
      //这个list需要传递给Main组件来渲染数据
      list:[
        
      ],
      allCompleted: false
    };
  }

  //处理Header中添加的事件

  onHandleAdd = (value) => {
    // 不能这样写  需要this.setState这样写
    // this.state.list.push(value)
    
    // 这样写比较繁琐
    /* this.state.list.push(value)
    this.setState({list:this.state.list}) */

    let leftNumber = this.state.leftNumber;

    leftNumber ++;

    this.setState(
      {
        list:[...this.state.list,{msg:value,checked:false}],
        leftNumber,
        allCompleted:false
      },
      
    )
  }
  // 处理mark all  completed
  onAllCheck = (checked) => {
    let leftNumber = 0;
    if(!checked) {
      leftNumber = this.state.list.length
    }
    let completedNumber = this.state.list.length - leftNumber
    this.setState({
      list: this.state.list.map(
        item => {return {...item,checked:checked}}
      ),
      allCompleted:checked,
      leftNumber,
      completedNumber
    })
  }
  // 处理li元素checked改变的事件
  onCheck = (indexC,checked) => {
    const list = this.state.list.map(
      (item,index) =>  
        (index == indexC) ? {...item,checked:checked} : item  
          
    )
    let allCompleted = true , leftNumber = 0 ,completedNumber = 0
    list.forEach(item=>{
      if(!item.checked) {
        allCompleted = false
        leftNumber += 1
      }    
    })
    completedNumber = list.length - leftNumber
    this.setState({
      list,
      allCompleted,
      leftNumber,
      completedNumber
    })

  }

  // 过滤数组
  onFilter = () => {
    let list = this.state.list.filter( item => !item.checked)
    this.setState({
      list,
      completedNumber: 0
    })
  }

  render() {
    const leftNumber = this.state.leftNumber
    const completedNumber = this.state.completedNumber
    const list = this.state.list
    const allCompleted = this.state.allCompleted
    let main,footer
    // 条件渲染
    if(list.length) {
      main =  <Main list={list} onCheck={this.onCheck} allCompleted={allCompleted} onAllCheck={this.onAllCheck}/>
      footer = <Footer leftNumber={leftNumber} completedNumber={completedNumber} onFilter={this.onFilter}/> 
    }
    return (
      <div className="todoapp">
        <Header  onHandleAdd={this.onHandleAdd}/>
        {main}
        {footer}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <UseFul/>
        <NoUse>
          <div className="instructions">Double-click to edit a todo.</div>
          <div className="credits">
            Created by
            <br />
            <a href="http://jgn.me/">J&eacute;r&ocirc;me Gravel-Niquet</a>.
            <br />
            Rewritten by:{" "}
            <a href="http://addyosmani.github.com/todomvc">TodoMVC</a>.
          </div>
        </NoUse>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
