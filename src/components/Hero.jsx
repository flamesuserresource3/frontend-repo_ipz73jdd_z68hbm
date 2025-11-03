import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for readability; does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Hi, I’m <span className="text-rose-600">Your Name</span>.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I build thoughtful digital experiences — from AI-powered platforms to
            delightful mobile apps. Here are a few projects I’m proud of.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-2.5 text-white shadow hover:bg-rose-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
