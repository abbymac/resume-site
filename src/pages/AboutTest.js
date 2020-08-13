import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

import PHL from "../images/PHL.jpg";
import Chapel from "../images/Chapel.jpeg";
import Headshot from "../images/Headshot.jpeg";

import AboutMeText from "../components/AboutMeText";

const About = ({ id }) => {
  return (
    <BigContainer id={id}>
      <DarkCover>
        <Avatar
          alt="abby mcinerney"
          src={Headshot}
          style={{ height: "200px", width: "200px" }}
        />
        <ModuleContain>
          <Modal>
            <Title>About me</Title>
          </Modal>
        </ModuleContain>
      </DarkCover>
    </BigContainer>
  );
};

export default About;

const BigContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px 0 40px 0;
  display: flex;
  justify-content: center;
`;

const DarkCover = styled.div`
  width: 70%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModuleContain = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Modal = styled.div``;
