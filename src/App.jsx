import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  Code2, ExternalLink, ChevronRight, MapPin, Calendar, CheckCircle2,
  GraduationCap, Award, Database, Image as ImageIcon
} from "lucide-react";

const profile = {
  name: "Zia Ur Rehman",
  heroTitle: "Code By Zia",
  role: "Web Developer & AI / ML Engineer",
  location: "Pakistan",
  email: "contactmrzia786@gmail.com",
  mailSubject: "Collaboration / Project Inquiry - Portfolio Contact",
  mailBody: "Hi Zia,\n\nI came across your portfolio and would like to discuss a project / opportunity with you.\n\nBest regards,",
  github: "https://github.com/MrZiaUrRehman786",
  linkedin: "https://www.linkedin.com/in/zia-ur-rehman-345900326/?skipRedirect=true",
  resume: "/resume.pdf",
  image: "/profile2.jpeg",
  intro:
    "I design and build full-stack web applications and AI/ML solutions, turning complex algorithms and data pipelines into fast, responsive user experiences."
};

// Resilient email dispatch helper
function sendEmail() {
  const subject = encodeURIComponent(profile.mailSubject);
  const body = encodeURIComponent(profile.mailBody);
  const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`;

  // Try system mailto client first
  window.location.href = mailtoUrl;

  // Fallback to Gmail in web browser
  setTimeout(() => {
    window.open(webGmailUrl, "_blank", "noopener,noreferrer");
  }, 350);
}

const projects = [
  {
    slug: "event-management-system",
    title: "Event Management System",
    category: "Full-Stack Web App",
    featured: true,
    icon: Database,
    image: "event.jpg",
    summary: "A centralized university event booking, registration, and attendee tracking platform.",
    description:
      "A comprehensive event management platform engineered for campus communities. Features role-based access for organizers and attendees, interactive schedules, automated ticketing, and admin moderation dashboards.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    metrics: ["Role-based access", "Dynamic registrations", "Admin analytics dashboard"],
    architecture: ["Client UI", "Express API", "JWT Auth", "MongoDB", "Cloud Assets", "Notification Service"],
    github: "https://github.com/MrZiaUrRehman786",
    demo: "#"
  },
  {
    slug: "portfolio-development",
    title: "Portfolio Development",
    category: "Frontend & UI/UX",
    featured: true,
    icon: Code2,
    image: "portfolio.png",
    summary: "A high-performance developer portfolio with fluid routing, modern architecture, and clean UI engineering.",
    description:
      "A responsive single-page portfolio engineered with modern React paradigms, dynamic routing, reusable modular components, and optimized CSS layout styling.",
    tags: ["React", "React Router", "Vite", "Modern CSS", "Responsive Design"],
    metrics: ["Sub-second load", "100% responsive", "Accessible UI components"],
    architecture: ["Vite Bundle", "React Router", "Theme Engine", "Dynamic Render", "Static Deployment"],
    github: "https://github.com/MrZiaUrRehman786",
    demo: "#"
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science (BS CS)",
    institution: "University of Sargodha",
    period: "2024 — 2028",
    status: "Undergraduate",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Artificial Intelligence, Operating Systems, Database Systems.",
      "Focused on full-stack web architecture, machine learning models, and algorithmic problem solving."
    ]
  }
];

const certificates = [
  {
    title: "Python for AI and Data Science by IBM",
    issuer: "IBM / Coursera",
    date: "2025",
    image: "data.png",
    skills: ["Python", "Data Science", "Pandas", "NumPy", "AI Foundations"]
  },
  {
    title: "Deeplearning Models",
    issuer: "DeepLearning.AI / Coursera",
    date: "2025",
    image: "deep.png",
    skills: ["Deep Learning", "Neural Networks", "PyTorch", "Model Optimization"]
  }
];

const skills = {
  "Web Development": ["React", "JavaScript (ES6+)", "Node.js", "Express", "Tailwind CSS", "HTML5/CSS3"],
  "AI & Machine Learning": ["Python", "PyTorch", "Scikit-Learn", "Deep Learning", "Data Analysis", "Prompt Engineering"],
  "Databases & Core CS": ["MongoDB", "PostgreSQL", "Data Structures", "Algorithms", "Git/GitHub", "Linux (Ubuntu)"]
};

const experience = [
  {
    role: "Full-Stack Web & AI Developer",
    company: "Personal & Academic Projects",
    period: "2024 — Present",
    bullets: [
      "Architected and deployed responsive web apps combining React frontends with Node.js and RESTful services.",
      "Trained and evaluated deep learning and machine learning models for predictive analysis and data workflows.",
      "Maintained modular codebases, clean APIs, and optimized client-side interactions for seamless UX."
    ]
  }
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    ["About", "about"],
    ["Projects", "work"],
    ["Skills", "skills"],
    ["Education", "education"],
    ["Certificates", "certificates"],
    ["Experience", "experience"],
    ["Contact", "contact"]
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
      }
    }
  };

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">Z</span>
          <span>{profile.name}<small>.dev</small></span>
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, targetId]) => (
            <a
              key={label}
              href={`/#${targetId}`}
              onClick={(e) => handleNavClick(e, targetId)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta button outline" href={profile.resume} download>
            Resume <Download size={15} />
          </a>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}<span className="accent">.dev</span></strong>
          <p>Web Development · AI & Machine Learning · Software Engineering</p>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <button
            type="button"
            className="icon-mail-btn"
            onClick={sendEmail}
            aria-label={`Send email to ${profile.email}`}
          >
            <Mail size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  useReveal();
  const location = useLocation();
  const [activeCertModal, setActiveCertModal] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="eyebrow"><span className="pulse" /> Available for Web & AI opportunities</div>
            <h1>
              <span className="gradient-text">{profile.heroTitle}</span>
            </h1>
            <p className="hero-copy">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button outline primary-outline" href="#work">
                Explore Projects <ArrowUpRight size={18} />
              </a>
              <a className="button outline ghost-outline" href={profile.resume} download>
                Download CV <Download size={17} />
              </a>
            </div>
            <div className="hero-stack">
              {["React", "Node.js", "Python", "PyTorch", "Deep Learning", "MongoDB", "FastAPI", "Tailwind CSS"].map(x => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>

          <div className="hero-avatar-wrap">
            <div className="avatar-card">
              <img
                src={profile.image}
                alt={profile.name}
                className="avatar-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="avatar-fallback" style={{ display: "none" }}>
                <span>{profile.name.charAt(0)}</span>
              </div>
              <div className="avatar-badge">
                <span className="pulse-dot" /> Open to Work
              </div>
            </div>
            <div className="avatar-caption">
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
            </div>
          </div>
        </div>
        <div className="scroll-hint">SCROLL <span>↓</span></div>
      </section>

      <main>
        {/* Section 01: About */}
        <section id="about" className="section container">
          <div className="two-col reveal">
            <div>
              <h2>Bridging web engineering with intelligent systems.</h2>
            </div>
            <div>
              <p className="lead">I build scalable full-stack applications and integrate machine learning workflows to create responsive, intelligent products.</p>
              <p>My work spans frontend architecture, RESTful API backends, deep learning pipelines, and predictive algorithms. Currently pursuing a BS in Computer Science, bridging software design with AI theory.</p>
              <div className="mini-facts">
                <span><MapPin size={16} /> {profile.location}</span>
                <span><Code2 size={16} /> Full-Stack & ML</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Projects */}
        <section id="work" className="section section-silver">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>Projects that ship.</h2>
              </div>
              <p>Selected systems demonstrating full-stack web engineering, UI craftsmanship, and software architecture.</p>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
            </div>
          </div>
        </section>

        {/* Section 03: Skills */}
        <section id="skills" className="section container">
          <h2 className="reveal">Technical toolkit.</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([name, items], i) => (
              <div className="skill-card hover-glow reveal" key={name} style={{"--delay": `${i * 70}ms`}}>
                <span className="skill-number">0{i+1}</span>
                <h3>{name}</h3>
                <div className="skill-list">{items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Education */}
        <section id="education" className="section section-silver">
          <div className="container">
            <h2 className="reveal">Education.</h2>
            <div className="education-grid">
              {education.map((edu, idx) => (
                <div className="education-card hover-glow reveal" key={idx}>
                  <div className="education-header">
                    <div className="education-icon"><GraduationCap size={24} /></div>
                    <div>
                      <h3>{edu.degree}</h3>
                      <p className="accent-text">{edu.institution}</p>
                    </div>
                    <span className="education-period"><Calendar size={14} /> {edu.period}</span>
                  </div>
                  <ul>
                    {edu.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: Certificates */}
        <section id="certificates" className="section container">
          <h2 className="reveal">Certifications & Training.</h2>
          <div className="certs-grid">
            {certificates.map((cert, i) => (
              <div className="cert-card hover-glow reveal" key={i} style={{"--delay": `${i * 80}ms`}}>
                <div className="cert-top">
                  <Award className="cert-icon" size={24} />
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-skills">
                  {cert.skills.map(s => <span key={s}>{s}</span>)}
                </div>
                <button
                  className="cert-btn-action button outline"
                  onClick={() => setActiveCertModal(cert)}
                >
                  <ImageIcon size={15} /> View Credential
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 06: Experience */}
        <section id="experience" className="section section-silver">
          <div className="container">
            <h2 className="reveal">Where I've applied it.</h2>
            <div className="timeline">
              {experience.map((job, i) => (
                <div className="timeline-item reveal" key={job.role + i}>
                  <div className="timeline-dot" />
                  <div className="timeline-meta"><Calendar size={15} /> {job.period}</div>
                  <div className="timeline-body hover-glow">
                    <h3>{job.role}</h3>
                    <p className="accent-text">{job.company}</p>
                    <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container contact-inner reveal">
            <h2>Let's build something extraordinary.</h2>
            <p>Have a web development project, AI/ML challenge, or collaboration in mind? Let's talk.</p>
            <div className="hero-actions">
              <button
                type="button"
                className="button outline primary-outline"
                onClick={sendEmail}
              >
                Start a conversation <Mail size={17} />
              </button>
              <a className="button outline ghost-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Certificate Image Modal */}
      {activeCertModal && (
        <div className="modal-backdrop" onClick={() => setActiveCertModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>{activeCertModal.title}</h3>
                <p>{activeCertModal.issuer} · {activeCertModal.date}</p>
              </div>
              <button className="modal-close" onClick={() => setActiveCertModal(null)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>
            <div className="modal-image-wrap">
              <img
                src={activeCertModal.image}
                alt={activeCertModal.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".cert-fallback");
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="cert-fallback" style={{ display: "none" }}>
                <Award size={46} />
                <p>Attach image at <code>{activeCertModal.image}</code></p>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href={activeCertModal.image}
                target="_blank"
                rel="noreferrer"
                className="button outline"
              >
                Open Original Image <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const [imgError, setImgError] = useState(false);

  return (
    <Link className="project-card hover-glow reveal" to={`/projects/${project.slug}`} style={{"--delay": `${index * 100}ms`}}>
      <div className="project-media">
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-card-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-image-placeholder">
            <Icon size={34} />
            <span>Project Screenshot</span>
          </div>
        )}
      </div>

      <div className="project-content-wrap">
        <div className="project-top">
          <div className="project-category">{project.category}</div>
          <ArrowUpRight className="arrow" size={20} />
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">{project.tags.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div>
      </div>
    </Link>
  );
}

function Projects() {
  useReveal();
  return (
    <div className="page">
      <div className="container page-head">
        <h1>Engineered applications & systems.</h1>
        <p>A showcase of full-stack projects, AI-assisted tools, and responsive interfaces.</p>
      </div>
      <div className="container all-projects">
        {projects.map((p, i) => <ProjectCard project={p} index={i} key={p.slug} />)}
      </div>
      <Footer />
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [imgError, setImgError] = useState(false);
  useReveal();

  if (!project) {
    return (
      <div className="container not-found">
        <h1>Project not found.</h1>
        <Link to="/projects">Back to projects</Link>
      </div>
    );
  }

  const Icon = project.icon;
  return (
    <div className="page">
      <div className="container project-detail">
        <Link className="back-link" to="/projects">← All projects</Link>
        <div className="detail-icon"><Icon size={30} /></div>
        <div className="project-category">{project.category}</div>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.description}</p>
        
        <div className="detail-actions">
          <a className="button outline primary-outline" href={project.github} target="_blank" rel="noreferrer">
            GitHub <Github size={17} />
          </a>
          <a className="button outline ghost-outline" href={project.demo}>
            Live Demo <ExternalLink size={16} />
          </a>
        </div>

        <div className="project-detail-hero-media hover-glow reveal">
          {!imgError && project.image ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="detail-image-placeholder">
              <Icon size={48} />
              <p>Add your project screenshot at <code>{project.image}</code></p>
            </div>
          )}
        </div>

        <div className="detail-grid">
          <div className="detail-main">
            <h2>Architecture</h2>
            <div className="architecture">
              {project.architecture.map((step, i) => (
                <React.Fragment key={step}>
                  <div className="arch-step"><span>0{i+1}</span>{step}</div>
                  {i < project.architecture.length - 1 && <ChevronRight className="arch-arrow" size={17} />}
                </React.Fragment>
              ))}
            </div>
            <h2>Key Capabilities</h2>
            <div className="capabilities">
              {project.metrics.map(m => <div key={m}><CheckCircle2 size={18} />{m}</div>)}
            </div>
            <h2>Technologies</h2>
            <div className="tags large">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
          </div>
          <aside className="detail-side">
            <div className="side-card hover-glow">
              <span>PROJECT STATUS</span>
              <strong>Active / Complete</strong>
            </div>
            <div className="side-card hover-glow">
              <span>ROLE</span>
              <strong>Web Developer & AI Engineer</strong>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;