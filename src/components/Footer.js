import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Footer = ({ transparent }) => (
  <FooterContainer transparent={transparent}>
    <IconButton
      href={"https://github.com/abbymac"}
      rel="noopener"
      target="_blank"
    >
      <GitHubIcon style={{ color: "white" }} />
    </IconButton>
    <IconButton href={"mailto:abbylangmcinerney@gmail.com"}>
      <MailOutlineIcon style={{ color: "white" }} />
    </IconButton>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${(props) =>
    !props.transparent ? "rgba(0,0,0,0)" : "rgb(11, 13, 17)"};
  transition: background-color 0.5s ease;

  position: fixed;
  bottom: 0;
`;
