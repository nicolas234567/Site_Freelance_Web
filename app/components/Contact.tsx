export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Démarrons votre projet</h2>

      <form
        action="https://formspree.io/f/mykdgjkk"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre e-mail" required />

        <select name="type_projet" required>
          <option value="">Type de projet</option>
          <option value="site_vitrine">Site vitrine</option>
          <option value="site_ecommerce">Site e-commerce</option>
          <option value="autre">Autre</option>
        </select>

        <textarea
          name="message"
          rows={5}
          placeholder="Votre message"
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
