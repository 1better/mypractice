## React文档的学习

> ```js
> import React, { Component } from "react";
> 
> import ReactDOM from "react-dom";
> 
> /* function UserGreet() {
>   return <h1>Welcome</h1>;
> }
> 
> function UserLogout() {
>   return <h1>Please sign in</h1>;
> }
> 
> function Greet(props) {
>   const isToggled = props.isToggled;
>   if (isToggled) return <UserGreet />;
>   return <UserLogout />;
> }
> 
> function ButtonGreet(props) {
>   return <button onClick={props.onClick}>login</button>;
> }
> function ButtonLogout(props) {
>   return <button onClick={props.onClick}>loginout</button>;
> }
> 
> class LoginControl extends Component {
>   constructor(props) {
>     super(props);
>     this.state = { isToggled: false };
>   }
> 
>   handleLoginClick() {
>     this.setState(state => (state.isToggled = true));
>   }
>   handleLogoutClick() {
>     this.setState(state => (state.isToggled = false));
>   }
> 
>   render() {
>     const isToggled = this.state.isToggled;
> 
>     let button 
>     
>     if(isToggled) {
>       button = <ButtonGreet onClick = {e=>this.handleLogoutClick(e)}/>
>     } else {
>       button = <ButtonLogout onClick = {e=>this.handleLoginClick(e)}/>
>     }
> 
>     return (
>       <div>
>         <Greet isToggled = {isToggled}/>
>         {button}
>       </div>    
>     )
>   }
> }
> 
> ReactDOM.render(<LoginControl />, document.getElementById("root")); */
> 
> // 多个组件
> /* const number = [1,3,5,7,9]
> 
> const listItems = number.map(
>   number => <li>{number}</li>
>   )
> 
> ReactDOM.render(
>   <ul>{listItems}</ul>,
>   document.getElementById('root')
> ) */
> 
> //基础列表组件
> 
> /* function NumberList(props) {
>   //接受一个number数组
>   const numbers = props.numbers;
>   // 渲染成li元素包含的数组
>   const listItems = numbers.map((number) =>
>     <li key={number.toString()}>
>       {number}
>     </li>
>   );
>   return (
>     <ul>
>       {listItems}
>     </ul>
>   );
> }
> 
> const numbers = [1, 2, 3, 4, 5];
> ReactDOM.render(
>   <NumberList numbers={numbers} />,
>   document.getElementById('root')
> ); */
> 
> // 表单受控组件
> 
> class NameForm extends Component {
>   constructor(props) {
>     super(props);
>     this.state = { value: "xiangjiao" };
>   }
> 
>   handleChange = () => {
>     this.setState({ value: event.target.value });
>   };
> 
>   handleSubmit = () => {
>     alert("提交的名字" + this.state.value);
>     event.preventDefault();
>   };
> 
>   /* render() {
>     return (
>       <form onSubmit={this.handleSubmit}>
>         <label >
>           <input type="text" onChange={this.handleChange} value={this.state.value}/>
>           <input type="submit" value="提交"/>
>         </label>
>       </form>
>     )
>   } */
> 
>   /* render() {
>     return (
>       <form onSubmit={this.handleSubmit}>
>           <label>
>             <textarea value={this.state.value} onChange={this.handleChange}>
>             </textarea>
>           </label>
>           <input type="submit" value="提交"/>
>       </form>
>     )
>   } */
> 
>   render() {
>     return (
>       <form onSubmit={this.handleSubmit}>
>         <select value={[this.state.value,'putao']} onChange={this.handleChange} multiple={true}>
>           <option value="putao">葡萄</option>
>           <option value="xiangjiao">香蕉</option>
>           <option value="啦啦">lala</option>
>         </select>
>         <input type="submit" value="提交" />
>       </form>
>     );
>   }
> }
> 
> // ReactDOM.render(<NameForm />, document.getElementById("root"));
> 
> //每个 state 突变都有一个相关的处理函数。这使得修改或验证用户输入变得简单
> 
> /* class Reservation extends React.Component {
>   constructor(props) {
>     super(props) 
>     this.state = {
>       isGoing: true,
>       numberOfGuests: 2
>     }
>   }
> 
>   handleInputChange =(e) => {
>     const target = e.target
>     const value = target.type === 'checkbox' ? target.checked:target.value
>     const name = target.name
> 
>     this.setState({
>       [name]: target.value
>     })
>   }
> 
>   handleSubmit = () => {
>     alert(this.state.isGoing+'------'+this.state.numberOfGuests)
>     event.preventDefault()
>   }
> 
>   render() {
>     return (
>       <form onSubmit={this.handleSubmit}>
>         <label>
>           是否参加
>           <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
>         </label>
>         <br/>
>         <label>
>           来宾人数
>           <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
>         </label>
>         <input type="submit" value="提交" />
>       </form>
>     );
>   }
> }
> 
> ReactDOM.render(<Reservation/>, document.getElementById("root")); */
> 
> //判断水沸腾的函数
> 
> 
> //这个有一个 判断水是否沸腾的函数式组件  
> //class组件 渲染一个用于输入温度的 <input>，并将其值保存在 this.state.temperature 中
> function BoilingVerdict(props) {
>   if (props.celsius >= 100) {
>     return <p>The water would boil.</p>;
>   }
>   return <p>The water would not boil.</p>;
> }
> 
> // class Calculator extends Component {
> //   // constructor(props) {
> //   //   super(props)
> //   //   this.state = {temperature: ''};
> //   // }
> 
> //   // handleChange = (e) => {
> //   //   this.setState({temperature: e.target.value})
> //   // }
> 
> //   render() {
> //     const tem = this.state.temperature
> //     return (
>       
> //     )
> //   }
> // }
> 
> // 两个温度的的转换函数
> /* function toCelsius(fahrenheit) {
>   return (fahrenheit - 32) * 5 / 9;
> }
> 
> function toFahrenheit(celsius) {
>   return (celsius * 9 / 5) + 32;
> }
> 
> // 进行转换
> function tryConvert(temperature, convert) {
>   const input = parseFloat(temperature);
>   if (Number.isNaN(input)) {
>     return '';
>   }
>   const output = convert(input);
>   const rounded = Math.round(output * 1000) / 1000;
>   return rounded.toString();
> }
> 
> class Calculator extends React.Component {
>   constructor(props) {
>     super(props)
>     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
>     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
>     this.state = {temperature: '11', scale: 'c'};
>   }
> 
>   handleCelsiusChange(temperature) {
>     this.setState({scale: 'c', temperature});
>   }
> 
>   handleFahrenheitChange(temperature) {
>     this.setState({scale: 'f', temperature});
>   }
>   render() {
>     const scale = this.state.scale;
>     const temperature = this.state.temperature;
>     
>     //转换
>     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
>     
>     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
>     return (
>       <div>
>         <TemperatureInput
>           scale="c"
>           temperature={celsius}
>           onTemperatureChange={this.handleCelsiusChange} />
> 
>         <TemperatureInput
>           scale="f"
>           temperature={fahrenheit}
>           onTemperatureChange={this.handleFahrenheitChange} />
> 
>         <BoilingVerdict
>           celsius={parseFloat(celsius)} />
>       </div>
>     );
>   }
> }
> 
> const scaleNames = {
>   c: 'Celsius',
>   f: 'Fahrenheit'
> };
> 
> class TemperatureInput extends Calculator {
>   constructor(props) {
>     super(props);
>     this.state = {temperature: ''};
>   }
> 
>   handleChange = (e) => {
>     // this.setState({temperature: e.target.value});
>     this.props.onTemperatureChange(e.target.value);
>   }
> 
>   render() {
>     const temperature = this.props.temperature;
>     const scale = this.props.scale;
>     return (
>       <fieldset>
>         <legend>Enter temperature in {scaleNames[scale]}:</legend>
>         <input value={temperature}
>                onChange={this.handleChange} />
>       </fieldset>
>     );
>   }
> }
> 
> ReactDOM.render(
>   <Calculator/>,
>   document.getElementById('root')
> ) */
> 
> // 自己操作一下
> 
> //判断shuifeiteng
> 
> /* function Boiling(props) {
>   if (props.celsius >= 100) {
>     return <p>The water would boil.</p>;
>   }
>   return <p>The water would not boil.</p>;
> }
> 
> function toCelsius(fahrenheit) {
>   return (fahrenheit - 32) * 5 / 9;
> }
> 
> function toFahrenheit(celsius) {
>   return (celsius * 9 / 5) + 32;
> }
> 
> // 进行转换
> function tryConvert(temperature, convert) {
>   const input = parseFloat(temperature);
>   if (Number.isNaN(input)) {
>     return '';
>   }
>   const output = convert(input);
>   const rounded = Math.round(output * 1000) / 1000;
>   return rounded.toString();
> }
> 
> class Calculator extends Component {
>   constructor(props) {
>     super(props)
>     this.state = {scale:'',temperature:''}
>   }
> 
>   handleCelsiusChange =(temperature) => {
>     this.setState({scale: 'c', temperature});
>   }
> 
>   handleFahrenheitChange =(temperature) => {
>     this.setState({scale: 'f', temperature});
>   }
> 
>   render() {
>     const scale = this.state.scale;
>     const temperature = this.state.temperature;
>     //转换函数
> 
>     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
>     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
>     return (
>       <div>
>         <TemperatureInput temperature={celsius} scale='c' onTemperatureChange={this.handleCelsiusChange}/>
>         <TemperatureInput temperature={fahrenheit} scale='f' onTemperatureChange={this.handleFahrenheitChange}/>
>         <Boiling celsius={celsius}/>
>       </div>
>       )
>   }
> 
> }
> 
> const scaleNames = {
>   c: 'Celsius',
>   f: 'Fahrenheit'
> };
> 
> class TemperatureInput extends Component {
>   constructor(props) {
>     super(props)
>   }
> 
>   handleChange =(e) =>{
>     this.props.onTemperatureChange(e.target.value)
>   }
> 
>   render() {
>     const temperature = this.props.temperature;
>     const scale = this.props.scale
> 
>     return (
>       <fieldset>
>         <legend>Enter temperature in {scaleNames[scale]}:</legend>
>         <input value={temperature}
>                onChange={this.handleChange} />
>       </fieldset>
>     );
>   }
>   
> }
> 
> ReactDOM.render(
>   <Calculator />,
>   document.getElementById('root')
> ) */
> 
> /* function FancyBorder(props) {
>   return (
>     <div className={'FancyBorder FancyBorder-' + props.color}>
>       {props.children}
>     </div>
>   );
> }
> 
> function WelcomeDialog() {
>   return (
>     <FancyBorder color="blue">
>       <h1 className="Dialog-title">
>         Welcome
>       </h1>
>       <p className="Dialog-message">
>         Thank you for visiting our spacecraft!
>       </p>
>     </FancyBorder>
>   );
> }
> 
> ReactDOM.render(
>   <WelcomeDialog />,
>   document.getElementById('root')
> ) */
> 
> /* function SplitPane(props) {
>   return (
>     <div className="SplitPane">
>       <div className="SplitPane-left">
>         {props.left}
>       </div>
>       <div className="SplitPane-right">
>         {props.right}
>       </div>
>     </div>
>   );
> }
> 
> function Contacts () {
>   return '111'
> }
> function Chat () {
>   return '222'
> }
> 
> function App() {
>   return (
>     <SplitPane
>       left={
>         <Contacts />
>       }
>       right={
>         <Chat />
>       } />
>   );
> }
> 
> ReactDOM.render(
>   <App/>,
>   document.getElementById('root')
> ) */
> 
> function FancyBorder(props) {
>   return (
>     <div className={'FancyBorder FancyBorder-' + props.color}>
>       {props.children}
>     </div>
>   );
> }
> 
> function Dialog(props) {
>   return (
>     <FancyBorder color="blue">
>       <h1 className="Dialog-title">
>         {props.title}
>       </h1>
>       <p className="Dialog-message">
>         {props.message}
>       </p>
>       {props.children}
>     </FancyBorder>
>   );
> }
> 
> class SignUpDialog extends React.Component {
>   constructor(props) {
>     super(props);
>     this.handleChange = this.handleChange.bind(this);
>     this.handleSignUp = this.handleSignUp.bind(this);
>     this.state = {login: ''};
>   }
> 
>   render() {
>     return (
>       <Dialog title="Mars Exploration Program"
>               message="How should we refer to you?">
>         <input value={this.state.login}
>                onChange={this.handleChange} />
>         <button onClick={this.handleSignUp}>
>           Sign Me Up!
>         </button>
>       </Dialog>
>     );
>   }
> 
>   handleChange(e) {
>     this.setState({login: e.target.value});
>   }
> 
>   handleSignUp() {
>     alert(`Welcome aboard, ${this.state.login}!`);
>   }
> }
> 
> ReactDOM.render(
>   <SignUpDialog/>,
>   document.getElementById('root')
> )
> ```
>
> 