const services = [
  {
    title: 'Urgence ambulance 24h/24',
    description:
      'Intervention immediate pour accidents, detresses vitales et transferts urgents vers les centres hospitaliers.',
  },
  {
    title: 'Transport medicalise national',
    description:
      'Transport sanitaire encadre sur toute l ile pour consultations, hospitalisations et retours a domicile.',
  },
  {
    title: "Assistance d'evenements",
    description:
      'Couverture medicale preventive pour evenements culturels, concerts, courses, trails et manifestations sportives.',
  },
]

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">Nos services</p>
      <h1 className="mt-2 max-w-4xl text-4xl font-semibold text-medical-blue">
        Une offre complete pour l urgence, le transport medicalise et la securisation d'evenements
      </h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        SARO intervient avec des equipes qualifiees, des ambulances equipees et une coordination continue avec les
        etablissements de sante.
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
