import React, { useEffect, useState } from "react";
import SplashCursor from "./components/SplashCursor";
import Drawer from "./components/Drawer";

import "./App.css";
import "./components/Drawer.css";

import emailjs from "emailjs-com";

import profilePic from "./assets/roshni.jpg";

// Projects Images
import bookApiImg from "./assets/bookapi.jpg";
import shooterImg from "./assets/plane-shooter (1).png";
import tictactoeImg from "./assets/tictactoe.jpg";
import rpsImg from "./assets/rockpaperscissors.jpg";

// SkillBar component
function SkillBar({ name, percent }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById(`skill-${name}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [name]);

  return (
    <div className="skill" id={`skill-${name}`}>
      <span className="skill-name">{name}</span>

      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${percent}%` : "0%" }}
        ></div>
      </div>

      <span className="skill-percent">{percent}%</span>
    </div>
  );
}



function App() {
  const [isOpen, setIsOpen] = useState(false); // UPDATED

  return (
    <div>
      {/* Cursor */}
      <SplashCursor />

      {/* TOP NAVBAR (UPDATED FOR RIGHT SIDE ☰) */}
      <nav
        style={{
          width: "100%",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#111",
          color: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Roshni</h2>

        {/* HAMBURGER ICON → RIGHT SIDE */}
        <div
          style={{ fontSize: "26px", cursor: "pointer" }}
          className="hamburger"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </nav>

      {/* Drawer Component */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Home Section */}
      <section id="home">
        <div className="container">
          <div className="text-content">
            <h1>
              Hi, I'm <span>Roshni Palas</span>
            </h1>
            <h3>💻 IT Student & AI/ML Enthusiast</h3>
            <p>I create projects in Python, AI/ML, and web development...</p>

            <div className="btn-group">
              <a href="#projects" className="btn">My Projects</a>
              <a href="resume.pdf" download className="btn">📄 Download CV</a>
            </div>

            <div className="socials">
              <a href="#">🐦</a>
              <a href="#">💼</a>
              <a href="#">📷</a>
            </div>
          </div>

          <div className="avatar-box">
            <div className="avatar-frame">
              <img src={profilePic} alt="Roshni" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
<section id="about" className="about-section">
  <div className="about-container">

    {/* LEFT SIDE IMAGE */}
    <div className="about-image">
      <div className="circle-frame">
        <img src={profilePic} alt="Roshni" />
      </div>
    </div>

    {/* RIGHT SIDE TEXT */}
    <div className="about-content">
      <h2>About Me</h2>

      <p>
        I’m <strong>Roshni Palas</strong>, currently pursuing IT at
        Government Engineering College, Modasa. I completed my schooling
        at P.K Patel & U.D Bhatt Sec. & Higher Sec. English School.
      </p>

      <p>
        I'm learning Python for AI/ML and actively seeking an internship
        to apply my skills. I’ve built projects like a CRUD API in Python
        and a Voice Assistant. I love Python, AI/ML, and enjoy building
        creative projects 🚀.
      </p>

      {/* ⭐ Add Skills Section INSIDE About section (Right Side) */}
      <div className="skills-wrapper">
        <h2>Skills</h2>

        <div className="skills-icons">
          <div class="skill-icon">🌐 <span>HTML</span></div>
          <div class="skill-icon">🎨 <span>CSS</span></div>
          <div class="skill-icon">⚡ <span>JavaScript</span></div>
          <div class="skill-icon">🧩 <span>PHP</span></div>
          <div class="skill-icon">💻 <span>C</span></div>
          <div className="skill-icon">🐍<span>Python</span></div>
          {/* <div className="skill-icon">📊<span>NumPy</span></div>
          <div className="skill-icon">🧮<span>Pandas</span></div>
          <div className="skill-icon">🖼️<span>Tkinter</span></div>
          <div className="skill-icon">🔥<span>Flask</span></div>
          <div className="skill-icon">🎨<span>Turtle</span></div>
          <div className="skill-icon">🎲<span>random</span></div> */}
          <div className="skill-icon">🤖<span>AI/ML</span></div>
        </div>
      </div>

    </div>

  </div>
</section>



      {/* Projects */}
      <section id="projects">
        <div className="content">
          <h2 className="title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src={bookApiImg} alt="Book API" />
              <h3>Book API</h3>
              <p>Flask REST API for managing books.</p>
            </div>

            <div className="project-card">
              <img src={shooterImg} alt="Shooter" />
              <h3>Aeroplane Shooter Game</h3>
              <p>Python Tkinter shooter game.</p>
            </div>

            <div className="project-card">
              <img src={tictactoeImg} alt="Tic Tac Toe" />
              <h3>Tic Tac Toe</h3>
              <p>Classic Python game.</p>
            </div>

            <div className="project-card">
              <img src={rpsImg} alt="RPS" />
              <h3>Rock Paper Scissors</h3>
              <p>Python game with GUI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="content">
          <h2 className="contact-heading">Contact</h2>

          <div className="contact-container">
            <div className="contact-left">
              <h2>Let's create something amazing together</h2>
            </div>

            <div className="contact-right">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();

                  emailjs
                    .sendForm(
                      "service_rjw5p2b",   // <-- Replace
                      "template_wlf4dzg",  // <-- Replace
                      e.target,
                      "tBVCnhcJuq9iLgLlr"    // <-- Replace
                    )
                    .then(
                      () => {
                        alert("Message Sent Successfully!");
                        e.target.reset();
                      },
                      (error) => {
                        alert("Failed to send message ❌");
                        console.log(error);
                      }
                    );
                }}
              >
                <label>
                  Name
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                </label>

                <label>
                  Message
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </label>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer>
        <p>© 2025 Roshni Palas | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
