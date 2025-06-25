import React, { useState, useRef } from "react";
const Gallery = () => {
  // Gallery state management
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedImage, setSelectedImage] = useState(null);
  const lightboxRef = useRef(null);

  // Gallery data
  const galleryImages = [
    {
      id: 1,
      src: "https://readdy.ai/api/search-image?query=Elegant%20Indian%20restaurant%20interior%20with%20warm%20ambient%20lighting%20showcasing%20traditional%20decor%20elements%20like%20ornate%20wooden%20furniture%20and%20brass%20accents.%20The%20space%20features%20rich%20maroon%20and%20gold%20color%20scheme%20with%20comfortable%20seating%20arrangements%20and%20authentic%20wall%20art%20creating%20a%20luxurious%20dining%20atmosphere%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=101&orientation=landscape",
      title: "Elegant Dining Hall",
      category: "ambiance",
      date: "2025-05-15",
      tags: ["Interior", "Seating", "Decor"],
    },
    {
      id: 2,
      src: "https://readdy.ai/api/search-image?query=Beautifully%20plated%20vegetarian%20Paneer%20Tikka%20Masala%20with%20rich%20creamy%20orange%20sauce%2C%20garnished%20with%20fresh%20coriander%20and%20cream%20swirl.%20The%20dish%20is%20served%20in%20an%20elegant%20copper%20bowl%20with%20naan%20bread%20on%20the%20side%2C%20photographed%20with%20professional%20lighting%20against%20a%20simple%20neutral%20background%20that%20highlights%20the%20vibrant%20colors%20and%20textures&width=800&height=600&seq=102&orientation=landscape",
      title: "Signature Paneer Tikka Masala",
      category: "food",
      date: "2025-06-01",
      tags: ["Paneer", "Main Course", "Signature"],
    },
    {
      id: 3,
      src: "https://readdy.ai/api/search-image?query=Traditional%20Indian%20Diwali%20celebration%20in%20restaurant%20with%20elegant%20table%20settings%20decorated%20with%20brass%20oil%20lamps%2C%20marigold%20flowers%2C%20and%20colorful%20rangoli%20patterns.%20The%20space%20features%20warm%20ambient%20lighting%20with%20silk%20drapes%20and%20festive%20decorations%20creating%20a%20joyful%20atmosphere%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=103&orientation=landscape",
      title: "Diwali Celebration Event",
      category: "events",
      date: "2025-04-20",
      tags: ["Festival", "Diwali", "Celebration"],
    },
    {
      id: 4,
      src: "https://readdy.ai/api/search-image?query=Luxurious%20private%20dining%20area%20in%20an%20Indian%20restaurant%20with%20intimate%20lighting%2C%20ornate%20wooden%20screens%20for%20privacy%2C%20plush%20seating%2C%20and%20elegant%20table%20settings.%20The%20space%20features%20traditional%20artwork%2C%20brass%20accents%2C%20and%20subtle%20floral%20arrangements%20creating%20a%20sophisticated%20atmosphere%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=104&orientation=landscape",
      title: "Private Dining Corner",
      category: "ambiance",
      date: "2025-05-28",
      tags: ["Private", "Seating", "Luxury"],
    },
    {
      id: 5,
      src: "https://readdy.ai/api/search-image?query=Artistically%20presented%20vegetarian%20thali%20with%20multiple%20small%20bowls%20containing%20colorful%20curries%2C%20rice%2C%20breads%2C%20and%20accompaniments%20arranged%20on%20a%20traditional%20brass%20platter.%20The%20dish%20is%20garnished%20with%20fresh%20herbs%20and%20edible%20flowers%2C%20photographed%20with%20professional%20lighting%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=105&orientation=landscape",
      title: "Royal Vegetarian Thali",
      category: "food",
      date: "2025-06-10",
      tags: ["Thali", "Traditional", "Platter"],
    },
    {
      id: 6,
      src: "https://readdy.ai/api/search-image?query=Corporate%20event%20setup%20in%20an%20Indian%20restaurant%20with%20elegant%20long%20tables%20arranged%20for%20a%20business%20dinner%2C%20featuring%20sophisticated%20place%20settings%2C%20subtle%20floral%20centerpieces%2C%20and%20ambient%20lighting.%20The%20space%20has%20a%20professional%20yet%20warm%20atmosphere%20with%20branded%20elements%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=106&orientation=landscape",
      title: "Corporate Dinner Event",
      category: "events",
      date: "2025-05-05",
      tags: ["Corporate", "Business", "Dinner"],
    },
    {
      id: 7,
      src: "https://readdy.ai/api/search-image?query=Assortment%20of%20traditional%20Indian%20vegetarian%20desserts%20including%20gulab%20jamun%2C%20rasgulla%2C%20jalebi%2C%20and%20kheer%20beautifully%20arranged%20on%20an%20ornate%20silver%20platter.%20The%20desserts%20are%20garnished%20with%20saffron%2C%20pistachios%2C%20and%20edible%20silver%20leaf%2C%20photographed%20with%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=107&orientation=landscape",
      title: "Dessert Platter",
      category: "food",
      date: "2025-06-15",
      tags: ["Dessert", "Sweet", "Traditional"],
    },
    {
      id: 8,
      src: "https://readdy.ai/api/search-image?query=Traditional%20Indian%20wedding%20reception%20setup%20in%20a%20restaurant%20with%20elaborate%20floral%20decorations%2C%20silk%20drapes%2C%20and%20elegant%20table%20settings.%20The%20space%20features%20a%20decorated%20stage%20area%2C%20ambient%20lighting%20with%20string%20lights%2C%20and%20traditional%20elements%20creating%20a%20festive%20atmosphere%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=108&orientation=landscape",
      title: "Wedding Reception Setup",
      category: "events",
      date: "2025-04-12",
      tags: ["Wedding", "Celebration", "Decoration"],
    },
    {
      id: 9,
      src: "https://readdy.ai/api/search-image?query=Elegant%20bar%20area%20in%20an%20Indian%20restaurant%20with%20backlit%20shelves%20displaying%20premium%20spirits%2C%20brass%20and%20copper%20accents%2C%20and%20comfortable%20seating.%20The%20space%20features%20warm%20ambient%20lighting%2C%20traditional%20design%20elements%2C%20and%20a%20sophisticated%20atmosphere%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=109&orientation=landscape",
      title: "Sophisticated Bar Area",
      category: "ambiance",
      date: "2025-05-20",
      tags: ["Bar", "Lounge", "Drinks"],
    },
    {
      id: 10,
      src: "https://readdy.ai/api/search-image?query=Colorful%20array%20of%20Indian%20street%20food%20inspired%20appetizers%20including%20samosas%2C%20pakoras%2C%20and%20chaats%20arranged%20on%20an%20elegant%20platter%20with%20various%20chutneys.%20The%20dishes%20are%20garnished%20with%20fresh%20herbs%20and%20edible%20flowers%2C%20photographed%20with%20professional%20lighting%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=110&orientation=landscape",
      title: "Street Food Platter",
      category: "food",
      date: "2025-06-05",
      tags: ["Appetizer", "Street Food", "Platter"],
    },
    {
      id: 11,
      src: "https://readdy.ai/api/search-image?query=Traditional%20Indian%20music%20performance%20in%20a%20restaurant%20with%20musicians%20playing%20sitar%2C%20tabla%2C%20and%20other%20classical%20instruments.%20The%20space%20features%20subtle%20stage%20lighting%2C%20comfortable%20audience%20seating%2C%20and%20an%20intimate%20atmosphere%20for%20cultural%20entertainment%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=111&orientation=landscape",
      title: "Live Music Night",
      category: "events",
      date: "2025-05-10",
      tags: ["Music", "Performance", "Cultural"],
    },
    {
      id: 12,
      src: "https://readdy.ai/api/search-image?query=Outdoor%20dining%20terrace%20of%20an%20Indian%20restaurant%20with%20comfortable%20seating%2C%20string%20lights%20overhead%2C%20potted%20plants%2C%20and%20traditional%20lanterns.%20The%20space%20offers%20a%20serene%20atmosphere%20with%20elegant%20table%20settings%20and%20subtle%20traditional%20decor%20elements%20against%20a%20simple%20neutral%20background&width=800&height=600&seq=112&orientation=landscape",
      title: "Outdoor Terrace Seating",
      category: "ambiance",
      date: "2025-06-08",
      tags: ["Outdoor", "Terrace", "Seating"],
    },
  ];
  // Filter images based on category and search query
  const filteredImages = galleryImages
    .filter((image) => {
      if (activeCategory === "all") return true;
      return image.category === activeCategory;
    })
    .filter((image) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        image.title.toLowerCase().includes(query) ||
        image.category.toLowerCase().includes(query) ||
        image.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });
  // Handle image click to open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };
  // Handle lightbox close
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };
  
  // Handle image sharing
  const shareImage = async (image) => {
    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share({
          title: image.title,
          text: `Check out this ${image.category} image from Prasad Food Divine: ${image.title}`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        // Copy the URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing image:', error);
    }
  };
  
  // Handle image download
  const downloadImage = async (image) => {
    try {
      // Show loading state
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Downloading...';
        downloadBtn.disabled = true;
      }
      
      // Fetch the image
      const response = await fetch(image.src);
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = URL.createObjectURL(blob);
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      // Set the download attribute with a filename based on the image title
      link.download = `${image.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      // Set the href to the blob URL
      link.href = blobUrl;
      // Append to the document
      document.body.appendChild(link);
      // Trigger the download
      link.click();
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      
      // Reset button state
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-download mr-2"></i> Download';
        downloadBtn.disabled = false;
      }
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download image. Please try again.');
      
      // Reset button state on error
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-download mr-2"></i> Download';
        downloadBtn.disabled = false;
      }
    }
  };
  // Handle click outside lightbox to close
  const handleLightboxClick = (e) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      closeLightbox();
    }
  };
  // Navigate to next/previous image in lightbox
  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
  };
  // Handle keyboard navigation in lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  // Get category count
  const getCategoryCount = (category) => {
    if (category === "all") return galleryImages.length;
    return galleryImages.filter((img) => img.category === category).length;
  };
  // Get all unique tags
  const allTags = Array.from(new Set(galleryImages.flatMap((img) => img.tags)));
  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20gallery%20of%20Indian%20restaurant%20with%20warm%20ambient%20lighting%20showcasing%20beautiful%20photographs%20of%20signature%20dishes%20and%20restaurant%20interior.%20The%20gallery%20features%20a%20sophisticated%20display%20system%20with%20brass%20frames%20against%20textured%20walls%20creating%20an%20immersive%20visual%20experience%20while%20maintaining%20a%20cohesive%20design%20that%20complements%20the%20restaurants%20maroon%20and%20gold%20color%20scheme&width=1440&height=800&seq=100&orientation=landscape')`,
              filter: "brightness(0.6)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/70 to-transparent"></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
            <h2 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">
              Our Gallery
            </h2>
            <p className="text-xl mb-8 max-w-lg">
              A visual journey through divine dishes, serene spaces, and
              memorable moments.
            </p>
          </div>
        </div>
        {/* Category Navigation */}
        <div className="sticky top-20 bg-white shadow-md z-40">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex overflow-x-auto pb-3 md:pb-0 space-x-4 md:space-x-8">
                {["All", "Food", "Ambiance", "Events"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category.toLowerCase())}
                    className={`font-medium text-base cursor-pointer transition-colors whitespace-nowrap px-4 py-2 rounded-md !rounded-button ${
                      activeCategory === category.toLowerCase()
                        ? "text-[#800000] border-b-2 border-[#FF9933]"
                        : "text-gray-600 hover:text-[#800000]"
                    }`}
                  >
                    {category}{" "}
                    <span className="text-sm text-gray-500">
                      ({getCategoryCount(category.toLowerCase())})
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search gallery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent text-sm w-full md:w-64"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                {/* <div className="relative">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent text-sm bg-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div> */}
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  {tag}
                </button>
              ))}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 py-1 bg-[#800000] text-white rounded-full text-sm transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Clear <i className="fas fa-times ml-1"></i>
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Gallery Grid */}
        <div className="py-12 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            {filteredImages.length > 0 ? (
              <>
                <p className="text-gray-600 mb-8">
                  Showing {filteredImages.length} of {galleryImages.length}{" "}
                  images
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredImages.map((image) => (
                    <div
                      key={image.id}
                      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-[#800000]/80 text-white px-3 py-1 rounded-full text-xs uppercase">
                          {image.category}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-serif text-[#800000] mb-2">
                          {image.title}
                        </h3>
                        {/* <div className="flex flex-wrap gap-2 mt-2">
                          {image.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div> */}
                      </div>
                      <div 
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(image);
                        }}
                      >
                        <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <i className="fas fa-search-plus text-3xl mb-4"></i>
                          <p className="text-lg font-medium">View Larger</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
                <h3 className="text-2xl font-serif text-[#800000] mb-2">
                  No Images Found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-6 bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Lightbox */}
        {selectedImage && (
          <div
            ref={lightboxRef}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-auto"
            onClick={handleLightboxClick}
          >
            <div className="relative w-full max-w-6xl mx-auto p-4 md:p-6">
              {/* Control buttons */}
              <div className="absolute top-4 right-4 z-10 flex space-x-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const imgElement = document.querySelector('.lightbox-image');
                    if (imgElement) {
                      if (!document.fullscreenElement) {
                        if (imgElement.requestFullscreen) {
                          imgElement.requestFullscreen();
                        } else if (imgElement.webkitRequestFullscreen) {
                          imgElement.webkitRequestFullscreen();
                        } else if (imgElement.msRequestFullscreen) {
                          imgElement.msRequestFullscreen();
                        }
                      } else {
                        if (document.exitFullscreen) {
                          document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                          document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                          document.msExitFullscreen();
                        }
                      }
                    }
                  }}
                  className="text-white bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-expand"></i>
                </button>
                <button
                  onClick={closeLightbox}
                  className="text-white bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              {/* Image */}
              <div className="w-full h-[80vh] flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain cursor-zoom-in lightbox-image"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Toggle fullscreen mode for the image
                    const imgElement = e.target;
                    if (!document.fullscreenElement) {
                      if (imgElement.requestFullscreen) {
                        imgElement.requestFullscreen();
                      } else if (imgElement.webkitRequestFullscreen) { /* Safari */
                        imgElement.webkitRequestFullscreen();
                      } else if (imgElement.msRequestFullscreen) { /* IE11 */
                        imgElement.msRequestFullscreen();
                      }
                    } else {
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) { /* Safari */
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) { /* IE11 */
                        document.msExitFullscreen();
                      }
                    }
                  }}
                />
              </div>
              {/* Image details */}
              <div
                className="bg-white p-6 mt-4 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-serif text-[#800000] mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-500 mb-4">
                  <span className="capitalize">{selectedImage.category}</span> •
                  <span className="ml-2">
                    {new Date(selectedImage.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedImage.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        shareImage(selectedImage);
                      }}
                      className="share-btn flex items-center text-gray-600 hover:text-[#800000] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-share-alt mr-2"></i> Share
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        downloadImage(selectedImage);
                      }}
                      className="download-btn flex items-center text-gray-600 hover:text-[#800000] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-download mr-2"></i> Download
                    </button>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {filteredImages.findIndex(
                      (img) => img.id === selectedImage.id
                    ) + 1}{" "}
                    of {filteredImages.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
export default Gallery;
