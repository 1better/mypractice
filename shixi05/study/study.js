// class A {
//   constructor() {
//     this.x = 1;
//   }
//   render() {
//     return 1;
//   }
// }

// // A 假设为 React.Component

// // B 为创建的 类
// class B extends A {
//   constructor() {
//     super();
//     this.x = 2;
//     console.log('=====');
//     console.log(this)
//     /* console.log(this);    // B
//     console.log(this.x);  // 2
//     console.log(super); // undefined
//     this.getme = this.getme.bind(this) */
//     this.getme = this.getme.bind(this)
//   }
//   getName(){
//     console.log('getName');
//     console.log(this); // B
//   }
//   getme(){
//     console.log('getme');
//     console.log(this); // B
//   }
// }

// console.log(B)
// // 类转化为 es5的写法如下：
// /* function Es5B() {
//   this.x = 2
// }
// Es5B.prototype.getName = function () {
//   console.log(this);
//   console.log('getName');
//   console.log(this.x);
// } */

// let b = new B();
// // this应该指向的b  b.x = 2 
// console.log(B.getName)

// /* let esb = new Es5B()
// esb.getName() */

function A() {
  // console.log(this)
}
A.prototype.getName = function() {
  console.log(this)
}

var a = new A()

a.getName()

var b = a.getName

b()