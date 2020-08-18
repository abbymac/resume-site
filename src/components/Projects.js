import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import Grid from "@material-ui/core/Grid";

const projectList = [
  {
    name: "Track Recommender",
    image: "https://i.imgur.com/FbbCX4t.png",
    link: "https://github.com/abbymac/TrackRecommender",
    about:
      "Uses Spotify API to display user's recent Liked Songs. After user selects desired seed tracks and defines target audio feature parameters, app displays a list of suggested songs.",
    features: ["OAuth, State Management, React"],
  },
  {
    name: "Chatroom App",
    image: "https://i.imgur.com/byyqY4l.png",
    link: "https://github.com/abbymac/Chatroom-app",
    about:
      "Chatroom app using Websockets. Multiple users enter a chatroom and exchange messages.",
    features: ["Node.js, Websockets, React"],
  },
  {
    name: "Résumé Site",
    image: "https://i.imgur.com/b0AkI8M.png",
    link: "https://github.com/abbymac/resume-site",
    about: "You're seeing it! Built to display background and recent projects.",
    features: ["React, Large Project"],
  },
  {
    name: "ToDo App",
    image: "https://i.imgur.com/O8m4L5g.png",
    link: "https://github.com/abbymac/todo-app",
    about: "Simple ToDo React app. Hide and show completed items.",
    features: ["React Reducers", "State Management", "React"],
  },
];

const Projects = ({ id }) => (
  <Container id={id}>
    <Title>Recent Projects</Title>
    <InnerContainer container spacing={5} justify="center">
      {projectList.map((project, i) => (
        <ProjectItem project={project} key={i} />
      ))}
    </InnerContainer>
  </Container>
);

export default Projects;

const Title = styled.div`
  font-size: 50px;
  color: #f4f4f4;
  font-weight: 200;
  margin: 0 0 60px 0;
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 40px 40px 90px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5c80a3;
`;

const InnerContainer = styled(Grid)`
  width: 70%;
`;
