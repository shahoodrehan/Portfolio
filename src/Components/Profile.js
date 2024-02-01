import React from 'react';


const Profile = () => {
  return (
    <div className="profile-container">
      <section className="about-section">
        <h2>About</h2>
        <div className="profile-picture">
          <img src="/path-to-image.jpg" alt="Rizwan Akram" />
        </div>
        <div className="profile-info">
          <h1>Hello,</h1>
          <p>I am Rizwan Akram, a passionate Software Engineering student from Karachi, Pakistan. With a strong foundation in React.js, JavaScript, Flask, Solidity, and Android Development, I am dedicated to transforming ideas into innovative solutions. My goal is to contribute to the development of decentralized technology and build the future of blockchain.</p>
          <p>Join me on this exciting journey of exploration and collaboration in the world of blockchain and software development as we make a lasting impact together.</p>
          <div className="personal-info">
            <p><strong>Name:</strong> Rizwan Akram</p>
            <p><strong>Birthday:</strong> 17 May, 2001</p>
            <p><strong>Location:</strong> Karachi, Pakistan</p>
            <p><strong>Email:</strong> rizwankhan837@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};


