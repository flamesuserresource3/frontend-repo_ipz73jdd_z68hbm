import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Dr. Portal',
    description:
      'Next.js + Firebase + Gemini AI for clinic operations. Clean dashboards, appointment flows, and AI-assisted suggestions (final decisions remain with doctors).',
    tags: ['Next.js', 'Firebase', 'Gemini AI'],
  },
  {
    title: 'Chessque',
    description:
      'A focused Flutter chess clock built with BLoC. Crisp haptics, no distractions, just great time control. Live on the Play Store.',
    tags: ['Flutter', 'BLoC', 'Android'],
  },
  {
    title: 'DermaDoc',
    description:
      'Flutter app with a deep-learning model for early skin condition signals. Built for SIH; reached the semi-finals.',
    tags: ['Flutter', 'Deep Learning', 'Healthcare'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
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
              className="group relative rounded-xl p-[1px] bg-gradient-to-br from-fuchsia-500/20 via-sky-400/20 to-violet-500/20"
            >
              <div className="rounded-[11px] h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                <h3 className="text-lg font-medium text-white/95 group-hover:text-white transition-colors">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
