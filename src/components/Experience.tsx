import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiCpu,
  FiChevronDown,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Experience.css";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="experience-container">

        <motion.div
          className="experience-heading"
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
          <span className="experience-tag">
            EXPERIENCE
          </span>

          <h2>
            Where I've <span>grown.</span>
          </h2>

          <p>
            A look at my professional journey,
            technical learning, and experience
            in AI development.
          </p>
        </motion.div>

        <motion.div
          className={`experience-card ${
            isOpen
              ? "experience-card-open"
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

          {/* COMPANY BUTTON */}
          <button
            type="button"
            className="experience-company-button"
            onClick={() =>
              setIsOpen(
                (previous) => !previous
              )
            }
            aria-expanded={isOpen}
          >

            <div className="experience-company">

              <div className="experience-company-icon">
                <FiBriefcase />
              </div>

              <div>
                <span className="experience-label">
                  COMPANY
                </span>

                <h3>
                  Techgentsia Pvt. Ltd.
                </h3>

                <span className="experience-location">
                  Professional Experience
                </span>
              </div>

            </div>

            <FiChevronDown
              className={`experience-chevron ${
                isOpen
                  ? "experience-chevron-open"
                  : ""
              }`}
            />

          </button>

          {/* OPEN CONTENT */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                className="experience-content"
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

                <div className="experience-top-line">

                  <div>
                    <span className="experience-label">
                      ROLE
                    </span>

                    <h4>
                      AI Developer
                    </h4>
                  </div>

                  <div className="experience-status">
                    <span></span>
                    Professional Experience
                  </div>

                </div>

                <p className="experience-description">
                  My experience with Techgentsia is
                  part of my professional journey in
                  technology, where I have been exposed
                  to modern AI development practices
                  and practical technology applications.
                </p>

                <div className="experience-areas">

                  <div className="experience-area">
                    <div className="experience-area-icon">
                      <FiCpu />
                    </div>

                    <div>
                      <strong>
                        AI Development
                      </strong>

                      <span>
                        Exploring AI technologies and
                        building intelligent solutions
                        for practical applications.
                      </span>
                    </div>
                  </div>

                  <div className="experience-area">
                    <div className="experience-area-icon">
                      <FiCpu />
                    </div>

                    <div>
                      <strong>
                        AI Solutions
                      </strong>

                      <span>
                        Applying artificial intelligence
                        concepts to practical
                        technology solutions.
                      </span>
                    </div>
                  </div>

                </div>

                <div className="experience-note">
                  <span>✨</span>

                  <p>
                    Growing as an AI Developer by
                    learning, building, and applying
                    modern technologies to real-world
                    problems.
                  </p>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        <motion.div
          className="experience-journey"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <span>
            🚀 Learning → Building → Growing
          </span>

          <FiArrowUpRight />
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;