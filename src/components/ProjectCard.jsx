import PropTypes from "prop-types"
import { Col } from "react-bootstrap"
import githubIcon from "../assets/img/nav-icon1.svg"
import pageIcon from "../assets/img/website-link.svg"

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    pageUrl: PropTypes.string,
}

function ProjectCard({ title, description, imgUrl, githubUrl, pageUrl }) {

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="proj-icons">
                        <a href={pageUrl} target="_blank" rel="noreferrer"><img src={pageIcon} alt="Visit" /></a>
                        <a href={githubUrl} target="_blank" rel="noreferrer"><img src={githubIcon} alt="Github" /></a>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard