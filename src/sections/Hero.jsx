
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.66 2.3 3.36 1.75.1-.73.4-1.23.72-1.52-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.11 5.53.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.97V9.37h2.96v9.53ZM6.45 8.07a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.9h-2.96v-4.64c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.72H9.76V9.37h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.56v5.21Z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background-detail" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-intro">
          <span className="intro-line" />
          <span>SOFTWARE ENGINEER · BENGALURU, INDIA</span>
        </div>

        <h1>
          Hello, I'm
          <br />
          <span className="hero-name">Ankitha G S.</span>
        </h1>

        <h2>Full Stack Developer <br />&amp; AI Engineer</h2>

        <p className="hero-description">
          I build AI-powered applications, intelligent systems and reliable
          backend solutions to solve real-world problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="secondary-btn">
            Get in touch <ArrowDownRight size={17} />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Ankitha-GS"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/ankitha-gs"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:ankithags44@gmail.com" aria-label="Email">
            <Mail size={19} />
          </a>
          <span className="social-divider" />
          <span>OPEN TO OPPORTUNITIES</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="portrait-decoration" />
        <div className="portrait-frame">
          <img
            src="/images/profile.jpg"
            alt="Ankitha G S"
            className="profile-image"
          />
        </div>
        
      </motion.div>

      <a href="#about" className="hero-scroll">
        SCROLL TO DISCOVER <ArrowDownRight size={15} />
      </a>
    </section>
  )
}
