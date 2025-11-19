import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-black text-white uppercase mb-6 tracking-tighter">Apex Academy</h2>
            <p className="text-brand-muted max-w-md mb-8">
              Formando la próxima generación de atletas de élite. Compromiso, disciplina y pasión por el fútbol.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-brand-border text-white hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-brand-border text-white hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-brand-border text-white hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Academia</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Instalaciones</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Metodología</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Staff Técnico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs">© 2024 Apex Football Academy. Todos los derechos reservados.</p>
          <p className="text-brand-muted text-xs">Designed for Performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;