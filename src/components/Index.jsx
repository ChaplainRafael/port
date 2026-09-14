import { useState } from "react";
import { projects } from "./constants";
import PropTypes from "prop-types";

import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaExternalLinkAlt,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaServer,
    FaRobot,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
        SiDocker,
    SiPostman,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiGit,
    SiGithub,
    SiNestjs,
} from "react-icons/si";

const Home = () => {
    const [page, setPage] = useState("home");
    const [projectPage, setProjectPage] = useState(0);

    const projectsPerPage = 3;
    Tech.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  textOnly: PropTypes.bool,
};
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const displayedProjects = projects.slice(
        projectPage * projectsPerPage,
        (projectPage + 1) * projectsPerPage
    );

    const nextPage = () => {
        if (projectPage < totalPages - 1) {
            setProjectPage((current) => current + 1);
        }
    };

    const prevPage = () => {
        if (projectPage > 0) {
            setProjectPage((current) => current - 1);
        }
    };

    const navigateTo = (targetPage) => {
        setPage(targetPage);

        if (targetPage === "projects") {
            setProjectPage(0);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Shared page header
    |--------------------------------------------------------------------------
    */

    const renderPageHeader = () => {
        return (
            <header className="system-header">
                <div className="system-header__identity">
                    <div className="system-logo">
                        <img src="./skull.jpg" alt="Rafael system logo" />
                    </div>

                    <div>
                        <div className="system-name">
                            RAFAEL<span className="accent">.</span>DEV
                        </div>

                        <div className="system-subtitle">
                            SOFTWARE / WEB SYSTEMS
                        </div>
                    </div>
                </div>

                <div className="system-status">
                    <span className="status-indicator" />
                    SYSTEM ONLINE
                </div>
            </header>
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Navigation
    |--------------------------------------------------------------------------
    */

    const renderNavigation = () => {
        return (
            <nav className="navigation">
                <div className="navigation__title">
                    <span>SYS</span>
                    NAVIGATION
                </div>

                <button
                    onClick={() => navigateTo("home")}
                    className={page === "home" ? "nav-item active" : "nav-item"}
                >
                    <span className="nav-number">00</span>
                    <span>OVERVIEW</span>
                </button>

                <button
                    onClick={() => navigateTo("bio")}
                    className={page === "bio" ? "nav-item active" : "nav-item"}
                >
                    <span className="nav-number">01</span>
                    <span>PROFILE</span>
                </button>

                <button
                    onClick={() => navigateTo("projects")}
                    className={
                        page === "projects"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <span className="nav-number">02</span>
                    <span>PROJECTS</span>
                </button>

                <button
                    onClick={() => navigateTo("contact")}
                    className={
                        page === "contact"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <span className="nav-number">03</span>
                    <span>CONTACT</span>
                </button>

                <a
                    href="/cv.pdf"
                    download="Rafael_CV.pdf"
                    className="cv-button"
                >
                    <FaDownload />
                    DOWNLOAD CV
                </a>

                <div className="navigation__footer">
                    <div>BUILD 2026.09</div>
                    <div>NODE: RFL-01</div>
                    <div>STATUS: ACTIVE</div>
                </div>
            </nav>
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Home
    |--------------------------------------------------------------------------
    */

    const renderHomePage = () => {
        return (
            <div className="page">
                {renderPageHeader()}

                <div className="layout">
                    {renderNavigation()}

                    <main className="content">
                        <section className="hero">
                            <div className="section-label">
                                <span>SYS / 001</span>
                                <span>IDENTIFICATION</span>
                            </div>

                            <div className="hero-grid">
                                <div className="hero-copy">
                                    <div className="hero-kicker">
                                        SOFTWARE ENGINEER / WEB DEVELOPER
                                    </div>

                                    <h1>
                                        BUILDING
                                        <br />
                                        DIGITAL
                                        <br />
                                        <span className="accent">
                                            SYSTEMS.
                                        </span>
                                    </h1>

                                    <p className="hero-description">
                                        Full-stack web developer focused on
                                        building practical, responsive and
                                        maintainable applications with modern
                                        JavaScript technologies.
                                    </p>

                                    <div className="hero-actions">
                                        <button
                                            onClick={() =>
                                                navigateTo("projects")
                                            }
                                            className="primary-button"
                                        >
                                            VIEW PROJECTS
                                            <FaExternalLinkAlt />
                                        </button>

                                        <button
                                            onClick={() =>
                                                navigateTo("contact")
                                            }
                                            className="secondary-button"
                                        >
                                            ESTABLISH CONTACT
                                        </button>
                                    </div>
                                </div>

                                <div className="hero-system">
                                    <div className="system-panel">
                                        <div className="panel-header">
                                            <span>SYSTEM PROFILE</span>
                                            <span>001</span>
                                        </div>

                                        <div className="profile-data">
                                            <div>
                                                <span>IDENTITY</span>
                                                <strong>RAFAEL</strong>
                                            </div>

                                            <div>
                                                <span>DISCIPLINE</span>
                                                <strong>SOFTWARE</strong>
                                            </div>

                                            <div>
                                                <span>SPECIALIZATION</span>
                                                <strong>WEB SYSTEMS</strong>
                                            </div>

                                            <div>
                                                <span>EXPERIENCE</span>
                                                <strong>FREELANCE / 2+ YRS</strong>
                                            </div>

                                            <div>
                                                <span>PRIMARY STACK</span>
                                                <strong>NEXT.JS / NODE.JS</strong>
                                            </div>
                                        </div>

                                        <div className="system-readout">
                                            <div>
                                                <span>PROCESS</span>
                                                <div className="bar">
                                                    <i />
                                                </div>
                                            </div>

                                            <div>
                                                <span>UPTIME: </span>
                                                <strong>ACTIVE</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="overview-section">
                            <div className="section-label">
                                <span>SYS / 002</span>
                                <span>CAPABILITIES</span>
                            </div>

                            <div className="capability-grid">
                                <article className="capability">
                                    <span className="capability-number">
                                        01
                                    </span>

                                    <h2>FRONTEND</h2>

                                    <p>
                                        Responsive interfaces and interactive
                                        web applications built with React and
                                        Next.js.
                                    </p>
                                </article>

                                <article className="capability">
                                    <span className="capability-number">
                                        02
                                    </span>

                                    <h2>BACKEND</h2>

                                    <p>
                                        REST APIs, authentication, server
                                        logic and real-world data handling
                                        with Node.js and Express.
                                    </p>
                                </article>

                                <article className="capability">
                                    <span className="capability-number">
                                        03
                                    </span>

                                    <h2>DATABASE</h2>

                                    <p>
                                        Experience working with both
                                        relational and NoSQL databases,
                                        including PostgreSQL and MongoDB.
                                    </p>
                                </article>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Profile / Bio
    |--------------------------------------------------------------------------
    */

    const renderBioPage = () => {
        return (
            <div className="page">
                {renderPageHeader()}

                <div className="layout">
                    {renderNavigation()}

                    <main className="content">
                        <section className="section">
                            <div className="section-label">
                                <span>SYS / 003</span>
                                <span>PROFILE</span>
                            </div>

                            <div className="profile-layout">
                                <div className="profile-intro">
                                    <div className="hero-kicker">
                                        IDENTIFICATION
                                    </div>

                                    <h1>
                                        RAFAEL
                                        <span className="accent">.</span>
                                    </h1>

                                    <p>
                                        I&apos;m a self-taught full-stack web
                                        developer focused on building useful,
                                        maintainable and production-minded
                                        applications.
                                    </p>

                                    <p>
                                        My main ecosystem is JavaScript,
                                        particularly React, Next.js, Node.js, Express.js
                                        and modern database technologies.
                                    </p>

                                    <div className="quote">
                                        &quot;If you can think it,
                                        <span> I can build it.</span>&quot;
                                    </div>
                                </div>

                                <div className="profile-info">
                                    <div className="data-block">
                                        <span>PRIMARY DISCIPLINE</span>
                                        <strong>FULL-STACK WEB DEVELOPMENT</strong>
                                    </div>

                                    <div className="data-block">
                                        <span>WORK MODE</span>
                                        <strong>FREELANCE / REMOTE</strong>
                                    </div>

                                    <div className="data-block">
                                        <span>FOCUS</span>
                                        <strong>
                                            WEB APPLICATIONS / UI / APIs
                                        </strong>
                                    </div>

                                    <div className="data-block">
                                        <span>APPROACH</span>
                                        <strong>
                                            UNDERSTAND → BUILD → TEST → IMPROVE
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section">
                            <div className="section-label">
                                <span>SYS / 004</span>
                                <span>TECHNICAL STACK</span>
                            </div>

                            <div className="stack-groups">
                                <div className="stack-group">
                                    <div className="stack-group__header">
                                        CORE STACK
                                    </div>

                                    <div className="stack-grid">
                                        <Tech icon={<FaHtml5 />} name="[ HTML5 ]" />
                                        <Tech icon={<FaCss3Alt />} name="[ CSS3 ]" />
                                        <Tech icon={<FaJs />} name="[ JavaScript ]" />
                                        <Tech icon={<SiTypescript />} name="[ TypeScript ]" />
                                        <Tech icon={<FaReact />} name="[ React ]" />
                                        <Tech icon={<SiNextdotjs />} name="[ Next.js ]" />
                                    </div>
                                </div>

                                <div className="stack-group">
                                    <div className="stack-group__header">
                                        BACKEND / DATA
                                    </div>

                                    <div className="stack-grid">
                                        <Tech icon={<SiNodedotjs />} name="[ Node.js ]" />
                                        <Tech icon={<SiExpress />} name="[ Express ]" />
                                        <Tech icon={<SiMongodb />} name="[ MongoDB ]" />
                                        <Tech icon={<SiPostgresql />} name="[ PostgreSQL ]" />
                                        <Tech icon={<SiMysql />} name="[ MySQL ]" />
                                        <Tech icon={<SiPrisma />} name="[ Prisma ]" />
                                    </div>
                                </div>

                                <div className="stack-group">
                                    <div className="stack-group__header">
                                        TOOLS
                                    </div>

                                    <div className="stack-grid">
                                        <Tech icon={<SiGit />} name="[ Git ]" />
                                        <Tech icon={<SiGithub />} name="[ GitHub ]" />
                                        <Tech icon={<SiDocker />} name="[ Docker ]" />
                                        <Tech icon={<SiPostman />} name="[ Postman ]" />
                                    </div>
                                </div>

                                <div className="stack-group">
                                    <div className="stack-group__header">
                                        CURRENTLY DEVELOPING
                                    </div>

                                    <div className="stack-grid">
                                        <Tech icon={<SiNestjs />} name="[ NestJS ]" />
                                        <Tech icon={<SiDocker />} name="[ Docker ]" />
                                        <Tech icon={<FaRobot />} name="[ AI Workflows ]" />
                                        <Tech icon={<FaServer />} name="[ sys Architecture ]" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Projects
    |--------------------------------------------------------------------------
    */

    const renderProjectsPage = () => {
        return (
            <div className="page">
                {renderPageHeader()}

                <div className="layout">
                    {renderNavigation()}

                    <main className="content">
                        <section className="section">
                            <div className="section-label">
                                <span>SYS / 005</span>
                                <span>PROJECT ARCHIVE</span>
                            </div>

                            <div className="projects-header">
                                <div>
                                    <div className="hero-kicker">
                                        SELECTED WORK
                                    </div>

                                    <h1>
                                        PROJECTS
                                        <span className="accent">.</span>
                                    </h1>
                                </div>

                                <div className="project-counter">
                                    {String(projectPage + 1).padStart(2, "0")} /
                                    {String(totalPages).padStart(2, "0")}
                                </div>
                            </div>

                            <div className="projects">
                                {displayedProjects.map((project, index) => (
                                    <article
                                        key={project.id ?? index}
                                        className="project-card"
                                    >
                                        <div className="project-card__top">
                                            <span>
                                                PROJECT /{" "}
                                                {String(
                                                    projectPage *
                                                        projectsPerPage +
                                                        index +
                                                        1
                                                ).padStart(3, "0")}
                                            </span>

                                            <span className="project-status">
                                                ● ACTIVE
                                            </span>
                                        </div>

                                        <div className="project-card__body">
                                            <h2>{project.name}</h2>

                                            <p>{project.info}</p>

                                            <div className="project-tech">
                                                {project.tech.map((item) => (
                                                    <span
                                                        key={item.id}
                                                        className="tech-tag"
                                                    >
                                                        {item.icon}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="project-card__footer">
                                            <span>
                                                WEB APPLICATION
                                            </span>

                                            <div className="project-links">
                                                {project.url && (
                                                    <a
                                                        href={project.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Open ${project.name}`}
                                                    >
                                                        <FaExternalLinkAlt />
                                                    </a>
                                                )}

                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`${project.name} GitHub repository`}
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className="pagination-controls">
                                <button
                                    onClick={prevPage}
                                    disabled={projectPage === 0}
                                >
                                    ← PREV
                                </button>

                                <span>
                                    PAGE {projectPage + 1} / {totalPages}
                                </span>

                                <button
                                    onClick={nextPage}
                                    disabled={projectPage === totalPages - 1}
                                >
                                    NEXT →
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Contact
    |--------------------------------------------------------------------------
    */

    const renderContacts = () => {
        return (
            <div className="page">
                {renderPageHeader()}

                <div className="layout">
                    {renderNavigation()}

                    <main className="content">
                        <section className="section">
                            <div className="section-label">
                                <span>SYS / 006</span>
                                <span>COMMUNICATION</span>
                            </div>

                            <div className="contact-layout">
                                <div className="contact-intro">
                                    <div className="hero-kicker">
                                        ESTABLISH CONNECTION
                                    </div>

                                    <h1>
                                        CONTACT
                                        <span className="accent">.</span>
                                    </h1>

                                    <p>
                                        Have a project, opportunity or
                                        technical problem worth discussing?
                                        Send a transmission.
                                    </p>

                                    <div className="contact-email">
                                        <span>DIRECT CHANNEL</span>
                                        <strong>
                                            chaplainrafael357@gmail.com
                                        </strong>
                                    </div>

                                    <div className="social-links">
                                        <a
                                            href="https://github.com/ChaplainRafael"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                        >
                                            <FaGithub />
                                        </a>

                                        <a
                                            href="https://linkedin.com/in/reza-eydi-429433350"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>

                                <form
                                    className="contact-form"
                                    action="https://formspree.io/f/xpwqdezo"
                                    method="POST"
                                >
                                    <div className="form-header">
                                        <span>TRANSMISSION FORM</span>
                                        <span>SECURE CHANNEL</span>
                                    </div>

                                    <label htmlFor="name">
                                        IDENTIFICATION
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="YOUR NAME"
                                        required
                                    />

                                    <label htmlFor="email">
                                        RETURN CHANNEL
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="YOUR EMAIL"
                                        required
                                    />

                                    <label htmlFor="message">
                                        MESSAGE
                                    </label>

                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="ENTER TRANSMISSION..."
                                        rows={7}
                                        required
                                    />

                                    <button type="submit">
                                        TRANSMIT MESSAGE
                                        <span>→</span>
                                    </button>
                                </form>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    };

    const content = () => {
        switch (page) {
            case "bio":
                return renderBioPage();

            case "projects":
                return renderProjectsPage();

            case "contact":
                return renderContacts();

            default:
                return renderHomePage();
        }
    };

    return <div className="portfolio">{content()}</div>;
};

/*
|--------------------------------------------------------------------------
| Technology component
|--------------------------------------------------------------------------
*/

const Tech = ({ icon, name, textOnly = false }) => {
    return (
        <div className="tech-item">
            <div className={`tech-item__icon ${textOnly ? "text-only" : ""}`}>
                {icon}
            </div>

            <span>{name}</span>
        </div>
    );
};

export default Home;