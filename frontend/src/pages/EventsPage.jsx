import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Megaphone } from 'lucide-react';
import { events } from '../store/dataset.js';

const EventsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [eventsVisible, setEventsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger events section animation after a delay
    const timer = setTimeout(() => {
      setEventsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Sort events by date (upcoming first)
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  // Separate upcoming and past events
  const today = new Date();
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= today);
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < today);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
      fullDate: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) >= today;
  };

  const EventCard = ({ event, index, isUpcoming: upcoming }) => {
    const dateInfo = formatDate(event.date);
    
    return (
      <div 
        className={`transform transition-all duration-1000 delay-${index * 100} ${
          eventsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
        }`}
      >
        <div className={`bg-white border border-red-200 hover:shadow-lg transition-all duration-300 overflow-hidden group ${
          upcoming ? 'hover:border-red-300' : 'opacity-75'
        }`}>
          
          {/* Event Image */}
          <div className="relative h-48 bg-gradient-to-br from-white to-red-50 overflow-hidden">
            {/* Image placeholder - replace with actual image when available */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-red-500 text-center">
                <Megaphone className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">Event Image</p>
              </div>
            </div>
            
            {/* Date badge */}
            <div className={`absolute top-4 left-4 bg-white shadow-sm border border-red-200 p-3 text-center ${
              upcoming ? '' : 'bg-red-100'
            }`}>
              <div className={`text-2xl font-light ${upcoming ? 'text-red-800' : 'text-red-600'} leading-none`}>
                {dateInfo.day}
              </div>
              <div className={`text-xs font-medium tracking-wide uppercase ${
                upcoming ? 'text-red-600' : 'text-red-500'
              }`}>
                {dateInfo.month}
              </div>
            </div>

            {/* Status badge */}
            {upcoming && (
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-xs font-medium tracking-wide uppercase">
                Upcoming
              </div>
            )}
            {!upcoming && (
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-medium tracking-wide uppercase">
                Past Event
              </div>
            )}
          </div>

          {/* Event Content */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className={`text-xl font-medium mb-2 group-hover:text-red-900 transition-colors ${
                upcoming ? 'text-red-800' : 'text-red-600'
              }`}>
                {event.title}
              </h3>
              
              <div className="flex items-center text-sm text-red-500 mb-3">
                <Clock className="w-4 h-4 mr-2" />
                {dateInfo.fullDate}
              </div>
            </div>

            <p className={`leading-relaxed mb-6 ${
              upcoming ? 'text-red-600' : 'text-red-500'
            }`}>
              {event.description}
            </p>

            {/* Action button */}
            <button className={`flex items-center gap-2 font-medium tracking-wide transition-all duration-200 ${
              upcoming 
                ? 'text-red-700 hover:text-red-900' 
                : 'text-red-500 cursor-default'
            }`}>
              {upcoming ? 'Learn More' : 'Event Details'}
              {upcoming && <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Professional badge */}
            <div className="inline-flex items-center bg-white border border-red-200 px-4 py-2 rounded-sm mb-8">
              <Calendar className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-medium text-sm tracking-wide">COMMUNITY EVENTS</span>
            </div>

            {/* Page title */}
            <h1 className="text-4xl lg:text-5xl font-light text-red-900 mb-6 leading-tight">
              Upcoming Events &
              <br />
              <span className="font-normal text-red-700">Community Gatherings</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
            
            {/* Description */}
            <p className="text-lg text-red-800 max-w-3xl mx-auto leading-relaxed mb-12">
              Join us in building stronger communities through meaningful events, rallies, and initiatives. 
              Together, we work towards positive change and sustainable development for all.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Header */}
            <div className={`mb-16 transform transition-all duration-1000 ${
              eventsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-800 p-2">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-light text-red-900">
                  Upcoming 
                  <span className="font-normal text-red-700 ml-2">Events</span>
                </h2>
              </div>
              
              <p className="text-red-600 leading-relaxed max-w-2xl">
                Don't miss these important community events. Mark your calendars and join us in making a difference.
              </p>
            </div>

            {/* Upcoming Events Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {upcomingEvents.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  index={index} 
                  isUpcoming={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Header */}
            <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
              eventsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 p-2">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-light text-red-900">
                  Past 
                  <span className="font-normal text-red-700 ml-2">Events</span>
                </h2>
              </div>
              
              <p className="text-red-600 leading-relaxed max-w-2xl">
                Explore our recent community initiatives and successful events that have made a positive impact.
              </p>
            </div>

            {/* Past Events Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  index={index + upcomingEvents.length} 
                  isUpcoming={false}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-20 bg-red-800">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 delay-500 ${
            eventsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
              Stay Connected &
              <span className="font-normal text-red-300 ml-2">Get Involved</span>
            </h3>
            
            <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
            
            <p className="text-red-300 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about upcoming events and opportunities to contribute to our community initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-800 hover:bg-red-100 px-8 py-3 font-medium tracking-wide transition-all duration-200">
              VOLUNTEER WITH US
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;