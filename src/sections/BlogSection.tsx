import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Clock, Calendar, BookOpen } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  tech: string[];
  summary: string;
  whyItMatters: string;
  whatIBuilt: string;
  github?: string;
  live?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'NOVA AI — Building a Personal Adaptive Study Companion',
    date: 'Aug 2026',
    readTime: '4 min',
    category: 'Adaptive AI',
    tech: ['Python', 'PostgreSQL', 'Thompson Sampling', 'SM-2 Algorithm', 'SSE', 'Task Scheduling'],
    summary:
      'A private, adaptive AI study companion that learns how you learn — with persistent memory, spaced repetition, voice input, and multi-armed bandit study method optimization.',
    whyItMatters:
      'Generic study tools treat every learner the same. They don\'t adapt to your pace, your strengths, or which methods actually work for you. NOVA AI exists because I wanted a study companion that genuinely learns from my behaviour — not just stores flashcards. The multi-armed bandit approach (Thompson Sampling) is the key insight: instead of guessing which study method works best, the system runs a continuous experiment across 10 methods and converges on what actually improves your retention. It\'s privacy-first (everything runs locally), which matters because student data is sensitive.',
    whatIBuilt:
      'A full-stack personal AI with persistent memory across sessions via PostgreSQL. Core features include SM-2 spaced repetition flashcards, quiz generation (MCQ, true/false, mixed), text summarization, and performance tracking with an XP system and skill levels. The adaptive learning engine uses Thompson Sampling (multi-armed bandit) to track 10 study methods — flashcards, active recall, pomodoro, interleaving, elaboration, practice problems, mind mapping, teach back, Cornell notes, and retrieval practice — and delivers personalised recommendations. Always-On mode runs a background scheduler monitoring flashcard reviews, deadlines, and streaks, with push notifications via Server-Sent Events.',
    github: 'github.com/navvv29/NOVA_AI',
  },
  {
    id: 2,
    title: 'DataDoctor — Deterministic Dataset Quality Profiling',
    date: 'Sep 2026',
    readTime: '5 min',
    category: 'Data Engineering',
    tech: ['Python', 'Flask', 'Pandas', 'NumPy', 'Docker', 'AWS ECR/EC2', 'Pytest'],
    summary:
      'A lightweight, zero-LLM web service that evaluates the health, structure, and reliability of CSV datasets with 131 passing tests and 100% deterministic scoring.',
    whyItMatters:
      'Most data quality tools either rely on black-box ML models that can\'t explain their scores, or they\'re enterprise behemoths that require weeks to configure. DataDoctor takes a deliberately different approach: every score, percentage, and recommendation stems from transparent statistical rules and documented heuristics. There are no LLMs anywhere in the pipeline — the system is 100% deterministic, which means the same dataset always produces the exact same report. This matters for regulated industries where you need auditable, reproducible quality assessments. The zero-data-retention architecture (pure in-memory processing) also addresses privacy concerns — your dataset never touches disk.',
    whatIBuilt:
      'A Flask web service with strict separation between HTTP transport, analytical computation, and presentation layers. The analyzer core implements 4 orthogonal quality dimensions (Completeness, Uniqueness, Consistency, Validity) scored 0-100 with mathematical formulas. Quality checks include IQR outlier detection, duplicate row/key analysis, constant column detection, categorical inconsistency via case/whitespace normalization, and date format validation. The system uses resilient encoding detection (UTF-8 → UTF-8-SIG → CP1252 fallback), dual-channel content negotiation (JSON SPA or server-rendered HTML), and is containerized for Docker/AWS ECR→EC2 deployment. 131 tests pass via pytest.',
    github: 'github.com/navvv29/Data_Doctor',
  },
  {
    id: 3,
    title: 'LumiCity Kerala — NASA Satellite-Powered Smart City Lighting',
    date: 'Oct 2026',
    readTime: '5 min',
    category: 'ML / Computer Vision',
    tech: ['Python', 'Streamlit', 'YOLOv8', 'scikit-learn', 'OpenCV', 'NASA VIIRS', 'SQLite', 'Folium'],
    summary:
      'An autonomous smart city street light optimization engine for 8 Kerala municipalities, fusing NASA satellite radiance data, real-time weather APIs, and YOLOv8 edge computer vision.',
    whyItMatters:
      'Traditional municipal street lighting operates on binary mechanical timers — 100% intensity for 12 hours straight, regardless of road demand, weather, or time. This wastes massive amounts of energy and creates severe light pollution that disrupts ecosystems and human circadian rhythms. LumiCity treats street lighting as a continuous mathematical optimization problem, minimizing illumination wattage while enforcing hard-bounded safety guarantees. When visibility drops below 3,000m (monsoon conditions), the system mandates ≥60% intensity as a safety floor. When late-night cameras detect vehicles or pedestrians, lighting surges dynamically. The result is 40–70% simulated energy savings with zero compromise on safety.',
    whatIBuilt:
      'A state-of-the-art municipal IoT and AI platform engineered for 8 Kerala urban centers. The ML stack includes a Regularized Gradient Boosting Regressor (R²≈0.92) with deliberate 6% Gaussian noise injection to prevent overfitting, trained on NASA VIIRS VNP46A1 orbital radiance data and Open-Meteo weather telemetry. YOLOv8 nano runs in a decoupled background daemon for real-time pedestrian/vehicle detection, with a Kinetic Energy Weighted Traffic Risk Score that weights objects by physical momentum (trucks > cars > bicycles). The platform features 21-point smooth spline interpolation for flicker-free dimming, asynchronous multi-threaded daemon architecture, interactive Folium GIS mapping of 70 smart fixtures, a light pollution image profiler using computer vision, and automated carbon accounting.',
    github: 'github.com/navvv29/LumiCity',
  },
  {
    id: 4,
    title: 'AppForge AI — Building a Multi-LLM App Compiler',
    date: 'Mar 2026',
    readTime: '5 min',
    category: 'Agentic AI',
    tech: ['Node.js', 'TypeScript', 'Express.js', 'Groq', 'OpenAI', 'Anthropic', 'Zod'],
    summary:
      'A multi-stage AI app generation compiler that converts natural language into strict, validated, executable application configurations.',
    whyItMatters:
      'Most "AI app builders" are glorified prompt wrappers — they dump raw LLM output and pray it works. The real challenge is not generation, it\'s validation. In production, you need deterministic, schema-compliant outputs that don\'t hallucinate fields or silently break downstream consumers. AppForge AI exists because I wanted to prove that you can engineer reliability into LLM pipelines using compiler-design principles: staged processing, strict schema contracts (Zod), and automatic structural repair. It\'s relevant because every enterprise deploying LLMs faces the same reliability gap, and the solution isn\'t better prompts — it\'s better systems.',
    whatIBuilt:
      'AppForge AI operates like a real compiler with discrete stages: Intent Extraction → System Design → Schema Generation → Refinement → Simulation. Each stage outputs a Zod-validated schema. The pipeline orchestrates multiple LLMs (Groq, OpenAI, Anthropic) with constrained generation — if a model hallucinates a field or returns malformed JSON, the repair engine kicks in: it strips code fences, fixes smart quotes, normalizes field types (varchar→string, bool→boolean), and retries with specific error context rather than blind retry. Cross-layer resolution auto-creates missing endpoints, tables, and roles. The final output is a FullAppSchema covering UI config, API endpoints, DB schema, auth, and business logic — all validated end-to-end.',
    github: 'github.com/navvv29/AppForge-AI',
    live: 'appforge-ai-hvco.onrender.com',
  },

  {
    id: 5,
    title: 'Psychometric & Mental Wellness AI Assessment',
    date: 'Jun 2026',
    readTime: '4 min',
    category: 'LLM Fine-tuning',
    tech: ['Python', 'FastAPI', 'Next.js', 'Milvus', 'LLM Fine-tuning', 'QLoRA', 'RAG'],
    summary:
      'An AI-powered psychometric assessment platform built during my internship at DataRig Pvt. Ltd., using a fine-tuned Llama 3.1 with RAG.',
    whyItMatters:
      'Mental health assessment traditionally relies on rigid, static questionnaires that don\'t adapt to context and lack the nuance needed for genuine insight. I built this during my AI internship at DataRig because the intersection of LLMs and clinical psychology is largely unexplored in production. The challenge was making a model that\'s not just conversational, but clinically grounded — it needed to draw from actual psychological research papers, not just internet-scraped text. This project demonstrates that fine-tuned LLMs with domain-specific RAG can deliver assessments that are both personalized and evidence-based, which matters for the future of accessible mental health tech.',
    whatIBuilt:
      'A 4-component distributed system: Next.js frontend → async FastAPI backend → Ollama LLM inference server → Milvus Lite vector DB. I fine-tuned Llama 3.1 8B using LoRA/QLoRA on curated psychology datasets to make it clinically aware. Then I built a RAG pipeline that embeds and retrieves from a corpus of embedded research papers, so the model\'s responses are grounded in actual literature. The async backend manages assessment sessions, streams responses, and handles concurrent users. The entire stack communicates via FastAPI endpoints, with the vector DB enabling semantic retrieval of relevant psychological context for each user interaction.',
    github: 'github.com/navvv29/psychometry_ai',
  },
  {
    id: 6,
    title: 'CivicResolve AI — Intelligent Grievance Routing',
    date: 'May 2026',
    readTime: '4 min',
    category: 'NLP / RAG',
    tech: ['Python', 'LangChain', 'FastAPI', 'NLP', 'RAG', 'Transformers'],
    summary:
      'Built for Digital University Kerala Hackathon — auto-routes civic grievances to the correct government departments using AI classification.',
    whyItMatters:
      'In India, civic complaint systems are bottlenecked by manual routing — a citizen files a complaint, a clerk reads it, decides which department handles it, and forwards it. This takes 5+ minutes per complaint and is error-prone. At the Digital University Kerala Hackathon 2026, our team wanted to show that NLP can eliminate this bottleneck entirely. The problem is well-scoped but technically demanding: you need multi-label classification, location-aware routing, and spam filtering — all with high accuracy, because misrouted complaints erode public trust. This project is relevant because it directly addresses real-world government inefficiency with deployable AI.',
    whatIBuilt:
      'A multi-tiered platform with dashboards for Citizens, Local Officers, District Admins, State Officials, and Central Government. The NLP engine uses transformer-based text classification to auto-categorize complaints, plus a spam detection layer to filter noise. A RAG pipeline with LangChain retrieves relevant policy context to generate resolution roadmaps with ETA predictions. Geo-location routing uses India-specific location mapping to autonomously send complaints to the right local authority. The system also includes fraud detection (spotting duplicate/anomalous patterns), image analysis for uploaded evidence, and a predictive engine that forecasts future civic issues from historical clustering. It routed 100% of test submissions correctly with under 3-second latency.',
    github: 'github.com/navvv29/Civic-Resolve',
  },
  {
    id: 7,
    title: 'SyncEdu — AI-Powered College Management System',
    date: 'Apr 2026',
    readTime: '4 min',
    category: 'Agentic AI',
    tech: ['Python', 'FastAPI', 'React', 'SQLite', 'Agentic AI', 'LLMs', 'NVIDIA LLaMA'],
    summary:
      'A comprehensive College Management System with an AI Command Center enabling natural language queries and task automation.',
    whyItMatters:
      'Every college has an ERP system, and almost every one of them is painful to use. Faculty waste time navigating menus to find data that should be a single question away. I built SyncEdu to prove that agentic AI can transform administrative software — instead of clicking through 5 screens to see department attendance, you just ask: "Show me attendance for CS department." The AI agent doesn\'t just query data; it can execute actions (send announcements, generate timetables) with confirmation guards. This matters because the gap between enterprise admin tools and modern AI capabilities is enormous, and the fix is actually tractable.',
    whatIBuilt:
      'A full-stack college management system with role-based access (Student, Faculty, HOD, Admin) and an AI Command Center at its core. The AI agent accepts natural language queries ("What\'s my attendance percentage?") and actions ("Generate timetable for next semester"), with safe write operations that always ask for confirmation. The reporting engine generates publication-ready PDF reports with 12+ Seaborn/Matplotlib chart types (grade distributions, GPA trends, attendance breakdowns). AI insights are generated using NVIDIA LLaMA / Google Gemini. The backend is FastAPI with SQLite, the frontend is React, and everything runs with real-time database integration.',
    live: 'sync-edu-five.vercel.app',
    github: 'github.com/navvv29/SyncEdu',
  },
  {
    id: 8,
    title: 'AeroGuard — Pollution Intelligence Platform',
    date: 'Jun 2026',
    readTime: '3 min',
    category: 'ML / Computer Vision',
    tech: ['Python', 'FastAPI', 'React', 'scikit-learn', 'Gemini AI', 'Leaflet', 'Plotly.js'],
    summary:
      'A neighbourhood-level pollution intelligence platform fusing citizen vision reports, IoT sensor grids, and satellite aerosol data.',
    whyItMatters:
      'Pollution monitoring typically happens at city-wide granularity — one or two government sensors covering millions of people. Neighbourhood-level data simply doesn\'t exist at scale. AeroGuard addresses this by fusing three data sources: citizen-submitted photo reports (analyzed by Vision AI), IoT sensor readings, and satellite aerosol data. This multi-modal approach means you can detect pollution hotspots that no single data source would reveal. It\'s relevant because environmental monitoring is transitioning from hardware-only to AI-augmented systems, and the fusion of vision AI with traditional sensor data is where the field is heading.',
    whatIBuilt:
      'Full-stack platform with FastAPI backend, React/Vite frontend, and SQLite database. The ML stack includes real IsolationForest for anomaly detection, DBSCAN for spatial clustering of pollution reports, and GradientBoostingRegressor for AQI prediction. Google Gemini 2.5 Flash powers two AI features: Vision AI analyzes citizen-uploaded photos to identify pollution sources, and a Municipal Agent generates actionable recommendations for local authorities. The frontend uses Leaflet for interactive mapping and Plotly.js for data visualization dashboards.',
    github: 'github.com/navvv29/AeroGuard',
  },
  {
    id: 9,
    title: 'Sensitive Data Detection & Compliance Assistant',
    date: 'Jul 2026',
    readTime: '4 min',
    category: 'NLP / Security',
    tech: ['Next.js', 'FastAPI', 'spaCy', 'ChromaDB', 'Groq LLM', 'RAG'],
    summary:
      'An AI-powered document analysis tool that detects PII, classifies risk, and generates compliance guidance — all while keeping sensitive data local.',
    whyItMatters:
      'Data privacy compliance (GDPR, India\'s DPDP Act) is a growing legal and engineering challenge. Companies process thousands of documents containing PII — names, Aadhaar numbers, PAN cards, API keys — and manually auditing them is impossible at scale. The critical constraint is that you can\'t just send sensitive documents to an external LLM for analysis; that defeats the purpose. This project demonstrates a privacy-first architecture: PII detection and redaction happen entirely locally (spaCy + regex), and only masked data ever reaches the LLM. It\'s relevant because every organization handling personal data needs this kind of automated compliance pipeline.',
    whatIBuilt:
      'A decoupled system with Next.js 15 frontend and FastAPI backend. The data pipeline handles text extraction (PDF, TXT, CSV), PII detection using a hybrid approach — spaCy NER for named entities combined with optimized regex patterns for structured PII (Aadhaar, PAN, credit cards, API keys). All detected entities are hard-masked locally (e.g., replaced with [CONFIDENTIAL: EMAIL]) before any data leaves the machine. The masked document is chunked, embedded into a local ChromaDB vector store, and used in a RAG pipeline with Groq\'s llama-3.3-70b-versatile for compliance summarization and Q&A. The frontend features glassmorphism design with interactive dashboards for metrics and risk classification.',
    github: 'github.com/navvv29/Sensitive_Data_Detection_System',
    live: 'sensitive-data-detection-system.vercel.app',
  },
  {
    id: 10,
    title: 'CompIntel — Compensation Intelligence Platform',
    date: 'Mar 2026',
    readTime: '3 min',
    category: 'Full-Stack',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    summary:
      'A Levels.fyi-inspired platform that normalises fragmented global compensation records into high-fidelity, standardised benchmarks.',
    whyItMatters:
      'Salary transparency data exists, but it\'s fragmented across companies, countries, and leveling systems. A "Senior Engineer" at Company A might be equivalent to a "Staff Engineer" at Company B, and comparing raw numbers across currencies and cost-of-living zones is meaningless. CompIntel exists to solve the normalization problem — mapping compensation data to standardised engineering tiers so engineers can make informed career decisions. It\'s relevant because the compensation transparency movement needs better tooling, not just more data.',
    whatIBuilt:
      'A full-stack Next.js application with Prisma ORM and PostgreSQL. The core is an intelligent data-matching algorithm that normalises fragmented global compensation records by mapping job titles, levels, and locations to a standardised engineering tier system (inspired by levels.fyi). The processing pipeline handles currency conversion, cost-of-living adjustment, and algorithmic level-matching to anchor salary insights to standardised tiers. The frontend is built with Tailwind CSS and provides searchable, filterable compensation benchmarks.',
    live: 'compensation-intelligence.onrender.com',
    github: 'github.com/navvv29/compensation-intelligence',
  },
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'Adaptive AI':
      return 'bg-[rgba(168,85,247,0.1)] text-[#A855F7] border-[rgba(168,85,247,0.2)]';
    case 'Data Engineering':
      return 'bg-[rgba(14,165,233,0.1)] text-[#0EA5E9] border-[rgba(14,165,233,0.2)]';
    case 'Agentic AI':
      return 'bg-[rgba(45,212,191,0.1)] text-[var(--accent)] border-[rgba(45,212,191,0.2)]';
    case 'LLM Fine-tuning':
      return 'bg-[rgba(236,72,153,0.1)] text-[#EC4899] border-[rgba(236,72,153,0.2)]';
    case 'NLP / RAG':
      return 'bg-[rgba(129,140,248,0.1)] text-[var(--accent-2)] border-[rgba(129,140,248,0.2)]';
    case 'ML / Computer Vision':
      return 'bg-[rgba(245,158,11,0.1)] text-[var(--accent-3)] border-[rgba(245,158,11,0.2)]';
    case 'NLP / Security':
      return 'bg-[rgba(239,68,68,0.1)] text-[#EF4444] border-[rgba(239,68,68,0.2)]';
    case 'Full-Stack':
      return 'bg-[rgba(34,211,238,0.1)] text-[#22D3EE] border-[rgba(34,211,238,0.2)]';
    default:
      return 'bg-[rgba(129,140,248,0.1)] text-[var(--accent-2)] border-[rgba(129,140,248,0.2)]';
  }
};

