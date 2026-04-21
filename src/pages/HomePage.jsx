import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  Clock3,
  Handshake,
  HeartPulse,
  HousePlus,
  MapPinned,
  ShieldCheck,
  Siren,
  Stethoscope,
  Truck,
  Users,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const highlights = [
  { icon: Clock3, title: 'Intervention rapide', text: 'Declenchement immediat et coordination active des equipages.' },
  { icon: ShieldCheck, title: 'Equipe certifiee', text: 'Professionnels formes aux standards de soins pre-hospitaliers.' },
  { icon: MapPinned, title: 'Couverture nationale', text: 'Transport medicalise et assistance dans tout Madagascar.' },
]

const services = [
  { title: 'Urgence medicale 24/7', text: 'Prise en charge immediate et evacuation medicalisee vers la structure adaptee.' },
  { title: 'Transport medicalise national', text: 'Transferts interurbains, hospitaliers et sanitaires sur tout le territoire.' },
  { title: "Assistance d'evenements", text: 'Dispositifs medicaux pour spectacles, competitions, courses et trails.' },
]

const coreActivities = [
  { icon: Truck, title: 'Transport medicalise', text: 'Transferts sanitaires sur tout Madagascar.' },
  { icon: HeartPulse, title: "Assistance medicale d'urgence", text: 'Intervention rapide pour les situations critiques.' },
  { icon: Users, title: "Couverture d'evenements", text: 'Dispositifs medicaux pour culture, sport et grands rassemblements.' },
  { icon: HousePlus, title: 'Services medicaux a domicile', text: 'Accompagnement sanitaire adapte au domicile du patient.' },
  { icon: Stethoscope, title: 'Transport medical specialise', text: 'Moyens et equipements adaptes aux situations complexes.' },
  { icon: Handshake, title: 'Partenariats et contrats', text: 'Solutions dediees pour entreprises et institutions.' },
]

const partnerLogos = Array.from({ length: 14 }, (_, i) => ({
  src: `/Partners/${i + 1}.png`,
  alt: `Logo partenaire ${i + 1}`,
}))

