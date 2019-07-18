import React,{Component} from 'react'
import {connect} from 'react-redux';
import * as userInfoActions from '../../action/UserInfoAction.js'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {name,count,add,updateName} = this.props
    return (
      <div>
        <input type="button" onClick={()=>{add('ADD')} } value="加"/> 
        <input type="button" onClick={()=>{add('CUT')} } value="减"/> 
        <input type="button" onClick={()=>{updateName('UPDATE_NAME','zhangsan')}} value="修改名字"/> 
        {count}  <br/>
        {name}
      </div>
    )
  }

}

//当前组件如需使用redux中的共享数据，在此设置，就能够当作属性来使用
function mapStateToProps(state) {
  return {
    count: state.userinfo.count,
    name: state.name.name
  }
}

// 触发数据的改变
function mapDispatchToProps(dispatch) {
  return {
    add: (type) => dispatch({type}),
    updateName: (type,name) => dispatch({type,name})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
