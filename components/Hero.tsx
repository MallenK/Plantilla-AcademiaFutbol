import React from 'react';
import { ChevronDown, ArrowRight, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2830&auto=format&fit=crop" 
          alt="Stadium Field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/30"></div>
      </div>

      {/* Big Watermark Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] lg:translate-x-0 opacity-5 pointer-events-none select-none z-0">
        <span className="font-display font-black text-[25vw] uppercase text-white leading-none tracking-tighter">
          Apex
        </span>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center z-10">
        <div className="max-w-4xl opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          
          {/* Logo Element */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-accent flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
               <Shield className="text-brand-dark" size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col">
               <span className="text-white font-display font-bold uppercase leading-none tracking-widest text-lg">Apex Academy</span>
               <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Est. 2014</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tight mb-8 uppercase">
            Forjando <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Leyendas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed border-l-4 border-brand-accent pl-6 py-2">
            La academia de alto rendimiento donde la excelencia técnica se encuentra con la disciplina táctica. Tu camino al profesionalismo comienza aquí.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-accent text-brand-dark font-bold py-4 px-8 uppercase tracking-wider hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group">
              Únete Ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 text-white font-bold py-4 px-8 uppercase tracking-wider hover:bg-white/10 hover:border-white transition-colors duration-300 backdrop-blur-sm">
              Nuestros Programas
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;