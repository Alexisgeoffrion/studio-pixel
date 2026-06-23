'use client';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

const categories = ['Tous', 'Restaurant', 'Services', 'Commerce local'];

const projects = [
  {
    id: 1,
    title: 'Brasserie Le Faubourg',
    category: 'Restaurant',
    description: 'Menu en ligne + réservations de table',
    image: '/exemple/brasserie.png',
    accent: '#ef4444',
    tags: ['Menu', 'Réservation', 'SEO Local'],
  },
  {
    id: 2,
    title: 'Garage Mécanique Beaulieu',
    category: 'Services',
    description: 'Prise de rendez-vous + vitrine de services',
    image: '/exemple/voiture.png',
    accent: '#f97316',
    tags: ['Rendez-vous', 'SEO Local', 'Vitrine'],
  },
  {
    id: 3,
    title: 'Salon Châtelaine Coiffure',
    category: 'Services',
    description: 'Réservation en ligne + galerie avant/après',
    image: '/exemple/cheveux.png',
    accent: '#ec4899',
    tags: ['Réservation', 'Galerie', 'SEO Local'],
  },
  {
    id: 4,
    title: 'Construction Gervais & Fils',
    category: 'Services',
    description: 'Vitrine professionnelle + génération de leads',
    image: '/exemple/construction.png',
    accent: '#f59e0b',
    tags: ['Vitrine', 'Leads', 'SEO'],
  },
  {
    id: 5,
    title: 'Clinique Dentaire Boivin',
    category: 'Services',
    description: 'Prise de rendez-vous + info patients',
    image: '/exemple/dentiste.jpeg',
    accent: '#06b6d4',
    tags: ['Rendez-vous', 'Vitrine', 'SEO Local'],
  },
  {
    id: 6,
    title: 'Les Jardins de Sophie',
    category: 'Commerce local',
    description: 'Boutique en ligne + commandes fleurs',
    image: '/exemple/plante.png',
    accent: '#10b981',
    tags: ['Boutique', 'Commande', 'SEO'],
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'in-view' : ''} group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 cursor-pointer aspect-[4/3]`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Mockup image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Content overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full border"
              style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          className="text-white font-bold text-lg mb-1 group-hover:text-[#00e5a0] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.title}
        </h3>
        <p className="text-white/50 text-sm">{project.description}</p>

        {/* CTA */}
        <div className="mt-4 flex items-center gap-2 text-[#00e5a0] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Voir le projet
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const { ref: titleRef, inView: titleInView } = useInView();

  const filtered =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-12 fade-in-up ${titleInView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs font-medium text-[#00e5a0] tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nos{' '}
            <span className="gradient-text">réalisations</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-lg">
            Des projets concrets qui ont aidé de vraies entreprises à croître en ligne.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#00e5a0] text-[#0a0a0a]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#00e5a0] border border-[#00e5a0]/30 px-6 py-3 rounded-full hover:bg-[#00e5a0]/10 transition-all duration-300 text-sm font-medium"
          >
            Votre projet pourrait être le prochain
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
