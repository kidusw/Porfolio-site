import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  RotateCcw,
} from "lucide-react";

const RESUME_URL = "Kidus_Workneh_Abebe_Resume.pdf";
const GITHUB_URL = "https://github.com/kidusw";
const LINKEDIN_URL = "https://www.linkedin.com/in/kidus-workneh-143466208/";
const EMAIL = "kidusworkneh555@gmail.com";

const NODES = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "stack", label: "stack" },
  { id: "training", label: "training_data" },
  { id: "contact", label: "contact" },
];

const EXPERIENCE = [
  {
    kind: "AI",
    text: "Engineered production-grade AI backends: RAG pipelines and autonomous agents built on LangChain / LangGraph, LLMs and vector databases for high-throughput retrieval.",
  },
  {
    kind: "ML",
    text: "Contributed to machine learning workflows: large-scale data preprocessing, feature engineering and model experimentation.",
  },
  {
    kind: "API",
    text: "Architected and deployed performant backend APIs with FastAPI and NestJS, tuning server-side logic for scalable digital platforms.",
  },
  {
    kind: "DATA",
    text: "Designed complex relational schemas on PostgreSQL + Prisma ORM, enforcing strict transaction atomicity and data consistency.",
  },
  {
    kind: "OPS",
    text: "Containerized services with Docker and ran deployment pipelines, using Linux administration and bash scripting for secure, automated remote server management.",
  },
];

const PIPELINE = ["PDF upload", "chunk", "embed", "ChromaDB", "retrieve", "LLM", "answer"];

const PROJECTS = [
  {
    title: "Machine & Deep Learning Lab",
    kind: "ML",
    description:
      "A full supervised-learning path, from regression, logistic models, KNN, SVMs and tree ensembles (random forests, AdaBoost) to deep learning in PyTorch, with GridSearchCV tuning throughout.",
    stack: ["scikit-learn", "PyTorch", "Pandas", "Matplotlib"],
    link: "https://github.com/kidusw/machine_deep_learning_repo",
  },
  {
    title: "Experiment Tracking with MLflow",
    kind: "MLOps",
    description:
      "Logs parameters, metrics and model artifacts across several ML projects and an ANN deep-learning project, so runs stay reproducible and comparable.",
    stack: ["MLflow", "Python", "uv"],
    link: "https://github.com/kidusw/experiment_tracking_with_mlflow",
  },
  {
    title: "Freelancing Marketplace",
    kind: "Backend",
    description:
      "The complete backend and data model for a multi-user marketplace, with secure auth, role-based access control and optimized search over service listings.",
    stack: ["Node.js", "React", "MongoDB", "TypeScript"],
    link: "https://github.com/kidusw/freelance_senior_project",
  },
  {
    title: "Real-time Chat Server",
    kind: "Backend",
    description:
      "An event-driven messaging server on Socket.io, with Redis pub/sub for bidirectional streams and stateless session caching.",
    stack: ["Socket.io", "Node.js", "Redis"],
    link: "https://github.com/kidusw/chat_app_v1",
  },
];

const CERTS = [
  { id: "8SHA9OJZYRWW", title: "Supervised Machine Learning: Regression and Classification" },
  { id: "QVMYGLQEEV4B", title: "Neural Networks and Deep Learning" },
  {
    id: "H3HE6LQT6J9G",
    title: "Improving Deep Neural Networks",
    sub: "Hyperparameter tuning, regularization and optimization",
  },
  { id: "EPPU7L9VAA59", title: "Convolutional Neural Networks" },
];

type Cluster ={ name: string; x: number; y: number; items: string[]; hot?: boolean };

