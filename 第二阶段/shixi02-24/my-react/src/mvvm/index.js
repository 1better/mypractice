// 观察者(发布订阅) 观察者与被观察者
class Watcher {
  constructor(vm,expr,cb) {
    
  }
}

// 实现数据劫持
class Observer {
  constructor(data) {
    this.observer(data)
  }
  observer(data) {
    if(data && typeof data == 'object') {
      for(let key in data) {
        this.defineReactive(data,key,data[key])
      }
    }
  }
  defineReactive(data,key,value) {
    this.observer(value)
    Object.defineProperty(data,key,{
      get() {
        return value
      },
      set:(newVal) => {
        if(value !== newVal) {
          this.observer(newVal)
          value = newVal
        }
      }
    })
  }
}

// 基类

class Vue {
  // options {el: '#app',data:{}}
  constructor(options) {
    this.$el = options.el
    this.$data = options.data

    // 这个根元素 存在 编译模板
    if(this.$el) {
      // this 是 vm实例
      // 将数据进行观察 数据劫持
      new Observer(this.$data)
      new Compiler(this.$el,this)
    }
  }

}

class Compiler {
  constructor(el,vm) {
    // 判断el属性 是不是一个元素 如果不是元素 就获取
    this.el = this.isElementNode(el) ? el: document.querySelector(el)
    // 当前节点中的元素获取 放到内存中
    let fragment = this.nodeFragment(this.el)

    // 编译模板 用数据编译
    this.vm = vm

    this.compile(fragment)

    this.el.appendChild(fragment)
  }
  // 转换成文档碎片
  nodeFragment(node) {
    let frag = document.createDocumentFragment()
    let first
    // appendChild相当于把这个元素剪切过来
    while(first = node.firstChild) {
      frag.appendChild(first)
    }
    return frag
  }
  // 用来编译
  compile(fragment) {
    // 注意 这里是第一层 还需要递归得到第二层
    let childNodes = fragment.childNodes
    // 转换成真数组  进行forEach判断
    let childArr = [...childNodes]
    childArr.forEach(child=>{
      if(this.isElementNode(child)) {
        this.compileElement(child)
        // 如果是元素 可能还会包含元素 或者text 还需要递归编译
        this.compile(child)
      }else {
        this.compileText(child)
      }
    })
  }
  // 判断是否是v-开头的 指令 v-model v-html v-text
  isDirective(attrName) {
    // 以这个开头
    return attrName.startsWith('v-')
  }
  // 编译元素
  compileElement(node) {
    // 找出 属性
    let attr = node.attributes
    let attrArr = [...attr]
    attrArr.forEach(attr=>{
      let {name,value:expr} = attr
      if(this.isDirective(name)) {
        let directive = name.slice(2)
        CompileUtil.update(node,expr,this.vm,directive)
      }
    })
  }
  // 编译节点
  compileText(node) {
    let content = node.textContent
    let reg = /\{\{(.*)\}\}/
    if(reg.test(content)) {
      CompileUtil.update(node,RegExp.$1,this.vm,'text')
    }
  }
  // 判断是否是元素节点 如果是元素节点 
  isElementNode(node) {
    return node.nodeType === 1
  }
}
// 指令工具
let CompileUtil = {
  // getValue方法
  getValue(expr,vm) {
    let exprArr = expr.split('.')
    return exprArr.reduce((pre,next)=>{
      return pre[next]
    },vm.$data)
  },
  // 下面的方法可以封装成这一个方法
  update(node,expr,vm,directive) {
    let value = this.getValue(expr,vm)
    this.updater[directive+'Updater'](node,value)
  },
  // node是节点 expr是表达式 vm是当前的实例 school.name
  /* model(node,expr,vm,directive) {
    // 输入框赋予value属性
    let value = this.getValue(expr,vm)
    this.updater[directive+'Updater'](node,value)
  },
  html(node,expr,vm,directive) {
    let value = this.getValue(expr,vm)
    this.updater[directive+'Updater'](node,value)
  },
  text(node,expr,vm,directive) {
    let value = this.getValue(expr,vm)
    this.updater[directive+'Updater'](node,value)
  }, */
  updater: {
    modelUpdater(node,value) {
      node.value = value
    },
    htmlUpdater(node,value) {
      node.innerHTML = value
    },
    textUpdater(node,value) {
      node.textContent = value
    }
  }
}
export default Vue