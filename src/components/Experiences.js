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
        "As a full stack engineer at Knotel, I learned how to work on a professional engineering team. Git was learned, CircleCI was used, and clean code was written. This experience further confirmed my desire to work as a full stack engineer. Some of the key projects had were:",
      responsibilities: [
        "Managed the company's website built with React, Typescript, Express, and leveraging both Contentful and Marketo integrationos",
        "Contributed to core internal API written in Ruby on Rails",
        "Created dashboards in Looker for AEs across all markets to track properties",
      ],

      logo: Knotel,
    },
    {
      title: "Marketing Analyst",
      company: "Knotel",
      years: "September 2018 - November 2019",
      description:
        "In this role I was able to design, create, and implement tools to improve performance. I regularly worked with various department heads to improve or create new initiatives that would better serve our company and our clients. Some examples are:",
      responsibilities: [
        "Created property flyer automation program with Google Suite API in Python",
        "Developed React Native app for implementation managers to track property buildout progress more effectively",
        "Spearheaded the buildout of BI and Marketing analytics reporting",
        "Oversaw and executed all domestic and international email marketing initiatives",
      ],
      logo: Knotel,
    },
    {
      title: "Engineering Intern, Emerging Technologies",
      company: "Hartford Steam Boiler",
      years: "Summer 2017",
      description:
        "While an intern at Hartford Steam Boiler, I worked alongside seasoned mechanical, electrical, and chemical engineers: exposing me to a wide variety of career paths. Here, I had my first in-depth and professional programming assignment where I had to learn a language (Visual Basic) that I had never used before.",
      responsibilities: [
        "Created an Excel spreadsheet with Visual Basic to be used by underwriters to automatically calculate suggested premiums",
        "Wrote extensive analytical research debriefs on potential insurable technologies.",
      ],

      logo: HSB,
    },
  ];

  return (
    <Container id={id}>
      <InnerContainer>
        <Header>Professional Experience</Header>
        <p style={{ lineHeight: "1.5em" }}>
          Through my mechanical engineering degree, I grew an appreciation for
          data analytics and computer science. After graduation in 2018, I
          worked as a marketing analyst at a mid-stage startup where I
          predominately focused on business intelligence analytics. This
          experience allowed me to explore several avenues beyond what was
          initially in my job description: including development. The more I
          worked on front-end projects and developing more elegant BI solutions,
          the more I wanted to continue on this new path. As several of my
          projects were used company wide, one of the full stack engineers
          offered to become a mentor to me until I was able to join the
          engineering team as a full stack engineer myself.
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
