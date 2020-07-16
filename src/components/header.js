import React from "react";

class NavItem extends React.Component {
  setActive = (e) => {
    console.log(e.target.id);
    this.props.getActive(e.target.id);
  };
  render() {
    console.log(this.props.active, this.props.value);
    let Class = "NavItem";
    if (this.props.value === parseInt(this.props.active)) {
      Class = "NavItem active";
    }
    return (
      <div
        className={Class}
        id={parseInt(this.props.value.toString())}
        onClick={this.setActive}
      >
        {this.props.name}
      </div>
    );
  }
}

const linkedIn = (
  <a
    className="linkedinLink"
    href="https://www.linkedin.com/in/zhihao-zhou-734552a5/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="LinkedinLogo"
      alt="Linkedin"
      src={process.env.PUBLIC_URL + "/logo/linkedin.svg"}
    />
  </a>
);

const gitHub = (
  <a
    className="gitHubLink"
    href="https://github.com/zzhalex"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="githubLogo"
      alt="github"
      src={process.env.PUBLIC_URL + "/logo/github.svg"}
    />
  </a>
);

class Header extends React.Component {
  getActive = (data) => {
    console.log("------");
    console.log(data);
    this.props.setHeader(data);
  };

  render() {
    const numbers = this.props.numbers;
    const activeIndex = this.props.activeId;

    console.log("Index:", activeIndex);
    const NavItemList = numbers.map((number) => (
      <NavItem
        key={number.id.toString()}
        value={number.id}
        name={number.name}
        active={activeIndex}
        getActive={this.getActive}
      />
    ));
    return (
      <div className="navBar">
        <div className="LinkedinIcon">{linkedIn}</div>
        <div className="GithubIcon">{gitHub}</div>
        <div className="Nav">{NavItemList}</div>
      </div>
    );
  }
}

export default Header;
