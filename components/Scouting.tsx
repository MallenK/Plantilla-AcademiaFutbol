import React from 'react';
import { Target, Eye, TrendingUp } from 'lucide-react';

const Scouting: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-border/10 -skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2929&auto=format&fit=crop" 
                  alt="Scouting Analysis" 
                  className="w-full h-auto grayscale contrast-125"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-accent"></div>
             </div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12">
            <h2 className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2">Talent ID</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">El Futuro <br/> Te Está Buscando</h3>
            <p className="text-gray-300 text-lg mb-8">
              Nuestro departamento de scouting utiliza tecnología de análisis de datos y una red de ojeadores conectados con los principales clubes profesionales.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-brand-dark p-6 border border-brand-border">
                <Target className="text-brand-accent mb-4" size={32} />
                <h4 className="text-white font-bold uppercase mb-2">Detección</h4>
                <p className="text-brand-muted text-sm">Pruebas de acceso mensuales.</p>
              </div>
              <div className="bg-brand-dark p-6 border border-brand-border">
                <TrendingUp className="text-brand-accent mb-4" size={32} />
                <h4 className="text-white font-bold uppercase mb-2">Proyección</h4>
                <p className="text-brand-muted text-sm">Plan de carrera individualizado.</p>
              </div>
              <div className="bg-brand-dark p-6 border border-brand-border">
                <Eye className="text-brand-accent mb-4" size={32} />
                <h4 className="text-white font-bold uppercase mb-2">Visibilidad</h4>
                <p className="text-brand-muted text-sm">Showcase ante clubes pro.</p>
              </div>
            </div>

            <button className="bg-white text-brand-dark font-bold py-4 px-8 uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-colors duration-300">
              Solicitar Prueba
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scouting;