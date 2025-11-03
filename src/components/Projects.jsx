import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Holographic Dashboard',
    description:
      'A concept dashboard exploring glassmorphism, depth, and motion. Built with accessibility and responsiveness in mind.',
    tags: ['React', 'Framer Motion', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1718154621829-881f65a74a8c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb2xvZ3JhcGhpYyUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYyMTgzMjc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Minimal Ecommerce',
    description:
      'Elegant storefront concept with clean product cards, micro-interactions, and delightful empty states.',
    tags: ['Tailwind', 'Animations', 'Concept'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Layouts',
    description:
      'A set of layout explorations focusing on hierarchy, rhythm, and expressive typography.',
    tags: ['Typography', 'Layout', 'Design'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(closest-side,rgba(99,102,241,0.2),transparent)]" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(closest-side,rgba(236,72,153,0.2),transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            <span className="bg-gradient-to-r from-fuchsia-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
              Selected Work
            </span>
          </motion.h2>
          <p className="mt-2 text-slate-300/80 max-w-2xl">
            Minimal interfaces with subtle motion, built for clarity and speed.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl p-[1px] bg-gradient-to-br from-fuchsia-500/20 via-sky-400/20 to-violet-500/20"
            >
              <div className="rounded-[11px] h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Interactive overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white/95 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    className="rounded-md bg-white/10 hover:bg-white/15 text-slate-100 text-sm px-3 py-1.5 border border-white/10 transition-colors"
                    onClick={() => alert('This is a sample project preview.')}
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gradient-to-r from-fuchsia-500 to-sky-400 text-slate-950 text-sm px-3 py-1.5 font-medium hover:from-fuchsia-400 hover:to-sky-300 transition-colors"
                    onClick={() => alert('Links are placeholders for now.')}
                  >
                    Visit
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
