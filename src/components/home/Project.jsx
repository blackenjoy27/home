import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Project = ({ heading }) => {
  const [projects] = useState([
    {
      id: 1,
      name: "Octane Decisioning Platform",
      url: "https://octane.co/o/dealers/",
      projectClass: "project1",
    },
    {
      id: 2,
      name: "Enterprise Pharmacy System",
      url: "https://www.changehealthcare.com",
      projectClass: "project2",
    },
    {
      id: 3,
      name: "Continuous Evaluated Pricing Tool",
      url: "https://www.nyse.com/index",
      projectClass: "project3",
    },
  ]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
