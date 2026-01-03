export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-slate-800 p-6 rounded">
              <h3 className="font-semibold mb-2">Project {p}</h3>
              <p className="text-gray-400 text-sm mb-4">
                Description courte du projet.
              </p>
              <button className="text-blue-400">View Project →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
