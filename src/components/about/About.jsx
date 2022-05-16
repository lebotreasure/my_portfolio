import React from "react";
import "./about.scss";
import { makeStyles } from "@material-ui/core/styles";
// import ListItem from "@material-ui/core/ListItem";
import ProgrammingComponent from "../programming/Programming";
import ExperienceComponent from "../portfolio/Portfolio";
import Button from "@material-ui/core/Button";
import "pure-react-carousel/dist/react-carousel.es.css";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ProjectsComponent from "../projects/Projects";
import FooterComponent from "../footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 25,
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 24,
  },
  brand: {
    color: "#fd7070",
    fontWeight: 500,
  },
  pos: {
    marginBottom: 12,
  },
  padding: {
    padding: 27,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function Contact() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Card>
          <CardContent>
            <h2>
              Hello, I'm <span className={classes.brand}>Lebohang Khaeane</span>
            </h2>

            <Typography className={classes.pos}>
              I am Software Developer from Johannesburg. I have graduated with a Bachelor's
              Degree, from Pearson Institute of Higher Education now known as Eduvos. I have 1 year of experience of
              building and maintaining Websites and Web Application. I enjoy working with different programming languages and frameworks
              Javascript, React, Redux, Html, CSS, SCSS, Bootstrap, MUI, Angular, Typescript,
              NextJS, NestJS, NodeJS.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              className="link"
              href="https://drive.google.com/file/d/1rSgR6zXRusbxP6jcobgkj-FpgHIU9UDe/view?usp=sharing"            >
              {" "}
              <Button variant="outlined">View CV</Button>
            </a>
          </CardActions>
        </Card>
      </div>
      <div className={classes.padding}>
        <ProgrammingComponent></ProgrammingComponent>
        <ExperienceComponent></ExperienceComponent>
        <ProjectsComponent></ProjectsComponent>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}
