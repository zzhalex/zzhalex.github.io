import React from "react";
import textinfo from "../textInfo";

const demoInfo = textinfo.demoInfo.app;
const subtitle = textinfo.demoInfo.subtitle;
const title = textinfo.demoInfo.title;
const demoDiv = (data) => {
  return (
    <div className="demoDiv">
      <a
        className="link"
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.name}{" "}
      </a>
    </div>
  );
};

let leftSide = (
  <div className="leftSide">
    {" "}
    <img
      className="herokuLogo"
      alt="Heroku"
      src={process.env.PUBLIC_URL + "/logo/heroku.svg"}
    />
    {demoInfo.map((data) => demoDiv(data))}
  </div>
);

let rightSide = (
  <div className="rightSide">
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
  </div>
);

class Demo extends React.Component {
  render() {
    return (
      <div className="Demo">
        {leftSide}
        {rightSide}
      </div>
    );
  }
}

export default Demo;
