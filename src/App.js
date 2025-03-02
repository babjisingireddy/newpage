import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import myImage from "./blueHoodie.jpg";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import myLinkedin from "./linkedIn.png";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_dny9ggp",   // Replace with your EmailJS service ID
      "template_gyqwbzf",  // Replace with your EmailJS template ID
      e.target,
      "l8LO8dSSK3QY9fold"  // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Try again!");
      }
    );
  
    e.target.reset();
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">Babji's Portfolio</a>
          <a className="nav-link" href="https://www.linkedin.com/in/babji-reactjs" 
              target="_blank" rel="noopener noreferrer"><img src={myLinkedin} alt="linkedin" className="rounded-circle img-fluid" width="30"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon">hhh</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <button className="btn btn-outline-light ms-3" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="container text-center mt-5">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 text-center left-header">
            <div>
              <img src={myImage} alt="Babji" className="profile-photo"  />
            </div>
          </div>
          
          {/* Right Side: Text */}
          <div className="col-md-6 text-start right-header">
            <motion.h1
              className="highlighted-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Hi, <span>I'm Babji</span>
            </motion.h1>

            <motion.p
              className="animated-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              A Frontend Developer passionate about building user-friendly, interactive, and accessible web applications.
              <p>
              <div><b>Mobile: </b> +91-7305157583</div>
              <div><b>Email: </b> babjisingireddy99@gmail.com</div>
              </p>
            </motion.p>
            
          </div>
        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="container mt-5">
        <h2>About Me</h2>
        <p>With 4 years of experience in React.js and Redux, I specialize in building seamless UI components and enhancing the user experience through intuitive designs and smooth animations.
            <div>
        🔹 Tech Stack: React.js, Redux, JavaScript (ES6+), HTML & CSS.
        </div>
            <div>
        🔹 Interests: Performance optimization, Dark Mode UI, Interactive Elements
        </div>
            <div>
        🔹 Goal: To create modern, engaging, and scalable web applications that leave an impact.
        </div>
        When I'm not coding, you'll find me exploring new React trends, sharing insights on LinkedIn, or experimenting with UI/UX improvements.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mt-5">
        <h2>Projects</h2>
        <p>Showcase your React projects here.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mt-5 mb-5">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="from_name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="reply_to" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

      {/* {footer-section} */}
      <footer className="footer"><b>NOTE:</b> My typical react out time for the guys who submits the contact form is around 72hrs.</footer>
    </div>
  );
}

export default App;