const heroSlides = [
  { src: '/111.jpg', alt: 'Ambulance en intervention' },
  { src: '/222.jpg', alt: 'Equipe medicale SARO' },
  { src: '/333.jpg', alt: 'Transport medicalise SARO' },
]

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative h-[78vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-[78vh] w-full object-cover transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061c3d]/95 via-[#0c2b57]/70 to-[#0c2b57]/20" />
        <div className="absolute inset-0 mx-auto flex w-full max-w-6xl items-center px-4 md:px-6">
          <div className="max-w-xl text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <Siren className="h-3.5 w-3.5" />
              SARO - Service d'urgence medicale 24/7
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Ambulances et transport medicalise de confiance a Madagascar
            </h1>
            <p className="mt-5 text-base text-blue-50 md:text-lg">
              Nous intervenons avec calme, precision et rapidite pour proteger chaque vie, partout dans le pays.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+261340500034"
                className="rounded-full bg-medical-red px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Appeler maintenant
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/60 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Demander une ambulance
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/60'
              }`}
              aria-label={`Afficher slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section className="bg-[#f5f7fb] py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[1fr_auto_1fr] md:px-6">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/intro.jpg"
                alt="Introduction SARO"
                className="h-[430px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 h-28 w-44 bg-white/45 [clip-path:polygon(0_35%,100%_100%,0_100%)]" />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg bg-white px-5 py-4 shadow-xl shadow-slate-900/10">
              <div className="rounded-md bg-red-50 p-2 text-medical-red">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Established in</p>
                <p className="text-2xl font-bold text-[#0B00D0]">1987</p>
              </div>
            </div>
          </div>

          <div className="mx-auto hidden h-[70%] w-px bg-gradient-to-b from-transparent via-[#FF2E2C] to-transparent md:block" />

          <div className="self-center">
            <p className="inline-flex items-center gap-2 text-sm text-slate-400">
              <Activity className="h-4 w-4 text-slate-400" />
              Our Introductions
            </p>
            <h2 className="mt-3 max-w-md text-4xl font-bold leading-tight text-[#0B00D0]">
              A Leading Medical Service Provider
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
              SARO assure des interventions d'urgence, des transports medicalises nationaux et une assistance sanitaire
              rigoureuse pour les particuliers, entreprises et evenements.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl bg-white p-4 shadow-sm">
                <ArrowRight className="h-4 w-4 text-[#FF2E2C]" />
                <h3 className="mt-2 font-semibold text-slate-900">Help us Save a Life</h3>
                <p className="mt-1 text-sm text-slate-500">Intervention rapide et coordination medicale immediate.</p>
              </article>
              <article className="rounded-xl bg-white p-4 shadow-sm">
                <ArrowRight className="h-4 w-4 text-[#FF2E2C]" />
                <h3 className="mt-2 font-semibold text-slate-900">Join our Big Family</h3>
                <p className="mt-1 text-sm text-slate-500">Partenariats durables avec institutions et entreprises.</p>
              </article>
            </div>

            <a
              href="#confiance"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#FF4C4A] to-[#FF2E2C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-300/60 transition hover:scale-[1.02] hover:brightness-95"
            >
              Discover About More
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-14 grid max-w-6xl gap-5 px-4 pb-10 md:grid-cols-3 md:px-6">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/80 bg-white/95 p-6 shadow-xl shadow-slate-900/5 backdrop-blur"
          >
            <item.icon className="h-7 w-7 text-medical-red" />
            <h2 className="mt-4 text-xl font-semibold text-medical-blue">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-900/5 sm:grid-cols-3 sm:p-6">
          <div className="rounded-xl bg-gradient-to-br from-medical-blue to-blue-900 p-5 text-white">
            <p className="text-xs uppercase tracking-wider text-blue-100">Disponibilite</p>
            <p className="mt-2 text-3xl font-semibold">24/7</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">Couverture</p>
            <p className="mt-2 text-xl font-semibold text-medical-blue">Tout Madagascar</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">Service principal</p>
            <p className="mt-2 text-xl font-semibold text-medical-blue">Urgence et transport medicalise</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#f2f7ff] to-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">Presentation</p>
            <h2 className="mt-2 text-3xl font-semibold text-medical-blue">Une organisation fiable, humaine et reelle</h2>
            <p className="mt-4 text-slate-700">
              SARO est une structure agreee, experimentee, et mobilisable en continu pour les urgences, les transferts
              medicalises et la securisation sanitaire d'evenements de toute taille.
            </p>
            <a
              href="#confiance"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-medical-blue transition hover:text-medical-red"
            >
              Decouvrir notre mission <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-md shadow-slate-900/5"
              >
                <h3 className="font-semibold text-medical-blue">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">Activites principales</p>
        <h2 className="mt-2 text-3xl font-semibold text-medical-blue">Tout ce que SARO prend en charge</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreActivities.map((activity) => (
            <article
              key={activity.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-blue-200"
            >
              <div className="inline-flex rounded-lg bg-blue-50 p-2 text-medical-blue transition group-hover:bg-medical-blue group-hover:text-white">
                <activity.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-medical-blue">{activity.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{activity.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-3xl font-semibold text-medical-blue">Confiance et conformite professionnelle</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            'Agreee par MSANP - Ndeg96/SG/DGS/DDS/SMLDP du 16/05/2012',
            'Ndeg statistique : 85199 11 2009 0 10731',
            'NIF : 4000715654 du 24/01/2012',
          ].map(
            (badge) => (
              <div key={badge} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <Award className="h-5 w-5 text-medical-red" />
                <p className="text-sm font-medium text-slate-700">{badge}</p>
              </div>
            ),
          )}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <blockquote className="rounded-2xl bg-medical-blue p-6 text-blue-50 shadow-xl shadow-blue-900/20">
            "Equipe ponctuelle, prise en charge serieuse et communication rassurante. Un service tres professionnel."
          </blockquote>
          <blockquote className="rounded-2xl bg-slate-100 p-6 text-slate-700">
            "Sur nos evenements sportifs, SARO assure une couverture medicale complete avec une tres bonne coordination."
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-medical-red">Ils nous font confiance</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Ces entreprises et institutions nous ont deja fait confiance pour leurs besoins en urgence, transport
            medicalise et assistance evenementielle.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {partnerLogos.map((logo) => (
              <div
                key={logo.src}
                className="flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-10 w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm font-semibold text-slate-500">... et plus</p>
        </div>
      </section>
    </div>
  )
}
