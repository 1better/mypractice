## 学习的东西

## 什么是纯函数

> 即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。
>
> 通俗来讲，就两个要素
>
> 1. 相同的输入，一定会得到相同的输出
> 2. 不会有 “触发事件”，更改输入参数，依赖外部参数，打印 log 等等副作用
>
>  

## redux方法

> - createStore
>
>   创建 store 对象，包含 getState, dispatch, subscribe, replaceReducer
>
> - reducer
>
>   reducer 是一个计划函数，接收旧的 state 和 action，生成新的 state
>
> - action
>
>   action 是一个对象，必须包含 type 字段
>
> - dispatch
>
>   `dispatch( action )` 触发 action，生成新的 state
>
> - subscribe
>
>   实现订阅功能，每次触发 dispatch 的时候，会执行订阅函数
>
> - combineReducers
>
>   多 reducer 合并成一个 reducer
>
> - replaceReducer
>
>   替换 reducer 函数
>
> - middleware (中间件)
>
>   扩展 dispatch 函数！

## redux流程图

> ![redux流程](/Users/beisen/Desktop/front-end/myshixi/shixi07/images/redux流程.png)

