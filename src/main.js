import "./style.css";
import { about, goals, skills, projects } from "./data.js";
import { renderGoals, renderSkills, renderProjects, renderHeroCode } from "./render.js";

document.querySelector("#hero-subtitle").textContent = about.heroSubtitle;
renderHeroCode(document.querySelector("#hero-code"));
document.querySelector("#about-text").textContent = about.bio;
renderGoals(goals, document.querySelector("#goals-list"));
renderSkills(skills, document.querySelector("#skills-grid"));
renderProjects(projects, document.querySelector("#project-grid"));
document.querySelector("#footer-year").textContent = new Date().getFullYear();
