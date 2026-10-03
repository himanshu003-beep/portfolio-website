import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiHeart,
} from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* =================================================
            FOOTER TOP
        ================================================== */}

        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* BRAND */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              HIMANSHU<span>.</span>
            </a>

            <p className="footer-role">
              AI Developer
            </p>

            <p className="footer-description">
              Building ideas into real solutions with
              AI, software development, backend systems,
              and modern technologies.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="footer-links-section">

            <span className="footer-heading">
              QUICK LINKS
            </span>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>

          </div>

          {/* CONNECT */}
          <div className="footer-connect">

            <span className="footer-heading">
              CONNECT
            </span>

            <p>
              Let's connect and build something
              meaningful together.
            </p>

            <div className="footer-socials">

              {/* GITHUB */}
              <a
                href="https://github.com/himanshu003-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/himanshu-shukla3"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:himanshu.shukla.it@gmail.com"
                className="footer-social"
                aria-label="Email"
              >
                <FiMail />
              </a>

            </div>

          </div>

        </motion.div>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <div className="footer-divider"></div>

        {/* =================================================
            FOOTER BOTTOM
        ================================================== */}

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p>
            © {currentYear} Himanshu Shukla.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="footer-back-top"
          >
            Back to top
            <FiArrowUpRight />
          </a>

          <p className="footer-built">
            Built with
            <FiHeart />
            React & TypeScript
          </p>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;