const footerLinks = {
  Services: [
    { label: 'Création de sites web', href: '#services' },
    { label: 'Design UX/UI', href: '#services' },
    { label: 'SEO Local', href: '#services' },
    { label: 'Maintenance mensuelle', href: '#services' },
  ],
  Entreprise: [
    { label: 'Nos réalisations', href: '#portfolio' },
    { label: 'Nos forfaits', href: '#tarifs' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5a0]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-5 group w-fit">
              <img
                src="/logo.avif"
                alt="Studio Pixel"
                className="h-9 w-auto transition-opacity duration-200 group-hover:opacity-80"
              />
            </a>

            <p className="text-[#888] text-sm leading-relaxed max-w-xs mb-6">
              Agence web spécialisée dans la création de sites web premium pour les entreprises locales du Québec.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:contact@studiopixel.org"
                className="flex items-center gap-2 text-[#888] hover:text-[#00e5a0] transition-colors text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 5l6 3.5L13 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                contact@studiopixel.org
              </a>
              <a
                href="tel:+15149100255"
                className="flex items-center gap-2 text-[#888] hover:text-[#00e5a0] transition-colors text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 3a1 1 0 011-1h1l1 2.5L4.5 5.5a6.5 6.5 0 003 3L8.5 7.5 11 8.5v1a1 1 0 01-1 1C4 10.5 2 8.5 2.5 3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                514-910-0255
              </a>
              <div className="flex items-center gap-2 text-[#888] text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5C5.07 1.5 3.5 3.07 3.5 5c0 2.63 3.5 7.5 3.5 7.5s3.5-4.87 3.5-7.5c0-1.93-1.57-3.5-3.5-3.5z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Montréal, Québec
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-white font-semibold text-sm mb-5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#888] hover:text-[#00e5a0] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888] text-xs">
            © {currentYear} Studio Pixel. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-[#888] hover:text-white text-xs transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-[#888] hover:text-white text-xs transition-colors">
              Conditions d'utilisation
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              {
                label: 'Facebook',
                path: 'M16 8C16 3.58 12.42 0 8 0S0 3.58 0 8c0 3.99 2.92 7.3 6.75 7.9v-5.59H4.72V8h2.03V6.24c0-2 1.19-3.1 3.01-3.1.87 0 1.78.16 1.78.16v1.96h-1c-.99 0-1.29.61-1.29 1.24V8h2.2l-.35 2.31H9.25V15.9C13.08 15.3 16 12 16 8z',
              },
              {
                label: 'Instagram',
                path: 'M8 0C5.83 0 5.56.01 4.7.05 3.85.09 3.27.22 2.76.42a3.9 3.9 0 00-1.41.92A3.9 3.9 0 00.42 2.76C.22 3.27.09 3.85.05 4.7.01 5.56 0 5.83 0 8s.01 2.44.05 3.3c.04.85.17 1.43.37 1.94.2.53.47.97.92 1.41.44.45.88.72 1.41.92.51.2 1.09.33 1.94.37C5.56 15.99 5.83 16 8 16s2.44-.01 3.3-.05c.85-.04 1.43-.17 1.94-.37.53-.2.97-.47 1.41-.92.45-.44.72-.88.92-1.41.2-.51.33-1.09.37-1.94C15.99 10.44 16 10.17 16 8s-.01-2.44-.05-3.3c-.04-.85-.17-1.43-.37-1.94a3.9 3.9 0 00-.92-1.41A3.9 3.9 0 0013.24.42C12.73.22 12.15.09 11.3.05 10.44.01 10.17 0 8 0zm0 1.44c2.14 0 2.39.01 3.23.05.78.04 1.2.16 1.48.27.37.14.64.32.92.6.28.28.46.55.6.92.11.28.23.7.27 1.48.04.84.05 1.09.05 3.23s-.01 2.39-.05 3.23c-.04.78-.16 1.2-.27 1.48a2.47 2.47 0 01-.6.92 2.47 2.47 0 01-.92.6c-.28.11-.7.23-1.48.27-.84.04-1.09.05-3.23.05s-2.39-.01-3.23-.05c-.78-.04-1.2-.16-1.48-.27a2.47 2.47 0 01-.92-.6 2.47 2.47 0 01-.6-.92c-.11-.28-.23-.7-.27-1.48C1.45 10.39 1.44 10.14 1.44 8s.01-2.39.05-3.23c.04-.78.16-1.2.27-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.23 1.48-.27C5.61 1.45 5.86 1.44 8 1.44zM8 3.89a4.11 4.11 0 100 8.22 4.11 4.11 0 000-8.22zM8 10.67a2.67 2.67 0 110-5.34 2.67 2.67 0 010 5.34zm5.23-6.94a.96.96 0 11-1.92 0 .96.96 0 011.92 0z',
              },
              {
                label: 'LinkedIn',
                path: 'M13.63 0H2.37A2.37 2.37 0 000 2.37v11.26A2.37 2.37 0 002.37 16h11.26A2.37 2.37 0 0016 13.63V2.37A2.37 2.37 0 0013.63 0zM4.8 13.4H2.4V6.16H4.8V13.4zM3.6 5.11a1.39 1.39 0 110-2.78 1.39 1.39 0 010 2.78zM13.6 13.4h-2.39V9.82c0-.9-.02-2.05-1.25-2.05-1.25 0-1.44.98-1.44 1.98v3.65H6.13V6.16h2.3v1.06h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.87 1.6 2.87 3.68v3.73z',
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center hover:border-[#00e5a0]/30 hover:bg-[#00e5a0]/5 transition-all duration-300 group"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" className="text-[#888] group-hover:text-[#00e5a0] transition-colors fill-current">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
