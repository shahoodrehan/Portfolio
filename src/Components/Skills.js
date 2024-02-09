// import React, { useRef } from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import colorSharp from "../Assets/img/color-sharp.png";

// export const Skills = () => {
//     const scrollRef = useRef(null);



//     const scroll = (direction) => {
//         if (direction === 'left') {
//             scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
//         } else {
//             scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
//         }
//     };
//     const skills = [
//         { name: 'ASP .NET Development', percentage: 80 },
//         { name: '.NET CORE Development', percentage: 95 },
//         { name: 'API Development', percentage: 85 },
//         { name: 'Web Development', percentage: 80 },
//         { name: 'WordPress Development', percentage: 70 },
//         { name: 'Database Management', percentage: 85 },
//         { name: 'Frontend Development', percentage: 55 },


//     ];


//     return (
//         <section className="skill" id="skills">

//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="skill-bx wow zoomIn">
//                             <h2>Skills</h2>
//                             <p>
//                                 My Versatile Skillset for Software Development Excellence.
//                                 <br /> Here are some of my skills:
//                             </p>
//                             <div className='skill-section scrollbar-hide '>

//                                 <div className=' inner'>
//                                     <button
//                                         onClick={() => scroll('left')}
//                                         className='b1'
//                                     >
//                                         {'<'}
//                                     </button>

//                                     <div className='skill-slider ' ref={scrollRef}>

//                                         {skills.map((skill, index) => (
//                                             <div className="item" key={index} style={{ width: 150, height: 500 }}>
//                                                 <CircularProgressbar
//                                                     value={skill.percentage}
//                                                     text={`${skill.percentage}%`}
//                                                     strokeWidth={10}
//                                                     styles={{
//                                                         path: {
//                                                             stroke: `url(#gradient)`, // Apply the gradient
//                                                         },
//                                                         text: {
//                                                             fill: '#fff', // Text color
//                                                         },
//                                                     }}
//                                                 />
//                                                 <svg style={{ height: 0 }}>
//                                                     <defs>
//                                                         <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                                                             <stop offset="-5.91%" style={{ stopColor: '#AA367C', stopOpacity: 1 }} />
//                                                             <stop offset="111.58%" style={{ stopColor: '#4A2FBD', stopOpacity: 1 }} />
//                                                         </linearGradient>

//                                                     </defs>
//                                                 </svg>




//                                                 <h5>{skill.name}</h5>
//                                             </div>
//                                         ))}

//                                     </div>

//                                     <button
//                                         onClick={() => scroll('right')}
//                                         className='b2'
//                                     >
//                                         {'>'}
//                                     </button>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <img className="background-image" src={colorSharp} alt="Image" />
//         </section>
//     );
// };


import React, { useRef, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
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
        { name: 'Frontend Development', percentage: 55 },


    ];


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    animatePercentages();
                    observer.unobserve(entry.target);
                }
            });
        };

        const animatePercentages = () => {
            
            skills.forEach((skill, index) => {
                const percentageElement = document.getElementById(`percentage-${index}`);
                if (percentageElement) {
                    const finalPercentage = skill.percentage;
                    percentageElement.style.transition = `stroke-dashoffset 1s ease-in-out`;
                    percentageElement.style.strokeDashoffset = 100 - finalPercentage; // Animate to the correct percentage
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(scrollRef.current);

        return () => {
            observer.disconnect();
        };
    }, [skills]);

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
                                                    value={skill.percentage - 10}  // Set to a value less than the actual percentage
                                                    text={`${skill.percentage}%`}
                                                    strokeWidth={10}
                                                    styles={{
                                                        path: {
                                                            stroke: `url(#gradient-${index})`, // Apply the gradient
                                                        },
                                                        text: {
                                                            fill: '#fff', // Text color
                                                        },
                                                    }}
                                                />
                                                <svg style={{ height: 0 }}>
                                                    <defs>
                                                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="-5.91%" style={{ stopColor: '#AA367C', stopOpacity: 1 }} />
                                                            <stop offset="111.58%" style={{ stopColor: '#4A2FBD', stopOpacity: 1 }} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
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
