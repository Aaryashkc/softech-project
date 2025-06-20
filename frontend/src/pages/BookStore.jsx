import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Calendar, Award, ShoppingCart } from 'lucide-react';

const BookstorePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [booksVisible, setBooksVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      setBooksVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const books = [
    {
      id: 1,
      title: "Healthcare Reform in Nepal",
      subtitle: "A Minister's Journey",
      year: "2010",
      price: "NPR 1,200",
      description: "Insights from serving as Minister of Health and Population, covering policy reforms and public health initiatives.",
      category: "Political Memoir",
      image: "/api/placeholder/300/400"
    },
    {
      id: 2,
      title: "Constitutional Democracy",
      subtitle: "Nepal's Democratic Transition",
      year: "2012",
      price: "NPR 1,500",
      description: "Experiences from the Constituent Assembly and the journey toward Nepal's new constitution.",
      category: "Political Analysis",
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      title: "Party Politics and Unity",
      subtitle: "Lessons from Nepal's Left Movement",
      year: "2015",
      price: "NPR 1,300",
      description: "Reflections on party unification and leadership within Nepal's communist movement.",
      category: "Political Theory",
      image: "/api/placeholder/300/400"
    },
    {
      id: 4,
      title: "Public Service Leadership",
      subtitle: "Building Stronger Communities",
      year: "2018",
      price: "NPR 1,400",
      description: "A comprehensive guide to effective public service and community development.",
      category: "Leadership",
      image: "/api/placeholder/300/400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative py-16 bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23991b1b' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Professional badge */}
            <div className="inline-flex items-center bg-white border border-red-200 px-4 py-2 rounded-sm mb-8 shadow-sm">
              <BookOpen className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-medium text-sm tracking-wide">PUBLISHED WORKS</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              Books by
              <br />
              <span className="font-normal text-red-700">Giriraj Mani Pokharel</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-8"></div>
            
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Explore the published works of former Minister and constitutional assembly member, 
              covering healthcare policy, democratic governance, and political leadership in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div 
                key={book.id}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  booksVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="bg-white p-8 h-full hover:shadow-lg transition-all duration-300 border border-red-100 hover:border-red-200">
                  
                  <div className="flex gap-6">
                    {/* Book Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-40 bg-gradient-to-br from-red-100 to-red-200 border border-red-200 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-red-600" />
                      </div>
                    </div>

                    {/* Book Details */}
                    <div className="flex-1">
                      {/* Category Badge */}
                      <div className="inline-block bg-red-50 border border-red-200 px-3 py-1 rounded-sm mb-3">
                        <span className="text-red-700 font-medium text-xs tracking-wide uppercase">
                          {book.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-medium text-slate-900 mb-1">
                        {book.title}
                      </h3>
                      <p className="text-slate-600 font-medium mb-2">
                        {book.subtitle}
                      </p>

                      {/* Year */}
                      <div className="flex items-center text-sm text-slate-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2 text-red-500" />
                        Published {book.year}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                        {book.description}
                      </p>

                      {/* Price and Buy Button */}
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-medium text-red-800">
                          {book.price}
                        </div>
                        <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 font-medium tracking-wide flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
                          <ShoppingCart size={16} />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Author Section */}
          <div className={`mt-16 bg-red-900 p-8 lg:p-12 transform transition-all duration-1000 delay-500 ${booksVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-light text-white mb-6">
                About the 
                <span className="font-normal text-red-200 ml-2">Author</span>
              </h3>
              <div className="w-16 h-0.5 bg-red-400 mx-auto mb-8"></div>
              <p className="text-red-100 leading-relaxed text-lg mb-8">
                Giriraj Mani Pokharel brings decades of political experience to his writing, having served as Minister of Health and Population, Member of the Constituent Assembly, and in various party leadership roles. His books offer unique insights into Nepal's democratic transition, healthcare reform, and political leadership.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Award className="w-8 h-8 text-red-300 mx-auto mb-2" />
                  <div className="text-sm text-red-300 tracking-wide uppercase">Former Minister</div>
                </div>
                <div>
                  <BookOpen className="w-8 h-8 text-red-300 mx-auto mb-2" />
                  <div className="text-sm text-red-300 tracking-wide uppercase">Published Author</div>
                </div>
                <div>
                  <Award className="w-8 h-8 text-red-300 mx-auto mb-2" />
                  <div className="text-sm text-red-300 tracking-wide uppercase">Political Leader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookstorePage;