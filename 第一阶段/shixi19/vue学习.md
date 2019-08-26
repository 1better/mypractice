## vue学习

> slot插槽 
>
> > 作用。可以将父组件的内容传递给子组件，让子组件根据不同的场景显示不同的内容
>
> 基本用法
>
> > ```html
> >  <div id="app">
> >     <Child>
> >       {{msg}}
> >     </Child>
> >   </div>
> >   <template id="Child">
> >     <div>
> >       <slot>
> >         父组件未插入内容
> >       </slot>
> >       <br>
> >       {{msg}}
> >     </div>
> >   </template>
> >   <script>
> >     var vm = new Vue({
> >       el: '#app',
> >       data: {
> >         msg: '我是父组件通过slot插入的内容'
> >       },
> >       components: {
> >         Child:{
> >           template:'#Child',
> >           data() {
> >             return {
> >               msg: 111
> >             }   
> >           }
> >         }
> >       }
> >     })
> > 
> >   </script>
> > 
> > <!--
> > 	通过slot就可以接受父组件传递过来的值
> > -->
> > ```
>
> 具名插槽
>
> > ```html
> > <div id="app">
> >     <Child >
> >       <h1 slot="header">标题</h1>
> >       <h2 slot="footer">底部</h2>
> >     </Child>
> >   </div>
> >   <template id="Child">
> >     <div>
> >       <div class="header">
> >         <!-- 这样333也不显示 -->
> >           <slot name="header">333</slot>
> >       </div>
> >       <div class="footer">
> >           <slot name="footer"></slot>
> >       </div>
> >     </div>
> >   </template>
> >   <script>
> >     var vm = new Vue({
> >       el: '#app',
> >       data: {
> >         msg: '我是父组件通过slot插入的内容'
> >       },
> >       components: {
> >         Child:{
> >           template:'#Child',
> >           data() {
> >             return {
> >               msg: 111
> >             }   
> >           }
> >         }
> >       }
> >     })
> > 
> >   </script>
> > ```
> >
> > ```html
> > <!-- 页面显示 -->
> > <div id="app">
> >     <div>
> >       <div class="header">
> >         <h1>标题</h1>
> >       </div>
> >     </div>
> > </div>
> > ```
> >
> >  
>
> 作用域插槽
>
> > ```html
> > <!--子组件-->
> > <template>
> >    <div>
> >      我是作用域插槽的子组件
> >      <slot :data="user"></slot>
> >    </div>
> > </template>
> >  
> > <script>
> > export default {
> >    name: 'slotthree',
> >    data () {
> >      return {
> >         user: [
> >           {name: 'Jack', sex: 'boy'},
> >           {name: 'Jone', sex: 'girl'},
> >           {name: 'Tom', sex: 'boy'}
> >         ]
> >  	}
> >  }
> > }
> > </script>
> > 
> > <!--父组件-->
> > <template>
> >  <div>
> >  我是作用域插槽
> >  <slot-three>
> >   <template slot-scope="user">
> >   <div v-for="item in user.data" :key="item.id">
> >   {{item}}
> >   </div>
> >   </template>
> >  </slot-three>
> >  </div>
> > </template>
> > ```
> >
> > 在父组件上使用slot-scope属性，user.data就是子组件传过来的值

