export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="space-y-4">
          <input className="w-full p-3 rounded bg-slate-800" placeholder="Name" />
          <input className="w-full p-3 rounded bg-slate-800" placeholder="Email" />
          <textarea className="w-full p-3 rounded bg-slate-800" placeholder="Message" />
          <button className="bg-blue-600 px-6 py-3 rounded w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
