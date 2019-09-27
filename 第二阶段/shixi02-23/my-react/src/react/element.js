class Element {
  constructor(type,props) {
    this.type = type
    this.props = props
  }
}

function createElement(type,props,...children) {
  props = props || {}
  props.children = children
  // 这个是为了校验类型， 可以判断出是否是react实例生成 利用instanceof
  return new Element(type,props)
}

// 返回虚拟dom 用对象来描述元素
export default createElement
// 需要转换成这样的格式

//  <div name='xxx>say</div>  

// let obj = {
//   type: 'div',
//   props: {
//     name: 'xxx',
//     children: ['say',{
//       type: 'span',
//       props: [
//         {
//           children: ['你好']
//         }
//       ]
//     }]
//   }
// }