import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    display: "inline-flex",
    whiteSpace: "no wrap",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const UpToRank = ({ rank }) =>
  [...Array(5)].map((e, i) => {
    return <Circle filled={i < rank} key={i} />;
  });

const SkillRanks = [
  {
    name: "React",
    rank: 5,
  },
  {
    name: "Python",
    rank: 4,
  },
  {
    name: "Node",
    rank: 3,
  },
  {
    name: "Flask",
    rank: 3,
  },
  {
    name: "SQLAlchemy",
    rank: 3,
  },
  {
    name: "Tableau",
    rank: 5,
  },
  {
    name: "Looker",
    rank: 4,
  },
  {
    name: "React Native",
    rank: 2,
  },
  {
    name: "Typescript",
    rank: 2,
  },
  {
    name: "Salesforce",
    rank: 4,
  },
  {
    name: "Marketo",
    rank: 5,
  },
  {
    name: "Contentful",
    rank: 4,
  },
  {
    name: "SQL",
    rank: 4,
  },
  {
    name: "Google Analytics",
    rank: 4,
  },
];

const Skills = ({ id }) => {
  const classes = useStyles();

  return (
    <Container id={id}>
      <h1>Skills</h1>
      <SkillDescription>
        I'm always looking to improve and learn new technologies. Here are the
        ones I'm most comfortable with.
      </SkillDescription>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {SkillRanks.map((skill, i) => {
            return (
              <Grid
                item
                md={3}
                xs={12}
                sm={4}
                key={i}
                zeroMinWidth
                className={classes.item}
              >
                <div className={classes.paper}>
                  <SkillName>{skill.name}</SkillName>
                  <CircleContain className={classes.paper}>
                    <UpToRank rank={skill.rank} id={i} />
                  </CircleContain>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
};

const CircleContain = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: #fefefe;
`;

const SkillDescription = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin: 0 0 50px 0;
  width: 80%;
`;

const SkillName = styled.div`
  font-size: 20px;
  color: #fefefe;
`;

const Circle = styled.div`
  background-color: ${(props) => (props.filled ? "#5C80A3" : "#333333")};
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  border: 1px solid #5c80a3;
  height: 15px;
  width: 15px;
`;

export default Skills;
