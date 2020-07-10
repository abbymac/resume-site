import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

import PHL from "../images/PHL.jpg";
import Chapel from "../images/Chapel.jpeg";
import Headshot from "../images/Headshot.jpeg";

import AboutMeText from "../components/AboutMeText";

const About = ({ id }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>is loading</p>
      ) : (
        <BigContainer id={id}>
          <DarkCover>
            <Avatar
              alt="abby mcinerney"
              src={Headshot}
              style={{ height: "200px", width: "200px" }}
            />
            <Title>About Me</Title>
            <SingleColumn>
              <DescriptionText>{AboutMeText}</DescriptionText>
            </SingleColumn>
            <TwoColumn>
              <Avatar
                alt="Portland Head Light"
                src={PHL}
                style={{ height: "150px", width: "150px" }}
              />
              <DescriptionContain>
                <h2>Where I'm From</h2>
                <DescriptionText
                  style={{ fontFamily: "'Raleway', 'sans-serif'" }}
                >
                  I grew up in Cape Elizabeth, Maine; a small town (we didn't
                  get a stoplight until 2012) just outside of Portland. It's
                  home to the most photographed lighthouse in the world,
                  Portland Headlight.
                </DescriptionText>
              </DescriptionContain>
            </TwoColumn>
            <TwoColumn reverse>
              <Avatar
                alt="Portland Head Light"
                src={Chapel}
                style={{ height: "150px", width: "150px" }}
              />
              <DescriptionContain left>
                <h2>Education</h2>
                <DescriptionText
                  style={{ fontFamily: "'Raleway', 'sans-serif'" }}
                >
                  I graduated from Trinity College in May of 2018 with a
                  Bachelor's of Science in Mechanical Engineering. While there I
                  was a four year starter on the nationally ranked varsity
                  Women's Lacrosse Team, where I competed in 2 national
                  championship games, 3 final fours, and 4 conference
                  championships.
                  <br />
                  <br />I balanced athletic comittments, a part-time job, being
                  vice-president of our college's SWE chapter, and a rigerous
                  academic courseload.
                </DescriptionText>
              </DescriptionContain>
            </TwoColumn>
          </DarkCover>
        </BigContainer>
      )}
    </div>
  );
};

export default About;

const BigContainer = styled.div`
  background-color: #8c93a8;
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

const DescriptionContain = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: ${(props) => (props.left ? "0px" : "50px")};
  margin-right: ${(props) => (props.left ? "50px" : "0px")};
  @media (max-width: 768px) {
    margin: 10px 0 0 0 !important;
  }
`;

const DescriptionText = styled.p`
  color: #333;
  margin-top: 0;
  font-size: 1.2em;
  line-height: 1.3em;
`;
const SingleColumn = styled.div`
  margin: auto;
`;
const TwoColumn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & > h2 {
    color: #cfd8dc;
  }
  margin-top: 30px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;

const Title = styled.h1`
  margin: 10px 0 10px 0;
  color: #cfd8dc;
`;
