import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ImageSizes from "../components/ImageSizes";
import About from "./About";
import { useMediaQuery } from "react-responsive";

import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

import Skills from "../components/Skills";

import pdf from "../Abby_McInerney_Resume.pdf";

const Main = ({ mobile }) => {
  return (
    <div>
      <BigContainer>
        <BackgroundContainer mobile={mobile}>
          <DarkCover>
            <PopContain
              animate={{ scale: 1.5 }}
              transition={{
                duration: 0.5,
              }}
            >
              <LargeText>Hi there, I'm Abby.</LargeText>
              <TagText mobile={mobile}>I'm a Full Stack Engineer</TagText>
              <Sub
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={mobile ? 0 : -60}
                duration={500}
              >
                <BodyText mobile={mobile}>Find out more</BodyText>
                <Arrow />
              </Sub>
              <Resume href={pdf} target="_blank">
                Grab a PDF of my Resume
              </Resume>
            </PopContain>
          </DarkCover>
        </BackgroundContainer>
        <Experiences id="experiences" />
        <Skills id="skills" />
        <About id="about" />
        <Projects id="projects" />
      </BigContainer>
    </div>
  );
};

export default Main;

const LargeText = styled.h2`
  margin: 10px;
  text-shadow: 1px 1px 1px #1b2232;
  font-weight: 400;
`;

const TagText = styled.p`
  margin: 0 0 10px 0;
  text-shadow: 1px 1px rgb(27, 34, 50);
  font-size: ${(props) => (props.mobile ? "13px" : "16px")};
`;

const Resume = styled.a`
  color: #9ebfdc;
  text-decoration: none;
  margin: 10px 0;
  font-size: ${(props) => (props.mobile ? "8px" : "12px")};

  &:hover {
    color: #f4f3f4;
    cursor: pointer;
  }
  &.active {
    color: #f4f3f4;
    transition: all 0.2s linear;
  }
`;

const Arrow = styled.div`
  border: solid white;
  height: 10px;
  width: 10px;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;
const BodyText = styled.p`
  font-size: ${(props) => (props.mobile ? "11px" : "14px")};

  color: #fefefe;
  margin: 0 10px 0 0;
`;

const Sub = styled(Link)`
  display: inline-flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &:hover > ${Arrow} {
    transform: rotate(45deg);
    border: solid #9ebfdc;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    transition: all 0.5s ease;
  }
  &:hover > ${BodyText} {
    color: #9ebfdc;
    transition: all 0.5s ease;
  }
  &.active {
    border-bottom: 1px solid #fefefe;
  }
`;

const PopContain = styled(motion.div)`
  width: 450px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 30px;
`;

const BackgroundContainer = styled.div`
  height: 100vh;
  background-color: rgb(11, 13, 17);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-position: top;
  justify-content: center;
  background-size: cover;

  background-image: ${(props) =>
    props.mobile ? "none" : `url(${ImageSizes.heroImage.large.src})`};

  // @media (max-width: 768px) {
  //   background-image: url(${ImageSizes.heroImage.medium.src});
  // }
  // @media (max-width: 375px) {
  //   background-image: url(${ImageSizes.heroImage.small.src});
  // }
  // @media (max-width: 360px) {
  //   background-image: url(${ImageSizes.heroImage.extraSm.src});
  // }
`;

const BigContainer = styled.div`
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", "sans-serif";
`;

const DarkCover = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
