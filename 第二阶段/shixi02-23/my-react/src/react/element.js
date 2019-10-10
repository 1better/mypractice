class Element {
  constructor(type,props) {
    this.type = type
    this.props = props
  }
}

{/* <div name="xxx">hahaha<span>111</span></div> */}
/* 
  React.createElement("div", {
  name: "xxx"
  }, "hahaha", React.createElement("span", null, "111")); 
*/

// type 是标签的名字  props是 标签上边的属性  ...children 上上述'hahaha'及其后边的东西
function createElement(type,props,...children) {
  // null的时候 对象取空
  props = props || {}
  props.children = children
  // 这个是为了校验类型， 可以判断出是否是react实例生成 利用instanceof
  // 返回Element
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