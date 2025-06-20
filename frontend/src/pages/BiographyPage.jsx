import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Award, User, Building, Flag } from 'lucide-react';
import HEADER from '../assets/bioheader.jpg';

const BiographyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger sections animation after a delay
    const timer = setTimeout(() => {
      setSectionsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const personalDetails = {
    name: "Giriraj Mani Pokharel",
    born: "6 March 1958 (age 67)",
    birthplace: "Khotang, Nepal",
    nationality: "Nepali",
    residence: "Kathmandu, Nepal",
    currentParty: "CPN (Maoist Centre) (since 2009)"
  };

  const positions = [
    {
      title: "Minister of Education, Science and Technology",
      period: "16 March 2018 – 20 December 2020",
      president: "Bidhya Devi Bhandari",
      primeMinister: "Khadga Prasad Sharma Oli",
      preceded: "Chitra Lekha Yadav",
      succeeded: "Dhaniram Paudel",
      type: "ministerial"
    },
    {
      title: "Minister of Health and Population",
      period: "29 April 2007 – 4 May 2009",
      primeMinister: "Pushpa Kamal Dahal",
      type: "ministerial"
    },
    {
      title: "Member of Parliament, Pratinidhi Sabha",
      period: "4 March 2018 – Present",
      constituency: "Mahottari 1",
      status: "Incumbent",
      type: "parliamentary"
    },
    {
      title: "Member of Constituent Assembly",
      period: "28 May 2008 – 14 October 2017",
      constituency: "Mahottari 1",
      preceded: "Mahendra Yadav (as MP)",
      type: "parliamentary"
    }
  ];

  const politicalAffiliations = [
    { party: "CPN (Fourth Convention)", period: "until 1990" },
    { party: "Samyukta Janamorcha", period: "1990–2002" },
    { party: "Janamorcha Nepal", period: "2002–2009" },
    { party: "CPN (Maoist Centre)", period: "since 2009" }
  ];

  const keyAchievements = [
    "Former Minister of Education, Science and Technology",
    "Former Minister of Health and Population",
    "Founding chairman of Adharshila",
    "Elected to party's Standing Committee",
    "In-charge of party's Health Department"
  ];

  const PositionCard = ({ position, index }) => {
    const getTypeColor = (type) => {
      switch(type) {
        case 'ministerial': return 'bg-green-600';
        case 'parliamentary': return 'bg-slate-600';
        default: return 'bg-slate-600';
      }
    };

    const getTypeIcon = (type) => {
      switch(type) {
        case 'ministerial': return <Building className="w-5 h-5 text-white" />;
        case 'parliamentary': return <Users className="w-5 h-5 text-white" />;
        default: return <Award className="w-5 h-5 text-white" />;
      }
    };

    return (
      <div 
        className={`transform transition-all duration-1000 delay-${index * 100} ${
          sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
          
          {/* Position Header */}
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 border-b border-slate-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className={`${getTypeColor(position.type)} p-2`}>
                  {getTypeIcon(position.type)}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-800 mb-1">
                    {position.title}
                  </h3>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.period}
                  </div>
                </div>
              </div>
              
              {position.status && (
                <div className="bg-green-600 text-white px-3 py-1 text-xs font-medium tracking-wide uppercase">
                  {position.status}
                </div>
              )}
            </div>
          </div>

          {/* Position Details */}
          <div className="p-6">
            <div className="grid gap-4">
              {position.president && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500 w-24">President:</span>
                  <span className="text-slate-700">{position.president}</span>
                </div>
              )}
              
              {position.primeMinister && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500 w-24">PM:</span>
                  <span className="text-slate-700">{position.primeMinister}</span>
                </div>
              )}
              
              {position.constituency && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-700">{position.constituency}</span>
                </div>
              )}
              
              {position.preceded && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500 w-24">Preceded:</span>
                  <span className="text-slate-600">{position.preceded}</span>
                </div>
              )}
              
              {position.succeeded && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500 w-24">Succeeded:</span>
                  <span className="text-slate-600">{position.succeeded}</span>
                </div>
              )}
            </div>
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
            <div className="inline-flex items-center bg-slate-50 border border-slate-200 px-4 py-2 rounded-sm mb-8">
              <User className="w-4 h-4 text-slate-600 mr-2" />
              <span className="text-slate-700 font-medium text-sm tracking-wide">POLITICAL BIOGRAPHY</span>
            </div>

            {/* Profile Image Placeholder */}
            <div className="w-40 h-40 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-8 flex items-center justify-center">
              <img className='radius-20 rounded-full object-cover object-center' src={HEADER} alt="" />
            </div>

            {/* Page title */}
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              Giriraj Mani Pokharel
            </h1>
            
            <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-8"></div>
            
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-slate-50 border border-slate-200 p-4 text-center">
                <div className="text-sm text-slate-500 font-medium tracking-wider uppercase mb-2">Born</div>
                <div className="text-slate-800">{personalDetails.born}</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 text-center">
                <div className="text-sm text-slate-500 font-medium tracking-wider uppercase mb-2">Birthplace</div>
                <div className="text-slate-800">{personalDetails.birthplace}</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 text-center">
                <div className="text-sm text-slate-500 font-medium tracking-wider uppercase mb-2">Residence</div>
                <div className="text-slate-800">{personalDetails.residence}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              A distinguished Nepalese politician who has served as Minister of Education, Science and Technology, 
              and Minister of Health and Population. Currently serving as Member of Parliament and founding chairman of Adharshila.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-light text-slate-800 mb-2">2</div>
                <div className="text-sm text-slate-500 font-medium tracking-wider uppercase">Ministerial Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-slate-800 mb-2">15+</div>
                <div className="text-sm text-slate-500 font-medium tracking-wider uppercase">Years in Politics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-slate-800 mb-2">Current</div>
                <div className="text-sm text-slate-500 font-medium tracking-wider uppercase">MP Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Positions Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`mb-16 transform transition-all duration-1000 ${
            sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-600 p-2">
                <Building className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-light text-slate-900">
                Political 
                <span className="font-normal text-slate-700 ml-2">Positions</span>
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              A comprehensive overview of key political positions and roles held throughout his distinguished career.
            </p>
          </div>

          {/* Positions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {positions.map((position, index) => (
              <PositionCard 
                key={index} 
                position={position} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Political Affiliations & Achievements Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Political Affiliations */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-slate-600 p-2">
                  <Flag className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-light text-slate-900">
                  Political 
                  <span className="font-normal text-slate-700 ml-2">Affiliations</span>
                </h3>
              </div>
              
              <div className="space-y-4">
                {politicalAffiliations.map((affiliation, index) => (
                  <div key={index} className="border-l-4 border-slate-200 pl-6 pb-4">
                    <h4 className="font-medium text-slate-800 mb-1">{affiliation.party}</h4>
                    <p className="text-slate-600 text-sm">{affiliation.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className={`transform transition-all duration-1000 delay-400 ${
              sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-600 p-2">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-light text-slate-900">
                  Key 
                  <span className="font-normal text-slate-700 ml-2">Achievements</span>
                </h3>
              </div>
              
              <div className="space-y-4">
                {keyAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Life Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className={`transform transition-all duration-1000 delay-500 ${
            sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-slate-600 p-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-light text-slate-900">
                Political 
                <span className="font-normal text-slate-700 ml-2">Life</span>
              </h3>
            </div>
            
            <div className="bg-white border border-slate-200 p-8">
              <div className="prose max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  On April 12, 2007, Janamorcha Nepal, of which he was then a vice-chairman, nominated him as the new Minister of Health. 
                  Pokharel was appointed to the said position on April 29, 2007. In April 2008, he won the Mahottari-1 seat in the 
                  Constituent Assembly election as a candidate of Janamorcha Nepal (People's Front Nepal).
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  He then served a second term as Minister of Health and Population, in the government formed under the leadership of 
                  the Communist Party of Nepal (Maoist) after it won the most seats in the Constituent Assembly election. Pokharel's 
                  second term as Minister of Health and Population was from 31 August 2008 until 4 May 2009, when then Prime Minister 
                  Pushpa Kamal Dahal (Prachanda) resigned along with his cabinet and dissolved the government.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  After the unification of the two parties, Pokharel was elected to the party's Standing Committee. He is also 
                  in-charge of the party's Health Department, continuing his commitment to public health and social welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-800">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 delay-600 ${
            sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
              Learn More About
              <span className="font-normal text-slate-300 ml-2">His Work</span>
            </h3>
            
            <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-8"></div>
            
            <p className="text-slate-300 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
              Stay updated with his ongoing political initiatives and contributions to Nepalese society.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-3 font-medium tracking-wide transition-all duration-200">
                VIEW RECENT WORK
              </button>
              <button className="border border-slate-400 text-slate-300 hover:bg-slate-700 px-8 py-3 font-medium tracking-wide transition-all duration-200">
                CONTACT OFFICE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiographyPage;