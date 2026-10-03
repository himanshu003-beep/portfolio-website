import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiServer,
  FiBox,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiTerminal,
  FiChevronDown,
} from "react-icons/fi";

import "./Skills.css";

type Skill = {
  id: number;
  name: string;
  category: string;
  icon: React.ReactNode;
  whatIsIt: string;
  whyStudy: string;
  usedFor: string;
};

const skills: Skill[] = [
  {
    id: 1,
    name: "Python",
    category: "PROGRAMMING",
    icon: <FiTerminal />,
    whatIsIt:
      "A high-level programming language used for software development, automation, data processing, and AI.",
    whyStudy:
      "Python is widely used in AI, machine learning, backend development, and automation.",
    usedFor:
      "AI development, machine learning, APIs, automation, and backend systems.",
  },
  {
    id: 2,
    name: "C++",
    category: "PROGRAMMING",
    icon: <FiCode />,
    whatIsIt:
      "A powerful general-purpose programming language focused on performance and object-oriented programming.",
    whyStudy:
      "C++ builds strong programming, DSA, memory, and problem-solving fundamentals.",
    usedFor:
      "DSA, competitive programming, system-level programming, and performance-focused applications.",
  },
  {
    id: 3,
    name: "JavaScript",
    category: "WEB",
    icon: <FiGlobe />,
    whatIsIt:
      "A programming language used to create interactive and dynamic web applications.",
    whyStudy:
      "JavaScript is essential for modern frontend development and works across the web stack.",
    usedFor:
      "Frontend interfaces, browser applications, APIs, and full-stack JavaScript development.",
  },
  {
    id: 4,
    name: "React",
    category: "FRONTEND",
    icon: <FiLayers />,
    whatIsIt:
      "A JavaScript library for building component-based user interfaces.",
    whyStudy:
      "React makes large interfaces easier to structure, reuse, and maintain.",
    usedFor:
      "Portfolio websites, dashboards, web applications, and interactive interfaces.",
  },
  {
    id: 5,
    name: "Node.js",
    category: "BACKEND",
    icon: <FiServer />,
    whatIsIt:
      "A JavaScript runtime used to build server-side applications.",
    whyStudy:
      "Node.js allows JavaScript to be used for backend and API development.",
    usedFor:
      "Backend services, REST APIs, authentication, and real-time applications.",
  },
  {
    id: 6,
    name: "FastAPI",
    category: "BACKEND / API",
    icon: <FiCpu />,
    whatIsIt:
      "A modern Python framework for building fast APIs.",
    whyStudy:
      "FastAPI is especially useful for connecting Python AI systems with web applications.",
    usedFor:
      "REST APIs, AI services, backend systems, and model-serving applications.",
  },
  {
    id: 7,
    name: "MySQL",
    category: "DATABASE",
    icon: <FiDatabase />,
    whatIsIt:
      "A relational database management system based on SQL.",
    whyStudy:
      "Relational databases are important for storing structured application data.",
    usedFor:
      "User data, application records, attendance systems, and backend applications.",
  },
  {
    id: 8,
    name: "PyTorch",
    category: "AI / ML",
    icon: <FiCpu />,
    whatIsIt:
      "A deep learning framework used to build and train neural networks.",
    whyStudy:
      "PyTorch is useful for practical AI and deep learning development.",
    usedFor:
      "Computer vision, deep learning, model training, and AI experimentation.",
  },
  {
    id: 9,
    name: "OpenCV",
    category: "COMPUTER VISION",
    icon: <FiGlobe />,
    whatIsIt:
      "A computer vision library for processing images and video.",
    whyStudy:
      "OpenCV provides practical tools for image and video-based AI applications.",
    usedFor:
      "Face recognition, image processing, video processing, and computer vision.",
  },
  {
    id: 10,
    name: "Docker",
    category: "DEVOPS / TOOLS",
    icon: <FiBox />,
    whatIsIt:
      "A platform for packaging applications and their dependencies into containers.",
    whyStudy:
      "Docker helps create consistent development and deployment environments.",
    usedFor:
      "Containerized applications, backend deployment, databases, and development environments.",
  },
  {
    id: 11,
    name: "Git",
    category: "VERSION CONTROL",
    icon: <FiGitBranch />,
    whatIsIt:
      "A distributed version control system used to track code changes.",
    whyStudy:
      "Git makes collaboration, version history, and project management easier.",
    usedFor:
      "Source control, branches, commits, collaboration, and project history.",
  },
  {
    id: 12,
    name: "GitHub",
    category: "DEVELOPMENT",
    icon: <FiCode />,
    whatIsIt:
      "A platform for hosting Git repositories and collaborating on software projects.",
    whyStudy:
      "GitHub helps developers showcase projects and collaborate with teams.",
    usedFor:
      "Code hosting, project portfolios, collaboration, pull requests, and repositories.",
  },
];

const Skills = () => {
  const [openSkill, setOpenSkill] =
    useState<number | null>(null);

  const toggleSkill = (id: number) => {
    setOpenSkill(
      openSkill === id ? null : id
    );
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="skills-tag">
            TECHNOLOGIES
          </span>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p>
            Tools and technologies I use while
            building software, backend systems,
            and AI-powered solutions.
          </p>
        </motion.div>

        <div className="skills-grid">

          {skills.map((skill) => {
            const isOpen =
              openSkill === skill.id;

            return (
              <motion.div
                key={skill.id}
                className={`skill-card ${
                  isOpen
                    ? "skill-card-open"
                    : ""
                }`}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                }}
              >

                <button
                  type="button"
                  className="skill-card-button"
                  onClick={() =>
                    toggleSkill(skill.id)
                  }
                  aria-expanded={isOpen}
                >

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <div className="skill-title">
                    <span>
                      {skill.category}
                    </span>

                    <strong>
                      {skill.name}
                    </strong>
                  </div>

                  <FiChevronDown
                    className={`skill-chevron ${
                      isOpen
                        ? "skill-chevron-open"
                        : ""
                    }`}
                  />

                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="skill-details"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >

                      <div className="skill-detail">
                        <span>
                          WHAT IS IT?
                        </span>

                        <p>
                          {skill.whatIsIt}
                        </p>
                      </div>

                      <div className="skill-detail">
                        <span>
                          WHY USE IT?
                        </span>

                        <p>
                          {skill.whyStudy}
                        </p>
                      </div>

                      <div className="skill-detail">
                        <span>
                          USED FOR
                        </span>

                        <p>
                          {skill.usedFor}
                        </p>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

                {!isOpen && (
                  <div className="skill-tap">
                    Click to explore
                  </div>
                )}

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;