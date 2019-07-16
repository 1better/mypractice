// 底部的js
import React,{Component} from 'react'
import './footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let completedNumber = this.props.completedNumber;
    let a;
    if (completedNumber) {
      a = (
        // 过滤数组
        <a className="clear-completed" onClick={this.props.onFilter}>
          Clear <span>{completedNumber}</span> completed item
        </a>
      );
    }
    return (
      <footer>
        {a}
        <div className="todo-count">
          <b>{this.props.leftNumber}</b>&nbsp;items left
        </div>
      </footer>
    );
  }
}

export default Footer