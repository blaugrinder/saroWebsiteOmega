import { Handshake, HeartPulse, HousePlus, Stethoscope, Truck, Users } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Transport medicalise',
    description:
      'Transfert sanitaire encadre par des equipes qualifiees, sur courte et longue distance.',
  },
  {
    icon: HeartPulse,
    title: "Assistance medicale d'urgence",
    description:
      'Intervention rapide pour les situations critiques avec prise en charge pre-hospitaliere.',
  },
  {
    icon: Users,
    title: "Couverture d'evenements",
    description:
      "Dispositif medical sur place pour evenements culturels, sportifs, courses, trails et plus.",
  },
  {
    icon: HousePlus,
    title: 'Services medicaux a domicile',
    description:
      'Interventions et accompagnement sanitaire a domicile selon les besoins du patient.',
  },
  {
    icon: Stethoscope,
    title: 'Transport medical specialise',
    description:
      'Transport adapte aux pathologies et situations particulieres avec equipement dedie.',
  },
  {
    icon: Handshake,
    title: 'Partenariats et contrats',
    description:
      "Solutions sur mesure pour entreprises, institutions, organisateurs d'evenements et structures de sante.",
  },
]

export default function ServicesPage() {
  return (
    <section className="services-page site-container">
      <p className="services-page__eyebrow">Nos services</p>
      <h1 className="services-page__title">
        Les activites principales de SARO
      </h1>
      <p className="services-page__intro">
        Nous proposons une prise en charge medicale complete sur tout Madagascar, pour les urgences, les transports
        sanitaires et les besoins professionnels.
      </p>

      <div className="services-page__grid">
        {services.map((service) => (
          <article
            key={service.title}
            className="services-page__card"
          >
            <div className="services-page__icon-wrap">
              <service.icon className="services-page__icon" />
            </div>
            <h2 className="services-page__card-title">{service.title}</h2>
            <p className="services-page__card-text">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