export const BlogSection: React.FC = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const togglePost = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section
      data-section="blog"
      className="bg-[var(--bg)] border-b border-[var(--border)] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <p className="terminal-label mb-6">// blog</p>
        </FadeIn>

        <FadeIn delay={0.1} y={40} duration={0.7}>
          <h2 className="gradient-heading font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
            Project Blog
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20} duration={0.7}>
          <div className="flex items-center gap-3 mb-16">
            <BookOpen size={18} className="text-[var(--accent)]" />
            <p className="text-[var(--text-muted)] font-space">
              Deep dives into what I built, why it matters, and the engineering decisions behind each project.
            </p>
          </div>
        </FadeIn>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.08} y={20} duration={0.7}>
              <div
                className={`bg-[var(--surface)] border rounded-2xl overflow-hidden transition-all duration-500 ${
                  expandedPost === post.id
                    ? 'border-[var(--accent)] shadow-[0_0_40px_rgba(45,212,191,0.08)]'
                    : 'border-[var(--border)] hover:border-[rgba(45,212,191,0.3)] hover:shadow-[0_0_20px_rgba(45,212,191,0.04)]'
                }`}
              >
                {/* Card Header — Always Visible */}
                <button
                  onClick={() => togglePost(post.id)}
                  className="w-full text-left p-6 md:p-8 focus:outline-none group"
                  id={`blog-post-${post.id}`}
                >
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-mono border ${getCategoryStyles(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                      <Calendar size={13} />
                      <span className="text-xs font-mono">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                      <Clock size={13} />
                      <span className="text-xs font-mono">{post.readTime} read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[clamp(1.15rem,2.5vw,1.5rem)] text-[var(--white)] mb-3 font-space group-hover:text-[var(--accent)] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed font-space mb-4">
                    {post.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="bg-[rgba(129,140,248,0.08)] border border-[rgba(129,140,248,0.15)] text-[var(--accent-2)] rounded-full px-2.5 py-0.5 text-[0.65rem] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                    {post.tech.length > 5 && (
                      <span className="text-[var(--text-muted)] text-[0.65rem] font-mono py-0.5">
                        +{post.tech.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Expand Toggle */}
                  <div className="flex items-center gap-2 text-[var(--accent)] text-sm font-mono">
                    <span>{expandedPost === post.id ? 'Collapse' : 'Read More'}</span>
                    <motion.div
                      animate={{ rotate: expandedPost === post.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 space-y-6 border-t border-[var(--border)] pt-6">
                        {/* Why It Matters */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1 h-5 rounded-full bg-[var(--accent)]" />
                            <h4 className="font-bold text-[var(--white)] font-space text-sm uppercase tracking-wider">
                              Why It Matters
                            </h4>
                          </div>
                          <p className="text-[var(--text-muted)] text-sm leading-relaxed font-space pl-3 border-l border-[var(--border)]">
                            {post.whyItMatters}
                          </p>
                        </div>

                        {/* What I Built */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1 h-5 rounded-full bg-[var(--accent-2)]" />
                            <h4 className="font-bold text-[var(--white)] font-space text-sm uppercase tracking-wider">
                              What I Built
                            </h4>
                          </div>
                          <p className="text-[var(--text-muted)] text-sm leading-relaxed font-space pl-3 border-l border-[var(--border)]">
                            {post.whatIBuilt}
                          </p>
                        </div>

                        {/* Full Tech Stack */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1 h-5 rounded-full bg-[var(--accent-3)]" />
                            <h4 className="font-bold text-[var(--white)] font-space text-sm uppercase tracking-wider">
                              Tech Stack
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2 pl-3">
                            {post.tech.map((t) => (
                              <span
                                key={t}
                                className="bg-[rgba(129,140,248,0.1)] border border-[rgba(129,140,248,0.2)] text-[var(--accent-2)] rounded-full px-3 py-1 text-xs font-mono"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        {(post.github || post.live) && (
                          <div className="flex gap-4 pl-3 pt-2">
                            {post.github && (
                              <a
                                href={`https://${post.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm font-mono group"
                              >
                                <Github size={16} />
                                <span className="group-hover:underline">Source Code</span>
                              </a>
                            )}
                            {post.live && (
                              <a
                                href={`https://${post.live}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm font-mono group"
                              >
                                <ExternalLink size={16} />
                                <span className="group-hover:underline">Live Demo</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
