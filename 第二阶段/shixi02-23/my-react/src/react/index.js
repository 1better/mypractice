import $ from 'jquery'
import createReactUnit from './unit.js'
import createElement from './element.js'
import Component from './component.js'
let React = {
  render,
  // 可以 0 然后子元素 0.0 0.1 然后子元素的子元素 0.0.0 0.0.1 0.1.0 0.1.1
  nextRootIndex: 0,
  // 创建元素
  createElement,
  createReactUnit,
  Component
}

function render(ele,container) {
  // 写一个工厂函数 来创建对应的react元素
  // 通过这个工厂函数来创建
  let  createReactUnitInstance = React.createReactUnit(ele)
  let markUp = createReactUnitInstance.getMarkUp(React.nextRootIndex)
  // let markUp = `<span data-reactid=${React.nextRootIndex}>${ele}</span>` 
  $(container).html(markUp)
  // 检验react的生命周期函数
  $(document).trigger('mounted',()=>{
    console.log('所有组件挂载完成')
  })
}


export default React