import React from "react";
import textinfo from "../textInfo";

const projectInfo = textinfo.projectInfo;

const projectDiv = (data) => {
  return (
    <div className="projectDiv">
      <div className="name">{data.name}</div>
      <div className="description">{data.description}</div>
      <div className="tech">
        <img alt="tech" src={process.env.PUBLIC_URL + "/logo/" + data.tech} />
      </div>
      <a className="link" href={data.link} target="_blank" rel="noopener noreferrer">
        More
      </a>
    </div>
  );
};

let comboDiv = (
  <div className="comboDiv">{projectInfo.map((data) => projectDiv(data))}</div>
);

class Project extends React.Component {
  render() {
    return <div className="Project">{comboDiv}</div>;
  }
}

export default Project;
