import React, { useState, useEffect } from 'react';
import { Newspaper, Clock, ArrowRight, Eye, Share2, BookOpen } from 'lucide-react';
import { news } from '../store/dataset.js';

const NewsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [newsVisible, setNewsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger news section animation after a delay
    const timer = setTimeout(() => {
      setNewsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Sort news by date (most recent first)
  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Get recent news (within last 30 days) and older news
  const today = new Date();
  const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
  
  const recentNews = sortedNews.filter(item => new Date(item.date) >= thirtyDaysAgo);
  const olderNews = sortedNews.filter(item => new Date(item.date) < thirtyDaysAgo);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
      fullDate: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      timeAgo: getTimeAgo(date)
    };
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  const isRecent = (dateString) => {
    return new Date(dateString) >= thirtyDaysAgo;
  };

  const FeaturedNewsCard = ({ article, index }) => {
    const dateInfo = formatDate(article.date);
    
    return (
      <div 
        className={`transform transition-all duration-1000 delay-${index * 100} ${
          newsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
        }`}
      >
        <div className="bg-white border border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
          
          {/* News Image */}
          <div className="relative h-64 bg-gradient-to-br from-white to-red-50 overflow-hidden">
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-red-500 text-center">
                <Newspaper className="w-16 h-16 mx-auto mb-2" />
                <p className="text-sm">News Image</p>
              </div>
            </div>
            
            {/* Recent badge */}
            {isRecent(article.date) && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-medium tracking-wide uppercase">
                Breaking News
              </div>
            )}

            {/* Date overlay */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 text-sm">
              <div className="font-medium text-red-800">{dateInfo.fullDate}</div>
              <div className="text-red-600 text-xs">{dateInfo.timeAgo}</div>
            </div>
          </div>

          {/* News Content */}
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-medium text-red-800 mb-3 group-hover:text-red-900 transition-colors leading-tight">
                {article.title}
              </h2>
              
              <div className="flex items-center text-sm text-red-500 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Published {dateInfo.timeAgo}
              </div>
            </div>

            <p className="text-red-600 leading-relaxed mb-6 text-lg">
              {article.description}
            </p>

            {/* Action buttons */}
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 text-red-700 hover:text-red-900 font-medium tracking-wide transition-all duration-200">
                Read Full Story
                <ArrowRight size={16} />
              </button>
              
              <div className="flex items-center gap-4 text-red-500">
                <button className="flex items-center gap-1 hover:text-red-700 transition-colors">
                  <Eye size={16} />
                  <span className="text-sm">View</span>
                </button>
                <button className="flex items-center gap-1 hover:text-red-700 transition-colors">
                  <Share2 size={16} />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RegularNewsCard = ({ article, index }) => {
    const dateInfo = formatDate(article.date);
    
    return (
      <div 
        className={`transform transition-all duration-1000 delay-${index * 100} ${
          newsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
        }`}
      >
        <div className="bg-white border border-red-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
          
          <div className="flex">
            {/* News Image */}
            <div className="w-1/3 h-32 bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
              <Newspaper className="w-8 h-8 text-red-500" />
            </div>

            {/* News Content */}
            <div className="flex-1 p-4">
              <div className="mb-2">
                <h3 className="text-lg font-medium text-red-800 mb-1 group-hover:text-red-900 transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <div className="flex items-center text-xs text-red-500 mb-2">
                  <Clock className="w-3 h-3 mr-1" />
                  {dateInfo.timeAgo}
                </div>
              </div>

              <p className="text-red-600 text-sm leading-relaxed mb-3 line-clamp-2">
                {article.description}
              </p>

              <button className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium transition-colors">
                Read More
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-red-50 min-h-screen">
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
              <Newspaper className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-medium text-sm tracking-wide">LATEST NEWS & UPDATES</span>
            </div>

            {/* Page title */}
            <h1 className="text-4xl lg:text-5xl font-light text-red-900 mb-6 leading-tight">
              News & 
              <br />
              <span className="font-normal text-red-700">Media Coverage</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
            
            {/* Description */}
            <p className="text-lg text-red-800 max-w-3xl mx-auto leading-relaxed mb-12">
              Stay informed with the latest news, interviews, and media coverage of our ongoing initiatives, 
              policy developments, and community engagement efforts across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Recent/Breaking News Section */}
      {recentNews.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Header */}
            <div className={`mb-16 transform transition-all duration-1000 ${
              newsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-800 p-2">
                  <Newspaper className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-light text-red-900">
                  Latest 
                  <span className="font-normal text-red-700 ml-2">News</span>
                </h2>
              </div>
              
              <p className="text-red-600 leading-relaxed max-w-2xl">
                Breaking news and recent updates on policy initiatives, community visits, and media appearances.
              </p>
            </div>

            {/* Featured News Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {recentNews.map((article, index) => (
                <FeaturedNewsCard 
                  key={article.id} 
                  article={article} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Archive/Older News Section */}
      {olderNews.length > 0 && (
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Header */}
            <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
              newsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-700 p-2">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-light text-red-900">
                  News 
                  <span className="font-normal text-red-700 ml-2">Archive</span>
                </h2>
              </div>
              
              <p className="text-red-600 leading-relaxed max-w-2xl">
                Browse through our comprehensive archive of past news articles, interviews, and media coverage.
              </p>
            </div>

            {/* Archive News Grid */}
            <div className="grid gap-4">
              {olderNews.map((article, index) => (
                <RegularNewsCard 
                  key={article.id} 
                  article={article} 
                  index={index + recentNews.length}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-red-800">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 delay-500 ${
            newsVisible ? 'tranred-y-0 opacity-100' : 'tranred-y-8 opacity-0'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
              Stay Informed &
              <span className="font-normal text-red-300 ml-2">Never Miss Updates</span>
            </h3>
            
            <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
            
            <p className="text-red-300 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, policy updates, and exclusive insights 
              directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white text-red-800 placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-medium tracking-wide transition-all duration-200">
                SUBSCRIBE
              </button>
            </div>
            
            <p className="text-red-400 text-sm mt-4">
              Join thousands of subscribers who stay updated with our work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;