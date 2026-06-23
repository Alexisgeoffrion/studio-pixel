'use client';
import { useInView } from '@/hooks/useInView';

const plans = [
  {
    name: 'Essentiel',
    price: '750',
    monthly: '50',
    tagline: 'Idéal pour démarrer en ligne',
    popular: false,
    features: [
      { text: 'Site vitrine jusqu\'à 5 pages', included: true },
      { text: 'Design moderne responsive', included: true },
      { text: 'Formulaire de contact', included: true },
      { text: 'Hébergement inclus', included: true },
      { text: 'Maintenance incluse', included: true },
      { text: 'Support par courriel', included: true },
      { text: 'Référencement Google local (SEO)', included: false },
      { text: 'Google My Business', included: false },
    ],
    cta: 'Choisir Essentiel',
  },
  {
    name: 'Professionnel',
    price: '1 250',
    monthly: '100',
    tagline: 'Notre forfait le plus populaire',
    popular: true,
    features: [
      { text: 'Tout l\'Essentiel inclus', included: true },
      { text: 'Jusqu\'à 10 pages', included: true },
      { text: 'Référencement Google local (SEO)', included: true },
      { text: 'Google My Business', included: true },
      { text: 'Modifications illimitées', included: true },
      { text: 'Support prioritaire', included: true },
      { text: 'Fonctionnalités avancées', included: false },
      { text: 'Rapports mensuels de performance', included: false },
    ],
    cta: 'Choisir Professionnel',
  },
  {
    name: 'Premium',
    price: '2 000',
    monthly: '125',
    tagline: 'Pour dominer votre marché',
    popular: false,
    features: [
      { text: 'Tout le Professionnel inclus', included: true },
      { text: 'Site sur mesure', included: true },
      { text: 'Réservation ou boutique en ligne', included: true },
      { text: 'Animations premium', included: true },
      { text: 'Rapports mensuels de performance', included: true },
      { text: 'Support téléphonique dédié', included: true },
    ],
    cta: 'Choisir Premium',
  },
];

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[#00e5a0]">
        <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.15" />
        <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-white/20">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
      <path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function PlanCard({ plan, index }: { plan: (typeof plans)[0] & { monthly: string }; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'in-view' : ''} relative rounded-2xl flex flex-col transition-all duration-500 ${
        plan.popular
          ? 'bg-gradient-to-b from-[#00e5a0]/8 to-[#00c4e8]/3 border border-[#00e5a0]/30 shadow-2xl shadow-[#00e5a0]/5 scale-[1.02]'
          : 'bg-[#111111] border border-white/5 hover:border-white/10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-block bg-gradient-to-r from-[#00e5a0] to-[#00c4e8] text-[#0a0a0a] text-xs font-bold px-4 py-1.5 rounded-full">
            ✦ Le plus populaire
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Plan name */}
        <div className="mb-6">
          <h3
            className={`text-lg font-bold mb-1 ${plan.popular ? 'text-[#00e5a0]' : 'text-white'}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {plan.name}
          </h3>
          <p className="text-[#888] text-sm">{plan.tagline}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-end gap-1">
            <span className="text-sm text-[#888] mb-1">$</span>
            <span
              className="text-5xl font-extrabold text-white leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {plan.price}
            </span>
          </div>
          <span className="text-xs text-[#888] mt-1 block">à la création · paiement unique</span>
          <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
            <span className="text-xs text-[#888]">+</span>
            <span
              className={`text-xl font-bold ${plan.popular ? 'text-[#00e5a0]' : 'text-white/80'}`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {plan.monthly} $
            </span>
            <span className="text-xs text-[#888]">/mois</span>
            <span className="text-xs text-[#888] ml-auto">hébergement & maintenance</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Features */}
        <ul className="space-y-3 flex-1 mb-8">
          {plan.features.map((f) => (
            <li key={f.text} className="flex items-center gap-3">
              <CheckIcon included={f.included} />
              <span className={`text-sm ${f.included ? 'text-white/80' : 'text-white/30 line-through'}`}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            plan.popular
              ? 'bg-gradient-to-r from-[#00e5a0] to-[#00c4e8] text-[#0a0a0a] hover:opacity-90'
              : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}

export function Pricing() {
  const { ref: titleRef, inView: titleInView } = useInView();

  return (
    <section id="tarifs" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-5"
          style={{ background: 'radial-gradient(ellipse, #00e5a0 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-16 fade-in-up ${titleInView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs font-medium text-[#00e5a0] tracking-widest uppercase mb-4">
            Tarifs
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Des forfaits{' '}
            <span className="gradient-text">clairs et honnêtes</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-lg">
            Pas de frais cachés, pas de surprises. Votre investissement est connu d'avance.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#888] text-sm mt-12">
          Tous les forfaits incluent un domaine personnalisé (1 an) et une session de formation.{' '}
          <a href="#contact" className="text-[#00e5a0] hover:underline">
            Besoin d'un devis personnalisé ?
          </a>
        </p>
      </div>
    </section>
  );
}
