'use client';
import { useInView } from '@/hooks/useInView';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 24h10M14 21v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10h4M16 13.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Sites Web Sur Mesure',
    description:
      'Conception et développement de sites web modernes, ultra-rapides et optimisés pour la conversion. Chaque pixel est pensé pour transformer vos visiteurs en clients.',
    tag: 'Développement',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Design UX/UI',
    description:
      'Des interfaces élégantes, intuitives et mémorables qui reflètent votre identité de marque. Un design pensé pour l\'expérience utilisateur et la fidélisation.',
    tag: 'Design',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 17.5c1.5-2 5.5-2 5.5-2s4 0 5.5-2M14 4c0 0-5 3-5 10s5 10 5 10M14 4s5 3 5 10-5 10-5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 14h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Référencement Google',
    description:
      'SEO local et optimisation pour les moteurs de recherche. Soyez trouvé par vos clients à Montréal et partout au Québec. Positionnement sur la première page de Google.',
    tag: 'SEO Local',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 5 5.5.8-4 3.9.94 5.5L14 15.7l-4.94 2.5.94-5.5-4-3.9 5.5-.8L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 22h18M8 25h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Maintenance Mensuelle',
    description:
      'Mises à jour continues, sécurité renforcée et support technique prioritaire. Votre site reste performant et sécurisé. On s\'occupe de tout pour que vous puissiez vous concentrer sur votre business.',
    tag: 'Support',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'in-view' : ''} group relative rounded-2xl p-8 bg-[#111111] border border-white/5 hover:border-[#00e5a0]/20 transition-all duration-500 hover:bg-[#141414] cursor-default`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(0,229,160,0.04) 0%, transparent 70%)' }}
        />

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#00e5a0]/10 to-[#00c4e8]/5 text-[#00e5a0] mb-6 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Tag */}
        <span className="inline-block text-xs font-medium text-[#00e5a0]/70 bg-[#00e5a0]/8 border border-[#00e5a0]/15 rounded-full px-3 py-1 mb-4">
          {service.tag}
        </span>

        <h3
          className="text-xl font-bold text-white mb-3 group-hover:text-[#00e5a0] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {service.title}
        </h3>
        <p className="text-[#888] leading-relaxed text-sm">{service.description}</p>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-[#00e5a0]/0 group-hover:text-[#00e5a0]/80 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0 text-sm font-medium">
          En savoir plus
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { ref: titleRef, inView: titleInView } = useInView();

  return (
    <section id="services" className="relative py-28 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-16 fade-in-up ${titleInView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs font-medium text-[#00e5a0] tracking-widest uppercase mb-4">
            Nos services
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ce que nous créons{' '}
            <span className="gradient-text">pour vous</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-lg leading-relaxed">
            De la stratégie à la mise en ligne, nous accompagnons votre entreprise à chaque étape.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
