import React from "react";
import textinfo from "../textInfo";

let homepageInfo = textinfo.homepageInfo;
let resumeInfo = textinfo.resumeInfo;
let expDiv = (data) => {
  return (
    <div className="expDiv" key={data.company}>
      <div className="companyName">
        {data.company}
        <span className="location">{data.location}</span>
      </div>
      <div className="position">
        {data.position} <span className="time">{data.time}</span>
      </div>
    </div>
  );
};

let workExp = resumeInfo.work.map((work) => expDiv(work));
let eduExp = expDiv(resumeInfo.education);

let leftSide = (
  <div className="leftSide">
    <div className="leftSideContent">
      <div className="title">{homepageInfo.leftSideTitle}</div>
      <div className="subtitle">{homepageInfo.leftSideSubtitle}</div>
    </div>
  </div>
);
let rightSide = (
  <div className="rightSide">
    <div className="rightSideContent">
      <div className="work">
        <h3 className="title">Work Experience</h3>
        {workExp}
      </div>
      <div className="edcuation">
        <h3 className="title">Education</h3>
        {eduExp}
      </div>
    </div>
  </div>
);

// let profileBody =
class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        {leftSide}
        {rightSide}
      </div>
    );
  }
}

export default Profile;
