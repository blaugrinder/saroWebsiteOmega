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
  { src: '/Images/111.jpg', alt: 'Ambulance en intervention' },
  { src: '/Images/222.jpg', alt: 'Equipe medicale SARO' },
  { src: '/Images/333.jpg', alt: 'Transport medicalise SARO' },
]

export default function HomePageStructured() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home-page">
      <section className="home-hero">
        {heroSlides.map((slide, index) => (
          <img key={slide.src} src={slide.src} alt={slide.alt} className={`home-hero__slide ${index === activeSlide ? 'home-hero__slide--active' : ''}`} />
        ))}
        <div className="home-hero__overlay" />
        <div className="home-hero__content-wrap site-container">
          <div className="home-hero__content">
            <p className="home-hero__badge"><Siren className="home-hero__badge-icon" />SARO - Service d'urgence medicale 24/7</p>
            <h1 className="home-hero__title">Ambulances et transport medicalise de confiance a Madagascar</h1>
            <p className="home-hero__subtitle">Nous intervenons avec calme, precision et rapidite pour proteger chaque vie, partout dans le pays.</p>
            <div className="home-hero__actions">
              <a href="tel:+261340500034" className="button button--red">Appeler maintenant</a>
              <a href="#contact" className="button button--outline-light">Demander une ambulance</a>
            </div>
          </div>
        </div>
        <div className="home-hero__dots">
          {heroSlides.map((slide, index) => (
            <button key={slide.src} type="button" onClick={() => setActiveSlide(index)} className={`home-hero__dot ${index === activeSlide ? 'home-hero__dot--active' : ''}`} aria-label={`Afficher slide ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="home-intro">
        <div className="home-intro__grid site-container">
          <div className="home-intro__media">
            <div className="home-intro__media-frame"><img src="/Images/intro.jpg" alt="Introduction SARO" className="home-intro__image" /><div className="home-intro__image-corner" /></div>
            <div className="home-intro__founded"><div className="home-intro__founded-icon-wrap"><Truck className="home-intro__founded-icon" /></div><div><p className="home-intro__founded-label">Depuis</p><p className="home-intro__founded-year">2012</p></div></div>
          </div>
          <div className="home-intro__divider" />
          <div className="home-intro__content">
            <p className="home-intro__eyebrow"><Activity className="home-intro__eyebrow-icon" />Our Introductions</p>
            <h2 className="home-intro__title">A Leading Medical Service Provider</h2>
            <p className="home-intro__text">SARO assure des interventions d'urgence, des transports medicalises nationaux et une assistance sanitaire rigoureuse pour les particuliers, entreprises et evenements.</p>
            <div className="home-intro__cards">
              <article className="home-intro__card"><ArrowRight className="home-intro__card-icon" /><h3 className="home-intro__card-title">Help us Save a Life</h3><p className="home-intro__card-text">Intervention rapide et coordination medicale immediate.</p></article>
              <article className="home-intro__card"><ArrowRight className="home-intro__card-icon" /><h3 className="home-intro__card-title">Join our Big Family</h3><p className="home-intro__card-text">Partenariats durables avec institutions et entreprises.</p></article>
            </div>
            <a href="#confiance" className="button button--gradient">Discover About More</a>
          </div>
        </div>
      </section>

      <section className="home-highlights"><div className="home-highlights__grid site-container site-container--compact">{highlights.map((item, index) => (<article key={item.title} className={`home-highlights__card ${index < highlights.length - 1 ? 'home-highlights__card--with-border' : ''}`}><div className="home-highlights__icon-wrap"><item.icon className="home-highlights__icon" /></div><h2 className="home-highlights__title">{item.title}</h2><p className="home-highlights__text">{item.text}</p></article>))}</div></section>

      <section className="home-activities"><div className="site-container home-activities__content"><div className="home-section-header"><p className="home-section-header__eyebrow">Nos services essentiels</p><h2 className="home-section-header__title">Tout ce que SARO prend en charge</h2></div><div className="home-activities__grid">{coreActivities.slice(0, 3).map((activity) => (<article key={activity.title} className="home-activities__card"><img src="/Images/111.jpg" alt={activity.title} className="home-activities__image" /><div className="home-activities__card-body"><h3 className="home-activities__card-title">{activity.title}</h3><p className="home-activities__card-text">{activity.text}</p><a href="#contact" className="home-activities__card-link">READ MORE {'->'}</a></div></article>))}</div></div></section>

      <section className="home-kpis site-container"><div className="home-kpis__grid"><div className="home-kpis__card home-kpis__card--primary"><p className="home-kpis__label">Disponibilite</p><p className="home-kpis__value">24/7</p></div><div className="home-kpis__card"><p className="home-kpis__label home-kpis__label--dark">Couverture</p><p className="home-kpis__value home-kpis__value--small">Tout Madagascar</p></div><div className="home-kpis__card"><p className="home-kpis__label home-kpis__label--dark">Service principal</p><p className="home-kpis__value home-kpis__value--small">Urgence et transport medicalise</p></div></div></section>

      <section className="home-presentation"><div className="home-presentation__grid site-container"><div><p className="home-presentation__eyebrow">Presentation</p><h2 className="home-presentation__title">Une organisation fiable, humaine et reelle</h2><p className="home-presentation__text">SARO est une structure agreee, experimentee, et mobilisable en continu pour les urgences, les transferts medicalises et la securisation sanitaire d'evenements de toute taille.</p><a href="#confiance" className="home-presentation__link">Decouvrir notre mission <ArrowUpRight className="home-presentation__link-icon" /></a></div><div className="home-presentation__services">{services.map((service) => (<article key={service.title} className="home-presentation__service-card"><h3 className="home-presentation__service-title">{service.title}</h3><p className="home-presentation__service-text">{service.text}</p></article>))}</div></div></section>

      <section className="home-trust site-container"><h2 className="home-trust__title">Confiance et conformite professionnelle</h2><div className="home-trust__badges">{['Agreee par MSANP - Ndeg96/SG/DGS/DDS/SMLDP du 16/05/2012', 'Ndeg statistique : 85199 11 2009 0 10731', 'NIF : 4000715654 du 24/01/2012'].map((badge) => (<div key={badge} className="home-trust__badge-card"><Award className="home-trust__badge-icon" /><p className="home-trust__badge-text">{badge}</p></div>))}</div><div className="home-trust__quotes"><blockquote className="home-trust__quote home-trust__quote--primary">"Equipe ponctuelle, prise en charge serieuse et communication rassurante. Un service tres professionnel."</blockquote><blockquote className="home-trust__quote">"Sur nos evenements sportifs, SARO assure une couverture medicale complete avec une tres bonne coordination."</blockquote></div></section>

      <section className="home-partners site-container"><div className="home-partners__panel"><p className="home-partners__eyebrow">Ils nous font confiance</p><p className="home-partners__intro">Ces entreprises et institutions nous ont deja fait confiance pour leurs besoins en urgence, transport medicalise et assistance evenementielle.</p><div className="home-partners__grid">{partnerLogos.map((logo) => (<div key={logo.src} className="home-partners__logo-card"><img src={logo.src} alt={logo.alt} loading="lazy" className="home-partners__logo" /></div>))}</div><p className="home-partners__more">... et plus</p></div></section>
    </div>
  )
}
