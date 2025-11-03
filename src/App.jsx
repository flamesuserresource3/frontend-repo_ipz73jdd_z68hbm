import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth text-gray-900">
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
