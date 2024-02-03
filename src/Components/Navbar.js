import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import picture from '../Assets/img/logo.svg';
import navIcon1 from '../Assets/img/linkedIn.svg';
import navIcon2 from '../Assets/img/facebook.svg';
import navIcon3 from '../Assets/img/instagram.svg';
import navIcon4 from '../Assets/img/gmail.svg';
import navIcon5 from '../Assets/img/github.png';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }

        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scroll ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={picture} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : ' navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : ' navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : ' navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a id="github" href="https://github.com/shahoodrehan"><img src={navIcon5} alt="" /></a>
                            <a id="linkedIn" href="https://www.linkedin.com/in/muhammad-shahood-rehan-76484226a/"><img src={navIcon1} alt="" /></a>
                            <a id="gmail" href="mailto:shahoodrehan57@gmail.com"><img src={navIcon4} alt="" /></a>
                            <a id= "facebook" href="#"><img src={navIcon2} alt="" /></a>
                            <a id="instagram" href="https://www.instagram.com/shahood.rehan?igsh=MTRra2U2OXM2emU3dA=="><img src={navIcon3} alt="" /></a>
                            </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>'Let's connect'</span> </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}