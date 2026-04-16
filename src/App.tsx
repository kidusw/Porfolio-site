import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, FileText, ArrowUpRight, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "PDF RAG Persistent Memory",
    description: "An intelligent PDF processing system utilizing Retrieval-Augmented Generation with persistent memory capabilities for long-term document interactions.",
    tags: ["Python", "LangChain", "ChromaDB", "OpenAI"],
    link: "https://github.com/kidusw/pdf-rag-persistent-memory"
  },
  {
    title: "Chat App v1",
    description: "Real-time communication platform with low-latency message delivery, user presence indicators, and private room support.",
    tags: ["MERN", "Socket.io", "React", "Node.js"],
    link: "https://github.com/kidusw/chat_app_v1"
  },
  {
    title: "Art Gallery Web App",
    description: "A sophisticated art gallery management system built with ASP.NET Core 8, featuring digital exhibitions, artist profiles, and collection management.",
    tags: ["ASP.NET Core 8", "SQL Server", "C#"],
    link: "https://github.com/kidusw/Art-gallery-using-Asp.net-core-8"
  },
  {
    title: "Instagram Social Clone",
    description: "A full-featured social media clone replicating core Instagram functionalities including media uploads, following systems, and reactive feeds.",
    tags: ["Full Stack", "React", "Firebase", "UI/UX"],
    link: "https://github.com/kidusw/instagram-social-clone"
  }
];

const SKILLS = [
  { category: "Languages", items: ["Python", "C++", "TypeScript", "JavaScript", "SQL"] },
  { category: "Frameworks", items: ["React", "Next.js", "Django", "FastAPI", "Node.js"] },
  { category: "ML & Data", items: ["TensorFlow", "PyTorch", "LLMs", "Vector DBs (Chroma, Pinecone)", "Graph DBs (Neo4j)"] },
  { category: "Infrastructure", items: ["MLOps", "Linux Server Administration", "Docker", "Git/GitHub"] }
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-12 md:py-24 selection:bg-brand-accent/20">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative group shrink-0">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-accent to-blue-600 rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
            <img 
              src="https://github.com/kidusw.png" 
              alt="Kidus Workneh" 
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-brand-card shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-brand-text-main tracking-tight">Kidus Workneh</h1>
            <p className="text-lg md:text-xl text-brand-text-secondary font-medium tracking-wide">Software Engineer & Full-Stack Developer</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 max-w-md lg:max-w-none">
          <a href="#" className="flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-white rounded-xl shadow-lg shadow-brand-accent/20 hover:bg-brand-accent/90 hover:scale-105 transition-all duration-300 font-bold text-sm tracking-wide group">
            <FileText size={18} className="group-hover:rotate-6 transition-transform" /> Download Resume
          </a>
          <a href="https://github.com/kidusw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-brand-border rounded-xl bg-brand-card shadow-brand hover:border-brand-accent hover:shadow-lg transition-all duration-300 font-bold text-sm">
            <Github size={18} className="text-brand-text-main" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kidus-workneh-143466208/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-brand-border rounded-xl bg-brand-card shadow-brand hover:border-brand-accent hover:shadow-lg transition-all duration-300 font-bold text-sm">
            <Linkedin size={18} className="text-brand-accent" /> LinkedIn
          </a>
          <a href="mailto:kidusworkneh555@gmail.com" className="flex items-center gap-2 px-4 py-2 border border-brand-border rounded-xl bg-brand-card shadow-brand hover:border-brand-accent hover:shadow-lg transition-all duration-300 font-bold text-sm">
            <Mail size={18} className="text-red-500" /> Email
          </a>
          <a href="tel:+251923746927" className="flex items-center gap-2 px-4 py-2 border border-brand-border rounded-xl bg-brand-card shadow-brand hover:border-brand-accent hover:shadow-lg transition-all duration-300 font-bold text-sm">
            <Phone size={18} className="text-green-500" /> +251 923 746 927
          </a>
        </div>
      </motion.header>

      <main className="flex flex-col gap-24">
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-sm uppercase tracking-widest text-brand-accent font-bold mb-6">About Me</h2>
          <p className="text-xl md:text-2xl text-brand-text-secondary leading-relaxed font-light">
            Dedicated software engineer focused on building robust backends and intuitive user interfaces. 
            Currently at <span className="text-brand-text-main font-medium italic">Shega Media and Technology</span>, 
            specializing in <span className="text-brand-text-main font-medium">MLOps</span>, <span className="text-brand-text-main font-medium">Vector & Graph Databases</span>, and <span className="text-brand-text-main font-medium">Linux Infrastructure</span>.
          </p>
        </motion.section>

        <section>
          <h2 className="text-sm uppercase tracking-widest text-brand-accent font-bold mb-10">Featured Projects</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group p-8 bg-brand-card border border-brand-border rounded-2xl shadow-brand hover:border-brand-accent transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-bold rounded-md uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-brand-text-secondary line-height-relaxed text-sm mb-8">
                    {project.description}
                  </p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-brand-accent font-bold text-sm tracking-wide group-hover:gap-2 transition-all"
                >
                  View Repository <ArrowUpRight size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section>
          <h2 className="text-sm uppercase tracking-widest text-brand-accent font-bold mb-10">Skills & Tech</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {SKILLS.map((set, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-extrabold uppercase text-brand-text-secondary mb-4 tracking-tighter">{set.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {set.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-brand-card border border-brand-border rounded-lg text-sm font-medium shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="mt-40 pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6 text-brand-text-secondary text-sm">
        <div className="flex items-center gap-4">
          <p>© 2024 Kidus Workneh Abebe</p>
          <span className="w-1 h-1 bg-brand-border rounded-full hidden md:block"></span>
          <p className="font-medium text-brand-text-main">Available for work</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="flex items-center gap-1.5 hover:text-brand-accent transition-colors text-brand-text-secondary font-semibold">
            <FileText size={14} /> Resume
          </a>
          <a href="https://github.com/kidusw" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors text-brand-text-secondary">GitHub</a>
          <a href="https://www.linkedin.com/in/kidus-workneh-143466208/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors text-brand-text-secondary">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
