# Navaneed's Portfolio Documentation

## Overview
This is the personal portfolio website of Navaneed P, an AI and Data Science B.Tech student at APJ Abdul Kalam Technological University. The portfolio showcases his professional experience, end-to-end AI/ML projects, project blog write-ups, and 14+ technical certifications.

## Current Status
**Date:** August 9, 2026

The portfolio has been updated with the following changes:

### Latest Update (Aug 9, 2026)
1. **Year Status Update**:
   - Changed "pre-final year" to "final year" across `HeroSection.tsx` and `AboutSection.tsx`.

2. **Skills Section Expansion (`SkillsSection.tsx`)**:
   - Expanded from 4 categories to 6, now covering 90+ skills.
   - Added **Data Science & Analytics** category: Pandas, NumPy, Matplotlib, Seaborn, Plotly, Scipy, Power BI, Excel, EDA, Feature Engineering, Statistical Modeling, Hypothesis Testing, A/B Testing, Time Series Analysis, Data Wrangling, Web Scraping.
   - Added **DevOps & Tools** category: Linux, Bash/Shell Scripting, Docker, CI/CD, AWS (EC2, S3, Lambda), MLflow, Weights & Biases, Streamlit, Gradio.
   - Expanded **AI/ML & DL** with: spaCy, NLTK, XGBoost, LightGBM, CNNs, RNNs/LSTMs, GANs, Attention Mechanisms.
   - Expanded **LLM Expertise** with: LoRA/QLoRA, GGUF/GPTQ, Function Calling & Tool Use, vLLM/Ollama, ChromaDB, Milvus, Pinecone, FAISS, LLM Guardrails, Semantic Search.
   - Expanded **Backend & Databases** with: Flask, SQLAlchemy, MySQL, MongoDB, SQLite, Redis, WebSockets, Microservices.
   - Expanded **Languages & Web** with: Next.js, Tailwind CSS, REST APIs, GraphQL.
   - Updated grid layout to 3 columns on large screens.

3. **Blog Section (`BlogSection.tsx`)** — NEW:
   - Added a brand-new Blog section between Projects and Experience.
   - Features 7 detailed project blog posts sourced from GitHub READMEs at `github.com/navvv29`.
   - Each blog post includes: project summary, "Why It Matters" (real-world relevance), "What I Built" (technical deep-dive), tech stack tags, read-time estimates, and links to GitHub repos / live demos.
   - Blog posts are expandable/collapsible cards with smooth framer-motion animations.
   - Projects covered:
     - **AppForge AI** — Multi-LLM app compiler with Zod validation & repair engine
     - **Psychometric & Mental Wellness AI** — Fine-tuned Llama 3.1 + RAG for clinical assessments
     - **CivicResolve AI** — NLP-based civic grievance auto-routing (DUK Hackathon)
     - **SyncEdu** — AI-powered college management with natural language command center
     - **AeroGuard** — Pollution intelligence platform fusing vision AI, IoT, and satellite data
     - **Sensitive Data Detection** — Privacy-first PII detection with local NER + RAG compliance
     - **CompIntel** — Compensation intelligence with algorithmic level-matching

3. **Navigation Update (`HeroSection.tsx`)**:
   - Added "Blog" to the navbar navigation links.

4. **App Layout (`App.tsx`)**:
   - Imported and rendered `<BlogSection />` between `<ProjectsSection />` and `<ExperienceSection />`.

### Previous Update (Jun 20, 2026)
1. **Experience Section (`ExperienceSection.tsx`)**:
   - Added the "DataRig Pvt. Ltd." Artificial Intelligence Internship (Jun. 2026 - Present), where an AI-powered psychometric assessment platform was built using FastAPI, Next.js, and a fine-tuned Llama 3.1 LLM with QLoRA and RAG pipeline.
2. **Projects Section (`ProjectsSection.tsx`)**:
   - Added the "Psychometric & Mental Wellness AI Assessment" project (developed during the DataRig internship), detailing the 4-component distributed system and the LLM fine-tuning using LoRA/QLoRA.
3. **Achievements Section (`AchievementsSection.tsx`)**:
   - Updated the certifications list to include newly obtained credentials such as:
     - Make Agentic AI Work for You (IBM SkillsBuild)
     - AI Skills Passport (EY and Microsoft)
     - AI Agents Using RAG and LangChain (IBM SkillsBuild)
     - Generative AI and LLMs Architecture (IBM SkillsBuild)
     - GenAI Advanced Fine-Tuning for LLMs (IBM SkillsBuild)
     - GenAI Language Modeling with Transformers (IBM SkillsBuild)
     - GenAI Foundational Models for NLP (IBM SkillsBuild)
     - GenAI-Powered Data Analytics (Tata Forage)
     - Cyber Job Simulation and Technology Job Simulation (Deloitte Forage)
     - Python Programming and Web Development (L&T EduTech)

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## File Structure
- `src/App.tsx` — Main app layout and component composition
- `src/sections/HeroSection.tsx` — Hero banner, navbar, stats
- `src/sections/AboutSection.tsx` — About me with terminal widget
- `src/sections/ProjectsSection.tsx` — Project cards
- `src/sections/BlogSection.tsx` — Project blog write-ups (NEW)
- `src/sections/ExperienceSection.tsx` — Work experience timeline
- `src/sections/SkillsSection.tsx` — Technical skills
- `src/sections/AchievementsSection.tsx` — Certifications
- `src/sections/ContactSection.tsx` — Contact info
- `src/sections/TechStackMarquee.tsx` — Scrolling tech logos
- `src/components/` — Reusable UI components (FadeIn, TypewriterText, etc.)

## Maintenance
Always update this documentation file every time changes are made to the project to reflect the latest status and additions.
