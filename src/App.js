import React from "react";
import "./App.css";

import Header from "./components/header";
import Body from "./components/body";

import textInfo from "./textInfo";

let headerInfo = textInfo.headerinfo;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navItems: headerInfo, activeId: 1 };
  }

  setHeader = (data) => {
    console.log("APP");
    console.log(data);
    this.setState({
      activeId:data
    })
  };
  render() {
    let Nav = this.state.navItems
    let activeId = this.state.activeId
    return (
      <div className="App">
        <Header numbers={Nav} activeId={activeId} setHeader={this.setHeader} />
        <Body activeId = {activeId} />
      </div>
    );
  }
}

export default App;
