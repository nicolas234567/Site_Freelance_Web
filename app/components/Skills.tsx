export default function Skills() {
  const tech = [
    "html5",
    "css3",
    "javascript",
    "php",
    "mysql",
  ];

  const tech2 = [
    "bootstrap",
    "react",
    "nextjs",
    "symfony",
    "git",
  ];

  return (
    <section id="skills" className="section">
      <h2>Compétences</h2>
      <div className="skills-grid">
        {tech.map((tech) => (
          <div key={tech} className="skill-card">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
              alt={tech}
            />
            <p>{tech.toUpperCase()}</p>
          </div>
        ))}
      </div>
      <div className="skills-grid">
        {tech2.map((tech2) => (
          <div key={tech2} className="skill-card">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech2}/${tech2}-original.svg`}
              alt={tech2}
            />
            <p>{tech2.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
