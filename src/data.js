export const PROFILE = {
  name: "Ruthwik Reddy Doodipala",
  title: "AI Engineer • Data Scientist • ML Researcher",
  location: "Memphis, TN",
  current: "Building agentic AI systems, ML pipelines, and data-driven solutions across research and industry",
  tagline:
    "I build end-to-end AI and ML systems, from autonomous LLM agents and production ML pipelines to data analytics dashboards and foundation model research. Open to roles in AI/ML Engineering, Data Science, and Analytics.",
  resumeUrl: "/resume.pdf",
  socials: {
    email: "rdoodipala09@gmail.com",
    phone: "+1 (901)-215-6461",
    linkedin: "https://linkedin.com/in/ruthwik09/",
    github: "https://github.com/ruthwikreddy09",
    scholar: "https://scholar.google.com/citations?user=phOLotkAAAAJ&hl=en&oi=ao",
  },
  highlights: [
    { label: "Downstream gain", value: "+8.23% accuracy" },
    { label: "RUL model lift", value: "72% → 83%" },
    { label: "Degree", value: "MS CS (3.98/4)" },
    { label: "Focus", value: "Self-supervised fMRI" },
  ],
};

export const EXPERIENCE = [
  {
    org: "St. Jude Children’s Research Hospital",
    role: "AI Research Intern",
    dates: "Jun 2025 – May 2026",
    location: "Memphis, TN",
    bullets: [
      "Led end-to-end experimentation on 4D fMRI neuroimaging data, orchestrating 50+ large-scale training runs on HPC clusters (LSF, SLURM) using 6× NVIDIA H100 GPUs.",
      "Drove up to 8.26% lift in downstream classification accuracy through targeted ablation studies across architectures and masking strategies.",
      "Engineered an optimized data loading and caching pipeline for high-dimensional fMRI data, reducing I/O bottlenecks and improving training runtime by 35%.",
    ],
  },
  {
    org: "Biomedical Sensors & Systems Lab, University of Memphis",
    role: "Graduate Research Assistant",
    dates: "Jun 2025 – May 2026",
    location: "Memphis, TN",
    bullets: [
      "Conducted research on foundation models for neuroimaging, designing self-supervised and deep learning architectures for representation learning on fMRI and EEG data.",
      "First author of 2 peer-reviewed research papers; presented work at NeurIPS 2025 (San Diego).",
      "Applied XAI techniques (Integrated Gradients) to improve model interpretability and explain predictions for clinical audiences.",
    ],
  },
  {
    org: "EdgeForce Solutions",
    role: "Data Science Intern",
    dates: "Jan 2024 – Apr 2024",
    location: "Hyderabad, India",
    bullets: [
      "Built a machine learning model to forecast Remaining Useful Life (RUL) of heavy-duty vehicles using historical sensor data.",
      "Developed an interactive Power BI dashboard to visualize maintenance insights and operational trends.",
      "Improved predictive accuracy from 72% to 83%, enabling more reliable condition-based maintenance scheduling.",
    ],
  },
];

export const PUBLICATIONS = [
  {
    title:
      "Region-Aware Reconstruction Strategy for Pre-training fMRI Foundation Models",
    venue:
      "NeurIPS 2025 Workshop on Foundation Models for the Brain and Body",
    authors:
      "Ruthwik Reddy Doodipala, Pankaj Pandey, Carolina Torres Rojas, Manob Jyoti Saikia, Ranganatha Sitaram",
    link: "https://openreview.net/pdf?id=52HyCgZrgv",
    image: "/paper-neurostorm.png",
    bullets: [
      "Developed a self-supervised foundation model using masked autoencoding with ROI-guided masking (AAL3) on 4D fMRI data, improving ADHD-200 classification accuracy by 4.23% over traditional masking strategies.",
      "Identified cerebellum and limbic regions as high-signal contributors, enhancing model interpretability for clinical research.",
    ],
  },
  {
    title:
      "Rhamba: Region-Aware Hybrid Attention-Mamba Framework for Self-Supervised Learning in rs-fMRI",
    venue: "arXiv 2025",
    authors:
      "Ruthwik Reddy Doodipala et al.",
    link: "https://arxiv.org/abs/2605.01240",
    image: "/paper-rhamba.png",
    bullets: [
      "Developed a hybrid Attention-Mamba architecture for resting-state fMRI, targeting schizophrenia detection with 71% classification accuracy.",
      "Achieved up to 10.66% accuracy and 6.14% AUROC improvement over baselines, with model interpretability via Integrated Gradients (XAI).",
    ],
  },
];

