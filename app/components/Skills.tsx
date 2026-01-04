import '../styles/Skills.css';

const skills = ["Spring Boot", "PostgreSQL", "MongoDB", "Next.js", "Laravel", "Git", "Docker"];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
