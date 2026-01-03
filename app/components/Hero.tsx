export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-4">
          Kawthar <span className="text-blue-500">Jeddi</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Web Developer | Angular | Laravel | Next.js
        </p>
        <a
          href="#contact"
          className="bg-blue-600 px-6 py-3 rounded text-white"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
