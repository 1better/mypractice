import $ from 'jquery'
import createReactUnit from './unit.js'
import createElement from './element.js'
import Component from './component.js'
let React = {
  render,
  nextRootIndex: 0,
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
  $(document).trigger('mounted',()=>{
    console.log('所有组件挂载完成')
  })
}


export default React