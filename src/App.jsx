/*
  ZAMAR AUTO ELECTRICAL MOBILE — Landing Page

  Positioning angle: "The rescue + protection promise" — Zamar is Pretoria
  North's only dedicated mobile auto electrician with a real brand identity.
  They come to you, today, wherever your car has stopped. Combines roadside
  relief with proactive theft prevention via security fitment.

  Top trust signals: Fully mobile (no towing needed), real Facebook video
  documentation of jobs (Chev Spark, Hilux D4D, Ford Ranger), sole-operator
  personal brand (same technician every time), Google Maps listed.

  Primary CTA rationale: Dual above-fold CTAs: "WhatsApp Us Now" (primary,
  amber) and "Call Now" (secondary). Instant contact, not a booking form.
  Urgency-driven visitors need a single tap, not a scheduled workflow.

  Font pairing: Space Grotesk (display/headings, bold geometric, wide
  tracking on labels) + Inter (body, 18px). Zero serif per brief direction:
  "strong modern geometric sans-serif" communicating competence and speed.

  Accent colour: #E8A020 (amber/gold) — used for CTA buttons, trust badge,
  section labels, star ratings, hover states. On a #111827 navy-black and
  #F8F8F8 near-white base.
*/

import './index.css'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SalesBar from './components/SalesBar'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

const WHATSAPP_URL = 'https://wa.me/?text=Hi%20Zamar%2C%20I%20need%20help%20with%20my%20vehicle%20in%20Pretoria%20North'
const FACEBOOK_URL = 'https://www.facebook.com/ZamarAutoElec'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

/* ─── NAV ──────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Areas', href: '#areas' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-navy'
      }`}
    >
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-6 md:px-8 py-3">
        <a href="#" className="shrink-0">
          <img
            src={img('/images/logo-v2.webp')}
            alt="Zamar Auto Electrical Mobile logo"
            className="h-[60px] md:h-[70px] w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-sm font-medium text-white/80 hover:text-amber px-3 py-2 transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-navy font-bold text-sm px-5 py-2.5 rounded transition-colors duration-200"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center w-11 h-11 text-white"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 bg-navy/98 backdrop-blur-md lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 w-11 h-11 flex items-center justify-center text-white"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-display font-semibold text-white hover:text-amber transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-navy font-bold text-lg px-8 py-3.5 rounded transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ─── HERO ─────────────────────────────────────────────── */
