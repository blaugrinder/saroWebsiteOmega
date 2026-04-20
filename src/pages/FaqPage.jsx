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
    <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">FAQ</p>
      <h1 className="mt-2 text-4xl font-semibold text-medical-blue">Questions frequentes</h1>

      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none font-semibold text-medical-blue">{item.q}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
