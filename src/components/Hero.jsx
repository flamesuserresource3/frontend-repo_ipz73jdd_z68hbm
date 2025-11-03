import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Readability overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-slate-300/80">Designer • Builder • Minimalist</p>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
            <span className="bg-gradient-to-br from-fuchsia-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
              Crafting minimal, expressive digital experiences
            </span>
          </h1>
          <p className="mt-6 text-slate-300/90 max-w-xl">
            I design and develop clean, purposeful interfaces with a touch of motion and an eye for detail.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 to-sky-400 px-6 py-2.5 text-slate-950 font-medium shadow-lg shadow-fuchsia-500/20 hover:from-fuchsia-400 hover:to-sky-300 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-2.5 text-white hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 sm:mt-24"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 text-slate-300/80">
            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-300 animate-pulse" />
            <span className="text-sm group-hover:text-white transition-colors">Scroll to projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
