import React, { useState, useEffect } from 'react';
import { Camera, Calendar, MapPin, Users, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample gallery data - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: "Minister Inauguration Ceremony",
      date: "2007",
      category: "ministerial",
      location: "Kathmandu",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1540910419892-4308a4ac95db?w=500&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1540910419892-4308a4ac95db?w=1200&h=800&fit=crop",
      description: "Official inauguration ceremony as Minister of Health and Population"
    },
    {
      id: 2,
      title: "Constituent Assembly Session",
      date: "2008",
      category: "constitutional",
      location: "Constituent Assembly Hall",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=800&fit=crop",
      description: "Participating in constitutional development discussions"
    },
    {
      id: 3,
      title: "Healthcare Policy Meeting",
      date: "2008",
      category: "policy",
      location: "Ministry Office",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=800&fit=crop",
      description: "Strategic healthcare policy development session"
    },
    {
      id: 4,
      title: "Community Health Program Launch",
      date: "2008",
      category: "community",
      location: "Mahottari District",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
      description: "Launching community healthcare initiatives in rural areas"
    },
    {
      id: 5,
      title: "Party Leadership Meeting",
      date: "2009",
      category: "party",
      location: "Party Headquarters",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=500&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=800&fit=crop",
      description: "Strategic party leadership discussions"
    },
    {
      id: 6,
      title: "Educational Reform Speech",
      date: "2009",
      category: "education",
      location: "Education Ministry",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1200&h=800&fit=crop",
      description: "Addressing educational reform initiatives"
    }
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'ministerial', label: 'Ministerial' },
    { key: 'constitutional', label: 'Constitutional' },
    { key: 'policy', label: 'Policy Work' },
    { key: 'community', label: 'Community' },
    { key: 'party', label: 'Party Leadership' },
    { key: 'education', label: 'Education' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23991b1b' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center bg-white border border-red-200 px-4 py-2 rounded-sm mb-8">
              <Camera className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-medium text-sm tracking-wide">PHOTO & VIDEO GALLERY</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              Visual Journey of
              <br />
              <span className="font-normal text-red-800">Public Service</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-white0 mx-auto mb-8"></div>

          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 font-medium text-sm tracking-wide transition-all duration-200 ${
                  selectedCategory === category.key
                    ? 'bg-red-800 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-red-700 hover:bg-white border border-red-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transform transition-all duration-500 delay-${index * 50} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                onClick={() => openModal(item)}
              >
                <div className="bg-white border border-red-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-red-200">
                  
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/20 transition-all duration-300"></div>
                    
                    {/* Play button for videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 p-4 rounded-full group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                          <Play className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-800 text-white px-3 py-1 text-xs font-medium tracking-wide uppercase">
                        {categories.find(cat => cat.key === item.category)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-red-800 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Meta info */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="w-4 h-4 mr-2 text-red-500" />
                        {item.date}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-600 mb-2">No items found</h3>
              <p className="text-slate-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.fullImage}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-medium mb-2">{selectedImage.title}</h3>
              <p className="text-white/90 mb-3">{selectedImage.description}</p>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedImage.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedImage.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;