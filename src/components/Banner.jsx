import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import "./Banner.css"

function Banner() {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hi! My name is Elisabete Costa.</span>
                        <h1>I’m a fullstack web developer</h1>
                        <p>Explore this page to find more about what I do or how to contact me.</p>
                        <a href="#connect">Let’s connect <ArrowRightCircle size={25} /></a>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner