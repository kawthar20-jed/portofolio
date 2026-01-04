'use client';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "Doctor Appointment",
    description: "Site web permettant aux patients de prendre rendez-vous avec un médecin facilement. Gestion des disponibilités, notifications et interface simple pour les patients et les médecins.",
    link: "https://medcine-app-production.up.railway.app/"
  },
  {
      title: "FaisTroquer",
      description: "Application web de troc de services : vous proposez votre service et si l'autre personne est d'accord, elle propose le sien. Une façon simple et rapide d'échanger des services entre utilisateurs.",
      link: "#" // remplacer par ton lien réel si disponible
    },
  {
    title: "Gestion RH",
    description: "Application de gestion des ressources humaines, du matériel et des congés. Elle permet de suivre les employés, gérer les équipements et planifier les congés efficacement.",
    link: "#" // tu peux remplacer par ton lien réel si disponible
  },
  {
      title: "Pâtisserie Web App",
      description: "Application web de pâtisserie présentant les produits traditionnels (Beldi), glaces et gâteaux avec la possibilité de passer commande en ligne sans paiement intégré.",
      link: "https://github.com/kawthar20-jed/site-web-p-tisserie"
    },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((p, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
