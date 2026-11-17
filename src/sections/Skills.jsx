
import { motion } from 'framer-motion'

const categories = [
  {
    number: '01',
    title: 'Full Stack Development',
    skills: ['Python', 'React.js', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    number: '02',
    title: 'Artificial Intelligence',
    skills: ['Machine Learning', 'LLMs', 'RAG', 'LangChain', 'Gemini API', 'Hugging Face'],
  },
  {
    number: '03',
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Firebase', 'ChromaDB'],
  },
  {
    number: '04',
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Render', 'Vercel'],
  },
  {
    number: '05',
    title: 'Core Concepts',
    skills: ['DSA', 'OOP', 'DBMS', 'Computer Networks'],
  },
]

export default function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>

      <div className="skills-list">
        {categories.map((category, index) => (
          <motion.div
            className="skills-row"
            key={category.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span className="skills-number">{category.number}</span>

            <h3>{category.title}</h3>

            <div className="skills-items">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
