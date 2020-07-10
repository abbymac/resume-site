import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

import Background from "../images/337.jpg";
import About from "./About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import DrawImages from "../components/DrawImages";

const Main = () => {
  const [isLoading, setLoading] = useState(true);
  const [drawOpen, setDrawOpen] = useState(false);
  const [imageSelect, setImage] = useState("");

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleOpen = (e) => {
    console.log("in onclick");
    console.log("e>", e);
    console.log("e + ", e.target.src);
    setDrawOpen(true);
    setImage(e.target.src);
  };

  const handleClose = () => {
    setDrawOpen(false);
  };

  return (
    <div>
      {isLoading ? (
        <BlackBg />
      ) : (
        <BigContainer>
          <BackgroundContainer>
            <DarkCover>
              <PopContain
                initial={{ scale: 0, rotate: 60 }}
                animate={{ rotate: 0, scale: 1.5 }}
                transition={{
                  type: "spring",
                  stiffness: 560,
                  damping: 20,
                }}
              >
                <h2
                  style={{
                    marginBottom: "10px",
                    textShadow: "2px 2px #333",
                  }}
                >
                  Hi there, I'm Abby
                </h2>
                <p style={{ margin: "0 0 10px 0", textShadow: "1px 1px #111" }}>
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
              </PopContain>
            </DarkCover>
          </BackgroundContainer>
          <Experiences id="experiences" />
          <Skills id="skills" />
          <About id="about" />
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
      )}
    </div>
  );
};

export default Main;

const BlackBg = styled.div`
  height: 100%;
  width: 100vw;
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
    border: solid #f0544f;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    transition: all 0.5s ease;
  }
  &:hover > ${BodyText} {
    color: #f0544f;
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
  // height: calc(100vh - 60px);
  height: 100vh;

  background-image: url(${Background});
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
