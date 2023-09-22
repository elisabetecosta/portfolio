import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import projects from "../projects"
import ProjectCard from "./ProjectCard"
import backgroundImage from "../assets/img/color-sharp2.png"
import "./Projects.css"

function Projects() {

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Below you can find some of my work</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">JavaScript</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">HTML & CSS</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
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
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea qui, culpa debitis sapiente aut consectetur recusandae consequatur magni porro molestiae laboriosam labore quae id mollitia nam? Deserunt sed velit architecto.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam fugiat, earum magni dolore reiciendis aliquid, ab distinctio iusto, neque ea repellendus provident omnis possimus ad dolorum ratione eaque error.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            <img src={backgroundImage} alt="" className="background-image-right" />
        </section>
    )
}

export default Projects