## 学习的东西

### 父组件传值

> ```js
>  handleOneChange = (e,index) => {
>     console.log(index)
>     // 需要父组件来处理这个状态以便其它组件来处理
>     this.props.onCheck(e.target.value, e.target.checked);
>   };
>   render() {
>     const listItem = this.props.list;
>     const list = listItem.map((item, index) => {
>       return (
>         //应该取id值，但是没有就选择了索引来取
>         <li key={index} className={item.checked ? "done" : ""}>
>           <div className="view">
>             <input
>               className="toggle"
>               type="checkbox"
>               checked={item.checked}
>               onChange={(e)=>this.handleOneChange(e,index)}
>               value={index}
>             />
>             <label> {item.msg} </label>
>             <a className="destroy" />
>           </div>
>         </li>
>       );
>     });
> ```
>
>  

## 为什么 定义的组件需要首字母大写

> 为了和原生html的标签区分，如果是小写的话react会以为它是一个原生html标签，这样会因此报错

## 为什么定义的list中的li必须要有key值

> 如果没有key值，更改变化的时候，如果在头部插入一条数据，react会对每一个li产生的树都进行一次比较，这样会影响性能
>
> 当有key值的时候，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素，key值需要保证独一无二
>
> 协调算法
>
> ```js
> 该算法不会尝试匹配不同组件类型的子树。如果你发现你在两种不同类型的组件中切换，但输出非常相似的内容，建议把它们改成同一类型。在实践中，我们没有遇到这类问题。
> 
> Key 应该具有稳定，可预测，以及列表内唯一的特质。不稳定的 key（比如通过 Math.random() 生成的）会导致许多组件实例和 DOM 节点被不必要地重新创建，这可能导致性能下降和子组件中的状态丢失。
> ```
>
>  

## react的合成事件机制

> React将浏览器的原生事件封装成了合成事件传入设置的事件处理器中，保证了行为的一致性，React 并没有直接将事件附着到子元素上，而是以单一事件监听器的方式将所有的事件发送到顶层Document进行处理。这样 React 在更新 DOM 的时候就不需要考虑如何去处理附着在 DOM 上的事件监听器，最终达到优化性能的目的
>
> React组件上声明的事件绑定到了document这一个节点上，减少了内存的开销，自身实现了一套事件冒泡机制，

## 为什么需要修改自定义函数的this

> 传递一个函数名给一个变量，之后通过函数名()的方式进行调用，在方法内部如果使用this则this的指向会丢失
>
> ```js
> function A() {
>   // console.log(this)
> }
> 
> A.prototype.getName = function() {
>   	console.log(this)
> }
> 
> var a = new A()
> 
> a.getName()
> 
> var b = a.getName
> 
> b()
> ```
>
> ```js
> onKeyDown={this.handleGo}
> 
> // this.handleGo 就相当于 上边这种 a.getName
> 
> // 原来就是this指向的问题   唉  不能和之前学习的一起运用  稍微一点改变就懵了。。。
> ```
>
>  

## 改变this指向

> 1. bind。
>
> 2. 箭头函数
>
> 3. ::this.onClick
>
>    ```js
>    // this.onClick = this.onClick.bind(this)
>    
>    //如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。
>    
>    //双冒号运算符的运算结果，还是一个对象，因此可以采用链式写法
>    
>    // 例一
>    import { map, takeWhile, forEach } from "iterlib";
>     
>    getPlayers()
>    ::map(x => x.character())
>    ::takeWhile(x => x.strength > 100)
>    ::forEach(x => console.log(x));
>     
>    // 例二
>    let { find, html } = jake;
>     
>    document.querySelectorAll("div.myClass")
>    ::find("p")
>    ::html("hahaha");
>    ```
>
>      

## 未完待续的。。。

## this.setState在什么周期函数中尽量不要调用

## 为什么this.setState是异步的

## js事件的处理机制（事件队列是如何运行的自己再看一看）

## PubSub的使用（配合观察者模式学习一下）

## this的指向再复习一下

## 