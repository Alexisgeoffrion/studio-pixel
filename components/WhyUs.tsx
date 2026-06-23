'use client';
import { useInView } from '@/hooks/useInView';

const stats = [
  { value: '50+', label: 'Sites livrés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '1', label: 'Semaine de livraison' },
  { value: '5★', label: 'Évaluation moyenne' },
];

const arguments_ = [
  {
    number: '01',
    title: 'Livraison en 1 semaine',
    description:
      'Pas besoin d\'attendre des mois. Notre processus de création ultra-efficace vous garantit un site en ligne en une semaine, sans sacrifier la qualité ou le détail.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Axés sur vos résultats',
    description:
      'Chaque décision de design et de développement est guidée par un seul objectif : vous amener plus de clients et augmenter votre chiffre d\'affaires.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-4 4 2 4-6 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Expertise du marché local',
    description:
      'Nous comprenons le marché québécois, le référencement local et les attentes de votre clientèle. Nos solutions sont adaptées à votre réalité.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Support humain et réactif',
    description:
      'Une question ? Un changement ? Notre équipe vous répond rapidement. Pas de ticket perdu dans un système automatisé — une vraie relation de partenariat.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ArgCard({ arg, index }: { arg: (typeof arguments_)[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'in-view' : ''} group relative p-8 rounded-2xl border border-white/5 bg-[#111111] hover:border-[#00e5a0]/20 transition-all duration-500`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(0,229,160,0.04) 0%, transparent 60%)' }} />

      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e5a0]/10 to-[#00c4e8]/5 text-[#00e5a0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {arg.icon}
        </div>
        <div>
          <span className="text-xs font-mono text-[#00e5a0]/40 mb-2 block">{arg.number}</span>
          <h3
            className="text-lg font-bold text-white mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {arg.title}
          </h3>
          <p className="text-[#888] text-sm leading-relaxed">{arg.description}</p>
        </div>
      </div>
    </div>
  );
}

export function WhyUs() {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 translate-x-1/4 translate-y-1/4"
          style={{ background: 'radial-gradient(circle, #00c4e8 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className={`max-w-2xl mb-16 fade-in-up ${titleInView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs font-medium text-[#00e5a0] tracking-widest uppercase mb-4">
            Pourquoi nous
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pourquoi choisir{' '}
            <span className="gradient-text">Studio Pixel</span>
          </h2>
          <p className="text-[#888] text-lg leading-relaxed">
            Nous ne sommes pas une usine à sites web. Chaque projet reçoit notre attention complète, de la stratégie à la mise en ligne.
          </p>
        </div>

        {/* Arguments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {arguments_.map((arg, i) => (
            <ArgCard key={arg.number} arg={arg} index={i} />
          ))}
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className={`fade-in-up ${statsInView ? 'in-view' : ''} grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/5`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-[#111111] px-8 py-8 text-center hover:bg-[#141414] transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="text-4xl font-extrabold gradient-text mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </div>
              <div className="text-[#888] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
