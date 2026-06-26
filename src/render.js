export function renderGoals(goals, container) {
  container.innerHTML = goals
    .map((goal) => `<li class="goal-item"><span class="check">→</span>${goal}</li>`)
    .join("");
}

export function renderSkills(skills, container) {
  container.innerHTML = skills
    .map((skill) => `
      <div class="skill-card skill-${skill.level}">
        <span class="skill-tag">${skill.tag}</span>
        <p class="skill-name">${skill.name}</p>
        <span class="skill-level">${skill.level}</span>
      </div>`)
    .join("");
}

export function renderProjects(projects, container) {
  container.innerHTML = projects
    .map((p) => `
      <div class="project-card project-${p.status}">
        <span class="project-number">${p.number}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <span class="project-badge">${p.status === "done" ? "Complete" : "Upcoming"}</span>
      </div>`)
    .join("");
}

export function renderHeroCode(container) {
  const lines = [
    `<span class="c-kw">import</span> { goals } <span class="c-kw">from</span> <span class="c-str">'./data.js'</span>;`,
    ``,
    `<span class="c-kw">const</span> list = document.<span class="c-fn">querySelector</span>(<span class="c-str">'#goals'</span>);`,
    ``,
    `goals.<span class="c-fn">forEach</span>(goal => {`,
    `  <span class="c-kw">const</span> li = document.<span class="c-fn">createElement</span>(<span class="c-str">'li'</span>);`,
    `  li.textContent = goal;`,
    `  list.<span class="c-fn">append</span>(li);`,
    `});`,
  ];
  container.innerHTML = lines.map((l) => `<div class="code-line">${l}</div>`).join("");
}
