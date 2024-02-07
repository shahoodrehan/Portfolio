import React, { useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from "../Assets/img/color-sharp.png";

export const Skills = () => {
    const scrollRef = useRef(null);



    const scroll = (direction) => {
        if (direction === 'left') {
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        } else {
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };
    const skills = [
        { name: 'ASP .NET Development', percentage: 80 },
        { name: '.NET CORE Development', percentage: 95 },
        { name: 'API Development', percentage: 85 },
        { name: 'Web Development', percentage: 80 },
        { name: 'WordPress Development', percentage: 70 },
        { name: 'Database Management', percentage: 85 },
        { name: 'Frontend Development', percentage: 30 },


    ];


    return (
        <section className="skill" id="skills">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                My Versatile Skillset for Software Development Excellence.
                                <br /> Here are some of my skills:
                            </p>
                            <div className='skill-section scrollbar-hide '>

                                <div className=' inner'>
                                    <button
                                        onClick={() => scroll('left')}
                                        className='b1'
                                    >
                                        {'<'}
                                    </button>

                                    <div className='skill-slider ' ref={scrollRef}>

                                        {skills.map((skill, index) => (
                                            <div className="item" key={index} style={{ width: 150, height: 500 }}>
                                                <CircularProgressbar
                                                    value={skill.percentage}
                                                    text={`${skill.percentage}%`}
                                                    strokeWidth={10}
                                                 
                                                />



                                                <h5>{skill.name}</h5>
                                            </div>
                                        ))}

                                    </div>

                                    <button
                                        onClick={() => scroll('right')}
                                        className='b2'
                                    >
                                        {'>'}
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image" src={colorSharp} alt="Image" />
        </section>
    );
};