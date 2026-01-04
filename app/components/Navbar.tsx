import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">KJ</h1>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="navbar-contact">Contact</a>
          {/* Bouton Télécharger CV */}
          <a 
            href="/cv/Kawthar_Jeddi_CV.pdf" 
            download 
            className="navbar-cv-button"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </nav>
  );
}
