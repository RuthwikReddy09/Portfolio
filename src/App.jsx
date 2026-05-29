import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Publications from "./components/Publications.jsx";
import Projects from "./components/Projects.jsx";
import EducationSkills from "./components/EducationSkills.jsx";
import Blogs from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import {
  PROFILE,
  EXPERIENCE,
  PUBLICATIONS,
  PROJECTS,
  BLOGS,
  EDUCATION,
  SKILLS,
  AWARDS,
  COURSEWORK,
} from "./data.js";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setDark(stored === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "experience", label: "Experience" },
      { id: "publications", label: "Publications" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "blogs", label: "Blog" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <div className="min-h-screen">
      <Navbar sections={sections} dark={dark} setDark={setDark} />
      <main>
        <Hero profile={PROFILE} />
        <Experience items={EXPERIENCE} />
        <Publications items={PUBLICATIONS} />
        <Projects projects={PROJECTS} />
        <EducationSkills
          education={EDUCATION}
          skills={SKILLS}
          awards={AWARDS}
          coursework={COURSEWORK}
        />
        <Blogs blogs={BLOGS} />
        <Contact profile={PROFILE} />
      </main>
      <Footer profile={PROFILE} />
    </div>
  );
}
