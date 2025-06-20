import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Users, MapPin, Calendar, Award, Building, Heart } from 'lucide-react';
import HEADER from '../assets/header.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger experience section animation after a delay
    const timer = setTimeout(() => {
      setExperienceVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      title: "Minister of Health and Population",
      organization: "Government of Nepal",
      period: "2007-2009",
      description: "Led national healthcare initiatives and population policies. Served two terms under different government formations.",
      icon: Heart,
      highlights: ["Healthcare Policy Reform", "Population Management", "Public Health Initiatives"]
    },
    {
      title: "Member of Constituent Assembly",
      organization: "Mahottari-1 Constituency",
      period: "2008",
      description: "Elected representative contributing to Nepal's constitutional framework and democratic transition.",
      icon: Building,
      highlights: ["Constitutional Development", "Democratic Governance", "Legislative Leadership"]
    },
    {
      title: "Vice-Chairman",
      organization: "Janamorcha Nepal",
      period: "2007",
      description: "Senior leadership role in political party organization and strategic decision-making.",
      icon: Users,
      highlights: ["Party Leadership", "Strategic Planning", "Political Coordination"]
    },
    {
      title: "Standing Committee Member",
      organization: "Unified Communist Party of Nepal (Maoist)",
      period: "2009-Present",
      description: "Key leadership position following party unification, overseeing health department operations.",
      icon: Award,
      highlights: ["Party Unification", "Health Department Leadership", "Policy Development"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Original Homepage Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23991b1b' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              
              {/* Professional badge */}
              <div className="inline-flex items-center bg-white border border-red-200 px-4 py-2 rounded-sm mb-8 shadow-sm">
                <MapPin className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-red-700 font-medium text-sm tracking-wide">Nepalese </span>
                <span className="text-blue-700 font-medium text-sm tracking-wide ml-1">Politician</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 leading-tight">
                Giriraj Mani
                <br />
                <span className="font-normal text-red-700">Pokharel</span>
              </h1>
              
              {/* Professional title */}
              <div className="mb-8">
                <h2 className="text-xl font-medium text-slate-800 mb-3">
                  Former Minister & Constitutional Assembly Member
                </h2>
                <div className="w-16 h-0.5 bg-white0"></div>
              </div>
              
              {/* Mission statement */}
              <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-lg">
                Bringing decades of dedicated public service experience in healthcare, education, and constitutional development to build stronger communities and transparent governance.
              </p>
              

              {/* Professional stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-light text-red-800 mb-1">15+</div>
                  <div className="text-xs text-slate-500 font-medium tracking-wider uppercase">Years Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-red-800 mb-1">3</div>
                  <div className="text-xs text-slate-500 font-medium tracking-wider uppercase">Ministerial Terms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-red-800 mb-1">Multiple</div>
                  <div className="text-xs text-slate-500 font-medium tracking-wider uppercase">Leadership Roles</div>
                </div>
              </div>

              {/* Professional CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/biography')} 
                className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
                  Learn More
                  <ArrowRight size={16} />
                </button>
                <button className="border border-red-300 text-red-700 hover:bg-white px-8 py-3 font-medium tracking-wide transition-all duration-200">
                  GET INVOLVED
                </button>
              </div>
            </div>

            {/* Right side - Professional photo section */}
            <div className="relative">
              <div className="relative bg-white shadow-lg overflow-hidden border border-red-100">
                {/* Photo placeholder with professional styling */}
                <div className="aspect-[4/5] bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                  <div className="text-red-500 text-center">
                    {/* <div className="w-24 h-24 bg-red-400 rounded-full mx-auto mb-4"></div> */}
                    <img src={HEADER} alt="" />
                  </div>
                </div>
                
                {/* Professional overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6 border-t border-red-100">
                  <h3 className="font-medium text-slate-800 mb-1">Giriraj Mani Pokharel</h3>
                  <p className="text-sm text-slate-600">Former Minister of Education, Science, Technology, Health, PopulationMember of Constituent Assembly and Founding chairman Adharshila</p>
                </div>
              </div>
              
              {/* Subtle accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-200 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience and Leadership Section */}
      <section id="experience" className="relative py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center bg-white border border-red-200 px-4 py-2 rounded-sm mb-6">
              <Shield className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-medium text-sm tracking-wide">EXPERIENCE & LEADERSHIP</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              A Legacy of 
              <span className="font-normal text-red-800 ml-2">Public Service</span>
            </h2>
            
            <div className="w-16 h-0.5 bg-white0 mx-auto mb-6"></div>
            
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From healthcare ministry to constitutional development, a distinguished career spanning multiple government formations and party leadership roles, dedicated to serving Nepal's democratic progress.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <div 
                  key={index}
                  className={`transform transition-all duration-1000 delay-${index * 100} ${
                    experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className="bg-white p-8 h-full hover:shadow-lg transition-all duration-300 border border-red-100 hover:border-red-200">
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-white p-3 shadow-sm border border-red-200">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-slate-900 mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-slate-600 font-medium mb-1">
                          {experience.organization}
                        </p>
                        <div className="flex items-center text-sm text-slate-500">
                          <Calendar className="w-4 h-4 mr-2 text-red-500" />
                          {experience.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-sm font-medium text-slate-800 mb-3 tracking-wide uppercase">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-white0 rounded-full mr-3"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Political Journey Summary */}
          <div className={`mt-16 bg-red-900 p-8 lg:p-12 transform transition-all duration-1000 delay-500 ${experienceVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-light text-white mb-6">
                Political Journey & 
                <span className="font-normal text-red-200 ml-2">Party Leadership</span>
              </h3>
              <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
              <p className="text-red-100 leading-relaxed text-lg mb-8">
                Giriraj Mani Pokharel's political career reflects Nepal's democratic evolution. From his early role as Vice-Chairman of Janamorcha Nepal to his ministerial appointments and eventual leadership in the Unified Communist Party of Nepal (Maoist), his journey embodies dedication to healthcare reform, constitutional development, and party unification efforts that have shaped modern Nepal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-light text-white mb-2">2007</div>
                  <div className="text-sm text-red-300 tracking-wide uppercase">First Ministerial Appointment</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-2">2008</div>
                  <div className="text-sm text-red-300 tracking-wide uppercase">Constituent Assembly Election</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-2">2009</div>
                  <div className="text-sm text-red-300 tracking-wide uppercase">Party Unification Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;