## 学习的东西三

## redux数据流程

> 话说react国家战乱四起，view将军奉命驻守雄州，麾下名为state的军营中有五万将士，叛军来势汹汹，包围了雄州，虽说五万男儿浴血奋战，但仍寡不敌众，雄州危在旦夕，view将军沉思良久，当夜派出心腹dispatch带名为acction的虎符去并州调兵，dispatch连夜突围到达并州，并州守将reducer验明action，下令火速整军救援雄州，跟将军心腹说道，末将职责所在，不能做其他行动，只能派兵，还望见谅，dispatch说道，您是纯函数，我理解您，当即带援军回雄州，这时state中合并十万，最终大破乱军 
>
> 网上对redux流程的解读 
>
> 链接:
>
> [https://www.cnblogs.com/jinzhou/p/9113211.html]()
>
>  
>
> 数据流
>
> 1. store是单一数据源
> 2. actions是行为，必须有一个type字段
> 3. 修改状态需要用dispatch（actions中的某一个行为）
> 4. reducer对dispacth中的action进行验证，验证准确返回一个新的state

## react-redux

> 1. Provide方法
>
> > 可以将store中的数据传给包裹的组件
>
> 2. connect方法
>
> > connect(mapStateToProps,mapDispatchToProps)(App)
> >
> > 第一个参数是将store中的状态传给app组件
> >
> > 第二个参数可以让app组件操作方法，更改状态

## react和redux以及react-redux的具体使用

> Eg: 
>
> ```js
> // action
> export const addTodo = value => ({
>   type: 'ADD_TODO',
>   id: id++,
>   value,
>   checked:false
> })
> ```
>
> ```js
> // reducer
> // state 有一个默认值
> const todos = (state = [], action) => {
>   switch (action.type) {
>     case "ADD_TODO":
>       return [...state, { id: action.id, value: action.value, checked: false }];
>     case "TOGGLE_ONETODO":
>       // let newState = JSON.parse(JSON.stringify(state))
>       /* let newState = state;
>       
>       newState[action.id].checked = !newState[action.id].checked
>       console.log(newState)
>       return newState */
>       return state.map(item =>
>         item.id === action.id ? { ...item, checked: !item.checked } : item
>       );
>    
>     // 注意。state必须要深克隆修改，如果在原来状态下修改或者浅拷贝的话新旧的state都会变成一样的，这样就无法触发render函数，和之前的this.setState以及this.state = 一样，触发render函数必须要遵循规则
> export default todos;
> ```
>
> ```js
> // reducers的合并
> import { combineReducers } from 'redux';
> 
> const rootReducer =  combineReducers({
>   todos:todos,
>   completed:completed
> })
> 
> export default rootReducer
> ```
>
> ```js
> //store中
> import {createStore} from 'redux'
> import rootReducer from '../reducers/rootReducer'
> 
> let initState = {
>   todos:  [{id:0,value:'222',checked:false}],
>   completed: 0,
> }
> 
> export default function Store(){
>   const store = createStore(rootReducer,initState)
>   return store
> }
> ```
>
> ```js
> //组件使用redux的方法
> import React, { Component } from "react";
> import {connect} from 'react-redux'
> import {toggleOneTodo,toggleAllTodo,completed, deleteOneTodo,updateOneTodo} from '../../actions'
> 
> import './main.css' 
> 
> class Main extends Component {
>   constructor(props) {
>     super(props);
>   }
> 
>   handleAll = (allCompleted,length) => {
>     let {handleAllChange,setCompleted} = this.props
>     if(allCompleted) {
>       setCompleted(length)
>     }else {
>       setCompleted(0)
>     }
>     handleAllChange(allCompleted)
>   }
> 
>   hanleOne = (completed,id,number) => {
>     let {handleOneChange,setCompleted} = this.props
>     
>     // *  换一种写法   
>     if(completed) {
>       setCompleted(++number)
>     }else {
>       setCompleted(--number)
>     }
> 
>     handleOneChange(id)
>   }
> 
>   handleDel = (id) => {
>     let {onDel,setCompleted,completed} = this.props
>     onDel(id)
>     setCompleted(--completed)
>   }
> 
>   handleUpdate = (id) => {
>     let {onUpdate,todos} = this.props
>     let oldValue
>     todos.forEach(item => {
>       if(item.id==id){
>         oldValue = item.value
>     }})
>     const value = window.prompt(`原先为${oldValue}`)
>     onUpdate(id,value)
>   }
>   render() {
>     // 接受store传过来的item数据 
>     let {todos,completed} = this.props
>     let list = todos.map(item => {
>       let display = item.checked ? 'block':'none'
>       return (
>         <li key={item.id} className={item.checked ? "done" : ""}>
>           <div className="view">
>             <input
>               className="toggle"
>               type="checkbox"
>               checked={item.checked}
>               // 当checked发生改变，传递给父组件来处理这个状态
>               onChange={(e)=>{this.hanleOne(e.target.checked,item.id,completed)}}
>             />
>             <label> {item.value} </label>
>             {/* 删除操作 onClick={this.props.onDel(index)}*/}
>             <a className="destroy" style={{display}} onClick={() => this.handleDel(item.id) }>删除</a>
>             <a className="update"  onClick={() => this.handleUpdate(item.id)}>更新</a>
>           </div>
>         </li>
>       );
>     });
>     
>     return (
>       <div>
>         <div className="main">
>         <input
>           id="toggle-all"
>           type="checkbox"
>           checked={completed==list.length}
>           onChange={(e)=>this.handleAll(e.target.checked,list.length)}
>         />
>         <label htmlFor="toggle-all">Mark all as complete</label>
>         <ul className="todo-list">{list}</ul>
>       </div>
>       </div>
>     );
>   }
> }
> 
> 
> // connect方法的两个参数
> 
> function mapTostate(state) {
>   return {...state}
> }
> 
> function mapDispatchProps(dispatch) {
>   return {
>     // handleAllChange: dispatch()
>     handleOneChange: (id) => {
>       dispatch(toggleOneTodo(id))
>     },
>     handleAllChange: (checked) => {
>       dispatch(toggleAllTodo(checked))
>     },
>     setCompleted:(number) => {
>       dispatch(completed(number))
>     },
>     onDel:(id) => {
>       dispatch(deleteOneTodo(id))
>     },
>     onUpdate: (id,msg) => {
>       dispatch(updateOneTodo(id,msg))
>     }
>   }
> }
> export default connect(mapTostate,mapDispatchProps)(Main)
> ```
>
>  

## 学习简易实现redux遇到的问题

1. ### function 克隆是深拷贝

   > ```js
   > let obj = {
   >   add:function(){
   >     console.log('jia')
   >   }
   > }
   > 
   > let next = obj.add
   > 
   > obj.add = function() {
   >   console.log('我不加')
   > }
   > 
   > // '我不加'
   > obj.add()
   > 
   > // 'jia'
   > next()
   > ```
   >
   > 

2. ### 中间件的合并有一处代码能看懂但是自己肯定写不出来

   > ```js
   > export default function compose(...funcs) {
   >   if (funcs.length === 1) {
   >     return funcs[0]
   >   }
   >   return funcs.reduce((a, b) => (...args) => a(b(...args)))
   > }
   > 
   > //这样来操作中间件。 
   > const chain = [A, B, C];
   > dispatch = compose(...chain)(store.dispatch)
   > 
   > // 类似于这种
   > const chain = [A, B, C];
   > let dispatch = store.dispatch;
   > chain.reverse().map(middleware => {
   >    dispatch = middleware(dispatch);
   > });
   > 
   > //最后可以得到的结果
   > A(B(C(dispatch)))
   > ```
   >
   >  

   3. ### 箭头函数的奇妙用法

   > ```js
   > let addSum = (a) => (b) => {
   >   console.log(a+'-----'+b)
   >   return (a+b)
   > }
   > 
   > let sum = addSum(1)(3)
   > // 1-----3
   > console.log(sum)
   > // 4
   > 
   > /*类似于这种*/
   > function add(a) {
   >   return function(b) {
   >     return a+b
   >   }
   > }
   > 
   > let sum2 = add(1)(3)
   > 
   > console.log(sum2)
   > ```
   >
   > 

