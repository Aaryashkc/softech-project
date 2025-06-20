import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger form section animation after a delay
    const timer = setTimeout(() => {
      setFormVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: Building,
      title: "Office Address",
      details: [
        "Political Office",
        "Kathmandu, Nepal",
        "Bagmati Province"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+977-1-XXXXXXX (Office)",
        "+977-98XXXXXXXX (Mobile)",
        "+977-1-XXXXXXX (Fax)"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "office@girirajmanipokharel.np",
        "info@girirajmanipokharel.np",
        "media@girirajmanipokharel.np"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
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
            isVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
          }`}>
            
            {/* Professional badge */}
            <div className="inline-flex items-center bg-white border border-red-200 px-4 py-2 rounded-sm mb-8">
              <MessageSquare className="w-4 h-4 text-red-700 mr-2" />
              <span className="text-red-700 font-medium text-sm tracking-wide">GET IN TOUCH</span>
            </div>

            {/* Page title */}
            <h1 className="text-4xl lg:text-5xl font-light text-red-900 mb-6 leading-tight">
              Contact &
              <br />
              <span className="font-normal text-red-700">Connect</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
            
            {/* Description */}
            <p className="text-lg text-red-800 max-w-3xl mx-auto leading-relaxed mb-12">
              We welcome your questions, feedback, and opportunities for collaboration. 
              Reach out to us through any of the channels below or use our contact form for direct communication.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl lg:text-3xl font-light text-red-900 mb-6">
              Contact 
              <span className="font-normal text-red-700 ml-2">Information</span>
            </h2>
            
            <p className="text-red-600 leading-relaxed max-w-2xl mx-auto">
              Multiple ways to reach us for different types of inquiries and assistance.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div 
                  key={index}
                  className={`transform transition-all duration-1000 delay-${index * 100} ${
                    formVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
                  }`}
                >
                  <div className="bg-white p-6 border border-red-200 hover:shadow-lg transition-all duration-300 h-full">
                    
                    {/* Icon */}
                    <div className="bg-red-100 p-3 w-fit mb-4">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-red-800 mb-3">
                      {info.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-red-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left side - Form intro */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              formVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-800 p-2">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-light text-red-900">
                  Send a 
                  <span className="font-normal text-red-700 ml-2">Message</span>
                </h2>
              </div>
              
              <p className="text-red-800 leading-relaxed mb-8">
                Have a specific question or concern? Use the form below to send us a direct message. 
                We aim to respond to all inquiries within 24-48 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Policy inquiries and feedback</span>
                </div>
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Media and interview requests</span>
                </div>
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Community event invitations</span>
                </div>
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">General questions and support</span>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              formVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
            }`}>
              <div className="bg-slate-50 p-8 border border-red-200">
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-red-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-red-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-red-300 bg-white text-red-800 placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-red-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-red-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-red-300 bg-white text-red-800 placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-red-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-red-300 bg-white text-red-800 placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-red-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-red-300 bg-white text-red-800 placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent resize-vertical"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-900 text-white px-8 py-3 font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    Send Message
                    <Send size={16} />
                  </button>

                  <p className="text-red-500 text-sm text-center">
                    We'll get back to you within 24-48 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location/Map Section */}
      <section className="py-20 bg-red-800">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 delay-700 ${
            formVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
          }`}>
            
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
              Visit Our 
              <span className="font-normal text-red-300 ml-2">Office</span>
            </h3>
            
            <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
            
            <p className="text-red-300 leading-relaxed text-lg mb-12 max-w-2xl mx-auto">
              Our office is located in the heart of Kathmandu. We welcome scheduled visits 
              and meetings during our regular office hours.
            </p>

            {/* Map placeholder */}
            <div className="bg-red-700 border border-red-600 h-64 flex items-center justify-center mb-8">
              <div className="text-red-200 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm">Kathmandu, Bagmati Province, Nepal</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-light text-white mb-2">Central</div>
                <div className="text-sm text-red-400 tracking-wide uppercase">Location</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-2">Accessible</div>
                <div className="text-sm text-red-400 tracking-wide uppercase">By Public Transport</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-2">Parking</div>
                <div className="text-sm text-red-400 tracking-wide uppercase">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;