'use client';
import { useInView } from '@/hooks/useInView';

const testimonials = [
  {
    quote:
      'Studio Pixel a complètement transformé notre présence en ligne. Nos réservations ont augmenté de 40% dans les deux mois suivant le lancement. Un investissement qui s\'est remboursé très rapidement.',
    name: 'Marie Tremblay',
    role: 'Propriétaire',
    company: 'La Belle Assiette',
    category: 'Restaurant',
    initials: 'MT',
    color: '#f59e0b',
    stars: 5,
  },
  {
    quote:
      'Professionnels, rapides et vraiment à l\'écoute de nos besoins. Ils ont compris notre clientèle et créé un site qui nous ressemble vraiment. Je recommande Studio Pixel à tous les entrepreneurs du Québec.',
    name: 'Jean-François Gagnon',
    role: 'Fondateur',
    company: 'Plomberie Expert Plus',
    category: 'Services',
    initials: 'JG',
    color: '#3b82f6',
    stars: 5,
  },
  {
    quote:
      'Notre nouveau site est magnifique et nos clients adorent le commander en ligne. L\'équipe Studio Pixel a su capturer l\'essence de notre boutique dans le design. Le ROI a été immédiat, dès la première semaine.',
    name: 'Sophie Lapointe',
    role: 'Directrice',
    company: 'Boutique Fleurs d\'Été',
    category: 'E-commerce',
    initials: 'SL',
    color: '#a855f7',
    stars: 5,
  },
  {
    quote:
      'On avait peur que ça soit trop compliqué, mais Studio Pixel a rendu tout ça très simple. Ils ont géré chaque détail. Maintenant, notre site génère des demandes de soumission chaque semaine.',
    name: 'Patrick Bergeron',
    role: 'Gérant',
    company: 'Toiture Pro Montréal',
    category: 'Construction',
    initials: 'PB',
    color: '#22c55e',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
          <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10l-3.6 2 .7-4L1.2 5.2l4-.6L7 1z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'in-view' : ''} group relative p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Quote mark */}
      <div
        className="absolute top-6 right-6 text-6xl leading-none font-serif opacity-10 select-none"
        style={{ color: t.color }}
      >
        "
      </div>

      <Stars count={t.stars} />

      <blockquote className="text-white/70 text-sm leading-relaxed mt-4 flex-1 italic">
        "{t.quote}"
      </blockquote>

      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            {t.name}
          </div>
          <div className="text-[#888] text-xs">
            {t.role} · {t.company}
          </div>
        </div>
        <span
          className="ml-auto text-xs px-2 py-0.5 rounded-full"
          style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}25` }}
        >
          {t.category}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { ref: titleRef, inView: titleInView } = useInView();

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-8 -translate-x-1/4 translate-y-1/4"
          style={{ background: 'radial-gradient(circle, #00e5a0 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-16 fade-in-up ${titleInView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs font-medium text-[#00e5a0] tracking-widest uppercase mb-4">
            Témoignages
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ce que disent{' '}
            <span className="gradient-text">nos clients</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-lg">
            Des entrepreneurs qui ont fait confiance à Studio Pixel et qui ont vu leur business croître.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-50">
          {['Google ★ 5/5', 'Facebook ★ 5/5', '50+ clients', 'Québec 🍁'].map((badge) => (
            <span key={badge} className="text-white/50 text-sm">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
