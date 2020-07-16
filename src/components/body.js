import React from "react";
import Profile from "./profile";
import Project from "./project";
import Demo from "./demo";

class Body extends React.Component {
  render() {
    let id = parseInt(this.props.activeId);
    let content;
    switch (id) {
      case 1:
        content = <Profile />;
        break;
      case 2:
        content = <Project />;
        break;
      case 3:
        content = <Demo />;
        break;
      default:
        content = <Profile />;
    }

    return <div className="BodyPart">{content}</div>;
  }
}

export default Body;
