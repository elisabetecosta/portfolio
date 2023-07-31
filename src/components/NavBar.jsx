import { useState, useEffect } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import "./NavBar.css"

function NavBar() {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {

        const onScroll = () => {

            if (window.scrollY > 50) setScrolled(true)
            else setScrolled(false)

        }
        
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])


    const onUpdateActiveLink = (value) => setActiveLink(value)

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link
                            href="#home"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("home")}>
                            Home
                        </Nav.Link>

                        <Nav.Link
                            href="#tech"
                            className={activeLink === "tech" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("tech")}>
                            Tech
                        </Nav.Link>

                        <Nav.Link
                            href="#projects"
                            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("projects")}>
                            Projects
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="https://github.com/elisabetecosta" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Github" /></a>
                            <a href="https://www.linkedin.com/in/elisabetecosta94" target="_blank" rel="noreferrer"><img src={navIcon2} alt="LinkedIn" /></a>
                            <a href="https://www.instagram.com/elica1994" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <a href="#connect" className="button vvd"><span>Let’s Connect</span></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar