const values = [
  { title: 'Securite', text: 'Protocoles stricts, equipements controles et priorite absolue au patient.' },
  { title: 'Rapidite', text: 'Organisation operationnelle pour reduire au maximum les delais d intervention.' },
  { title: 'Humanite', text: 'Accompagnement respectueux, clair et rassurant pour les familles.' },
]

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">Qui sommes-nous</p>
      <h1 className="mt-2 text-4xl font-semibold text-medical-blue">SARO, acteur de reference de l'urgence medicale</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        SARO est une entreprise malagasy specialisee dans les ambulances, le transport medicalise et l'assistance
        sanitaire d'evenements. Notre mission est simple : intervenir vite, soigner avec rigueur et transporter en
        toute securite.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {values.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-soft-gray p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-medical-blue">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-medical-blue to-blue-900 p-6 text-white">
        <p className="text-xs uppercase tracking-widest text-blue-100">Mission SARO</p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-blue-50">
          Offrir une prise en charge medicale pre-hospitaliere fiable, rapide et humaine partout a Madagascar, avec un
          niveau d'exigence constant sur la securite et la qualite de service.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-2xl font-semibold text-medical-blue">Credibilite et conformite</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>Agreee par MSANP - Ndeg96/SG/DGS/DDS/SMLDP du 16/05/2012.</li>
          <li>Ndeg statistique : 85199 11 2009 0 10731.</li>
          <li>NIF : 4000715654 du 24/01/2012.</li>
          <li>Equipes formees et aptes a intervenir sur urgences adultes et pediatriques.</li>
        </ul>
      </div>
    </section>
  )
}
