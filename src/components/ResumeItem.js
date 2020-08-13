import React, { useEffect } from "react";
import styled from "styled-components";

const ResumeItem = ({ details }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <ExpContain isVisible={isVisible} ref={domRef}>
      <ImageBlock>
        <img src={details.logo} alt="Knotel Logo" style={{ width: "100%" }} />
      </ImageBlock>
      <TextBlock>
        <JobTitle>{details.title}</JobTitle>
        <Company>
          {details.company} <i>{details.years}</i>
        </Company>
        <Description>{details.description}</Description>
      </TextBlock>
    </ExpContain>
  );
};

export default ResumeItem;

const ExpContain = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 30px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 40px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? "none" : "translateY(10vh)")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 900ms ease-out, transform 400ms ease-out,
    visibility 900ms ease-out;
  will-change: opacity, transform, visibility;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageBlock = styled.div`
  width: 100px;
  min-width: 100px;
  height: 100px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 0 20px;
  @media (max-width: 600px) {
    text-align: center;
    margin: 0;
  }
`;

const JobTitle = styled.h2`
  margin: 0;
  color: #5c80a3;
`;

const Company = styled.p`
  margin: 5px 0 0 0;
`;

const Description = styled.p`
  font-size: 14px;
`;
