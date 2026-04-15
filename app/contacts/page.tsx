export default function Contacts() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <div className="contact-hero">
          <h1>Contattami</h1>
          <p>Hai una domanda o una proposta? Sono sempre disponibile per collaborazioni interessanti.</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Oggetto</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea id="message" name="message" rows={6} required></textarea>
          </div>

          <button type="submit" className="submit-btn">Invia Messaggio</button>
        </form>

        <div className="contact-info">
          <h2>Altre modalità di contatto</h2>
          <div className="contact-links">
            <a href="mailto:info@example.com" className="contact-link">📧 Email</a>
            <a href="https://linkedin.com" className="contact-link">💼 LinkedIn</a>
            <a href="https://github.com" className="contact-link">🐙 GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}