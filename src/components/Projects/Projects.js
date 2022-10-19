import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dashboard"
              description="React Administrator's Dashboard"
              ghLink="https://github.com/Oyucho/React_Admin_Dashboard"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog"
              description="My personal blog page build with React which takes the content from makdown files."
              ghLink="https://github.com/Oyucho/blog-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Database"
              description="Database Project using Mongodb"
              ghLink="https://github.com/Oyucho/databaseproject"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog"
              description="Markdown Blog diary using EJS."
              ghLink="https://github.com/Oyucho/Markdown_Blog_Diary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Slack Clone"
              description="A clone of Slack Application using React."
              ghLink="https://github.com/Oyucho/react-slack-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dashboard"
              description="Agricultural admin dashboard on an application."
              ghLink="https://github.com/Oyucho/expenss-app-backend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
