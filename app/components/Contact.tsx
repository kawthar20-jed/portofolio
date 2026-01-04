import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <form className="contact-form">
          <input type="text" className="contact-input" placeholder="Name" />
          <input type="email" className="contact-input" placeholder="Email" />
<textarea className="contact-textarea" placeholder="Message" rows={5} />
          <button type="submit" className="contact-button">Send</button>
        </form>
      </div>
    </section>
  );
}