function Hero() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    let cancelled = false
    async function initVanta() {
      try {
        const NET = (await import('vanta/dist/vanta.net.min')).default
        const THREE = await import('three')
        if (cancelled || !vantaRef.current) return
        vantaEffect.current = NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xE8A020,
          backgroundColor: 0x111827,
          points: 8,
          maxDistance: 22,
          spacing: 18,
          showDots: true,
        })
      } catch (e) {
        console.warn('Vanta init skipped:', e)
      }
    }
    initVanta()
    return () => {
      cancelled = true
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

  return (
    <section
      ref={vantaRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${img('/images/hero-bg-v2.png')})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/75 to-navy/95" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-8 md:px-8 pt-32 pb-40 md:pb-48 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
          <span className="text-amber text-xs font-bold tracking-[0.14em] uppercase font-display">
            Pretoria North's Mobile Auto Electrician
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight max-w-[720px]"
        >
          Your car broke down.
          <br />
          <span className="text-amber">Don't tow it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-white/75 text-lg md:text-xl max-w-[520px] leading-relaxed font-body"
        >
          We come to you, today, wherever you are in Pretoria North.
          Auto electrical diagnostics, repairs, and vehicle security
          fitted at your home, office, or roadside.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-amber hover:bg-amber-dark text-navy font-bold text-base px-7 py-4 rounded transition-colors duration-200 min-h-[48px]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp Us Now
          </a>
          <a
            href="tel:0609620600"
            className="inline-flex items-center gap-2.5 border-2 border-white/25 hover:border-white/50 text-white font-semibold text-base px-7 py-4 rounded transition-colors duration-200 min-h-[48px]"
          >
            <PhoneIcon className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── PROBLEM / RELIEF STRIP ───────────────────────────── */
function ProblemStrip() {
  const items = [
    {
      icon: <BatteryIcon />,
      problem: 'Car won\'t start',
      resolve: 'We come to you',
    },
    {
      icon: <ZapIcon />,
      problem: 'Electrical fault',
      resolve: 'We come to you',
    },
    {
      icon: <ShieldIcon />,
      problem: 'Need security fitted',
      resolve: 'We come to you',
    },
  ]

  return (
    <section className="relative bg-navy-mid py-16 md:py-20 -mt-12">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center text-amber">
                {item.icon}
              </div>
              <div>
                <p className="font-display font-semibold text-white text-lg">{item.problem}</p>
                <p className="text-amber font-medium text-sm tracking-wide mt-1">{item.resolve}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── SERVICES ─────────────────────────────────────────── */
function Services() {
  const services = [
    {
      title: 'Diagnostics & Fault Finding',
      desc: 'OBD scanning, electrical fault tracing, and full system diagnostics at your location. No guesswork, no towing.',
    },
    {
      title: 'Battery & Alternator',
      desc: 'Battery testing, replacement, and alternator repairs. Your car charges properly before we leave your driveway.',
    },
    {
      title: 'Security Alarms & Tracking',
      desc: 'Car alarm systems, GPS tracking devices, immobilisers, and anti-theft upgrades installed on-site at your home.',
    },
    {
      title: 'Wiring Repairs',
      desc: 'Damaged wiring, short circuits, and harness repairs. We trace and fix the problem wherever you are.',
    },
    {
      title: 'Central Locking',
      desc: 'Central locking system repairs and installations. Keyless entry, remote locking, and actuator replacements.',
    },
    {
      title: 'Headlights & Lighting',
      desc: 'Headlight faults, tail light issues, indicator problems, and full vehicle lighting diagnostics and repairs.',
    },
  ]

  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-amber text-xs font-bold tracking-[0.2em] uppercase font-display">What We Do</span>
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl lg:text-5xl mt-4 tracking-tight">
            Mobile auto electrical, at your door
          </h2>
          <p className="text-ink/60 text-lg mt-4 max-w-[560px] mx-auto leading-relaxed">
            No towing. No drop-off. No waiting room. Zamar brings the workshop to you.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white border border-amber/20 rounded-lg p-8 hover:border-amber/50 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-ink text-lg mb-3">{s.title}</h3>
              <p className="text-ink/60 text-[16px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── COVERAGE AREA ────────────────────────────────────── */
function CoverageArea() {
  const suburbs = [
    'Pretoria North',
    'Wonderboom',
    'Annlin',
    'Rosslyn',
    'Akasia',
    'Karenpark',
    'Doornpoort',
    'Sinoville',
    'Montana',
    'Amandasig',
    'Theresa Park',
    'Orchards',
  ]

  return (
    <section id="areas" className="bg-cream py-24 md:py-32 -mt-10">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-amber text-xs font-bold tracking-[0.2em] uppercase font-display">Coverage Area</span>
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl lg:text-5xl mt-4 tracking-tight">
            Wherever you are in Pretoria North
          </h2>
          <p className="text-ink/60 text-lg mt-4 max-w-[520px] mx-auto leading-relaxed">
            Zamar covers Pretoria North and all surrounding suburbs. Stranded? Tell us where you are.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-[800px] mx-auto"
        >
          {suburbs.map((s) => (
            <motion.div
              key={s}
              variants={staggerItem}
              className="flex items-center gap-3 bg-white border border-ink/8 rounded-lg px-5 py-4"
            >
              <MapPinIcon className="w-4 h-4 text-amber shrink-0" />
              <span className="text-ink text-sm font-medium">{s}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p {...fadeUp} className="text-center text-ink/50 text-sm mt-8">
          And all surrounding areas. Not sure if we cover your location? Just ask.
        </motion.p>
      </div>
    </section>
  )
}

/* ─── REVIEWS ──────────────────────────────────────────── */
function Reviews() {
  const reviews = [
    {
      text: 'Now I know how Gerhard keeps getting 5 stars. What an amazing person. Phoned him this morning, he responded immediately, found the cause of my car not starting in under 10 seconds and after just 5 minutes fixed faulty immobilizer and got my baby up and running.',
      name: 'Lourens Dreyer',
    },
    {
      text: 'Absolutely great service! Phoned this morning after getting stuck on the N1 in peak traffic yesterday afternoon. Came to my home this afternoon to repair my Nissan Micra battery terminal at a very reasonable price. Gerhard found the fault literally within a minute. Very neat and professional work.',
      name: 'Roxy Toweel',
    },
    {
      text: 'Gerhard fixed an indicator problem on an Opel Corsa bakkie that another auto electrician worked on and couldn\'t resolve satisfactorily. Identified and fixed the problem at home. Very convenient, professional and efficient. Excellent service!',
      name: 'Anton le Roux',
    },
    {
      text: 'The service that we received from Gerhard was professional, right first time. The effort that he made to quickly assist me was above all expectations. I can highly recommend his service.',
      name: 'Johann Els',
    },
    {
      text: 'Gerhard has helped me several times. I have never had a return of the problem once he fixed it. His workmanship has always impressed me. You don\'t see loose wires or bad joints when he worked on your car.',
      name: 'Hannes Truter',
    },
    {
      text: 'Very professional and does a very clean job. He is very humble and troubleshoots systematically, he solves the problem. Returns factory specification. Goes the extra mile to diagnose and solve the problem. Came to my house and by the time he finished was so glad I called for his services.',
      name: 'Philani Makhubu',
    },
  ]

  return (
    <section id="reviews" className="bg-navy-mid py-24 md:py-32 pb-36 md:pb-44"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
    >
      <div className="max-w-[1180px] mx-auto px-8 pb-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-amber text-xs font-bold tracking-[0.2em] uppercase font-display">Reviews</span>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-4 tracking-tight">
            What customers say
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <span className="text-amber text-4xl font-display leading-none">"</span>
              <p className="text-white/80 text-[16px] leading-relaxed mt-2">{r.text}</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4 text-amber" />
                  ))}
                </div>
              </div>
              <p className="text-white/50 text-sm mt-2">{r.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/mkYvGzh1CvN7gmcd8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-semibold text-sm transition-colors"
          >
            See all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7m10 0v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── FAQ ──────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: 'Do you come to my home or office, or do I need to bring my car to you?',
      a: 'Zamar is fully mobile. We come directly to wherever your vehicle is: your home, your office, a parking lot, or the roadside. You never need to tow or drop off your car.',
    },
    {
      q: 'How quickly can you get to me in Pretoria North?',
      a: 'Same-day availability for Pretoria North and surrounding suburbs. Response times depend on current bookings, but the goal is always to reach you as fast as possible. WhatsApp for the quickest response.',
    },
    {
      q: 'What areas in Pretoria do you cover?',
      a: 'Pretoria North, Wonderboom, Annlin, Rosslyn, Akasia, Karenpark, Doornpoort, Sinoville, Montana, Amandasig, Theresa Park, Orchards, and all surrounding areas.',
    },
    {
      q: 'Can you fit a car alarm or tracking device at my house?',
      a: 'Yes. Zamar specialises in on-site vehicle security fitment: car alarm systems, GPS tracking devices, immobilisers, and anti-theft upgrades, all installed at your home or wherever your vehicle is.',
    },
  ]

  return (
    <section id="faq" className="bg-cream py-24 md:py-32 -mt-10">
      <div className="max-w-[720px] mx-auto px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-amber text-xs font-bold tracking-[0.2em] uppercase font-display">FAQ</span>
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl lg:text-5xl mt-4 tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={staggerItem}
      className="border border-ink/10 rounded-lg overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left min-h-[56px]"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-ink text-[16px] pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-amber shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-ink/60 text-[16px] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── CONTACT CTA ──────────────────────────────────────── */
function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-navy py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <span className="text-amber text-xs font-bold tracking-[0.2em] uppercase font-display">Get Help Now</span>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-4 tracking-tight">
              Stranded? Need security fitted?
            </h2>
            <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-[480px]">
              One tap. That's all it takes. Tell Zamar where you are and
              what's wrong. No forms, no waiting, no towing.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-amber hover:bg-amber-dark text-navy font-bold text-base px-7 py-4 rounded transition-colors duration-200 min-h-[48px]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us Now
              </a>
              <a
                href="tel:0609620600"
                className="inline-flex items-center gap-2.5 border-2 border-white/25 hover:border-white/50 text-white font-semibold text-base px-7 py-4 rounded transition-colors duration-200 min-h-[48px]"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-[480px] mx-auto lg:ml-auto">
              <h3 className="font-display font-semibold text-white text-lg mb-2">Not urgent?</h3>
              <p className="text-white/50 text-sm mb-6">Tell us where you are and what's wrong. We'll come back to you with a quote.</p>

              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-amber font-display font-semibold text-lg">Message received</p>
                  <p className="text-white/60 text-sm mt-2">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-amber transition-colors"
                  />
                  <input
                    type="text"
                    name="area"
                    placeholder="Your area (e.g. Wonderboom)"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-amber transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-amber transition-colors"
                  />
                  <textarea
                    name="issue"
                    placeholder="What's wrong with your vehicle?"
                    rows="3"
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-amber transition-colors resize-none"
                  />
                  {/* Placeholder for Formspree / Brevo / Mailchimp integration */}
                  <button
                    type="submit"
                    className="w-full bg-amber hover:bg-amber-dark text-navy font-bold text-sm px-6 py-3.5 rounded transition-colors duration-200 min-h-[48px]"
                  >
                    Send Message
                  </button>
                  <p className="text-white/30 text-xs text-center">Your information stays private. No spam.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ───────────────────────────────────────────── */
function Footer() {
  return (
    <>
      <footer className="bg-[#0a0f1a] py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-[360px]">
              <img
                src={img('/images/logo-v2.webp')}
                alt="Zamar Auto Electrical Mobile"
                className="h-[60px] w-auto mb-6"
              />
              <p className="text-white/50 text-sm leading-relaxed">
                Mobile auto electrician in Pretoria North. Diagnostics,
                fault-finding, repairs, and vehicle security fitment at
                your location. We come to you.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-amber transition-colors text-sm"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-display font-semibold text-white text-sm mb-4">Services</h4>
                <ul className="space-y-2.5 text-white/50 text-sm">
                  <li><a href="#services" className="hover:text-amber transition-colors">Diagnostics</a></li>
                  <li><a href="#services" className="hover:text-amber transition-colors">Battery & Alternator</a></li>
                  <li><a href="#services" className="hover:text-amber transition-colors">Security & Tracking</a></li>
                  <li><a href="#services" className="hover:text-amber transition-colors">Wiring Repairs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-sm mb-4">Quick Links</h4>
                <ul className="space-y-2.5 text-white/50 text-sm">
                  <li><a href="#services" className="hover:text-amber transition-colors">Services</a></li>
                  <li><a href="#reviews" className="hover:text-amber transition-colors">Reviews</a></li>
                  <li><a href="#areas" className="hover:text-amber transition-colors">Coverage Areas</a></li>
                  <li><a href="#faq" className="hover:text-amber transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="hover:text-amber transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              Zamar Auto Electrical Mobile. Pretoria North, Gauteng.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-amber text-xs transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-white/20">|</span>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-amber text-xs transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#060a12] py-3 text-center">
        <p className="text-white/25 text-xs">
          Website design by{' '}
          <a
            href="https://flintandfuel.co.za"
            target="_blank"
            rel="noopener"
            className="underline hover:opacity-70"
          >
            Flint and Fuel Creative
          </a>
        </p>
      </div>
    </>
  )
}

/* ─── ICONS ────────────────────────────────────────────── */
function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
      <line x1="23" y1="13" x2="23" y2="11"/>
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

/* ─── APP ──────────────────────────────────────────────── */
function App() {
  return (
    <div className="font-body pb-24 bg-cream">
      <Nav />
      <Hero />
      <ProblemStrip />
      <Services />
      <CoverageArea />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
      <SalesBar />
    </div>
  )
}

export default App
