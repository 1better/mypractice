## css命名规范的学习

## 连字符以及连接符

> ```css
> .block-name 
> 
> .block-name_modifier-name
> 
> .block-name__element-name
> ```
>
>  

## 使用方式

> ```css
> /*
> 	代表主要组件的名称 是 用 .block
> */
> /*
> 	代表组件的一部分 是用 .block__elemnt 
> */
> /*
> 	描述组件的外貌 是 用 .block_modefi
> */
> ```
>
>  

## 如何应用

> - 如果某个区块的代码能够复用并且不依赖于页面上其他的组件实现，那么应该创建Block.  (可复用的样式)
> - 如果某个区块的代码不能单独的使用没有父实体，那么应该创建Element.
> - 唯一的例外是，不能创建Element的Element，应将其划分为Block。（为什么？）

## 样式规范（个人习惯）

> ```css
> 1
> 	display position float
> 2
> 	width height
> 3
> 	padding margin
> 4
> 	border bakground
> 5 
>   font line-height(注意先font再line-height)
> 6
> 	overflow z-index
> ```
>
> 