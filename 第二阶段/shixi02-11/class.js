class Person {
  constructor() {} 
  toString() { }
  toValue() { }
}
// 等同于
Person.prototype = {
	constructor() {},
	toString() {},
	toValue() {},
};

// 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上)