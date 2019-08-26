import React,{Component} from 'react'
import {connect} from 'react-redux';

class Other extends Component {
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}

export default connect()(Other)