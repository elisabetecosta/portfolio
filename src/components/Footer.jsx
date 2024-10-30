import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import "./Footer.css"

function Footer() {

    const date = new Date()
    let currentYear = date.getFullYear()

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={7} md={4} className="text-center text-sm-start">
                        <img src={logo} alt="Logo" className="img-fluid" />
                    </Col>

                    <Col xs={12} sm={5} md={4} className="text-center text-sm-end text-md-center">
                        <p>&copy; 2022-{currentYear} by Elisabete Costa</p>
                    </Col>

                    <Col xs={12} md={4} className="text-center text-sm-end">
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