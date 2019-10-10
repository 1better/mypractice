import React from './react'

/* function say() {
  console.log(1)
} */

/* let s = React.createElement("div", {
  name: "xxx"
}, "hello", React.createElement("span", null, "111") , React.createElement('button',{onClick:say},'test'));


// jsx语法  虚拟dom
React.render(s,document.getElementById('root')) */
class SubCount extends React.Component {
  componentWillMount() {
    console.log('子组件将要挂载')
  }
  componentDidMount() {
    console.log('子组件挂载完成')
  }
  constructor(props) {
    super(props)
    this.state = {number:123}
  }
  render() {
    return (
      <div>{this.state.number}</div>
    )
  }
}

class Counter extends React.Component {
  componentWillMount() {
    console.log('父组件将要挂载')
  }
  componentDidMount() {
    console.log('父组件挂载完成')
  }
  constructor(props) {
    super(props)
    this.state = {number:1}
  }
  render() {
    return React.createElement(SubCount)
  }
}
React.render(
  React.createElement(Counter, {name: "zs"}),
  document.getElementById('root')
)