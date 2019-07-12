import React, { Component } from "react";

import ReactDOM from "react-dom";

import "./index.css";

class Header extends  Component{
  constructor(props){
    super(props)
  }
  handleKeyUpEnter = (e)=>{
    // console.log(e.keyCode)
    if(e.keyCode===13){
      // 如果是回车键 父组件来处理这个内容
      // this.props.onHandleKeyUpEnter
      //清空value
      e.target.value = ''
    }
    
  }
  render() {
    return (
      <header >
        <h1>Todos</h1>
        <input type="text" placeholder="What needs to be done?" onKeyDown={this.handleKeyUpEnter}/>
      </header>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="main">
        <input id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <GetLi />
      </div>
    );
  }
}

function GetLi(props) {
  return (
    <ul className="todo-list" >
      <li >
        <div className="view">
          <input className="toggle" type="checkbox"  />
          <label> 111 </label>
          <a className="destroy"></a>
        </div>
      </li> 
      <li >
        <div className="view">
          <input className="toggle" type="checkbox"  />
          <label> 222 </label>
          <a className="destroy"></a>
        </div>
        {/* <input className="edit" type="text"  ></input> */}
      </li> 
    </ul>
  )
}

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {leftNumber: 3,completedNumber:11}
  }
  render() {
    return (
      <footer>
        <a className="clear-completed">Clear <span>{this.state.leftNumber}</span> completed item</a>
        <div className="todo-count" ><b>{this.state.completedNumber}</b>&nbsp;items left</div>
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
    this.state = { leftNumber:2,completedNumber: 3};
  }
  render() {
    const leftNumber = this.state.leftNumber
    const cmpletedNumber = this.state.cmpletedNumber
    let main,footer
    // 条件渲染
    if(leftNumber) {
      main = <Main />
      footer = <Footer />
    }
    return (
      <div className="todoapp">
        <Header value={111} />
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
