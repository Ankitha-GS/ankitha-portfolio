
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
  <h2>About</h2>
</div>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-main"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-lead">
            I'm a developer who enjoys turning ideas into useful,
            intelligent applications.
          </p>

          <p className="about-description">
            I'm a 2026 Software Engineering graduate
            with a strong interest in full-stack development and
            artificial intelligence. I enjoy working across the
            application stack, from building backend services and
            APIs to developing interfaces and integrating AI-powered
            capabilities.
          </p>

          <p className="about-description">
            Through internships and hands-on projects, I've worked
            with Python, FastAPI, React, databases and AI technologies.
            I'm always curious to learn, experiment with new ideas
            and build solutions that solve real-world problems.
          </p>

          <a href="#contact" className="about-link">
            Let's connect <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="about-facts"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="about-fact">
            <span className="fact-number">01</span>
            <div>
              <h3>Education</h3>
              <p>B.E. Information Science & Engineering</p>
              <small>2022 – 2026</small>
            </div>
          </div>

          <div className="about-fact">
            <span className="fact-number">02</span>
            <div>
              <h3>Academic Score</h3>
              <p>9.2 / 10 CGPA</p>
              <small>Undergraduate degree</small>
            </div>
          </div>

          <div className="about-fact">
            <span className="fact-number">03</span>
            <div>
              <h3>Areas of Interest</h3>
              <p>Artificial Intelligence · Full Stack Development</p>
              <small>Building practical applications</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
