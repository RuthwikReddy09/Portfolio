import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

// Simple Icons CDN slugs — only for tools/frameworks with official brand logos
const SKILL_ICONS = {
  // Languages
  "Python":            "https://cdn.simpleicons.org/python/3776AB",
  "SQL (PostgreSQL, MySQL)": "https://cdn.simpleicons.org/postgresql/4169E1",
  "Java":              "https://cdn.simpleicons.org/openjdk/ED8B00",

  // ML / Deep Learning
  "PyTorch":           "https://cdn.simpleicons.org/pytorch/EE4C2C",
  "TensorFlow":        "https://cdn.simpleicons.org/tensorflow/FF6F00",
  "Scikit-learn":      "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "scikit-learn":      "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "Pandas":            "https://cdn.simpleicons.org/pandas/150458",
  "pandas":            "https://cdn.simpleicons.org/pandas/150458",
  "NumPy":             "https://cdn.simpleicons.org/numpy/013243",
  "Jupyter":           "https://cdn.simpleicons.org/jupyter/F37626",
  "CUDA":              "https://cdn.simpleicons.org/nvidia/76B900",

  // LLM & GenAI
  "LangChain":         "https://cdn.simpleicons.org/langchain/1C3C3C",
  "LangGraph":         "https://cdn.simpleicons.org/langchain/1C3C3C",
  "Hugging Face":      "https://cdn.simpleicons.org/huggingface/FFD21E",
  "OpenAI API":        "https://cdn.simpleicons.org/openai/412991",

  // Data Viz
  "Matplotlib":        "https://cdn.simpleicons.org/matplotlib/11557C",
  "Power BI":          "https://cdn.simpleicons.org/powerbi/F2C811",
  "Tableau":           "https://cdn.simpleicons.org/tableau/E97627",

  // Deployment & Infra
  "Flask":             "https://cdn.simpleicons.org/flask/000000",
  "Django":            "https://cdn.simpleicons.org/django/092E20",
  "Docker":            "https://cdn.simpleicons.org/docker/2496ED",
  "AWS (EC2, S3, SageMaker)": "https://cdn.simpleicons.org/amazonaws/FF9900",
  "AWS (SageMaker, ECS/ECR)": "https://cdn.simpleicons.org/amazonaws/FF9900",
  "Git":               "https://cdn.simpleicons.org/git/F05032",

  // Data Engineering
  "SQL":               "https://cdn.simpleicons.org/postgresql/4169E1",
  "PostgreSQL":        "https://cdn.simpleicons.org/postgresql/4169E1",
  "MySQL":             "https://cdn.simpleicons.org/mysql/4479A1",
  "SQLite":            "https://cdn.simpleicons.org/sqlite/003B57",

  // Model Governance
  "Experiment Tracking (MLflow)": "https://cdn.simpleicons.org/mlflow/0194E2",
};

function SkillPill({ name }) {
  const icon = SKILL_ICONS[name];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50">
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-3.5 h-3.5 object-contain rounded-sm bg-white p-[1px]"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      )}
      {name}
    </span>
  );
}

export default function EducationSkills({ education, skills, awards, coursework }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div id="education" className="scroll-mt-24">
          <SectionTitle title="Education" subtitle="Academic background." />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {education.map((e, idx) => (
              <motion.article
                key={e.school + e.degree}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 p-6"
              >
                <div className="flex items-start gap-4">
                  {e.logo && (
                    <img
                      src={e.logo}
                      alt={e.school}
                      className="w-14 h-14 rounded-xl object-contain shrink-0 bg-white p-1 border border-zinc-200 dark:border-zinc-700"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold leading-snug">{e.school}</h3>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{e.degree}</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{e.location}</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{e.dates}</p>
                  </div>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

        <div id="skills" className="scroll-mt-24 mt-16">
          <SectionTitle title="Skills" subtitle="Tooling, ML, systems, and foundations." />
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {skills.map((s, idx) => (
              <motion.article
                key={s.group}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 p-6"
              >
                <h3 className="font-semibold">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <SkillPill key={it} name={it} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 p-6"
            >
              <h3 className="font-semibold">Achievements & Awards</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 p-6"
            >
              <h3 className="font-semibold">Relevant Coursework</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
