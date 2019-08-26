## vue复习以及项目知识学习

## vue计算属性

> ```js
> var vm = new Vue({
>       el: '#app',
>       data: {
>         firstName: '',
>         lastName: ''
>       },
>       computed: {
>         allName: {
>           // get 方法取值
>           get() {
>             return this.firstName + '---' + this.lastName
>           },
>           // set 方法改变值
>           set(newValue) {
>             console.log(newValue)
>             var names = newValue.split('---')
>             this.firstName = names[0]
>             this.lastName = names[names.length - 1]
>           }
>         }     
>       }
> ```
>
>  

## 侦听器

> ```js
> //watch 侦听属性 适合与服务器数据交互 ajax操作。改变数据
> ```
>
>  

## 条件渲染的key

> ``` Vue 提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` 属性即可```
>
> ```html
> <template v-if="loginType === 'username'">
>   <label>Username</label>
>   <input placeholder="Enter your username" key="username-input">
> </template>
> <template v-else>
>   <label>Email</label>
>   <input placeholder="Enter your email address" key="email-input">
> </template>
> <!--
> 	添加了key之后每次渲染 输入框每次都会重新渲染
> -->
> ```
>
>  

## 检测数组变化

> ```js
> //当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
> //当你修改数组的长度时，例如：vm.items.length = newLength
> 
> var vm = new Vue({
>     data: {
>       	items: ['a', 'b', 'c']
>     }
> })
> vm.items[1] = 'x' // 不是响应性的
> vm.items.length = 2 // 不是响应性的
> ```
>
> ```js
> // Vue.set
> Vue.set(vm.items, indexOfItem, newValue)
> // Array.prototype.splice
> vm.items.splice(indexOfItem, 1, newValue)
> ```
>
> 

## 表单

> 1. 在文本区域插值 (`<textarea>{{text}}</textarea>`) 并不会生效，应用 `v-model` 来代替
> 2. 多个复选框绑定一个数组
> 3. 如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

## 项目知识

## 主页 

> 利用nth-child(n+..)来呈现不同的形状、

## nav

>  采用fixed  图标点击就显示标签

## 页面显示黄色就很大可能是服务端发版或者其它的问题，访问不到