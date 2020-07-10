import React from "react";
import styled from "styled-components";

const ResumeItem = ({ details }) => {
  return (
    <ExpContain>
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
`;

const ImageBlock = styled.div`
  width: 100px;
  min-width: 100px;
  height: 100px;
`;

const TextBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 0 20px;
`;

const JobTitle = styled.h2`
  margin: 0;
`;

const Company = styled.p`
  margin: 5px 0 0 0;
`;

const Description = styled.p`
  font-size: 12px;
`;
