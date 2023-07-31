import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import "./Footer.css"

function Footer() {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={5}>
                        <img src={logo} alt="Logo" />
                    </Col>

                    <Col sm={4}>
                        <p>&copy; 2023 by Elisabete Costa</p>
                    </Col>

                    <Col sm={3} className="text-center text-sm-end">
                        <div className="social-icons">
                            <a href="https://github.com/elisabetecosta" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Github" /></a>
                            <a href="https://www.linkedin.com/in/elisabetecosta94" target="_blank" rel="noreferrer"><img src={navIcon2} alt="LinkedIn" /></a>
                            <a href="https://www.instagram.com/elica1994" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer