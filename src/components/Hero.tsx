import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiMail,
  FiBookOpen,
  FiCpu,
  FiBriefcase,
} from "react-icons/fi";

import profileImage from "../assets/profile.jpeg";

import "./Hero.css";

const fullName = "Himanshu Shukla";
const roleText = "AI Developer";

const Hero = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayRole, setDisplayRole] = useState("");

  const [nameComplete, setNameComplete] =
    useState(false);

  const [roleComplete, setRoleComplete] =
    useState(false);

  const [showInfo, setShowInfo] = useState(false);

  /* =====================================================
     NAME TYPING
  ===================================================== */

  useEffect(() => {
    let index = 0;

    setDisplayName("");
    setNameComplete(false);

    const nameTimer = window.setInterval(() => {
      index += 1;

      setDisplayName(
        fullName.slice(0, index)
      );

      if (index >= fullName.length) {
        window.clearInterval(nameTimer);

        setNameComplete(true);
      }
    }, 105);

    return () => {
      window.clearInterval(nameTimer);
    };
  }, []);

  /* =====================================================
     ROLE TYPING
  ===================================================== */

  useEffect(() => {
    if (!nameComplete) {
      return;
    }

    let index = 0;

    setDisplayRole("");
    setRoleComplete(false);

    const roleTimer = window.setInterval(() => {
      index += 1;

      setDisplayRole(
        roleText.slice(0, index)
      );

      if (index >= roleText.length) {
        window.clearInterval(roleTimer);

        setRoleComplete(true);
      }
    }, 90);

    return () => {
      window.clearInterval(roleTimer);
    };
  }, [nameComplete]);

  return (
    <section
      id="home"
      className="hero-section"
    >

      {/* =================================================
          BACKGROUND
      ================================================== */}

      <div className="hero-bg-glow hero-bg-glow-one"></div>

      <div className="hero-bg-glow hero-bg-glow-two"></div>

      <div className="hero-grid-pattern"></div>

      <div className="hero-container">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* AVAILABLE */}

          <div className="availability">
            <span className="availability-dot"></span>

            Available for Work
          </div>

          {/* =================================================
              NAME
          ================================================== */}

          <h1 className="hero-name">

            <span className="hero-name-line">
              {displayName.split(" ")[0] || "\u00A0"}
            </span>

            <span className="hero-name-line hero-name-gradient">
              {displayName.split(" ")[1] || "\u00A0"}
            </span>

          </h1>

          {/* =================================================
              ROLE
          ================================================== */}

          <div className="code-role">

            <span className="code-keyword">
              const
            </span>

            <span className="code-variable">
              role
            </span>

            <span className="code-symbol">
              =
            </span>

            <span className="code-string">
              "{displayRole}"
            </span>

            {!roleComplete && (
              <span className="code-cursor">
                |
              </span>
            )}

            {roleComplete && (
              <span className="code-cursor">
                |
              </span>
            )}

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p className="hero-description">
            AI Developer focused on building
            modern web applications, backend
            systems, APIs, and AI-powered
            solutions. I enjoy turning ideas
            into practical and scalable software.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div className="hero-buttons">

            <a
              href="https://github.com/himanshu003-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn primary-btn"
            >
              <span>
                View My Work
              </span>

              <FiArrowRight />
            </a>

            <a
              href="mailto:himanshu.shukla.it@gmail.com"
              className="hero-btn secondary-btn"
            >
              <FiMail />

              <span>
                Let's Talk
              </span>
            </a>

          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="hero-socials">

            <a
              href="https://github.com/himanshu003-beep"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-shukla3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:himanshu.shukla.it@gmail.com"
              aria-label="Email"
            >
              <FiMail />
            </a>

          </div>

          {/* =================================================
              COLORFUL STATS
          ================================================== */}

          <div className="hero-stats">

            {/* GRADUATION */}

            <div className="hero-stat hero-stat-cyan">

              <strong>
                2022–26
              </strong>

              <span>
                GRADUATION
              </span>

            </div>

            {/* ENGINEERING */}

            <div className="hero-stat hero-stat-blue">

              <strong>
                CSE
              </strong>

              <span>
                ENGINEERING
              </span>

            </div>

            {/* AI */}

            <div className="hero-stat hero-stat-purple">

              <strong>
                AI
              </strong>

              <span>
                SPECIALIZATION
              </span>

            </div>

          </div>

        </motion.div>

        {/* =================================================
            RIGHT SIDE PHOTO
        ================================================== */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >

          {/* PROFESSIONAL BACKGROUND */}

          <div className="photo-background">

            <div className="photo-orbit orbit-one"></div>

            <div className="photo-orbit orbit-two"></div>

            <div className="photo-dot dot-one"></div>

            <div className="photo-dot dot-two"></div>

            <div className="photo-dot dot-three"></div>

          </div>

          <div className="photo-glow"></div>

          {/* PHOTO */}

          <motion.button
            type="button"
            className={`photo-card ${
              showInfo
                ? "photo-active"
                : ""
            }`}
            onClick={() =>
              setShowInfo(
                (previous) => !previous
              )
            }
            whileHover={{
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.97,
            }}
            aria-label="Show profile information"
          >

            <img
              src={profileImage}
              alt="Himanshu Shukla"
            />

            <div className="photo-overlay"></div>

            <span className="photo-click-ring"></span>

            <span className="photo-touch">
              {showInfo
                ? "Click to hide details"
                : "Click photo for details"}
            </span>

          </motion.button>

          {/* =================================================
              DEGREE CARD
          ================================================== */}

          <motion.div
            className="floating-card degree-card"
            initial={false}
            animate={{
              opacity: showInfo ? 1 : 0,
              scale: showInfo ? 1 : 0.85,
              x: showInfo ? 0 : -15,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <div className="floating-card-icon">
              <FiBookOpen />
            </div>

            <div className="floating-card-content">

              <span className="floating-label">
                🎓 DEGREE
              </span>

              <strong>
                B.Tech CSE
              </strong>

              <small>
                Computer Science Engineering
              </small>

            </div>

          </motion.div>

          {/* =================================================
              AI CARD
          ================================================== */}

          <motion.div
            className="floating-card specialization-card"
            initial={false}
            animate={{
              opacity: showInfo ? 1 : 0,
              scale: showInfo ? 1 : 0.85,
              x: showInfo ? 0 : 15,
            }}
            transition={{
              duration: 0.3,
              delay: 0.08,
            }}
          >

            <div className="floating-card-icon">
              <FiCpu />
            </div>

            <div className="floating-card-content">

              <span className="floating-label">
                🤖 SPECIALIZATION
              </span>

              <strong>
                AI & ML
              </strong>

              <small>
                Building intelligent solutions
              </small>

            </div>

          </motion.div>

          {/* =================================================
              COMPANY CARD
          ================================================== */}

          <motion.div
            className="floating-card experience-card"
            initial={false}
            animate={{
              opacity: showInfo ? 1 : 0,
              scale: showInfo ? 1 : 0.85,
              y: showInfo ? 0 : 15,
            }}
            transition={{
              duration: 0.3,
              delay: 0.16,
            }}
          >

            <div className="floating-card-icon">
              <FiBriefcase />
            </div>

            <div className="floating-card-content">

              <span className="floating-label">
                💼 EXPERIENCE
              </span>

              <strong>
                Techgentsia Pvt. Ltd.
              </strong>

              <small>
                AI Developer
              </small>

            </div>

          </motion.div>

          {/* MINI PROFILE */}

          <motion.div
            className="mini-profile-card"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >

            <span>
              AI
            </span>

            <small>
              Developer
            </small>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;