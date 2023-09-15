import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import backgroundImage from "../assets/img/color-sharp2.png"
import "./Projects.css"

function Projects() {

    const projects = [
        {
            title: "TinDog",
            description: "HTML, CSS, JavaScript, Bootstrap",
            imgUrl: projImg1,
            githubUrl: "https://github.com/elisabetecosta/tindog-app",
            pageUrl: "",
        },
        {
            title: "Wok This Way",
            description: "HTML, CSS, JavaScript, NodeJS, Express, MongoDB",
            imgUrl: projImg2,
            githubUrl: "https://github.com/elisabetecosta/wok-this-way",
            pageUrl: "",
        },
        {
            title: "Meowmery",
            description: "React Native",
            imgUrl: projImg3,
            githubUrl: "",
            pageUrl: "",
        },
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: projImg4
        // },
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: projImg5
        // },
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: projImg6
        // },
    ]

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