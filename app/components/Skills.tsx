const skills = ["Angular", "Laravel", "Next.js", "Java", "MySQL", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-6 rounded text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
