export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">Contact et regulation</p>
          <h1 className="mt-2 text-4xl font-semibold text-medical-blue">Demander une intervention SARO</h1>
          <p className="mt-4 text-slate-700">
            En cas d'urgence vitale, appelez directement. Pour toute demande de transport medicalise ou de dispositif
            evenementiel, envoyez les informations ci-dessous.
          </p>
          <a
            href="tel:+261341234567"
            className="mt-6 inline-block rounded-full bg-medical-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-700"
          >
            Urgence : +261 34 12 345 67
          </a>
          <div className="mt-6 rounded-xl border border-slate-200 p-5">
            <h2 className="text-xl font-semibold text-medical-blue">Horaires</h2>
            <p className="mt-2 font-semibold text-medical-red">24h/24 - 7j/7</p>
            <p className="text-sm text-slate-600">Regulation, equipages et transport medicalise disponibles en continu.</p>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 p-5">
            <h2 className="text-xl font-semibold text-medical-blue">Zones couvertes</h2>
            <p className="mt-2 text-sm text-slate-600">
              Antananarivo, regions voisines et transports medicalises sur l'ensemble du territoire national.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <form className="rounded-2xl border border-slate-200 bg-soft-gray p-6 shadow-lg shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-medical-blue">Formulaire de demande</h2>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-medical-blue"
              />
              <input
                type="tel"
                placeholder="Numero de telephone"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-medical-blue"
              />
              <input
                type="text"
                placeholder="Localisation"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-medical-blue"
              />
              <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-medical-blue">
                <option>Niveau d'urgence</option>
                <option>Critique</option>
                <option>Urgent</option>
                <option>Non urgent</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-full bg-medical-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
              >
                Envoyer la demande
              </button>
            </div>
          </form>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="Position SARO"
              src="https://www.google.com/maps?q=Antananarivo&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
