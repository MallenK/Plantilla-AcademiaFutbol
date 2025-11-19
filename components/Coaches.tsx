import React from 'react';
import { COACHES } from '../constants';

const Coaches: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2">Staff Técnico</h2>
          <h3 className="text-4xl font-display font-bold text-white uppercase">Entrenadores Elite</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COACHES.map((coach) => (
            <div key={coach.id} className="group relative h-[500px] w-full perspective-1000">
              <div className="relative w-full h-full bg-brand-surface border border-brand-border transition-all duration-500 overflow-hidden">
                
                {/* Image Background */}
                <div className="absolute inset-0">
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10"></div>
                   <img src={coach.image} alt={coach.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>

                {/* Content Overlay - Default State */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 transition-transform duration-300 group-hover:-translate-y-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold border border-white/20 uppercase">{coach.role}</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white uppercase leading-none mb-1">{coach.name}</h4>
                  <p className="text-brand-accent font-medium text-sm">{coach.license}</p>
                </div>

                {/* Hidden Content - Reveal on Hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-brand-surface/95 backdrop-blur-md border-t border-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
                  <div className="mb-4">
                    <p className="text-brand-muted text-xs uppercase tracking-wider mb-1">Especialidad</p>
                    <p className="text-white font-bold">{coach.specialty}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {coach.stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-brand-muted text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className="text-brand-accent font-display font-bold text-xl">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;