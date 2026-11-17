
import { motion } from 'framer-motion'

const experiences = [
  {
    number: '01',
    role: 'Android Developer Intern',
    company: 'MindMatrix Ed',
    period: 'Feb 2026 — May 2026',
    type: 'Internship',
    description:
      'Worked on Android application development using Kotlin and Jetpack Compose. Contributed to the Work Connect application, integrated Firebase and REST APIs, and worked on application testing and debugging.',
    skills: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST APIs'],
  },
  {
    number: '02',
    role: 'Data Analytics Trainee',
    company: 'Sonata Software',
    period: 'Nov 2025 — Feb 2026',
    type: 'Training',
    description:
      'Gained practical experience in data analytics, including data cleaning, exploratory data analysis, SQL queries, and dashboard development using data visualization tools.',
    skills: ['SQL', 'Power BI', 'Tableau', 'Data Analysis'],
  },
]

export default function Experience() {
  return (
    <section className="experience section-padding" id="experience">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Experience</h2>
      </motion.div>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <motion.article
            className="experience-item"
            key={item.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
          >
            <div className="experience-number">
              {item.number}
            </div>

            <div className="experience-main">
              <div className="experience-top">
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">
                    {item.company}
                  </p>
                </div>

                <span className="experience-period">
                  {item.period}
                </span>
              </div>

              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-skills">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
