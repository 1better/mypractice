import React, { Component } from "react";
import Header from '../Header/header.js'
import Main from '../Main/main.js'
import Footer from '../Footer/footer.js'
import NoUse from '../Nouse/nouse.js'
import './app.css'
import {connect} from 'react-redux'
class App extends Component {
  render() {
    let {todos} = this.props
    let main,footer
    if(todos.length) {
      main = <Main />
      footer = <Footer />
    }
    return (
      <div>
        <div className="todoapp">
          <Header />
          {main}
          {footer}
        </div>
        <NoUse />
      </div>
    );
  }
}

const mapToStateProps = (state)=>{
  return {...state}
}
export default connect(mapToStateProps)(App)
