## 学习的东西二

报错```Reducer "todos" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined```

> 每个传入 combineReducers 的 reducer 都需满足以下规则：
>
> - 所有未匹配到的 action，必须把它接收到的第一个参数也就是那个 state 原封不动返回。
> - 永远不能返回 undefined。当过早 return 时非常容易犯这个错误，为了避免错误扩散，遇到这种情况时 combineReducers 会抛异常。
> - 如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state。根据上一条规则，初始 state 禁止使用 undefined。使用 ES6 的默认参数值语法来设置初始 state 很容易，但你也可以手动检查第一个参数是否为 undefined。
>
> 虽然 combineReducers 自动帮你检查 reducer 是否符合以上规则，但你也应该牢记，并尽量遵守

## 为什么直接修改redux中state的值不发生变化

> #### **Store 会把两个参数传入 reducer： 当前的 state 和 action**，所以不能直接修改state，redux会比较新旧state的值，直接修改state会导致store内部的也发生改变，那么新旧state也就没有发生变化。页面就不会重新渲染
>
> ### 同理。react中也不能修改this.state的值
>
> ```js
>  case 'TOGGLE_ONETODO':
>       // let newState = JSON.parse(JSON.stringify(state))
>       let newState = state;
>       
>       newState[action.id].checked = !newState[action.id].checked
>       debugger
>       console.log(newState)
>       return newState
> // 这样就不会触发render
> ```
>
> 

