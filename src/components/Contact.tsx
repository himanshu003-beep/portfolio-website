import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiSend,
} from "react-icons/fi";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* SECTION HEADING */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-tag">CONTACT</span>

          <h2>
            Let's build something <span>great.</span>
          </h2>

          <p>
            Have an idea, opportunity, or project
            in mind? Feel free to reach out and
            let's connect.
          </p>
        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* MAIN CONTACT */}
          <div className="contact-main">

            <div className="contact-icon">
              <FiMail />
            </div>

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's talk about
              <br />
              <span>your next idea.</span>
            </h3>

            <p>
              I'm interested in AI development,
              software development, backend systems,
              and building practical technology
              solutions.
            </p>

            <a
              href="mailto:himanshu.shukla.it@gmail.com?subject=Let's%20Connect%20with%20Himanshu%20Shukla"
              className="contact-email-btn"
            >
              <FiSend />

              <span>
                Send me an email
              </span>

              <FiArrowUpRight />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="contact-links">

            <span className="contact-label">
              CONNECT WITH ME
            </span>

            {/* GITHUB */}
            <a
              href="https://github.com/himanshu003-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
            >
              <div className="contact-social-icon">
                <FiGithub />
              </div>

              <div>
                <strong>GitHub</strong>
                <span>
                  View my projects
                </span>
              </div>

              <FiArrowUpRight />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/himanshu-shukla3"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
            >
              <div className="contact-social-icon">
                <FiLinkedin />
              </div>

              <div>
                <strong>LinkedIn</strong>
                <span>
                  Connect with me
                </span>
              </div>

              <FiArrowUpRight />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:himanshu.shukla.it@gmail.com"
              className="contact-social-card"
            >
              <div className="contact-social-icon">
                <FiMail />
              </div>

              <div>
                <strong>Email</strong>
                <span>
                  himanshu.shukla.it@gmail.com
                </span>
              </div>

              <FiArrowUpRight />
            </a>

          </div>
        </motion.div>

        {/* AVAILABILITY */}
        <motion.div
          className="contact-availability"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="contact-online-dot"></span>

          <span>
            Available for opportunities
          </span>

          <span>•</span>

          <span>
            🤝 Let's connect
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;