import { Container, Row, Col } from "react-bootstrap"
import projects from "../projects"
import ProjectCard from "./ProjectCard"

import "./Projects.css"

function Projects() {

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Below you can find some of my work</p>


                    </Col>
                </Row>

                <Row>
                    {
                        projects.map((project, index) =>
                        (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                        )
                        )
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Projects