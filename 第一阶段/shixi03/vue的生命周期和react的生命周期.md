## vue的生命周期

> ![屏幕快照 2019-07-11 下午2.24.21](/Users/beisen/.Trash/屏幕快照 2019-07-11 下午2.24.21.png)
>
> ![屏幕快照 2019-07-11 下午2.24.34](/Users/beisen/.Trash/屏幕快照 2019-07-11 下午2.24.34.png)

> ### vue生命周期 （之前学过）
>
> - beforeCreate
>
>   > 这是遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它
>   >
>   > 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化
>
> - created
>
>   > 在 created 中，data 和 methods 都已经被初始化好了！
>   >
>   > **如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作**
>
> - beforeMount
>
>   > 是遇到的第3个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中
>   >
>   > 在 beforeMount 执行的时候，页面中的元素没有被真正替换，只是之前写的一些模板字符串
>
> - mounted
>
>   > 这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
>   >
>   > 实例已经被完全创建好了，没有其它操作实例就在内存上
>
> - beforeUpdate（此时数据已经更新了才触发beforeUpdate和updated两个方法）
>
>   > 当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步
>
> - updated
>
>   > updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
>
> - beforeDestory
>
> - destoryed 

## react的生命周期

> ![屏幕快照 2019-07-11 下午2.45.01](/Users/beisen/Desktop/front-end/myshixi/shixi03/images/屏幕快照 2019-07-11 下午2.45.01.png)

> 1、getDefaultProps()
>
> > 设置默认的props，也可以用ufaultProps设置组件的默认属性.
>
> 2、getInitialState()
>
> > 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
>
> 3、componentWillMount()
>
> > 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
>
> 4、 render()
>
> > react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
>
> 5、componentDidMount()
>
> > 组件渲染之后调用，只调用一次。
>
> - **更新**
>
> 6、componentWillReceiveProps(nextProps)
>
> > 组件初始化时不调用，组件接受新的props时调用。
>
> 7、shouldComponentUpdate(nextProps, nextState)
>
> > react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
>
> 8、componentWillUpdate(nextProps, nextState)
>
> > 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
>
> 9、render()
>
> > 组件渲染
>
> 10、componentDidUpdate()
>
> > 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
>
> - **卸载**
>
> 11、componentWillUnmount()
>
> > 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。 

## react16的生命周期

>  ![屏幕快照 2019-07-12 上午11.39.22](/Users/beisen/Desktop/front-end/myshixi/shixi03/images/屏幕快照 2019-07-12 上午11.39.22.png)

> 1. componentDidMount 用于接受接口的数据，进行定时器操作
> 2. componentWillUnmonut 用于清除定时器
> 3. this.setState() 用于数据的更新 