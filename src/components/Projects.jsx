import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Dr. Portal',
    description:
      'An application built with Next.js, Firebase, and Gemini enabling clinics and hospitals to manage patients, appointments, and staff with ease. Admins get control and performance tracking, while AI suggests doctor insights based on patient symptoms (final decisions remain with doctors).',
    tags: ['Next.js', 'Firebase', 'Gemini AI'],
  },
  {
    title: 'Chessque',
    description:
      'A simple, reliable chess clock I built to do one thing perfectly — time your chess games without hiccups. Built with Flutter using BLoC for state management. Available on the Play Store.',
    tags: ['Flutter', 'BLoC', 'Android'],
  },
  {
    title: 'DermaDoc',
    description:
      'A Flutter app powered by an accurate deep learning model that detects potential skin conditions. Built by a team of four for SIH; we reached the semi-final round.',
    tags: ['Flutter', 'Deep Learning', 'Healthcare'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
          >
            Selected Projects
          </motion.h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Minimal, focused, and production-minded builds. Smooth animations, clean code.
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
              className="group rounded-xl border border-gray-200 bg-white/80 shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
