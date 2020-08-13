import React from "react";
import styled from "styled-components";

import ResumeItem from "./ResumeItem";
import Knotel from "../images/Knotel.png";
import HSB from "../images/HSB.png";

const Experiences = ({ id }) => {
  var Positions = [
    {
      title: "Full Stack Engineer",
      company: "Knotel",
      years: "November 2019 - February 2020",
      description:
        "Managed company website built with React/Typescript, Node.js, and Express and leveraging Contentful and Marketo integrations. I contributed to core internal API written with Ruby on Rails. Created dashboards in Looker to manage available properties over worldwide markets",
      logo: Knotel,
    },
    {
      title: "Marketing Analyst",
      company: "Knotel",
      years: "September 2018 - November 2019",
      description:
        "Built an automation program to manage property flyers' creation using Google Suite API in Python. As part of being selected for a mentorship programming with the engineering department, I developed a React Native app for implementation managers to enable tracking of property buildout progress. Spearheaded buildout of BI analytics across channels with both Tableau and Looker. Oversaw and executed all domestic and international email marketing initatives.",
      logo: Knotel,
    },
    {
      title: "Engineering Intern, Emerging Technologies",
      company: "Hartford Steam Boiler",
      years: "Summer 2017",
      description:
        "Created an Excel spreadsheet with Visual Basic to automatically calculate suggested premiums. This spreadsheet was used throughout the company. Wrote extensive analytical research debriefs on potential insurable technologies.",
      logo: HSB,
    },
  ];

  return (
    <Container id={id}>
      <InnerContainer>
        <Header>Professional Experience</Header>
        <p style={{ lineHeight: "1.5em" }}>
          After graduating college with a degree in mechanical engineering, I
          knew I wanted to work in analytics. It was while I was working as a
          marketing analyst focused on business intelligence that I realized I
          really wanted to expand into programming. I found a mentor in Knotel’s
          engineering department, who gave me my first project. At night and
          over weekends, I worked to improve my programming skills. A few more
          projects for the engineering department, and I was able to officially
          join them.
        </p>
        {Positions.map((position, i) => {
          return <ResumeItem details={position} key={i} />;
        })}
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #333;
`;
const Header = styled.h1`
  color: #5c80a3;
`;
const InnerContainer = styled.div`
  width: 80%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default Experiences;