const CLUSTERS: Cluster[] = [
  {
    name: "machine learning",
    x: 520,
    y: 140,
    hot: true,
    items: [
      "LangChain",
      "LangGraph",
      "RAG pipelines",
      "Autonomous agents",
      "Vector search",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    name: "backend",
    x: 70,
    y: 120,
    items: ["FastAPI", "NestJS", "Node.js", "Express", "Django", "Next.js"],
  },
  {
    name: "data",
    x: 300,
    y: 330,
    items: ["PostgreSQL", "Prisma ORM", "Redis", "MongoDB", "ChromaDB"],
  },
  {
    name: "languages",
    x: 70,
    y: 390,
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Bash"],
  },
  {
    name: "infrastructure",
    x: 560,
    y: 400,
    items: ["Docker", "Linux admin", "CI/CD", "Git / GitHub", "Shell scripting"],
  },
];

const RETRIEVED = [
  { src: "experience/shega.md", text: "RAG pipelines & LangGraph agents in production", score: 0.94 },
  { src: "projects/pdf-rag.md", text: "multi-document retrieval · ChromaDB + MongoDB", score: 0.89 },
  { src: "skills/ml.md", text: "PyTorch · TensorFlow · scikit-learn · MLflow", score: 0.83 },
];

const QUERY = "who builds the retrieval layer?";
const ANSWER =
  "Kidus Workneh Abebe, a software engineer who builds RAG systems, LLM agents and the APIs that serve them.";

/* ------------------------------------------------------------------ */

function useTrace(reduced: boolean) {
  const [run, setRun] = useState(0);
  const [typed, setTyped] = useState(reduced ? QUERY.length : 0);
  const [hits, setHits] = useState(reduced ? RETRIEVED.length : 0);
  const [streamed, setStreamed] = useState(reduced ? ANSWER.length : 0);

  useEffect(() => {
    if (reduced) return;
    setTyped(0);
    setHits(0);
    setStreamed(0);
    const timers: number[] = [];
    let t = 500;
    for (let i = 1; i <= QUERY.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), t));
      t += 38;
    }
    t += 450;
    for (let i = 1; i <= RETRIEVED.length; i++) {
      timers.push(window.setTimeout(() => setHits(i), t));
      t += 380;
    }
    t += 300;
    for (let i = 1; i <= ANSWER.length; i++) {
      timers.push(window.setTimeout(() => setStreamed(i), t));
      t += 16;
    }
    return () => timers.forEach(clearTimeout);
  }, [run, reduced]);

  const done = streamed >= ANSWER.length;
  return { typed, hits, streamed, done, replay: () => setRun((r) => r + 1) };
}

function TracePanel() {
  const reduced = !!useReducedMotion();
  const { typed, hits, streamed, done, replay } = useTrace(reduced);

  return (
    <div className="relative border border-line bg-ink-2/90 backdrop-blur-sm shadow-[12px_12px_0_0_rgba(255,91,46,0.12)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
        <span className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${done ? "bg-sage" : "bg-signal animate-pulse"}`} />
          rag.trace / live
        </span>
        <button
          onClick={replay}
          className="flex items-center gap-1.5 text-muted transition-colors hover:text-signal"
          aria-label="Replay the retrieval trace"
        >
          <RotateCcw size={11} /> replay
        </button>
      </div>

      <div className="space-y-5 p-5 font-mono text-[12px] leading-relaxed">
        <div>
          <div className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-dim">› query</div>
          <div className="text-paper">
            {QUERY.slice(0, typed)}
            {typed < QUERY.length && <span className="caret" />}
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-[10px] uppercase tracking-[0.18em] text-dim">
            <span>› retrieve · top_k=3</span>
            <span>cosine</span>
          </div>
          <ul className="space-y-2.5">
            {RETRIEVED.map((r, i) => (
              <li
                key={r.src}
                className={`transition-all duration-500 ${i < hits ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="truncate text-sage">{r.src}</span>
                  <span className="text-signal tabular-nums">{r.score.toFixed(2)}</span>
                </div>
                <div className="mt-1 h-[3px] bg-ink-3">
                  <div
                    className="h-full bg-signal transition-[width] duration-700 ease-out"
                    style={{ width: i < hits ? `${r.score * 100}%` : "0%" }}
                  />
                </div>
                <div className="mt-1 truncate text-[11px] text-muted">{r.text}</div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-dim">› generate</div>
          <p className="min-h-[4.5em] font-sans text-[15px] leading-snug text-paper">
            {ANSWER.slice(0, streamed)}
            {hits === RETRIEVED.length && !done && <span className="caret" />}
          </p>
        </div>
      </div>
    </div>
  );
}

function NodeHeading({ index, id, title }: { index: number; id: string; title: ReactNode }) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
        <span className="text-signal">node_{String(index).padStart(2, "0")}</span>
        <span className="hairline-x w-10" />
        <span>{id}</span>
      </div>
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">{title}</h2>
    </header>
  );
}

