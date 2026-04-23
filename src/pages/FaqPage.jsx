const faqs = [
  {
    q: "Quel est votre delai d'intervention ?",
    a: 'Le depart se fait des validation de la demande. Le temps d arrivee depend de la zone, du trafic et de l accessibilite.',
  },
  {
    q: 'Couvrez-vous uniquement Antananarivo ?',
    a: 'Non. SARO assure des interventions et transports medicalises dans tout Madagascar selon les moyens de deploiement disponibles.',
  },
  {
    q: 'Travaillez-vous avec les assurances ?',
    a: 'Oui, selon les conventions en place. Nous fournissons egalement les pieces justificatives pour remboursement.',
  },
  {
    q: 'Quand faut-il appeler une ambulance ?',
    a: "En cas de douleur thoracique, detresse respiratoire, perte de connaissance, saignement important, AVC suspecte ou traumatisme severe.",
  },
]

export default function FaqPage() {
  return (
    <section className="faq-page site-container site-container--narrow">
      <p className="faq-page__eyebrow">FAQ</p>
      <h1 className="faq-page__title">Questions frequentes</h1>

      <div className="faq-page__list">
        {faqs.map((item) => (
          <details key={item.q} className="faq-page__item">
            <summary className="faq-page__question">{item.q}</summary>
            <p className="faq-page__answer">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="faq-page__help-box">
        <h2 className="faq-page__help-title">Besoin d'une reponse immediate ?</h2>
        <p className="faq-page__help-text">
          En situation urgente, ne restez pas sur la FAQ. Contactez directement notre regulation.
        </p>
        <a
          href="tel:+261340500034"
          className="faq-page__help-call"
        >
          Appeler l'urgence
        </a>
      </div>
    </section>
  )
}
