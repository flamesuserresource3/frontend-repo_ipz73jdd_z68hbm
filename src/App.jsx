import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      {/* Soft radial background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.25),transparent)]" />
        <div className="absolute top-40 right-0 h-[40rem] w-[40rem] rounded-full blur-3xl bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
