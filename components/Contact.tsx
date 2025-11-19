import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', category: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name) newErrors.name = 'Requerido';
    if (!formState.email.includes('@')) newErrors.email = 'Email inválido';
    if (!formState.category) newErrors.category = 'Selecciona una categoría';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
      setFormState({ name: '', email: '', category: '', message: '' });
    }
  };

  return (
    <section className="py-24 bg-brand-surface" id="contacto">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2">Contacto</h2>
            <h3 className="text-4xl font-display font-bold text-white uppercase mb-6">Empieza tu carrera</h3>
            <p className="text-gray-300 mb-8">
              ¿Listo para dar el siguiente paso? Completa el formulario para programar una visita a las instalaciones o solicitar información sobre inscripciones.
            </p>
            
            <div className="space-y-6 text-sm text-brand-muted uppercase tracking-widest">
              <div className="border-l-2 border-brand-accent pl-4">
                <p className="text-white font-bold">Ubicación</p>
                <p>Av. del Deporte 100, Ciudad Deportiva</p>
              </div>
              <div className="border-l-2 border-brand-border pl-4">
                <p className="text-white font-bold">Email</p>
                <p>admissions@apexacademy.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className={`w-full bg-brand-dark border ${errors.name ? 'border-red-500' : 'border-brand-border'} text-white p-4 focus:border-brand-accent focus:outline-none transition-colors`}
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className={`w-full bg-brand-dark border ${errors.email ? 'border-red-500' : 'border-brand-border'} text-white p-4 focus:border-brand-accent focus:outline-none transition-colors`}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">Categoría de Interés</label>
              <select 
                value={formState.category}
                onChange={e => setFormState({...formState, category: e.target.value})}
                className={`w-full bg-brand-dark border ${errors.category ? 'border-red-500' : 'border-brand-border'} text-white p-4 focus:border-brand-accent focus:outline-none transition-colors appearance-none`}
              >
                <option value="">Seleccionar...</option>
                <option value="base">Fútbol Base (6-10 años)</option>
                <option value="pro">Tecnificación Pro (11-15 años)</option>
                <option value="elite">Elite Performance (16+ años)</option>
              </select>
              {errors.category && <span className="text-red-500 text-xs mt-1">{errors.category}</span>}
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">Mensaje (Opcional)</label>
              <textarea 
                rows={4}
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                className="w-full bg-brand-dark border border-brand-border text-white p-4 focus:border-brand-accent focus:outline-none transition-colors"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-accent text-brand-dark font-bold py-4 uppercase tracking-wider hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2">
              Enviar Solicitud <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;