export const PROJECTS = [
  {
    title: "AutoExperiment: Autonomous ML Debugging & Optimization Agent",
    description:
      "Agentic AI system that autonomously monitors training runs, diagnoses failures (overfitting, NaNs, instability), and iteratively improves models through closed-loop feedback. Implemented a multi-agent pipeline (observer, planner, executor, evaluator) for automated hyperparameter tuning and experiment management. Achieved up to 6.8% improvement in model accuracy, reduced failed training runs by 45%, and cut manual debugging time by 60%.",
    tags: ["Python", "PyTorch", "LangGraph", "MLflow", "Optuna", "Docker"],
    live: "",
    source: "https://github.com/RuthwikReddy09/AutoExperiment",
    image: "https://opengraph.githubassets.com/e44ac503720c059b3751dbd70d6734ef59373182e5949eefe131ab09544e7b08/RuthwikReddy09/AutoExperiment",
  },
  {
    title: "GitScribe: AI-Powered Documentation Agent",
    description:
      "AI agent that automatically generates and maintains documentation for GitHub repositories. Triggers on pull requests via GitHub Actions, producing PR-ready documentation updates within 40 seconds. Reduced manual documentation effort by ~60% through end-to-end automation.",
    tags: ["Python", "LLMs", "GitHub API", "FastAPI", "GitHub Actions"],
    live: "",
    source: "https://github.com/RuthwikReddy09/GitScribe-AI",
    image: "/proj-gitscribe.svg",
  },
  {
    title: "Hospital Resource Utilization Dashboard",
    description:
      "Power BI dashboard to monitor and optimize hospital resource usage: bed occupancy, ALOS, staff-to-patient ratios, department-wise admissions, and KPI drill-downs.",
    tags: ["Power BI", "Excel", "DAX"],
    live: "",
    source: "",
    image: "/proj-hospital.svg",
  },
  {
    title: "Predictive Maintenance and RUL Analysis",
    description:
      "Cleaned and aggregated vehicle sensor data from SQLite; analyzed failure patterns and maintenance intervals; improved maintenance forecasting accuracy from 72% to 83%.",
    tags: ["Python", "SQLite", "SQL", "Power BI"],
    live: "",
    source: "",
    image: "/proj-rul.svg",
  },
];

export const BLOGS = [
  {
    title: "An Introduction to LangChain and Its Core Concepts",
    summary:
      "A beginner-friendly deep dive into LangChain — covering prompt templates, document loaders, chains, agents, vector databases, and output parsers with code examples.",
    url: "https://ruthwikreddy09.github.io/Intro-to-LangChain/",
    tags: ["LangChain", "LLMs", "RAG", "Python"],
    image: "/blog-langchain.png",
    date: "2025",
  },
  {
    title: "Build Your First AI App: A YouTube Video Summarizer with LangChain",
    summary:
      "Step-by-step guide to building a YouTube video summarizer using LangChain, OpenAI GPT-3.5, and Streamlit — covering transcript loading, text splitting, and summarization chains.",
    url: "https://ruthwikreddy09.github.io/Youtube-Video-Summarizer/",
    tags: ["LangChain", "OpenAI", "Streamlit", "Python"],
    image: "/blog-youtube.png",
    date: "2025",
  },
];

export const EDUCATION = [
  {
    school: "The University of Memphis",
    degree: "Master’s in Computer Science",
    dates: "Aug 2024 – May 2026 (Expected)",
    location: "Memphis, TN",
    details: ["CGPA: 3.96/4"],
    logo: "/logo-uofm.png",
  },
  {
    school: "Keshav Memorial Institute Of Technology",
    degree: "B.Tech in CSE (AI&ML)",
    dates: "Jun 2020 – Jul 2024",
    location: "Hyderabad, India",
    details: ["CGPA: 8.63/10"],
    logo: "/logo-kmit.png",
  },
];

export const SKILLS = [
  {
    group: "Programming & ML Frameworks",
    items: ["Python", "PyTorch", "NumPy", "pandas", "scikit-learn", "CUDA", "Jupyter"],
  },
  {
    group: "Deep Learning & Representation Learning",
    items: [
      "Transformers",
      "Sequence Modeling",
      "Self-Supervised Learning",
      "Masked Autoencoders",
      "Denoising Autoencoders",
      "Representation Learning",
      "Transfer Learning",
      "Optimization for Deep Networks",
    ],
  },
  {
    group: "Large Language Models (LLMs)",
    items: [
      "Prompt Engineering",
      "Fine-Tuning",
      "RAG",
      "LangChain",
      "Structured Data + LLM Integration",
      "Workflow Automation with LLMs",
    ],
  },
  {
    group: "Agentic AI",
    items: [
      "LangGraph",
      "Multi-Agent Systems",
      "Tool Use & Function Calling",
      "Autonomous Agents",
      "Closed-Loop Feedback Systems",
      "Agent Orchestration",
      "Memory & Context Management",
      "Human-in-the-Loop Workflows",
    ],
  },
  {
    group: "Quantitative Foundations",
    items: [
      "Probability Theory",
      "Statistics",
      "Numerical Optimization",
      "Stochastic Processes (foundational)",
      "Mathematical Modeling for Data Science",
    ],
  },
  {
    group: "Time-Series & Predictive Modeling",
    items: [
      "Forecasting",
      "Sequential Data Modeling",
      "Feature Engineering for Temporal Data",
      "Model Calibration Evaluation",
    ],
  },
  {
    group: "Model Governance & Reproducibility",
    items: [
      "Experiment Tracking (MLflow)",
      "Model Validation",
      "Documentation Standards",
      "Reproducible Research Pipelines",
    ],
  },
  {
    group: "Cloud & Production ML",
    items: [
      "AWS (SageMaker, ECS/ECR)",
      "Docker",
      "HPC (SLURM, LSF)",
      "Distributed Training",
      "GPU Acceleration",
    ],
  },
  {
    group: "Data Engineering & Systems",
    items: ["SQL", "PostgreSQL", "SQLite", "Data Pipelines", "ETL Workflows"],
  },
];

export const AWARDS = [
  "Certificate of Excellence — Graduate Student Association, University of Memphis",
  "International Merit Scholarship — academic excellence",
  "Peter I. Neathery Scholarship — academic excellence",
];

export const COURSEWORK = [
  "Machine Learning",
  "Neural Networks",
  "Natural Language Processing",
  "Data Mining and Predictive Analytics",
  "Mathematical Modeling for Data Science",
  "Statistics for Engineers",
  "Data Structures and Algorithms",
  "Deep Learning",
  "Self-Supervised Learning",
  "Representation Learning",
  "Optimization Methods for ML",
  "Predictive Analytics",
  "Numerical Optimization",
  "Design and Analysis of Algorithms",
];
