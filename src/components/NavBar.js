import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

import pdf from "../Abby_McInerney_Resume.pdf";
import { List, ListItem, ListItemText } from "@material-ui/core";

const NavBar = ({ transparent }) => {
  return (
    <NavContain transparent={transparent}>
      <Left>
        <NavItem
          activeClass="active"
          to="experiences"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Experience
        </NavItem>
        <NavItem
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Skills
        </NavItem>
        <NavItem
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          About Me
        </NavItem>
        <NavItem
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Projects
        </NavItem>
        <Resume activeClass="active" href={pdf} target="_blank">
          Resume
        </Resume>
      </Left>
    </NavContain>
  );
};

export default NavBar;

const Left = styled.div`
  flex-grow: 1;
  padding-left: 20px;
`;

const NavContain = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 100vw;
  height: 60px;
  z-index: 1000;
  box-shadow: ${(props) =>
    !props.transparent ? "none" : "0 0px 4px 0 rgba(0, 0, 0, 0.15)"};
  display: inline-flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: background-color 0.5s ease;

  background-color: ${(props) =>
    !props.transparent ? "rgba(0,0,0,0)" : "rgb(11, 13, 17)"};
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Resume = styled.a`
  color: #f2f2f2;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #75829e;
    cursor: pointer;
  }
  &.active {
    color: #5c80a3;
    transition: all 0.2s linear;
  }
`;

const NavItem = styled(Link)`
  color: #f2f2f2;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #75829e;
    cursor: pointer;
  }
  &.active {
    color: #5c80a3;
    transition: all 0.2s linear;
  }
`;
