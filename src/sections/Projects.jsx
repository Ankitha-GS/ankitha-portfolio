
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.66 2.3 3.36 1.75.1-.73.4-1.23.72-1.52-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.11 5.53.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  )
}

const projects = [
  {
    number: '01',
    category: 'ARTIFICIAL INTELLIGENCE · FULL STACK',
    title: 'AI Resume Screener',
    description:
      'An AI-powered recruitment platform that analyzes resumes against job descriptions, evaluates candidate skills and experience, and generates intelligent candidate insights using AI-based semantic analysis.',
    technologies: [
      'Python',
      'FastAPI',
      'React.js',
      'PostgreSQL',
      'Gemini API',
    ],
    github:
      'https://github.com/Ankitha-GS/AI-Resume-Screener',
    live:
      'https://ai-resume-screener-one-sigma.vercel.app/',
  },
  {
    number: '02',
    category: 'GENERATIVE AI · RETRIEVAL AUGMENTED GENERATION',
    title: 'RAG Document Q&A System',
    description:
      'An intelligent document question-answering system that allows users to upload documents and ask questions. It uses document chunking, vector embeddings, semantic search, and LLM-based response generation to provide contextual answers.',
    technologies: [
      'Python',
      'LangChain',
      'Gemini API',
      'ChromaDB',
      'Hugging Face',
    ],
    github:
      'https://github.com/Ankitha-GS/rag-qa',
    live:
      'https://rag-app-juqkpcif2armydtzd2pevm.streamlit.app/',
  },
]

export default function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Projects</h2>
      </motion.div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            className="project-item"
            key={project.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
            }}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-content">
              <div className="project-info">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} GitHub repository`}
                  title="GitHub Repository"
                >
                  <GitHubIcon />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  title="Live Demo"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
