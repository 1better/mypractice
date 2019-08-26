import React, { Component } from "react";
import ReactDom from "react-dom";

/* class Father extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'son'
    }
  }
  Go = () => {
    this.setState({name:'lisi'})
  }
  render() {
    return (
      <div>
        <Children name={this.state.name} go={this.Go}/> 
      </div>
    )
  }
}

class Children extends Component {
  constructor(props) {
    super(props)
    console.log(this)
    this.fatherGo = this.fatherGo.bind(this)
  }
  fatherGo(){
    this.props.go()
  }
  render() {
    let name = this.props.name 
    return (
      <div onClick={this.fatherGo}>
        {name}
      </div>
    )
  }
}
 */

/* class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value:1}
  }
  changeValue = (e)=>{
    let value = e.target.value
    this.setState({value})
  }
  render() {
    console.log(this.state.value)
    return (
      <select value={this.state.value} onChange={this.changeValue}>
        <option value='1'>苹果</option>
        <option value='2'>香蕉</option>
        <option value='3'>草莓</option>
        <option value='4'>葡萄</option>
        <option value='5'>梨</option>
      </select>
    )
  }
}

*/

// 摘抄的网上的一段代码
// 代码来源于《深入React技术栈》2.1.4节
// 需求 当点击button时二维码显示  点击除二维码之外的区域二维码消失
// 当如下设置的时候 点击二维码区域也会消失
class QrCode extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickQr = this.handleClickQr.bind(this);
    this.state = {
      active: false,
    };
  }
  
  componentDidMount() {
    document.addEventListener('click', e => {
      this.setState({
        active: false
      })
    });
    
  }

  componentWillUnmount() {
    // document.body.removeEventListener('click');
  }
  
  handleClick(e) {
    e.nativeEvent.stopImmediatePropagation()
    this.setState({
      active: !this.state.active,
    });
  }
  
  handleClickQr(e) {
    e.nativeEvent.stopImmediatePropagation()
  }

  render() {
    return (
      <div className="qr-wrapper">
        <button className="qr" onClick={this.handleClick}>二维码</button>
        <div
          className="code"
          style={{ display: this.state.active ? 'block' : 'none' }}
        >
          <div className="qrCode" style={{width:'200px',height:'200px',backgroundColor:'red'}} onClick={this.handleClickQr}></div>
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <QrCode />,
  document.getElementById("app")
); 