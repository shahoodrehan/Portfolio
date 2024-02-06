import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import meter1 from '../Assets/img/meter1.svg';
import meter2 from '../Assets/img/meter2.svg';
import meter3 from '../Assets/img/meter3.svg';
import { Carousel } from 'react-bootstrap';

export const Skills = () => {
    const skills = [
        { name: '.NET Development', percentage: 25 },
        { name: 'Web Development', percentage: 90 },
        { name: 'WordPress Development', percentage: 70 },
        { name: 'Backend Development', percentage: 85 },
        { name: 'Frontend Development', percentage: 95 },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            {/* ... */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                My Versatile Skillset for Software Development Excellence.
                                <br /> Here are some of my skills:
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <CircularProgressbar
                                            value={skill.percentage}
                                            text={`${skill.percentage}%`}
                                            strokeWidth={10}
                                        />
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};