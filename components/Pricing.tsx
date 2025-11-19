import React from 'react';
import { Check, Star } from 'lucide-react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-4">Planes de Formación</h2>
          <p className="text-brand-muted">Inversión en tu futuro deportivo. Selecciona el nivel de intensidad que se adapta a tus objetivos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative flex flex-col p-8 border ${tier.highlighted ? 'border-brand-accent bg-brand-surface' : 'border-brand-border bg-brand-dark'} transition-transform duration-300 hover:-translate-y-2`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 uppercase flex items-center gap-1">
                  <Star size={12} fill="black" /> Más Popular
                </div>
              )}
              
              <h3 className="text-white font-display font-bold text-2xl uppercase mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className={`text-4xl font-bold ${tier.highlighted ? 'text-brand-accent' : 'text-white'}`}>{tier.price}</span>
                <span className="text-brand-muted ml-2">{tier.period}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 font-bold uppercase tracking-wider transition-colors duration-300
                  ${tier.highlighted 
                    ? 'bg-brand-accent text-brand-dark hover:bg-white' 
                    : 'bg-transparent border border-brand-border text-white hover:border-white'
                  }
                `}
              >
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;