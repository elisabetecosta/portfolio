import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"
import "./Contact.css"

function Contact() {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => setFormDetails({ ...formDetails, [category]: value })

    const handleSubmit = async (e) => {

        e.preventDefault()
        setButtonText('Sending...')

        const form = e.target

        // Dynamically set the form action and method
        form.action = "https://formsubmit.co/myemail@gmail.com"
        form.method = "POST"

        try {

            // Send the form data using fetch
            const response = await fetch(form.action, {
              method: form.method,
              body: new FormData(form),
            })

            // Reset the form after submission
            setFormDetails(formInitialDetails)
            setButtonText("Send")

            // Update status based on the response
            if (response.ok) {
              setStatus({ success: true, message: "Message sent successfully." })
            } else {
              setStatus({
                success: false,
                message: "Something went wrong. Please, try again later.",
              })
            }
        } catch (error) {
            console.error(error)
            setStatus({ success: false, message: "Something went wrong." })
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me" />
                    </Col>

                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstName" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastName" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" placeholder="Email Address" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="tel" name="tel" placeholder="Phone Number" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>

                                <Col>
                                    <textarea rows="6" name="message" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>

                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === true ? "success" : "danger"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact