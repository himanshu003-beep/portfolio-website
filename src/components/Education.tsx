import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiCpu,
  FiAward,
  FiChevronDown,
} from "react-icons/fi";

import "./Education.css";

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="education"
      className="education-section"
    >
      <div className="education-container">

        <motion.div
          className="education-heading"
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
          <span className="education-tag">
            EDUCATION
          </span>

          <h2>
            My learning <span>journey.</span>
          </h2>

          <p>
            The academic foundation that shaped
            my interest in computer science,
            AI, and modern technology.
          </p>
        </motion.div>

        <motion.div
          className={`education-card ${
            isOpen
              ? "education-card-open"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* EDUCATION HEADER */}
          <button
            type="button"
            className="education-main-button"
            onClick={() =>
              setIsOpen(
                (previous) => !previous
              )
            }
            aria-expanded={isOpen}
          >

            <div className="education-main">

              <div className="education-icon">
                <FiBookOpen />
              </div>

              <div className="education-main-content">

                <span className="education-label">
                  🎓 DEGREE
                </span>

                <h3>
                  B.Tech CSE
                </h3>

                <p className="education-course">
                  Computer Science Engineering
                </p>

                <p className="education-college">
                  🏫 Bansal Group of Institutes
                </p>

              </div>

            </div>

            <FiChevronDown
              className={`education-chevron ${
                isOpen
                  ? "education-chevron-open"
                  : ""
              }`}
            />

          </button>

          {/* DETAILS */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                className="education-details-wrapper"
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

                <div className="education-details">

                  <div className="education-detail-card">
                    <div className="education-detail-icon">
                      <FiCalendar />
                    </div>

                    <div>
                      <span>
                        📅 DURATION
                      </span>

                      <strong>
                        2022 – 2026
                      </strong>
                    </div>
                  </div>

                  <div className="education-detail-card">
                    <div className="education-detail-icon">
                      <FiCpu />
                    </div>

                    <div>
                      <span>
                        🤖 SPECIALIZATION
                      </span>

                      <strong>
                        AI & ML
                      </strong>
                    </div>
                  </div>

                  <div className="education-detail-card">
                    <div className="education-detail-icon">
                      <FiAward />
                    </div>

                    <div>
                      <span>
                        💻 FIELD
                      </span>

                      <strong>
                        Computer Science
                      </strong>
                    </div>
                  </div>

                </div>

                <div className="education-footer">
                  <span>🚀</span>

                  <p>
                    Building a strong foundation
                    in computer science while
                    exploring AI and modern
                    software technologies.
                  </p>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};

export default Education;