function GraphRail({ active }: { active: string }) {
  return (
    <nav
      aria-label="Sections"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="relative space-y-5 pl-5">
        <span className="absolute left-[3px] top-1 bottom-1 w-px bg-line" />
        {NODES.map((n, i) => {
          const on = n.id === active;
          return (
            <li key={n.id} className="relative">
              <span
                className={`absolute -left-5 top-1/2 h-[7px] w-[7px] -translate-y-1/2 border transition-all duration-300 ${
                  on ? "border-signal bg-signal rotate-45" : "border-dim bg-ink"
                }`}
              />
              <a
                href={`#${n.id}`}
                className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                  on ? "text-paper" : "text-dim hover:text-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")} {n.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function EmbeddingMap() {
  const [focus, setFocus] = useState<string | null>(null);
  const ROW = 19;

  // Deterministic background "noise" points so the space feels populated.
  const noise = Array.from({ length: 70 }, (_, i) => {
    const a = Math.sin(i * 12.9898) * 43758.5453;
    const b = Math.sin(i * 78.233) * 12345.6789;
    return { x: (a - Math.floor(a)) * 800, y: (b - Math.floor(b)) * 500 };
  });

  return (
    <>
      <div className="relative hidden border border-line bg-ink-2/60 md:block">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
          <span>skills.embed → t-SNE (hand-tuned)</span>
          <span>{CLUSTERS.reduce((n, c) => n + c.items.length, 0)} vectors · 5 clusters</span>
        </div>
        <svg viewBox="0 0 800 500" className="block h-auto w-full" role="img" aria-label="Skills grouped into clusters">
          {noise.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={1.2} fill="#ece5d8" opacity={0.12} />
          ))}
          {CLUSTERS.map((c) => {
            const dim = focus && focus !== c.name;
            const top = c.y - ((c.items.length - 1) * ROW) / 2;
            const accent = c.hot ? "#ff5b2e" : "#a9bd9c";
            return (
              <g
                key={c.name}
                onMouseEnter={() => setFocus(c.name)}
                onMouseLeave={() => setFocus(null)}
                style={{ opacity: dim ? 0.18 : 1, transition: "opacity 300ms" }}
                className="cursor-default"
              >
                <circle cx={c.x} cy={c.y} r={c.hot ? 34 : 26} fill={accent} opacity={0.06} />
                <text
                  x={c.x - 6}
                  y={top - 18}
                  fill={accent}
                  style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontSize: 22 }}
                >
                  {c.name}
                </text>
                {c.items.map((item, i) => {
                  const y = top + i * ROW;
                  const x = c.x + 46;
                  return (
                    <g key={item}>
                      <path
                        d={`M ${c.x} ${c.y} C ${c.x + 26} ${c.y}, ${c.x + 18} ${y}, ${x - 6} ${y}`}
                        stroke={accent}
                        strokeOpacity={0.35}
                        fill="none"
                        strokeWidth={0.8}
                      />
                      <circle cx={x - 4} cy={y} r={2.2} fill={accent} />
                      <text
                        x={x + 4}
                        y={y + 4}
                        fill="#ece5d8"
                        style={{ fontFamily: "Martian Mono", fontSize: 11 }}
                      >
                        {item}
                      </text>
                    </g>
                  );
                })}
                <rect x={c.x - 4} y={c.y - 4} width={8} height={8} fill={accent} transform={`rotate(45 ${c.x} ${c.y})`} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Small screens: the same clusters as a list */}
      <div className="grid gap-8 md:hidden">
        {CLUSTERS.map((c) => (
          <div key={c.name}>
            <h3 className={`mb-3 font-serif text-2xl italic ${c.hot ? "text-signal" : "text-sage"}`}>{c.name}</h3>
            <div className="flex flex-wrap gap-2">
              {c.items.map((item) => (
                <span key={item} className="border border-line px-2.5 py-1 font-mono text-[11px] text-paper">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ------------------------------------------------------------------ */

export default function App() {
  const [active, setActive] = useState("about");
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionsRef.current.forEach((s) => s && io.observe(s));
    return () => io.disconnect();
  }, []);

  const register = (i: number) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[i] = el;
  };

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="grain" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, #ff5b2e 0%, transparent 65%)" }}
      />

      <GraphRail active={active} />

      {/* Top bar */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-dim sm:px-8">
        <span>
          <span className="text-paper">kidus.w</span> / inference log
        </span>
        <span className="hidden items-center gap-2 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" /> open to roles · addis ababa · gmt+3
        </span>
      </div>

      {/* Hero */}
      <header className="relative z-10 mx-auto grid max-w-6xl gap-14 [&>*]:min-w-0 px-4 pb-24 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-signal"
          >
            Software engineer · AI systems
          </motion.p>
          <h1 className="font-serif text-[clamp(3.6rem,11vw,8.5rem)] leading-[0.86] tracking-[-0.02em]">
            {["Kidus", "Workneh"].map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block italic text-muted"
            >
              Abebe<span className="text-signal">.</span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            I build <span className="text-paper">retrieval-augmented systems</span>,{" "}
            <span className="text-paper">LLM agents</span> and the fast, well-modelled backends
            they run on, from vector stores to Docker on bare Linux.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={RESUME_URL}
              download
              className="group inline-flex items-center gap-2 bg-signal px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-transform hover:-translate-y-0.5"
            >
              <ArrowDownToLine size={14} className="transition-transform group-hover:translate-y-0.5" />
              Résumé.pdf
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <TracePanel />
        </motion.div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-32 px-4 pb-32 sm:px-8 md:space-y-44">
        {/* About */}
        <section id="about" ref={register(0)}>
          <NodeHeading index={1} id="about" title={<>Models are easy.<br /><em className="text-muted">Systems are the job.</em></>} />
          <motion.div {...reveal} className="grid gap-12 md:grid-cols-[1fr_1.4fr] [&>*]:min-w-0">
            <div className="grid grid-cols-2 gap-px self-start border border-line bg-line">
              {[
                ["3.77", "GPA · B.Sc. CS"],
                ["RAG", "in production"],
                ["Agents", "LangGraph"],
                ["4", "DeepLearning.AI certs"],
              ].map(([k, v]) => (
                <div key={v} className="bg-ink p-5">
                  <div className="font-serif text-4xl text-paper">{k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{v}</div>
                </div>
              ))}
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted md:text-xl">
              <p>
                I'm a software engineer from Addis Ababa working where{" "}
                <span className="text-paper">machine learning meets production backends</span>. Most
                of my recent work is LLM-powered: retrieval pipelines that ground answers in real
                documents, and autonomous agents that plan and call tools over many steps.
              </p>
              <p>
                Under the AI layer I care about the unglamorous parts: clean relational schemas,
                atomic transactions, containerized deploys and servers I can actually reason about.
                That's usually what decides whether a demo becomes a product.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" ref={register(1)}>
          <NodeHeading index={2} id="experience" title={<>Where it <em className="text-muted">shipped</em></>} />
          <motion.article {...reveal} className="grid gap-10 border-t border-line pt-10 md:grid-cols-[260px_1fr] [&>*]:min-w-0">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Aug 2025 to Jul 2026</div>
              <h3 className="mt-3 font-serif text-4xl leading-none">Shega Media &amp; Technology</h3>
              <p className="mt-2 text-muted">Software Engineer · Addis Ababa</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {["FastAPI", "NestJS", "LangGraph", "PostgreSQL", "Docker"].map((t) => (
                  <span key={t} className="border border-line px-2 py-0.5 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <ol className="divide-y divide-line border-y border-line">
              {EXPERIENCE.map((e, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="group grid grid-cols-[56px_1fr] gap-4 py-5"
                >
                  <span
                    className={`self-start pt-1 font-mono text-[10px] tracking-[0.16em] ${
                      e.kind === "AI" || e.kind === "ML" ? "text-signal" : "text-dim"
                    }`}
                  >
                    [{e.kind}]
                  </span>
                  <p className="leading-relaxed text-paper/85 transition-colors group-hover:text-paper">{e.text}</p>
                </motion.li>
              ))}
            </ol>
          </motion.article>
        </section>

        {/* Projects */}
        <section id="projects" ref={register(2)}>
          <NodeHeading index={3} id="projects" title={<>Selected <em className="text-muted">builds</em></>} />

          {/* Featured: PDF RAG */}
          <motion.a
            {...reveal}
            href="https://github.com/kidusw/pdf-rag-persistent-memory"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mb-6 block overflow-hidden border border-line bg-ink-2 p-6 transition-colors hover:border-signal md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                featured · retrieval-augmented generation
              </div>
              <ArrowUpRight className="text-dim transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
            </div>
            <h3 className="mt-4 font-serif text-5xl leading-none md:text-6xl">PDF RAG Chat</h3>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              A distributed RAG backend for multi-document Q&amp;A with persistent memory. PDFs are
              chunked and embedded into <span className="text-paper">ChromaDB</span> for semantic
              search, while <span className="text-paper">MongoDB</span> holds document metadata and
              chat history. Multi-turn conversations stay grounded and survive restarts.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-y-3 font-mono text-[11px]">
              {PIPELINE.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span
                    className={`border px-2.5 py-1.5 transition-colors duration-300 ${
                      step === "ChromaDB" || step === "LLM"
                        ? "border-signal/60 text-signal"
                        : "border-line text-paper group-hover:border-dim"
                    }`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {step}
                  </span>
                  {i < PIPELINE.length - 1 && <span className="px-2 text-dim">→</span>}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              {["FastAPI", "LangChain", "ChromaDB", "MongoDB", "OpenAI", "React + TS"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.a>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.a
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-line bg-ink/70 p-6 transition-colors hover:border-paper/40 md:p-8"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                  <span className={p.kind === "Backend" ? "text-sage" : "text-signal"}>{p.kind}</span>
                  <span className="text-dim">{String(i + 2).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="border border-line px-2 py-0.5 font-mono text-[10px] text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" />
                </div>
              </motion.a>
            ))}
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-signal"
          >
            more on github <ArrowUpRight size={13} />
          </a>
        </section>

        {/* Stack */}
        <section id="stack" ref={register(3)}>
          <NodeHeading index={4} id="stack" title={<>The <em className="text-muted">embedding</em> space</>} />
          <motion.div {...reveal}>
            <p className="mb-8 max-w-xl text-muted">
              Tools cluster by what they're used for. Hover a cluster to isolate it. The densest
              neighbourhood is the one I spend the most time in.
            </p>
            <EmbeddingMap />
          </motion.div>
        </section>

        {/* Education + certs */}
        <section id="training" ref={register(4)}>
          <NodeHeading index={5} id="training_data" title={<>Training <em className="text-muted">data</em></>} />
          <motion.div {...reveal} className="grid gap-px border border-line bg-line md:grid-cols-3">
            <div className="bg-ink p-6 md:col-span-1 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">Jun 2021 to Feb 2025</div>
              <h3 className="mt-4 font-serif text-3xl leading-tight">St Mary's University</h3>
              <p className="mt-1 text-muted">B.Sc. Computer Science</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-6xl text-signal">3.77</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">GPA</span>
              </div>
            </div>
            <div className="bg-ink p-6 md:col-span-2 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">certifications · deeplearning.ai on coursera</div>
              <ul className="mt-4 divide-y divide-line">
                {CERTS.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`https://www.coursera.org/account/accomplishments/verify/${c.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <span>
                        <span className="block font-serif text-2xl leading-tight transition-colors group-hover:text-signal md:text-3xl">
                          {c.title}
                        </span>
                        {c.sub && <span className="mt-1 block text-sm text-muted">{c.sub}</span>}
                      </span>
                      <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
                        verify <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">coursework</div>
              <p className="mt-2 text-muted">
                Data structures &amp; algorithms · database systems · operating systems · computer
                architecture · web development
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" ref={register(5)}>
          <NodeHeading index={6} id="contact" title={<>Let's build something<br /><em className="text-signal">that reasons.</em></>} />
          <motion.div {...reveal} className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail, label: "email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone, label: "phone", value: "+251 923 746 927", href: "tel:+251923746927" },
              { icon: Linkedin, label: "linkedin", value: "kidus-workneh", href: LINKEDIN_URL },
              { icon: Github, label: "github", value: "@kidusw", href: GITHUB_URL },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex min-w-0 flex-col gap-6 bg-ink p-6 transition-colors hover:bg-ink-2"
              >
                <div className="flex items-center justify-between text-dim">
                  <Icon size={16} className="transition-colors group-hover:text-signal" />
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{label}</div>
                  <div className="mt-1 truncate text-paper">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto flex max-w-6xl flex-col gap-3 border-t border-line px-4 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-dim sm:flex-row sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Kidus Workneh Abebe</span>
        <span>
          end of trace · <span className="text-sage">exit 0</span>
        </span>
      </footer>
    </div>
  );
}
