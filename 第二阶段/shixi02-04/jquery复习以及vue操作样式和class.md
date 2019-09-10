## jquery

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      #all div {
        width: 100px;
        height: 100px;
        margin-top: 10px;
        background: red;
      }
      #all .uploader1 {
        background: green;
      }
    </style>
  </head>
  <body>
    <div id="all">
      <div class="uploader uploader1">
        <button>删除</button>
      </div>
      <div class="uploader uploader2" >
        <button>删除</button>
      </div>
      <div class="uploader uploader3">
        <button>删除</button>
      </div>
      <div class="uploader uploader4">
        <button>删除</button>
      </div>
      <div class="uploader uploader5">
        <button>删除</button>
      </div>
    </div>
  </body>
  <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
  <script>
    // jquery 循环遍历孩子元素查找符合条件的
    $('#all').children().each(function(index,ele){
      if($(ele).hasClass('uploader2')) {
        console.log(index)
        console.log(ele)
      }
    })
    $('button').each(function(index,ele){
      $(ele).click(function(){
        var s = $(this).parent().remove()
        $('#all').children().each(function(index,ele){
          if($(ele).hasClass('uploader4')) {
            $(ele).before(s)
          }
        })
      })
    })
    
  </script>
</html>

```

```js
// jquery遍历元素
$('#all').children().each(function(index,ele){
  		// 判断是否有class
      if($(ele).hasClass('uploader2')) {
        console.log(index)
        console.log(ele)
      }
    })
// jquery 深度克隆
$('#all').clone(true)
// 添加元素的方法
append prepend after before
// 删除元素
$('#all').remove()
```

## vue操作样式

## vue中的样式添加Class

> 1. 直接添加 class=“active thin”
> 2. 添加属性方式（v-bind ）:class="['active','thin']"(注意数组里边也要都加冒号)
> 3. 三元表达式 :class="['active','thin'，flag？'active’:' ']", flag是data里边的key，可以不加冒号
> 4. 对象的方式  :class="['active',{'active':flag}]"

## vue中的样式添加 style

> 1. h1 :style="styleObj1"
> 2. h1 :style="[ styleObj1, styleObj2 ]"





