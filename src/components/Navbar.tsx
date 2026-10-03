import { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";

import "./Navbar.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean) as HTMLElement[];

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

          if (
            visibleSections.length > 0
          ) {
            setActiveSection(
              visibleSections[0]
                .target
                .id
            );
          }
        },
        {
          root: null,
          rootMargin:
            "-25% 0px -55% 0px",
          threshold: [
            0.1,
            0.25,
            0.5,
          ],
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<
      HTMLAnchorElement
    >,
    id: string
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(id);

    if (!section) {
      return;
    }

    setActiveSection(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* LOGO */}

        <a
          href="#home"
          className="nav-logo"
          onClick={(event) =>
            handleNavigation(
              event,
              "home"
            )
          }
        >
          HIMANSHU
        </a>

        {/* LINKS */}

        <div className="nav-links">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id
                  ? "nav-link-active"
                  : ""
              }`}
              onClick={(event) =>
                handleNavigation(
                  event,
                  item.id
                )
              }
            >
              {item.label}
            </a>
          ))}

        </div>

        {/* HIRE ME */}

        <a
          href="mailto:himanshu.shukla.it@gmail.com?subject=Job%20Opportunity%20for%20Himanshu%20Shukla"
          className="hire-btn"
        >
          <span className="hire-emoji">
            💼✨
          </span>

          <span>
            Hire Me
          </span>

          <FiMail />

        </a>

      </div>

    </nav>
  );
};

export default Navbar;