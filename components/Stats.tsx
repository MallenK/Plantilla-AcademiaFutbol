import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '../constants';

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16); 
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 border-y border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center group">
              <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-brand-muted uppercase tracking-widest text-xs font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;