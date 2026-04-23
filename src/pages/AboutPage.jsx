const values = [
  { title: 'Securite', text: 'Protocoles stricts, equipements controles et priorite absolue au patient.' },
  { title: 'Rapidite', text: 'Organisation operationnelle pour reduire au maximum les delais d intervention.' },
  { title: 'Humanite', text: 'Accompagnement respectueux, clair et rassurant pour les familles.' },
]

export default function AboutPage() {
  return (
    <section className="about-page site-container">
      <p className="about-page__eyebrow">Qui sommes-nous</p>
      <h1 className="about-page__title">SARO, acteur de reference de l'urgence medicale</h1>
      <p className="about-page__intro">
        SARO est une entreprise malagasy specialisee dans les ambulances, le transport medicalise et l'assistance
        sanitaire d'evenements. Notre mission est simple : intervenir vite, soigner avec rigueur et transporter en
        toute securite.
      </p>

      <div className="about-page__values">
        {values.map((item) => (
          <article key={item.title} className="about-page__value-card">
            <h2 className="about-page__value-title">{item.title}</h2>
            <p className="about-page__value-text">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="about-page__mission">
        <p className="about-page__mission-eyebrow">Mission SARO</p>
        <p className="about-page__mission-text">
          Offrir une prise en charge medicale pre-hospitaliere fiable, rapide et humaine partout a Madagascar, avec un
          niveau d'exigence constant sur la securite et la qualite de service.
        </p>
      </div>

      <div className="about-page__compliance">
        <h2 className="about-page__compliance-title">Credibilite et conformite</h2>
        <ul className="about-page__compliance-list">
          <li>Agreee par MSANP - Ndeg96/SG/DGS/DDS/SMLDP du 16/05/2012.</li>
          <li>Ndeg statistique : 85199 11 2009 0 10731.</li>
          <li>NIF : 4000715654 du 24/01/2012.</li>
          <li>Equipes formees et aptes a intervenir sur urgences adultes et pediatriques.</li>
        </ul>
      </div>
    </section>
  )
}
