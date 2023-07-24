import { Container, Row, Col } from "react-bootstrap"
import "./Tech.css"

function Tech() {

    return (
        <section className="tech" id="tech">
            <Container>
                <Row>
                    <Col>
                        <div className="tech-bx">
                            <h2>Main Tech</h2>
                            <p>The technologies I work with the most</p>

                            <div className="img-bx">
                                <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML Logo" title="HTML Logo"/>
                                <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS Logo" />
                                <img src="https://abrudz.github.io/logos/JS.svg" alt="JavaScript Logo" />
                                <img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="NodeJS Logo" />
                                <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="MongoDB Logo" />
                                <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="Typescript Logo" />
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React Logo" />
                            </div>

                            <h2>Other Tech</h2>
                            <p>Other technologies I work with</p>
                            <div className="img-bx">
                                <img src="https://cdn.worldvectorlogo.com/logos/mysql-logo.svg" alt="MySQL Logo" />
                                <img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" alt="React Native Logo" />
                                <img src="https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" alt="Wordpress Logo" />
                                <img src="https://cdn.worldvectorlogo.com/logos/php-1.svg" alt="PHP Logo" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Tech