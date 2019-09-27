import $ from 'jquery'
// 通过父类来传递 ele （每一个都用到了element）
class Unit {
  constructor(ele) {
    this.currentElement = ele
  }
}


class ReactTextUnit extends Unit{
  getMarkUp(rootId) {
    this._rootId = rootId
    return `<span data-reactid=${rootId}>${this.currentElement}</span>` 
  }
}

class ReactNativeUnit extends Unit{
  getMarkUp(rootId) {
    this._rootId = rootId
    let {type,props} = this.currentElement
    // 拼接渲染的内容
    let targetStart = `<${type} data-reactid="${rootId}"`
    let targetEnd = `</${type}>`
    let contentStr
    for(let propName in props) {
      if(/on[A-Z]/.test(propName)) {
        let propEvent = propName.slice(2).toLowerCase()
        // 原生js实现这一块
        /* document.addEventListener(propEvent,function(e){
          let p = e.target,index
          let doc = document.querySelector(`[data-reactid="${rootId}"]`)
          while(p!== document) {
            if(p===doc) {
              index = true
              break
            }
            p = p.parentNode
          }
          if(index)
          props[propName]()
        }) */
        $(document).on(propEvent,`[data-reactid="${rootId}"]`,props[propName])
      }else if(propName==='children') {
        // map 映射
        contentStr = props[propName].map((child,index)=>{
          // 循环遍历子节点
          let childInstance = createReactUnit(child)
          // 相当于将 'hello' 变成 '<div>hello</div>'
          return childInstance.getMarkUp(`${rootId}.${index}`)
        }).join('')
      }else {
        targetStart += (`${propName}="${props[propName]}"`)
      }
    }
    // + contentStr 
    return targetStart + '>' + contentStr + targetEnd
  }
}

class ReactCompositUnit extends Unit {
  getMarkUp(rootId) {
    this._rootId = rootId
    let {type:Component,props} = this.currentElement
    let componentInstance = new Component(props)
    // 先父亲后子
    componentInstance.componentWillMount && componentInstance.componentWillMount()
    let reactComponetRender = componentInstance.render()    
    // 递归渲染
    let reactCompositUnitInstance = createReactUnit(reactComponetRender)
    let markup = reactCompositUnitInstance.getMarkUp(rootId)
    $(document).on('mounted',()=>{
      componentInstance.componentDidMount &&  componentInstance.componentDidMount()
    })
    return markup
  }
}

function createReactUnit(ele) {
  if(typeof ele === 'number' || typeof ele === 'string') {
    return new ReactTextUnit(ele)
  }
  // 这一步竟然耽误我半小时 因为写错了一个点
  if(typeof ele === 'object' && typeof ele.type === 'string') {
    return new ReactNativeUnit(ele)
  }
  if(typeof ele === 'object' && typeof ele.type === 'function') {
    return new ReactCompositUnit(ele)
  }
  /* 
  switch(typeof ele) {
    case 'string':
    case 'number': 
      return new ReactTextUnit(ele)
    default: 
      break
  } */
}
export default createReactUnit