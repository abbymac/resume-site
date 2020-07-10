import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

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
          to="interests"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Extra
        </NavItem>
      </Left>
      <Right />
    </NavContain>
  );
};

export default NavBar;

const Left = styled.div`
  flex-grow: 1;
`;

const Right = styled.div`
  flex-grow: 2;
`;

const NavContain = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 100vw;
  height: 60px;
  z-index: 1000;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.15);
  display: inline-flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background-color: ${(props) =>
    !props.transparent ? "rgba(0,0,0,0)" : "#333333"};
  padding-left: 20px;
  justify-content: flex-start;
`;

const NavItem = styled(Link)`
  color: #f2f2f2;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #f0544f;
    cursor: pointer;
  }
  &.active {
    color: #f0544f;
    transition: all 0.2s linear;
  }
`;
