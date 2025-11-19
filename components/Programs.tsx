import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROGRAMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROGRAMS.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-brand-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2">Entrenamiento</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase">Nuestros Programas</h3>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={prevSlide} className="p-4 border border-brand-border text-white hover:bg-brand-accent hover:border-brand-accent hover:text-brand-dark transition-all duration-300">
              <ArrowLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-4 border border-brand-border text-white hover:bg-brand-accent hover:border-brand-accent hover:text-brand-dark transition-all duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[400px] w-full">
            <div 
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {PROGRAMS.map((program) => (
                <div key={program.id} className="w-full flex-shrink-0 px-2 h-full">
                  <div className="grid md:grid-cols-2 h-full bg-brand-dark border border-brand-border group">
                    <div className="relative overflow-hidden h-64 md:h-auto">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute top-4 left-4 bg-brand-accent text-brand-dark font-bold px-3 py-1 text-xs uppercase">
                        {program.ageRange}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h4 className="text-2xl font-bold text-white mb-4 font-display uppercase">{program.title}</h4>
                      <p className="text-brand-muted mb-6">{program.description}</p>
                      <ul className="space-y-2 mb-8">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <Check size={14} className="text-brand-accent" /> {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="text-white text-sm font-bold uppercase tracking-wider hover:text-brand-accent transition-colors flex items-center gap-2 self-start">
                        Ver Detalles <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        
        {/* Dots indicator for mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {PROGRAMS.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${currentIndex === idx ? 'bg-brand-accent' : 'bg-brand-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;