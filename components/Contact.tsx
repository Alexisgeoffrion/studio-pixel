'use client';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Courriel',
    value: 'contact@studiopixel.org',
    href: 'mailto:contact@studiopixel.org',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.5 4.5a1.5 1.5 0 011.5-1.5h1.5l1.5 4-1.5 1.5a10 10 0 004.5 4.5L12.5 11.5l4 1.5v1.5a1.5 1.5 0 01-1.5 1.5C7.5 16 4 12.5 4 7A1.5 1.5 0 015 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Téléphone',
    value: '514-910-0255',
    href: 'tel:+15149100255',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Heures d\'ouverture',
    value: 'Lun–Ven, 9h–17h',
    href: null,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 3.94 5 11 5 11s5-7.06 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Localisation',
    value: 'Montréal, Québec',
    href: null,
  },
];

export function Contact() {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: formRef, inView: formInView } = useInView();

  const [formData, setFormData] = useState({
    nom: '',
    courriel: '',
    telephone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] opacity-8"
          style={{ background: 'radial-gradient(circle, #00e5a0 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-16 fade-in-up ${titleInView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs font-medium text-[#00e5a0] tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Parlons de{' '}
            <span className="gradient-text">votre projet</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-lg">
            Soumission gratuite et sans engagement. Réponse sous 24h ouvrables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <div ref={formRef} className={`lg:col-span-2 fade-in-up ${formInView ? 'in-view' : ''}`}>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              On vous répond rapidement
            </h3>
            <p className="text-[#888] mb-10 leading-relaxed">
              Dites-nous ce que vous cherchez et nous vous préparerons une soumission détaillée et personnalisée, gratuitement.
            </p>

            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00e5a0]/10 text-[#00e5a0] flex items-center justify-center mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wide mb-0.5">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-[#00e5a0] transition-colors font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-[#888] text-sm mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-xs text-white/50 hover:text-[#00e5a0] hover:border-[#00e5a0]/30 hover:bg-[#00e5a0]/5 transition-all duration-300"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`lg:col-span-3 fade-in-up ${formInView ? 'in-view' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="rounded-2xl bg-[#111111] border border-white/5 p-8">
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00e5a0]/15 text-[#00e5a0] flex items-center justify-center mx-auto mb-5">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M8 16l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Message envoyé !
                  </h3>
                  <p className="text-[#888]">Nous vous répondrons dans les 24 heures ouvrables.</p>
                  <button
                    className="mt-6 text-[#00e5a0] text-sm hover:underline"
                    onClick={() => setStatus('idle')}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[#888] mb-2" htmlFor="nom">
                        Prénom et nom *
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Jean Tremblay"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:border-[#00e5a0]/50 focus:bg-[#00e5a0]/3 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#888] mb-2" htmlFor="courriel">
                        Courriel *
                      </label>
                      <input
                        id="courriel"
                        name="courriel"
                        type="email"
                        required
                        value={formData.courriel}
                        onChange={handleChange}
                        placeholder="jean@entreprise.ca"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:border-[#00e5a0]/50 focus:bg-[#00e5a0]/3 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#888] mb-2" htmlFor="telephone">
                      Téléphone (optionnel)
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="(514) 910-0255"
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:border-[#00e5a0]/50 focus:bg-[#00e5a0]/3 transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#888] mb-2" htmlFor="message">
                      Parlez-nous de votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre entreprise, ce que vous cherchez, votre budget approximatif..."
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:border-[#00e5a0]/50 focus:bg-[#00e5a0]/3 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-gradient-to-r from-[#00e5a0] to-[#00c4e8] text-[#0a0a0a] font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" strokeDasharray="30" strokeDashoffset="10" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande gratuite
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#888] text-center">
                    Aucun engagement. Nous ne partageons jamais vos informations.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
