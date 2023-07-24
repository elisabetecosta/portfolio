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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, non a rem illo dolore soluta adipisci corrupti.</p>
                        <button onClick={() => console.log("clicked")}>Let’s connect <ArrowRightCircle size={25} /></button>
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