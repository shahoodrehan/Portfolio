import { Container, Row, Col } from "react-bootstrap";

import logo from "../Assets/img/logo.svg";
import navIcon1 from '../Assets/img/linkedIn.svg';
import navIcon2 from '../Assets/img/facebook.svg';
import navIcon3 from '../Assets/img/instagram.svg';
import navIcon4 from '../Assets/img/gmail.svg';
import navIcon5 from '../Assets/img/github.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                   
                    <Col className="text-center text-sm-end">
                        <div className="social-icon">
                            <a id="github" href="https://github.com/shahoodrehan"><img src={navIcon5} alt="" /></a>
                            <a id="linkedIn" href="https://www.linkedin.com/in/muhammad-shahood-rehan-76484226a/"><img src={navIcon1} alt="" /></a>
                            <a id="gmail" href="mailto:shahoodrehan57@gmail.com"><img src={navIcon4} alt="" /></a>
                            <a id="facebook" href="https://www.facebook.com/profile.php?id=100017072890483&mibextid=2JQ9oc"><img src={navIcon2} alt="" /></a>
                            <a id="instagram" href="https://www.instagram.com/shahood.rehan?igsh=MTRra2U2OXM2emU3dA=="><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright © Shahood Rehan 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
