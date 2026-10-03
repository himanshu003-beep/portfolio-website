import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* ==============================
            ABOUT HEADER
        =============================== */}

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-tag">
            ABOUT ME
          </span>

          <h2>
            Building ideas into{" "}
            <span>real solutions.</span>
          </h2>

          <p>
            A little about my journey, interests,
            and what I enjoy building.
          </p>
        </motion.div>

        {/* ==============================
            MAIN ABOUT CONTENT
        =============================== */}

        <div className="about-main">

          {/* LEFT SIDE */}

          <motion.div
            className="about-intro-card"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-profile-header">

              <div className="about-avatar">
                HS
              </div>

              <div>
                <span className="about-profile-name">
                  HIMANSHU.DEV
                </span>

                <span className="about-profile-role">
                  AI Developer
                </span>
              </div>

            </div>

            <h3>
              Computer Science Engineer
              <br />

              <span>
                & AI Developer
              </span>
            </h3>

            <p>
              I am a Computer Science Engineering
              student from Bansal Group of Institutes,
              with a strong interest in software
              development and Artificial Intelligence.
            </p>

            <p>
              I enjoy building modern web applications,
              backend systems, APIs, and AI-powered
              solutions. My focus is on understanding
              how things work and turning ideas into
              practical and scalable applications.
            </p>

            <p>
              I am continuously learning new
              technologies, improving my problem-solving
              skills, and working on projects that help
              me grow as a developer.
            </p>

            <a
              href="/resume.pdf"
              download
              className="about-resume-button"
            >
              <FiDownload />

              <span>
                Download Resume
              </span>
            </a>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="about-info-grid"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            {/* DEGREE */}

            <motion.div
              className="about-info-card cyan-card"
              whileHover={{ y: -7 }}
            >
              <div className="about-card-icon">
                🎓
              </div>

              <div className="about-card-content">
                <span>
                  DEGREE
                </span>

                <h4>
                  B.Tech CSE
                </h4>

                <p>
                  Computer Science Engineering
                </p>
              </div>
            </motion.div>

            {/* COLLEGE */}

            <motion.div
              className="about-info-card blue-card"
              whileHover={{ y: -7 }}
            >
              <div className="about-card-icon">
                🏫
              </div>

              <div className="about-card-content">
                <span>
                  COLLEGE
                </span>

                <h4>
                  Bansal Group of Institutes
                </h4>

                <p>
                  RGPV Affiliated
                </p>
              </div>
            </motion.div>

            {/* GRADUATION */}

            <motion.div
              className="about-info-card purple-card"
              whileHover={{ y: -7 }}
            >
              <div className="about-card-icon">
                📅
              </div>

              <div className="about-card-content">
                <span>
                  GRADUATION
                </span>

                <h4>
                  2022 – 2026
                </h4>

                <p>
                  Computer Science Engineering
                </p>
              </div>
            </motion.div>

            {/* SPECIALIZATION */}

            <motion.div
              className="about-info-card pink-card"
              whileHover={{ y: -7 }}
            >
              <div className="about-card-icon">
                🤖
              </div>

              <div className="about-card-content">
                <span>
                  SPECIALIZATION
                </span>

                <h4>
                  AI & ML
                </h4>

                <p>
                  Building Intelligent Solutions
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* ==============================
            WHAT I BUILD
        =============================== */}

        <motion.div
          className="about-build-section"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="about-build-header">

            <div>
              <span>
                WHAT I BUILD
              </span>

              <h3>
                Turning skills into{" "}
                <strong>
                  real products.
                </strong>
              </h3>
            </div>

            <p>
              Areas where I apply my programming,
              backend, web, and AI skills.
            </p>

          </div>

          <div className="about-build-grid">

            {/* SOFTWARE */}

            <motion.div
              className="about-build-card"
              whileHover={{ y: -8 }}
            >
              <div className="build-icon">
                💻
              </div>

              <h4>
                Software Development
              </h4>

              <p>
                Building clean, practical,
                and maintainable software
                applications.
              </p>

              <span className="build-number">
                01
              </span>
            </motion.div>

            {/* AI */}

            <motion.div
              className="about-build-card"
              whileHover={{ y: -8 }}
            >
              <div className="build-icon purple">
                🤖
              </div>

              <h4>
                AI & Machine Learning
              </h4>

              <p>
                Exploring AI technologies
                and intelligent solutions
                for real-world problems.
              </p>

              <span className="build-number">
                02
              </span>
            </motion.div>

            {/* BACKEND */}

            <motion.div
              className="about-build-card"
              whileHover={{ y: -8 }}
            >
              <div className="build-icon blue">
                ⚙️
              </div>

              <h4>
                Backend & APIs
              </h4>

              <p>
                Developing backend systems,
                APIs, and data-driven
                application services.
              </p>

              <span className="build-number">
                03
              </span>
            </motion.div>

            {/* WEB */}

            <motion.div
              className="about-build-card"
              whileHover={{ y: -8 }}
            >
              <div className="build-icon pink">
                🌐
              </div>

              <h4>
                Modern Web
              </h4>

              <p>
                Creating responsive and
                user-friendly web experiences
                with modern technologies.
              </p>

              <span className="build-number">
                04
              </span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;