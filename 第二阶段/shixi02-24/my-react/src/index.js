import Vue from './mvvm'

let vm = new Vue({
  el: '#app',
  data: {
    school: {
      name: 111,
      a: '<a href="#">百度一下</a>',
      text: '我是text'
    }
  }
})
debugger
console.log(vm)
