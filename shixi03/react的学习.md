## react的学习

> ```js
> import React, { Component } from "react";
> import ReactDom from "react-dom";
> 
> // import {user} from './componets/test.jsx'
> /* class App extends Component {
>     constructor(props) {
>         super(props);
>         this.state = {  }; 
>     }
>     render() {
>         return (
>             <div>
>                 <p>Hello World</p>
>             </div>
>         );
>     }
> }
> 
> export default App; */
> 
> // const name = 'Josh Perez';
> 
> // const name = "gogogo";
> 
> /* function formatName(user) {
>   return user.firstName + ' ' + user.lastName;
> }
> 
> const user = {
>   firstName: 'Harper',
>   lastName: 'Perez'
> };
>  */
> //{} 是里边放变量   大括号内放置任何有效的 JavaScript 表达式
> // const element = <h1>hello,{formatName(user)}</h1>;
> // const element = <h1>Hello, {name}</h1>;
> 
> // 定时器
> /* function tick() {
>   const element = (
>     <div>
>       <h1>Hello, world!</h1>
>       <h2>It is {new Date().toLocaleTimeString()}.</h2>
>     </div>
>   );
>   console.log(ReactDom)
>   // react只更新需要更新的部分
>   ReactDom.render(element, document.getElementById('root'));
> }
> 
> setInterval(tick, 1000); */
> //渲染
> // ReactDom.render(element, document.getElementById("root"));
> 
> // 函数组件以及组合组件
> /* function Welcome(props) {
>   return <h1>hello,{props.name}</h1>
> }
> 
> function App(){
>   return (
>     <div>
>       <Welcome name="saras" />
>       <Welcome name="oo" />
>       <Welcome name="dd" />
>     </div>
>   )
> }
> // const element = <Welcome name="saras" />
> 
> ReactDom.render(
>   <App />,
>   document.getElementById('root')
> ) */
> 
> //拆分组件
> /* function Comment(props) {
>   return (
>     <div className="Comment">
>       <userInfo user={props.author}/>
>       <div className="Comment-text">{props.text}</div>
>       <div className="Comment-date">{formatDate(props.date)}</div>
>     </div>
>   );
> }
> 
> // 先提取Avatar组件
> function Avatar(props) {
>   return (
>     <img
>       className="Avatar"
>       src={props.user.avatarUrl}
>       alt={props.user.name}
>     />
>   );
> }
> 
> // 提取Comment组件
> function UserInfo(props) {
>   return (
>     <div className="UserInfo">
>       <Avatar user={props.author} />
>       <div className="UserInfo-name">{props.user.name}</div>
>     </div>
>   );
> }
>  */
> 
> // 自己尝试一下封装 clock组件
> 
> /* function Clock(props) {
>   return (
>     <div>
>       <h1>Hello, world!</h1>
>       <h2>It is {new Date().toLocaleTimeString()}.</h2>
>     </div>
>   )
> }
> 
> function tick() {
>   ReactDom.render(
>     <Clock />,
>     document.getElementById('root')
>   )
> }
> 
> setInterval(tick,1000) */
> 
> // 引入state
> 
> //componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，最好在这里设置计时器：
> /* class Clock extends Component {
>   // 添加一个class构造函数
>   constructor(props) {
>     super(props);
>     // this中添加了一个state属性
>     this.state = { date: new Date() };
>   }
>   tick() {
>     // 修改this.state的状态
>     this.setState({
>       date: new Date()
>     });
>   }
>   //生命周期方法
>   // 组件渲染之后调用  只调用一次
>   componentDidMount() {
>     this.timerID = setInterval(
>       () => this.tick(), 
>       1000);
>   }
>   // 组件将要卸载时调用  清除定时器
>   componentWillUnMount() {
>     clearInterval(this.timerID);
>   }
>   // render 渲染函数
>   render() {
>     return (
>       <div>
>         <h1>Hello, world!</h1>
>         <FormattedDate date={this.state.date}/>
>       </div>
>     );
>   }
> }
> ReactDom.render(
>   <Clock />, 
>   document.getElementById("root")
> ); */
> 
> // setState的正确使用
> 
> // 不要直接修改state的值
> /* Wrong
> this.state.comment = 'Hello';
> 
> Correct
> this.setState({comment: 'Hello'}); */
> 
> // State 的更新可能是异步的
> /* Wrong
> this.setState({
>   counter: this.state.counter + this.props.increment,
> });
> 
> Correct
> this.setState((state, props) => ({
>   counter: state.counter + props.increment
> })); */
> 
> // state的更新会合并
> 
> /* function FormattedDate(props) {
>   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
> } */
> 
> import Button from './componets/test.jsx'
> 
> class Toggle extends React.Component {
>   constructor(props) {
>     super(props);
>     this.state = {isToggleOn: true};
> 
>     // 为了在回调中使用 `this`，这个绑定是必不可少的
>     // this.handleClick = this.handleClick.bind(this);
>   }
> 
>   //class没有自己的this
>   handleClick() {
>     // console.log(this)
>     this.setState(state => ({
>       isToggleOn: !state.isToggleOn
>     }));
>   }
> 
>   /* handleClick() {
>     this.setState(state => ({
>       isToggleOn: !state.isToggleOn
>     }))
>   } */
> 
>   /* handleClick = () => {
>     this.setState(state => ({
>       isToggleOn: !state.isToggleOn
>     }))
>   } */
> 
>   render() {
>     return (
>       <button onClick={ e=> {
>         console.log(e)
>         this.handleClick(e)}}>
>         {this.state.isToggleOn ? 'ON' : 'OFF'}
>       </button>
>     );
>   }
> }
> 
> ReactDom.render(
>   <Toggle />,
>   document.getElementById('root')
> )
> 
> ```
>
> 对应着src下的index.js 
>
> 根据官网的代码敲了一遍

## 遇到的问题

> ```jsx
> //这样操作的话会在页面刚开始显示直接调用，看到jsx忘记了之前onclick如何处理的
> <button onClick={this.go()}></button>
> 
> //等同于 这个button按钮 .onclick = function(){} 这样！
> <button onClick={()=>{this.go()}}></button>
> 
> ```
>
> ```js
> //state的使用  这样写安全 更新可能异步
> this.setState((state, props) => ({
>   counter: state.counter + props.increment
> }))
> ```
>
> 