// 底部的js
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {filter,completed} from '../../actions'
import './footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {completed,todos,Filter,setCompleted} = this.props;
    let left = todos.length - completed
    let canCompleted = (completed>0) && // 过滤数组
        (<a className="clear-completed" onClick={()=>{Filter();setCompleted(0)}}>
          Clear <span>{completed}</span> completed item
        </a>)
    return (
      <footer>
        {canCompleted}
        <div className="todo-count">
          <b>{left}</b>&nbsp;items left
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    Filter: ()=>dispatch(filter()),
    setCompleted:(number) => {
      dispatch(completed(number))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Footer)