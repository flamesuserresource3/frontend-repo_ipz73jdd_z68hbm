import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-gray-900">My Portfolio</a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

        
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
