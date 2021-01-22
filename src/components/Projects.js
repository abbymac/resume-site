import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import Grid from "@material-ui/core/Grid";

const projectList = [
  {
    name: "Competition Tracker",
    image: "https://i.imgur.com/iji9voe.png",
    link: "https://github.com/abbymac/competition-tracker",
    about:
      "Competition Tracker built for Udacity capstone project. App communicates with Postgres DB through SQLAlchemy and returns relevant Athlete/Venue/Race information. Users can add, delete, and edit Athlete/Venue/Race. Authentication is required to perform actions beyond GET requests. API functionality is built in through /api/athletes etc. See github page for full explaination. API component deployed on Heroku at: https://capstone-competition-tracker.herokuapp.com/",
    features: ["Flask", "Python", "PostgreSQL", "React", "API", "Auth0"],
  },
  {
    name: "Coffee Shop App",
    image: "https://i.imgur.com/y3txOKx.png",
    link: "https://github.com/abbymac/coffee_shop",
    about:
      "Coffee Shop menu app built for a Udacity project. Focuses on API development and authentication flow using Auth0.",
    features: ["Flask", "Python", "PostgreSQL", "Angular", "API", "Auth0"],
  },
  {
    name: "Trivia",
    image: "https://i.imgur.com/C1vqgBT.png",
    link: "https://github.com/abbymac/UdacityTrivia",
    about:
      "Trivia Api built for Udacity project. App communicates with Postgres DB through SQLAlchemy and returns relevant trivia questions. Users can add, delete, and edit questions.",
    features: ["Flask", "Python", "PostgreSQL", "React"],
  },
  {
    name: "Track Recommender",
    image: "https://i.imgur.com/FbbCX4t.png",
    link: "https://github.com/abbymac/TrackRecommender",
    about:
      "Uses Spotify API to display user's recent Liked Songs. After user selects desired seed tracks and defines target audio feature parameters, app displays a list of suggested songs.",
    features: ["OAuth", "State Management", "React"],
  },
  {
    name: "Chatroom App",
    image: "https://i.imgur.com/byyqY4l.png",
    link: "https://github.com/abbymac/Chatroom-app",
    about:
      "Chatroom app using Websockets. Multiple users enter a chatroom and exchange messages.",
    features: ["Node.js", "Websockets", "React"],
  },
  {
    name: "Résumé Site",
    image: "https://i.imgur.com/b0AkI8M.png",
    link: "https://github.com/abbymac/resume-site",
    about: "You're seeing it! Built to display background and recent projects.",
    features: ["React", "GithubPages"],
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
