import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../Assets/img/project-img1.png";
import projImg2 from "../Assets/img/project-img2.png";
import projImg3 from "../Assets/img/project-img3.png";
import projImg4 from "../Assets/img/project-img4.png";
import projImg5 from "../Assets/img/project-img5.png.jpg";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "DoorDash - ECommerce Delivery Platform",
            description: ".NET + React",
            imgUrl: projImg5,
            githubUrl: "https://github.com/shahoodrehan/ECommerceWebApplication--DoorDash"
        },
        {
            title: "Banking Management System",
            description: "Java + Swing",
            imgUrl: projImg1,
            githubUrl: "https://github.com/shahoodrehan/Banking-Management-System"
        },
        {
            title: "Airline Managment System",
            description: ".NET + WinForms",
            imgUrl: projImg3,
            githubUrl: "https://github.com/shahoodrehan/ABS-Airline-Management-System"
        },
        {
            title: "Fractional Knapsack",
            description: "C# + WinForms",
            imgUrl: projImg2,
            githubUrl: "https://github.com/shahoodrehan/Fractional-Knapsack"
        },
        
       
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Explore a curated collection of my innovative projects, each crafted with passion and expertise to solve real-world challenges and push the boundaries of creativity.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Contact Me</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (    
                                                                <ProjectCard
                                                                key={index}
                                                                {...project} 
                                                                onClick={() => window.open(project.githubUrl, '_blank')}
                                                            />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                           
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
