// 模仿Object
function Obj() {}
Obj.prototype.toString = () => {
  console.log('我是obj方法')
}
// 模仿Array
function Arr() {}
Arr.prototype = Object.create(Obj.prototype)
// 对Arr toString方法进行重写
console.log(Arr.prototype)  // Obj{}
console.log(Arr.prototype.__proto__) // Obj { toString: [Function] }
Arr.prototype.toString = () => {
  console.log('我是Arr方法')
}

let a = new Arr()
a.toString() // 我是Arr方法   

let c = new Obj()
c.toString() // 我是obj方法

// 这样并没有修改Obj.prototype中的ToString 而是为Arr的原型添加了一个toString方法，依据原型链访问原则来访问，
// 先访问Arr的toString方法

Person.prototype.friends = ['小红','二狗','菜豆'];
man.friends.push('小明');

// 这样改变是 因为先从原型上搜索，找到了这个数组，然后push上去了 如果你是 man.friends = [] 这样就没有问题


// 像这样
function Person(name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.showName = function() {
  return this.name
}
Person.prototype.friends = ['小红','二狗','菜豆'];

function Man(name,age) {
  Person.apply(this,[name,age]); //会调用父构造函数，挂载实例到原型上面
}

// 像原型链继承（但是只继承了原型属性，不会调用构造函数）
Man.prototype = Object.create(Person.prototype)
Man.prototype.constructor = Man

var man = new Man('zs',18)
console.log(man.name);       //zs
console.log(man.age);        //18
console.log(man.friends);    //['小红','二狗','菜豆']
console.log(man.showName()); //zs

// 改动在这里
// 这样也是 相当于给 man 添加了一个属性，和上边的类似 
// 当你push的时候 它是先搜索 保证 man.friends 不出错 （还是依据原型链原则来查询）
man.friends = ['小红','二狗','菜豆','小明'];
console.log(man.friends);    //['小红','二狗','菜豆','小明']

var other = new Person('ls',22);
console.log(other.friends);  //['小红','二狗','菜豆']
