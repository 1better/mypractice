// 可以对react简单组件渲染 用下面这样的方式，简化代码量

import {render} from 'react'
// 直接调用render方法
render(<App />,document.getElementById('app')) 


// 加入react-router-dom 的写法
// 引入 BrowserRouter
import { BrowserRouter } from 'react-router-dom';

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('app')
)
// <NavLink> </NavLink>

// 引入 NavLink 链接可点击
// 引入Switch 可切换
// Route  指定的跳转
// Redirect 重定向 （指定一开始页面显示哪一个）
//  具体用法`

<NavLink to='/about'>About</NavLink>
<NavLink to='/home'>Home</NavLink>

<Switch>
  <Router path ='/about' component={About} />
  <Router path ='/home' component={home} />
  <Redirect to ='/about' />
</Switch>

// 自定义 相当于在引入的组件中再做一层处理
// 具体的处理方式
import { NavLink } from 'react-router-dom' 

export default class MyNavLinke extends component {
  render() {
    // return <NavLink className='becomeRed'></NavLink>

    // 采用解构赋值 这样有多少属性就可以传递多少属性
    return <NavLink {...this.props} className='becomeRed'></NavLink>
  }
}

import MyNavLinke from '../../component'
// 样式变红
<MyNavLinke>About</MyNavLinke> 



// 如何编写路由效果
// 1. 编写路由组件
// 2. 在父路由组件中指定
// 路由链接: <NavLink>  路由: <Route>
// 嵌套路由
