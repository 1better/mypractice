## 今日学习

## mac安装nginx的echo模块

> 千万不要编译安装，因为这个耽误很长时间结果还各种需要（编译安装老是出错）
>
> > + brew tap denji/homebrew-nginx (克隆到本地)
> > + brew unlink nginx（之前安装过nginx需要这一步）
> > + 
> >   brew install nginx-full --with-rtmp-module (后边跟模块名字)
> > + nginx (启动)
> >
> > github https://github.com/Homebrew/homebrew-nginx
> >
> >  

## 项目如果打不开一定要授一下权

## 样式的操作

> h3:not(:first-child) 
>
> 这个是除了第一个h3以外的都设置成这个样式,不用再重新写一个覆盖掉了

## jquery

> ```js
> $el.is(':checked')
> // jquery判断是否选中
> //：冒号，冒号前面的属于这个属性的名字，后面的是这个属性的值
> // eg $("#Academe :checkbox:checked"); 获取表格Academe里面所有被选中的复选框
> ```
>
> 