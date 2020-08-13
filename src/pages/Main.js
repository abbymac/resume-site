import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

import Background from "../images/heroImage.jpg";
import BackgroundSm from "../images/smHeroImage.jpg";
import About from "./About";
// import About from "./AboutTest";

import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

import Skills from "../components/Skills";
import Interests from "../components/Interests";
import DrawImages from "../components/DrawImages";
import pdf from "../Abby_McInerney_Resume.pdf";

const Main = () => {
  const [drawOpen, setDrawOpen] = useState(false);
  const [imageSelect, setImage] = useState("");

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleOpen = (e) => {
    setDrawOpen(true);
    setImage(e.target.src);
  };

  const handleClose = () => {
    setDrawOpen(false);
  };

  return (
    <div>
      <BigContainer>
        <BackgroundContainer>
          <DarkCover>
            <PopContain
              animate={{ scale: 1.5 }}
              transition={{
                duration: 0.5,
              }}
            >
              <h2
                style={{
                  marginBottom: "10px",
                  textShadow: "1px 1px 1px #1B2232",
                  fontWeight: 400,
                }}
              >
                Hi there, I'm Abby.
              </h2>
              <p
                style={{
                  margin: "0 0 10px 0",
                  textShadow: "1px 1px rgb(27, 34, 50)",
                }}
              >
                I'm a Full Stack Engineer
              </p>
              <Sub
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <BodyText>Find out more</BodyText>
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
        <Interests
          images={DrawImages}
          selected={imageSelect}
          openLightbox={openLightbox}
          closeLightbox={closeLightbox}
          currentImage={currentImage}
          viewerIsOpen={viewerIsOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={drawOpen}
        />
      </BigContainer>
    </div>
  );
};

export default Main;

const Resume = styled.a`
  color: #9ebfdc;
  text-decoration: none;
  margin: 10px 0;
  font-size: 12px;

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
  font-size: 14px;
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

  background-image: url(${Background});

  // @media (min-width: 768px) {
  //   background-image: url(${Background});
  // }
  background-color: #d3d3d3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-position: top;
  justify-content: center;
  background-size: cover;
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
