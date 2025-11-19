import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import Coaches from './components/Coaches';
import Calendar from './components/Calendar';
import Scouting from './components/Scouting';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-accent selection:text-black">
      <Header />
      <Hero />
      <Stats />
      <Programs />
      <Coaches />
      <Calendar />
      <Scouting />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;