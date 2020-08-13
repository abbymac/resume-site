import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const ProjectItem = ({ project }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <Grid item xs={12} sm={4}>
      <ProjectCard isVisible={isVisible} ref={domRef}>
        <CardImage
          component="img"
          alt={project.name + " image"}
          height="140"
          image={project.image}
          title={project.name + " image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.about}
          </Typography>
        </CardContent>
        <LinkSection>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(`${project.link}`, "_blank")}
          >
            Github
          </Button>
        </LinkSection>
      </ProjectCard>
    </Grid>
  );
};

export default ProjectItem;

const LinkSection = styled(CardActions)`
  background-color: #f4f3f4;
  border-radius: 6px;
`;

const CardImage = styled(CardMedia)`
  height: 60%;
  position: relative;
  overflow: hidden;
  width: 80%;
  margin: -30px auto 0 auto;
  border-radius: 6px;
  &.MuiCardMedia-media {
    width: 80%;
    margin: -30px auto 0 auto;
    max-height: 200px;
  }
  &.MuiCardMedia-img {
    object-fit: fill;
  }
  box-shadow: 0 8px 15px -12px rgba(0, 0, 0, 0.56),
    0 4px 15px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;
const ProjectCard = styled(Card)`
  &.MuiCard-root {
    overflow: visible;
    background-color: #f4f3f4;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;
