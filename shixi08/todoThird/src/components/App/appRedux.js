import React, { Component } from "react";
import redux from "redux";
import Header from '../Header/header.js'
import Main from '../Main/main.js'
import NoUse from '../Nouse/nouse.js'
class App extends Component {
  render() {
    return (
      <div>
        <div className="todoapp">
          <Header />
          <Main />
        </div>
        <NoUse />
      </div>
    );
  }
}

export default App
