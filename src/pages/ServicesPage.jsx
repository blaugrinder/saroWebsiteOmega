const services = [
  {
    title: 'Transport medicalise',
    description:
      'Transfert sanitaire encadre par des equipes qualifiees, sur courte et longue distance.',
  },
  {
    title: "Assistance medicale d'urgence",
    description:
      'Intervention rapide pour les situations critiques avec prise en charge pre-hospitaliere.',
  },
  {
    title: "Couverture d'evenements",
    description:
      "Dispositif medical sur place pour evenements culturels, sportifs, courses, trails et plus.",
  },
  {
    title: 'Services medicaux a domicile',
    description:
      'Interventions et accompagnement sanitaire a domicile selon les besoins du patient.',
  },
  {
    title: 'Transport medical specialise',
    description:
      'Transport adapte aux pathologies et situations particulieres avec equipement dedie.',
  },
  {
    title: 'Partenariats et contrats',
    description:
      "Solutions sur mesure pour entreprises, institutions, organisateurs d'evenements et structures de sante.",
  },
]

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">Nos services</p>
      <h1 className="mt-2 max-w-4xl text-4xl font-semibold text-medical-blue">
        Les activites principales de SARO
      </h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Nous proposons une prise en charge medicale complete sur tout Madagascar, pour les urgences, les transports
        sanitaires et les besoins professionnels.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1"
          >
            <h2 className="text-2xl font-semibold text-medical-blue">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
