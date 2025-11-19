import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { CalendarEvent, EventType } from '../types';
import { EVENTS } from '../constants';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay(); // 0 = Sunday
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear();
  };

  const getEventsForDay = (day: number) => {
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return EVENTS.filter(e => isSameDay(e.date, targetDate));
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate); // 0 (Sun) - 6 (Sat)
    // Adjust for Monday start: Mon=0, Sun=6
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    
    const days = [];
    // Empty slots for previous month
    for (let i = 0; i < startOffset; i++) {
      days.push(<div key={`empty-${i}`} className="h-14 md:h-24 bg-brand-surface/50 border border-brand-border/30"></div>);
    }

    // Days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayEvents = getEventsForDay(i);
      const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isSelected = selectedDate && isSameDay(dateObj, selectedDate);
      const isToday = isSameDay(dateObj, new Date());

      days.push(
        <div 
          key={i} 
          onClick={() => setSelectedDate(dateObj)}
          className={`h-14 md:h-24 border border-brand-border relative cursor-pointer transition-colors duration-200 p-2
            ${isSelected ? 'bg-brand-border/50' : 'bg-brand-surface hover:bg-brand-border/30'}
            ${isToday ? 'ring-1 ring-brand-accent inset-0' : ''}
          `}
        >
          <span className={`text-sm font-medium ${isToday ? 'text-brand-accent' : 'text-brand-muted'}`}>{i}</span>
          <div className="flex gap-1 mt-1 flex-wrap">
            {dayEvents.map((event) => (
              <div 
                key={event.id} 
                className={`w-2 h-2 rounded-full
                  ${event.type === 'match' ? 'bg-red-500' : event.type === 'training' ? 'bg-brand-accent' : 'bg-blue-500'}
                `}
              />
            ))}
          </div>
        </div>
      );
    }
    return days;
  };

  const selectedEvents = selectedDate ? EVENTS.filter(e => isSameDay(e.date, selectedDate)) : [];

  return (
    <section className="py-20 bg-brand-dark" id="calendario">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Calendar Grid */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-display font-bold text-white uppercase">
                Calendario <span className="text-brand-accent">Oficial</span>
              </h2>
              <div className="flex gap-4">
                <button onClick={handlePrevMonth} className="p-2 hover:text-brand-accent text-white transition-colors"><ChevronLeft /></button>
                <span className="text-xl font-medium text-white w-40 text-center">
                  {currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' }).toUpperCase()}
                </span>
                <button onClick={handleNextMonth} className="p-2 hover:text-brand-accent text-white transition-colors"><ChevronRight /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-0 mb-2">
              {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => (
                <div key={d} className="text-center text-brand-muted text-sm font-bold py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0">
              {renderCalendarDays()}
            </div>
            <div className="mt-4 flex gap-6 text-sm text-brand-muted">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-brand-accent"></div> Entrenamiento</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Partido</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Torneo</div>
            </div>
          </div>

          {/* Event Details Side */}
          <div className="lg:col-span-5 bg-brand-surface border border-brand-border p-8 h-fit">
            <h3 className="text-xl text-white font-bold mb-6 flex items-center gap-2">
              <CalendarIcon className="text-brand-accent" size={20}/> 
              Agenda del {selectedDate?.toLocaleDateString('es-ES')}
            </h3>
            
            <div className="space-y-4">
              {selectedEvents.length > 0 ? (
                selectedEvents.map(event => (
                  <div key={event.id} className="bg-brand-dark border-l-2 p-4 hover:translate-x-2 transition-transform duration-300"
                    style={{ borderColor: event.type === 'match' ? '#ef4444' : event.type === 'training' ? '#10b981' : '#3b82f6' }}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-1 block">{event.type}</span>
                    <h4 className="text-white font-bold text-lg mb-2">{event.title}</h4>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-brand-muted gap-2">
                        <Clock size={14} /> {event.time}
                      </div>
                      <div className="flex items-center text-sm text-brand-muted gap-2">
                        <MapPin size={14} /> {event.location}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-brand-muted border border-dashed border-brand-border">
                  <p>No hay eventos programados para este día.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;