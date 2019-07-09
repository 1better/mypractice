## html5的复习

## 布局（html5）

> ### 三栏flex布局
>
> > ```html
> > <!DOCTYPE html>
> > <html lang="en">
> > <head>
> >   <meta charset="UTF-8">
> >   <meta name="viewport" content="width=device-width, initial-scale=1.0">
> >   <meta http-equiv="X-UA-Compatible" content="ie=edge">
> >   <title>三栏自适应</title>
> >   <style>
> >     body,html {
> >       margin: 0;
> >       padding: 0;
> >       width: 100%;
> >       height: 100%;
> >     }
> >     /* 命名规范   中间应该有一个空格 */
> >     /* 为左右加入一个width 中间没有宽度 设定flex为1 会自动填充 */
> >     .box {
> >       display: flex;
> >       width: 100%;
> >       height: 100%;
> >     }
> >     .box__left,.box__right{
> >       width: 200px;
> >       background-color: blue;
> >     }
> >     .box__center {
> >       flex: 1;
> >       background-color: green;
> >     }
> >   </style>
> > </head>
> > <body>
> >   <div class ="box">
> >     <!-- 命名规范  box里边的元素  （和们的窗户有关系）-->
> >     <div class="box__left"></div>
> >     <div class="box__center"></div>
> >     <div class="box__right"></div>
> >   </div>
> > </body>
> > </html>
> > ```
> >
> > ```html
> > <!DOCTYPE html>
> > <html lang="en">
> > <head>
> >   <meta charset="UTF-8">
> >   <meta name="viewport" content="width=device-width, initial-scale=1.0">
> >   <meta http-equiv="X-UA-Compatible" content="ie=edge">
> >   <title>三栏自适应</title>
> >   <style>
> >     body,html {
> >       margin: 0;
> >       padding: 0;
> >       width: 100%;
> >       height: 100%;
> >     }
> >     /* 命名规范   中间应该有一个空格 */
> >     /* order是排序方式。flex-grow是设置检索盒子的比例*/
> >     .box {
> >       display: flex;
> >       width: 100%;
> >       height: 100%;
> >     }
> >     .box__left,.box__right{
> >       width: 200px;
> >       background-color: blue;
> >     }
> >     .box__center {
> >       flex: 1;
> >       background-color: green;
> >     }
> >   </style>
> > </head>
> > <body>
> >   <div class ="box">
> >     <!-- 命名规范  box里边的元素  （和们的窗户有关系）-->
> >     <div class="box__left"></div>
> >     <div class="box__center"></div>
> >     <div class="box__right"></div>
> >   </div>
> > </body>
> > </html>
> > ```
> >
> >  
>
> ### 两栏自适应布局
>
> > ```html
> > <!DOCTYPE html>
> > <html lang="en">
> >   <head>
> >     <meta charset="UTF-8" />
> >     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
> >     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
> >     <title>overflow实现两栏自适应</title>
> >     <style>
> >       html,body {
> >         margin: 0;
> >         padding: 0;
> >         width: 100%;
> >         height: 100%;
> >       }
> >       .box__left {
> >         float: left;
> >         width: 200px;
> >         height: 100%;
> >         background-color: red;
> >       }
> >       .box__right {
> >         overflow: hidden;
> >       }
> >     </style>
> >   </head>
> >   <body>
> >       <div class="box__left"></div>
> >       <div class="box__right"></div>
> >   </body>
> > </html>
> > 
> > ```
> >
> > ```html
> > <!DOCTYPE html>
> > <html lang="en">
> >   <head>
> >     <meta charset="UTF-8" />
> >     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
> >     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
> >     <title>flex实现两栏自适应</title>
> >     <style>
> >       html,body {
> >         margin: 0;
> >         padding: 0;
> >         width: 100%;
> >         height: 100%;
> >       }
> >       .box {
> >         display: flex;
> >         width: 100%;
> >         height: 100%;
> >       }
> >       .box__left {
> >         width: 200px;
> >         background-color: red;
> >       }
> >       .box__right {
> >         flex: 1;
> >       }
> >     </style>
> >   </head>
> >   <body>
> >     <div class="box">
> >       <div class="box__left"></div>
> >       <div class="box__right"></div>
> >     </div>
> >   </body>
> > </html>
> > ```
> >
> >  
>
> 居中显示
>
> > ```html
> > <!DOCTYPE html>
> > <html lang="en">
> > <head>
> >   <meta charset="UTF-8">
> >   <meta name="viewport" content="width=device-width, initial-scale=1.0">
> >   <meta http-equiv="X-UA-Compatible" content="ie=edge">
> >   <title>flex实现居中</title>
> >   <style>
> >     div {
> >       position: absolute;
> >       left: 0;
> >       right: 0;
> >       top: 0;
> >       bottom: 0;
> >       margin: auto;
> >       width: 100px;
> >       height: 100px;
> >       background-color: blue;
> >     }
> >   </style>
> > </head>
> > <body>
> >   <div></div>
> > </body>
> > </html>
> > ```
> >
> > ```html
> > <!DOCTYPE html>
> > <html lang="en">
> > <head>
> >   <meta charset="UTF-8">
> >   <meta name="viewport" content="width=device-width, initial-scale=1.0">
> >   <meta http-equiv="X-UA-Compatible" content="ie=edge">
> >   <title>position实现居中</title>
> >   <style>
> >     html,body {
> >       width: 100%;
> >       height: 100%;
> >       display: flex;
> >       align-items: center;
> >       justify-content: center;
> >     }
> >     div {
> >       
> >       width: 100px;
> >       height: 100px;
> >       background-color: blue;
> >     }
> >   </style>
> > </head>
> > <body>
> >   <div></div>
> > </body>
> > </html>
> > ```
> >
> >  
>
> ### 三栏其他布局
>
> > ```1（圣杯）. box设定为width100% padding左右都有值，box————left 。。right 以及 center都设定为float left left 和 right用margin 负值 ```
> >
> > ```2 (flex) .box设定为width100% left right center都float left center里边有一个 middle middle设定 margin 0 200px ``` 
>
> ### flex用法
>
> > ``` 主轴方向
> > flex-deriction: row row-reverse column column-reverse
> > 主轴对齐方式
> > justify-content:flex-start flex-end center 
> > space-round/*(每一部分都平均)*/  space-between /*两端对齐平分*/
> > 侧轴方向
> > align-items:flex-start flex-end center 
> > baseline /*基线 默认同flex-start*/    stretch 、/*拉伸*/
> > ```
> >
> > ```伸缩比例
> > li:ntn-child(1) {flex:1}
> > li:ntn-child(1) {flex:3} 
> > /*占几等份*/```
> > ```
> >
> > ```是否换行
> > flex-wrap:  wrap/*自动换行*/ nowrap/*不换行*/```
> > ```
> >
> > ```/*堆栈排列，可对应用flex-wrap: wrap后产生的换行进行控制，包括flex-start、flex-end、center、space-between、space-around、stretch*/```
> >
> > ```控制显示顺序
> > order /*可以搭配flex-basius实现双飞翼布局*/```
> > ```

## 盒模型参数

> ```css
> box-sizing: border-box 对应于ie盒子
>  
> box-sizing: content-box 对应于标准盒模型
> ```

