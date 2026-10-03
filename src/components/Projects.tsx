import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronDown,
  FiCamera,
  FiCpu,
  FiCheckCircle,
  FiCloud,
} from "react-icons/fi";

import "../Projects.css";

type Project = {
  id: number;
  number: string;
  title: string;
  category: string;
  emoji: string;
  description: string;
  why: string;
  features: string[];
  technologies: string[];
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "FaceRecognition",
    category: "AI / COMPUTER VISION",
    emoji: "👁️",

    description:
      "An AI-based face recognition project designed to detect, process, and recognize faces from camera or image input.",

    why:
      "Face recognition can automatically identify registered people and can be used as a foundation for applications such as AI-based attendance systems and other computer vision solutions.",

    features: [
      "Face detection and processing",
      "Face embedding generation",
      "Face matching",
      "Camera and image based processing",
      "AI-powered recognition workflow",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "MTCNN",
      "FaceNet",
      "FastAPI",
    ],

    github:
      "https://github.com/himanshu003-beep/FaceRecognition",
  },

  {
    id: 2,
    number: "02",
    title: "Weather Update",
    category: "PYTHON / API",
    emoji: "🌦️",

    description:
      "A Python-based weather application that fetches current weather information for a city using the OpenWeather API.",

    why:
      "This project helps understand how real-world applications communicate with external APIs, process JSON data, manage API credentials, and present useful information to users.",

    features: [
      "Search weather by city",
      "Current temperature information",
      "Humidity information",
      "Weather condition display",
      "OpenWeather API integration",
    ],

    technologies: [
      "Python",
      "Requests",
      "python-dotenv",
      "OpenWeather API",
    ],

    github:
      "https://github.com/himanshu003-beep/weather-project",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject((currentProject) =>
      currentProject === projectId
        ? null
        : projectId
    );
  };

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        {/* =================================
            SECTION HEADER
        ================================== */}

        <motion.div
          className="projects-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="projects-tag">
            MY PROJECTS
          </span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            Projects where I turn programming,
            backend, AI, APIs, and computer vision
            concepts into practical solutions.
          </p>
        </motion.div>


        {/* =================================
            PROJECT GRID
        ================================== */}

        <div className="projects-grid">

          {projects.map((project, index) => {
            const isOpen =
              selectedProject === project.id;

            return (
              <motion.article
                key={project.id}
                className={`project-card ${
                  isOpen
                    ? "project-card-open"
                    : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                {/* =================================
                    PROJECT TOP
                ================================== */}

                <div className="project-top">

                  <div className="project-icon">
                    {project.emoji}
                  </div>

                  <span className="project-number">
                    {project.number}
                  </span>

                </div>


                {/* =================================
                    PROJECT CONTENT
                ================================== */}

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* TECHNOLOGIES */}

                  <div className="project-tech">

                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>


                  {/* =================================
                      DETAILS BUTTON
                  ================================== */}

                  <button
                    type="button"
                    className="project-details-button"
                    onClick={() =>
                      handleProjectClick(
                        project.id
                      )
                    }
                    aria-expanded={isOpen}
                  >

                    <span>
                      {isOpen
                        ? "Hide Project Details"
                        : "Explore Project"}
                    </span>

                    <FiChevronDown
                      className={
                        isOpen
                          ? "project-chevron-open"
                          : ""
                      }
                    />

                  </button>


                  {/* =================================
                      EXPANDED DETAILS
                  ================================== */}

                  <AnimatePresence
                    initial={false}
                  >

                    {isOpen && (
                      <motion.div
                        className="project-details"
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                      >

                        <div className="project-details-inner">

                          {/* WHY PROJECT */}

                          <div className="project-detail-block">

                            <div className="project-detail-title">

                              <span className="detail-icon">
                                💡
                              </span>

                              <span>
                                WHY THIS PROJECT?
                              </span>

                            </div>

                            <p>
                              {project.why}
                            </p>

                          </div>


                          {/* FEATURES */}

                          <div className="project-detail-block">

                            <div className="project-detail-title">

                              <span className="detail-icon">
                                🚀
                              </span>

                              <span>
                                KEY FEATURES
                              </span>

                            </div>

                            <div className="project-feature-list">

                              {project.features.map(
                                (feature) => (
                                  <div
                                    key={feature}
                                    className="project-feature"
                                  >
                                    <FiCheckCircle />

                                    <span>
                                      {feature}
                                    </span>
                                  </div>
                                )
                              )}

                            </div>

                          </div>


                          {/* PROJECT FOCUS */}

                          <div className="project-detail-block">

                            <div className="project-detail-title">

                              <span className="detail-icon">
                                🧠
                              </span>

                              <span>
                                PROJECT FOCUS
                              </span>

                            </div>

                            <div className="project-focus">

                              <div>
                                {project.id === 1 ? (
                                  <FiCamera />
                                ) : (
                                  <FiCloud />
                                )}

                                <span>
                                  {project.id === 1
                                    ? "Computer Vision"
                                    : "Weather API"}
                                </span>
                              </div>

                              <div>
                                <FiCpu />

                                <span>
                                  {project.id === 1
                                    ? "Artificial Intelligence"
                                    : "Python Application"}
                                </span>
                              </div>

                            </div>

                          </div>


                          {/* GITHUB BUTTON */}

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-github-button"
                          >

                            <FiGithub />

                            <span>
                              View Full Project on GitHub
                            </span>

                            <FiExternalLink />

                          </a>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Projects;