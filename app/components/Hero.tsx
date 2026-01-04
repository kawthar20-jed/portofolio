import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Kawthar <span className="hero-highlight">Jeddi</span>
        </h1>
        <p className="hero-subtitle">
          Full Stack Developer | Next.js • Laravel • Spring Boot
</p>
        <a href="#contact" className="hero-button">
          Contact Me
        </a>
      </div>
    </section>
  );
}
