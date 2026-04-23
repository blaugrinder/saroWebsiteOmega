export default function ContactPage() {
  return (
    <section className="contact-page site-container">
      <div className="contact-page__grid">
        <div>
          <p className="contact-page__eyebrow">Contact et regulation</p>
          <h1 className="contact-page__title">Demander une intervention SARO</h1>
          <p className="contact-page__intro">
            En cas d'urgence vitale, appelez directement. Pour toute demande de transport medicalise ou de dispositif
            evenementiel, envoyez les informations ci-dessous.
          </p>
          <a
            href="tel:+261340500034"
            className="contact-page__urgent-call"
          >
            Urgence : +261 34 05 000 34
          </a>
          <div className="contact-page__chips">
            {['Urgence 24/7', 'Transport medicalise', "Assistance d'evenements"].map((chip) => (
              <span key={chip} className="contact-page__chip">
                {chip}
              </span>
            ))}
          </div>
          <div className="contact-page__info-card">
            <h2 className="contact-page__info-title">Horaires</h2>
            <p className="contact-page__info-highlight">24h/24 - 7j/7</p>
            <p className="contact-page__info-text">Regulation, equipages et transport medicalise disponibles en continu.</p>
          </div>
          <div className="contact-page__info-card">
            <h2 className="contact-page__info-title">Zones couvertes</h2>
            <p className="contact-page__info-text">Tout Madagascar.</p>
          </div>
        </div>

        <div className="contact-page__sidebar">
          <form className="contact-page__form">
            <h2 className="contact-page__form-title">Formulaire de demande</h2>
            <div className="contact-page__form-fields">
              <input
                type="text"
                placeholder="Nom complet"
                className="contact-page__input"
              />
              <input
                type="tel"
                placeholder="Numero de telephone"
                className="contact-page__input"
              />
              <input
                type="text"
                placeholder="Localisation"
                className="contact-page__input"
              />
              <select className="contact-page__input">
                <option>Niveau d'urgence</option>
                <option>Critique</option>
                <option>Urgent</option>
                <option>Non urgent</option>
              </select>
              <button
                type="submit"
                className="contact-page__submit"
              >
                Envoyer la demande
              </button>
            </div>
          </form>

          <div className="contact-page__map-frame">
            <iframe
              title="Position SARO"
              src="https://www.google.com/maps?q=Antananarivo&output=embed"
              className="contact-page__map"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
