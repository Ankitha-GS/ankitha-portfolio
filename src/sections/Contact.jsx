
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20"
      fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.66 2.3 3.36 1.75.1-.73.4-1.23.72-1.52-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.11 5.53.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20"
      fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.97V9.37h2.96v9.53ZM6.45 8.07a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.9h-2.96v-4.64c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.72H9.76V9.37h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.56v5.21Z" />
    </svg>
  )
}

const contactLinks = [
  {
    label: 'EMAIL',
    value: "Have an opportunity or idea? Let's talk.",
    href: 'mailto:ankithags44@gmail.com',
    icon: <Mail size={20} />,
  },
  {
    label: 'GITHUB',
    value: 'A closer look at what I have been building.',
    href: 'https://github.com/Ankitha-GS',
    icon: <GitHubIcon />,
  },
  {
    label: 'LINKEDIN',
    value: "Let's connect and exchange ideas.",
    href: 'https://linkedin.com/in/ankitha-gs',
    icon: <LinkedInIcon />,
  },
]

export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact</h2>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-message"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="contact-eyebrow">HAVE A PROJECT IN MIND?</p>

          <h3>
            Let's build
            <br />
            something meaningful.
          </h3>

          <p className="contact-description">
            I'm open to opportunities, collaborations, and interesting
            projects. Feel free to connect with me.
          </p>
        </motion.div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {contactLinks.map((item) => (
            <motion.a
              className="contact-link-item"
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <span className="contact-link-icon">{item.icon}</span>

              <span className="contact-link-text">
                <span className="contact-link-label">{item.label}</span>
                <span className="contact-link-value">{item.value}</span>
              </span>

              <ArrowUpRight className="contact-link-arrow" size={19} />
            </motion.a>
          ))}

          <div className="contact-link-item contact-location">
            <span className="contact-link-icon">
              <MapPin size={20} />
            </span>

            <span className="contact-link-text">
              <span className="contact-link-label">LOCATION</span>
              <span className="contact-link-value">Bengaluru, India</span>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="contact-footer">
        <span>ANKITHA G S</span>
        <span>THANK YOU FOR VISITING.</span>
      </div>
    </section>
  )
}
