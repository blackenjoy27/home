import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const { name, url, projectClass } = value;
  return (
    <Col md={6}>
      <Card
        className={`card shadow-lg p-3 mb-5 bg-white rounded ${projectClass}`}
      >
        <Card.Body>
          {url ? <CardButtons svn_url={url} /> : <Skeleton count={2} />}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <a
      href={svn_url}
      target=" _blank"
      className="btn btn-outline-secondary projectCard-bone"
    >
      View
    </a>
  );
};

export default ProjectCard;
