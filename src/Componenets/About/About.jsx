import React from "react";
import "./About.css";
import ProfileImg from "../../Assets/ProfileImg.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ProfileImg} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 Clients</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p style={{textAlign:'justify'}}>
            I am a dedicated and curious Computer Science undergraduate with a
            strong passion for programming. I am eager to explore new challenges
            and expand my knowledge in the field. An enthusiastic team player
            with a positive attitude, committed to collaborating effectively to
            achieve shared goals. I am eager to learn and find optimal solutions
            while actively sharing knowledge with others.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
