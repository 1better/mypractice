## React 单向数据流

> 任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。
>
> 如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

## React的key值

> key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识
>
> 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据 id 来作为元素的 key
>
> 当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key：
>
> 如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。
>
> 好处
>
> > 1. 子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素,性能消耗小
> > 2. https://codepen.io/pen?&editable=true&editors=0010. 当使用下标来排序时，修改顺序时会修改当前的 key，导致非受控组件的 state（比如输入框）可能相互篡改导致无法预期的变动

## React表单

> React 并不会使用 `selected` 属性，而是在根 `select` 标签上使用 `value` 属性。这在受控组件中更便捷，因为您只需要在根标签中更新它
>
> > 计算属性名
> >
> > ```js
> > var i = 0;
> > var a = {
> >   ["foo" + ++i]: i,
> >   ["foo" + ++i]: i,
> >   ["foo" + ++i]: i
> > };
> > console.log(a.foo1); // 1
> > console.log(a.foo2); // 2
> > console.log(a.foo3); // 3
> > var param = 'size';
> > var config = {
> >   [param]: 12,
> >   ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
> > };
> > console.log(config); // { size: 12, mobileSize: 4 }
> > ```
> >
> > 

##  React状态提升

> 将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。
>
> 操作
>
> state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠[自上而下的数据流](https://react.docschina.org/docs/state-and-lifecycle.html#the-data-flows-down)，而不是尝试在不同组件间同步 state。