import { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowRightLong, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { SiCplusplus, SiExpress, SiFlask, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'
import AnimatedBackground from './components/AnimatedBackground'
import CursorGlow from './components/CursorGlow'
import ThemeToggle from './components/ThemeToggle'
import TypingText from './components/TypingText'
import {
  achievements,
  certifications,
  education,
  internship,
  personalInfo,
  projects,
  skillGroups,
} from './data/portfolioData'

const skillIcons = {
  'C++': SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Flask: SiFlask,
  MongoDB: SiMongodb,
  'Tailwind CSS': SiTailwindcss,
}

const sectionFade = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}

function CertificationCard({ cert }) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasPreview = Boolean(cert.image) && !imageFailed

  return (
    <div className="glass-panel cert-card p-5">
      {hasPreview ? (
        <img
          src={cert.image}
          alt={`${cert.name} certificate preview`}
          className="cert-preview"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : null}
      <h3 className="mt-4 text-lg font-semibold text-white md:text-xl">{cert.name}</h3>
      <p className="mt-2 text-base text-cyan-200 md:text-lg">{cert.issuer}</p>
      <p className="text-sm uppercase tracking-[0.16em] text-slate-400">{cert.date}</p>
      {cert.credentialUrl ? (
        <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="cert-link mt-3 inline-flex">
          View Credential
          <FaArrowRightLong />
        </a>
      ) : null}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [profileImageFailed, setProfileImageFailed] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroShift = useTransform(scrollYProgress, [0, 1], [0, 120])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const typingWords = useMemo(
    () => ['Building polished digital products.', 'Shipping full-stack solutions.', 'Exploring practical AI systems.'],
    [],
  )

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nContact email: ${formData.email}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="app-shell">
      <AnimatedBackground theme={theme} />
      <CursorGlow />

      <header className="sticky-nav">
        <a href="#hero" className="brand-name">{personalInfo.name}</a>
        <nav className="nav-links hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#about">About</a>
          <a href="#internship">Internship</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        />
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-6 md:px-8 lg:px-10">
        <motion.section
          id="hero"
          className="glass-panel relative overflow-hidden p-8 md:p-12"
          style={{ y: heroShift }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-grid">
            <div>
              <span className="hero-tag mb-4 inline-block rounded-full px-4 py-1 text-xs tracking-[0.22em]">
                OPEN TO OPPORTUNITES & COLLABORATIONS
              </span>
              <h1 className="hero-title">{personalInfo.name}</h1>
              <h2 className="hero-role">{personalInfo.role}</h2>
              <p className="hero-subtitle">{personalInfo.subtitle}</p>
              <p className="typing-line">
                <TypingText words={typingWords} />
              </p>
              <p className="hero-summary">{personalInfo.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-primary" href="/Abhinav_CV(New).pdf" download>
                  <FaDownload />
                  View Resume
                </a>
                <a className="btn-secondary" href="#contact">
                  Contact Me
                  <FaArrowRightLong />
                </a>
              </div>

              <div className="hero-meta mt-8 flex flex-wrap items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-2">
                  <FaLocationDot /> {personalInfo.location}
                </span>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2">
                  <FaEnvelope /> Email
                </a>
                <a href={`tel:${personalInfo.phone}`} className="inline-flex items-center gap-2">
                  <FaPhone /> Call
                </a>
              </div>
            </div>

            <div className="profile-wrapper">
              <div className="profile-orb">
                {personalInfo.photo && !profileImageFailed ? (
                  <img
                    src={personalInfo.photo}
                    alt={`${personalInfo.name} profile`}
                    className="profile-image"
                    onError={() => setProfileImageFailed(true)}
                  />
                ) : (
                  <div className="avatar-core">AA</div>
                )}
              </div>
              <div className="mt-6 flex justify-center gap-3 text-xl">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-chip">
                  <FaGithub />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-chip">
                  <FaLinkedin />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="social-chip">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="mt-16"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading title="About" subtitle="Crafting modern, user-first, reliable software" />
          <div className="glass-panel p-7 md:p-10">
            <p className="text-lg leading-relaxed text-slate-100">{personalInfo.about}</p>
            <div className="mt-5 space-y-3">
              {personalInfo.aboutDetails?.map((detail) => (
                <p key={detail} className="text-base leading-relaxed text-slate-200 md:text-lg">
                  {detail}
                </p>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {personalInfo.highlights.map((item) => (
                <div key={item} className="highlight-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="internship"
          className="mt-16"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading title="Internship" subtitle="Hands-on product delivery in real business projects" />
          <div className="internship-spotlight">
            <div className="internship-badge">Professional Experience</div>
            <h3 className="internship-title">{internship.role}</h3>
            <p className="internship-company">{internship.company}</p>
            <p className="internship-date">{internship.date}</p>
            <ul className="internship-points">
              {internship.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="mt-16"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading title="Skills" subtitle="A balanced stack across frontend, backend, and tooling" />
          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-panel p-6">
                <h3 className="mb-4 text-lg font-semibold text-cyan-100">{group.title}</h3>
                <div className="space-y-4">
                  {group.items.map((skill) => {
                    const Icon = skillIcons[skill.name]
                    return (
                      <div key={skill.name}>
                        <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                          <span className="inline-flex items-center gap-2">
                            {Icon ? <Icon className="text-cyan-300" /> : null}
                            {skill.name}
                          </span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-track">
                          <motion.div
                            className="skill-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mt-16"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading title="Projects" subtitle="Production-minded builds with measurable outcomes" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="glass-panel project-card p-6"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <p className="mb-2 text-sm uppercase tracking-[0.18em] text-cyan-300">{project.date}</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-200 md:text-lg">{project.description}</p>
                <p className="mt-3 text-base leading-relaxed text-cyan-100 md:text-lg">{project.impact}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 text-sm">
                  <a href={project.github} target="_blank" rel="noreferrer" className="chip-link">
                    <FaGithub /> GitHub
                  </a>
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="chip-link">
                      Live Demo
                    </a>
                  ) : (
                    <span className="chip-link disabled">Live Demo Soon</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          className="mt-16"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading title="Certifications" subtitle="Continuous learning across cloud, AI, and software engineering" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} cert={cert} />
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {achievements.map((item) => (
              <div key={item.title} className="glass-panel p-5">
                <h3 className="text-lg font-semibold text-white md:text-xl">{item.title}</h3>
                <p className="mt-2 text-base text-slate-200 md:text-lg">{item.note}</p>
                <p className="text-sm uppercase tracking-[0.16em] text-cyan-300">{item.date}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="timeline"
          className="mt-16"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading title="Education" subtitle="Academic journey and milestones" />
          <div className="glass-panel p-6">
            <h3 className="timeline-title">Education</h3>
            <div className="timeline-list">
              {education.map((item) => (
                <article key={`${item.school}-${item.detail}`} className="timeline-item">
                  <p className="timeline-date">{item.date}</p>
                  <h4>{item.school}</h4>
                  <p className="text-sm text-slate-200">{item.detail}</p>
                  <p className="text-sm text-cyan-200">{item.score}</p>
                  <p className="text-xs text-slate-400">{item.location}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mt-16"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading title="Contact" subtitle="Let us build something meaningful together" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <form className="glass-panel p-6" onSubmit={handleContactSubmit}>
              <label className="field-label" htmlFor="name">Name</label>
              <input
                id="name"
                className="field-input"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                required
              />

              <label className="field-label mt-4" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="field-input"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                required
              />

              <label className="field-label mt-4" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="field-input min-h-32"
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                required
              />

              <button className="btn-primary mt-5" type="submit">
                Send Message
                <FaArrowRightLong />
              </button>
            </form>

            <aside className="glass-panel p-6">
              <h3 className="text-xl font-semibold text-white">Reach Out</h3>
              <p className="mt-2 text-sm text-slate-200">
                Prefer direct communication? Use the channels below and I will respond quickly.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a className="contact-link" href={`mailto:${personalInfo.email}`}>
                  <FaEnvelope /> {personalInfo.email}
                </a>
                <a className="contact-link" href={`tel:${personalInfo.phone}`}>
                  <FaPhone /> {personalInfo.phone}
                </a>
                <a className="contact-link" href={personalInfo.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub Profile
                </a>
                <a className="contact-link" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin /> LinkedIn Profile
                </a>
              </div>
            </aside>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 text-center text-sm text-slate-400 md:px-8 lg:px-10">
        © {new Date().getFullYear()} {personalInfo.name}. Designed and developed with React, Tailwind CSS, and Framer Motion.
      </footer>
    </div>
  )
}

export default App
