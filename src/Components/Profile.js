import React from 'react';
import { Container, Row, Col, Image, Card, ButtonGroup, Button } from 'react-bootstrap';
import myImage from '../Assets/img/shahood.jpg';
import hireIcon from '../Assets/img/email.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import downloadIcon from '../Assets/img/file.png';


const Profile = () => {
  const download = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/105hd93P1Qgr79j7rf03qXxDEs-q9MRV9/view?usp=drive_link';
    link.download = 'Muhammad Shahood Rehan - Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <Container className="main-container">
      <Row>
        <Col xl={4} className="profile-side">
          <Card className="profile-card">
          <Card.Img className="profile-img" variant="top" src={myImage} alt="Shahood Rehan" />
            <Card.Body>
              <Card.Title className="card-title">Muhammad Shahood Rehan <br /> Software Engr.</Card.Title>
              <Card.Text>
                <p><strong>Birthday:</strong> 24 January, 2004</p>
                <p><strong>Location:</strong> Karachi, Pakistan</p>
                <p><strong>Email:</strong> shahoodrehan57@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={7} className="profile-info">
          <h1 className="about-heading">ABOUT ME</h1><br/>
          <p>I am a dedicated Undergraduate Software Engineer with over 7 months of industry experience and expertise in <strong> C# .NET ASP .NET CORE, Microsoft Entity Framework, ADO.NET,</strong> and various web technologies, allowing me to create robust web applications and APIs. On the front-end, I excel in crafting engaging user interfaces using <strong> HTML5, CSS, JS, React.js and WordPress Development </strong>.</p>
<br/>
<p> Backed by industry experience and a commitment to continuous learning, I eagerly embrace new challenges and am keen to collaborate on exciting projects. Let's connect and explore the potential for us to work together in creating exceptional digital experiences</p>
          <Button className="hire-me" onClick={''}><img className='hire-icon' src={hireIcon} alt="Hire me" /> Hire me</Button>
          <Button className="download-cv" onClick={download}> <img className='file' src={downloadIcon} alt="Download" /> Download CV</Button>
        </Col>
      </Row>

    </Container>

  );
};

export default Profile;
