import React from 'react'
import ReactDOM from 'react-dom'

// 引入组件
import Test from './components/Test.jsx'

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index.js'

// 渲染DOM
ReactDOM.render (
  (
    <div>
        {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
        <Provider store = {store}>
          <Test />
        </Provider>
    </div>
  ),
  document.getElementById('root')
)