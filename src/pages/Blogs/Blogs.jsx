import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("latest");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const postsPerPage = 6;

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "culinary-insights", name: "Culinary Insights" },
    { id: "recipes", name: "Recipes" },
    { id: "sustainability", name: "Sustainability" },
    { id: "restaurant-news", name: "Restaurant News" },
    { id: "health-wellness", name: "Health & Wellness" },
  ];

  const tags = [
    "Vegan",
    "Gluten-Free",
    "Festive",
    "Sattvic",
    "Spicy",
    "Traditional",
    "Seasonal",
    "Quick Recipes",
    "Desserts",
    "Breakfast",
    "Lunch",
    "Dinner",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Indian Spices",
      excerpt:
        "Discover the secret blend of spices that make Indian cuisine uniquely flavorful and healthy. Learn how to use traditional spices in modern cooking.",
      content: "Full article content here...",
      date: "June 20, 2025",
      readTime: "8 min read",
      category: "Culinary Insights",
      tags: ["Traditional", "Spicy", "Health & Wellness"],
      image:
        "https://readdy.ai/api/search-image?query=Artistic%2520arrangement%2520of%2520colorful%2520Indian%2520spices%2520in%2520traditional%2520copper%2520and%2520brass%2520containers%2520with%2520mortar%2520and%2520pestle%252C%2520cinnamon%2520sticks%252C%2520cardamom%2520pods%252C%2520turmeric%2520powder%252C%2520red%2520chili%2520powder%252C%2520and%2520cumin%2520seeds%2520beautifully%2520displayed%2520against%2520a%2520rustic%2520wooden%2520background%2520with%2520warm%2520lighting&width=800&height=500&seq=101&orientation=landscape",
      author: {
        name: "Chef Priya Sharma",
        role: "Head Chef",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520female%2520chef%2520in%2520her%2520thirties%2520wearing%2520a%2520white%2520chef%2520coat%2520with%2520a%2520confident%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520highlighting%2520her%2520professional%2520demeanor&width=200&height=200&seq=201&orientation=squarish",
      },
      views: 1245,
      comments: 32,
      likes: 187,
    },
    {
      id: 2,
      title: "Sustainable Dining Practices",
      excerpt:
        "Learn about our commitment to eco-friendly practices and sustainable sourcing. Discover how we minimize waste and support local farmers.",
      content: "Full article content here...",
      date: "June 18, 2025",
      readTime: "6 min read",
      category: "Sustainability",
      tags: ["Sustainable", "Eco-Friendly", "Local"],
      image:
        "https://readdy.ai/api/search-image?query=Eco-friendly%2520restaurant%2520setting%2520with%2520sustainable%2520bamboo%2520utensils%252C%2520cloth%2520napkins%252C%2520glass%2520water%2520bottles%252C%2520and%2520locally%2520sourced%2520organic%2520vegetables%2520arranged%2520on%2520a%2520reclaimed%2520wood%2520table%2520with%2520natural%2520lighting%2520highlighting%2520the%2520sustainable%2520dining%2520experience&width=800&height=500&seq=102&orientation=landscape",
      author: {
        name: "Rajesh Kumar",
        role: "Sustainability Director",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520man%2520in%2520his%2520forties%2520with%2520short%2520dark%2520hair%2520wearing%2520business%2520casual%2520attire%2520with%2520a%2520thoughtful%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520conveying%2520expertise%2520and%2520authority&width=200&height=200&seq=202&orientation=squarish",
      },
      views: 956,
      comments: 18,
      likes: 142,
    },
    {
      id: 3,
      title: "Festival Special Recipes",
      excerpt:
        "Traditional recipes to celebrate Indian festivals with authentic vegetarian dishes. Perfect for Diwali, Holi, and other festive occasions.",
      content: "Full article content here...",
      date: "June 15, 2025",
      readTime: "10 min read",
      category: "Recipes",
      tags: ["Festive", "Traditional", "Vegetarian"],
      image:
        "https://readdy.ai/api/search-image?query=Beautifully%2520arranged%2520traditional%2520Indian%2520festival%2520food%2520display%2520with%2520colorful%2520sweets%2520like%2520gulab%2520jamun%2520and%2520jalebi%252C%2520savory%2520snacks%252C%2520decorated%2520thalis%252C%2520and%2520festive%2520elements%2520like%2520diyas%2520and%2520flower%2520petals%2520on%2520an%2520elegant%2520table%2520setting%2520with%2520warm%2520ambient%2520lighting&width=800&height=500&seq=103&orientation=landscape",
      author: {
        name: "Chef Amit Patel",
        role: "Pastry Chef",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520male%2520chef%2520in%2520his%2520mid-thirties%2520wearing%2520a%2520traditional%2520chef%2520coat%2520with%2520a%2520friendly%2520smile%2520against%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520highlighting%2520his%2520approachable%2520expertise&width=200&height=200&seq=203&orientation=squarish",
      },
      views: 1820,
      comments: 45,
      likes: 263,
    },
    {
      id: 4,
      title: "The Health Benefits of Sattvic Cuisine",
      excerpt:
        "Explore the ancient wisdom behind Sattvic food principles and how they contribute to physical well-being and mental clarity.",
      content: "Full article content here...",
      date: "June 12, 2025",
      readTime: "7 min read",
      category: "Health & Wellness",
      tags: ["Sattvic", "Health & Wellness", "Traditional"],
      image:
        "https://readdy.ai/api/search-image?query=Balanced%2520Sattvic%2520meal%2520with%2520fresh%2520fruits%252C%2520whole%2520grains%252C%2520lentils%252C%2520dairy%252C%2520and%2520lightly%2520spiced%2520vegetables%2520arranged%2520harmoniously%2520on%2520a%2520white%2520plate%2520with%2520natural%2520elements%2520like%2520flowers%2520and%2520leaves%2520in%2520soft%2520natural%2520lighting%2520conveying%2520purity%2520and%2520balance&width=800&height=500&seq=104&orientation=landscape",
      author: {
        name: "Dr. Meena Iyer",
        role: "Ayurvedic Consultant",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520woman%2520in%2520her%2520fifties%2520with%2520elegant%2520gray-streaked%2520hair%2520wearing%2520professional%2520attire%2520with%2520a%2520warm%2520knowledgeable%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520conveying%2520wisdom%2520and%2520expertise&width=200&height=200&seq=204&orientation=squarish",
      },
      views: 1056,
      comments: 27,
      likes: 198,
    },
    {
      id: 5,
      title: "Modern Twists on Traditional Thali",
      excerpt:
        "How our chefs are reimagining the classic Indian thali with contemporary techniques while respecting traditional flavors.",
      content: "Full article content here...",
      date: "June 10, 2025",
      readTime: "5 min read",
      category: "Culinary Insights",
      tags: ["Traditional", "Innovation", "Dinner"],
      image:
        "https://readdy.ai/api/search-image?query=Modern%2520interpretation%2520of%2520traditional%2520Indian%2520thali%2520with%2520elegantly%2520plated%2520small%2520portions%2520of%2520various%2520dishes%2520in%2520contemporary%2520serving%2520vessels%252C%2520artistic%2520presentation%2520with%2520edible%2520flowers%2520and%2520microgreens%2520on%2520a%2520sleek%2520black%2520slate%2520surface%2520with%2520sophisticated%2520restaurant%2520lighting&width=800&height=500&seq=105&orientation=landscape",
      author: {
        name: "Chef Vikram Singh",
        role: "Executive Chef",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520male%2520executive%2520chef%2520in%2520his%2520forties%2520wearing%2520a%2520black%2520chef%2520coat%2520with%2520a%2520confident%2520authoritative%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520professional%2520lighting%2520highlighting%2520his%2520culinary%2520leadership&width=200&height=200&seq=205&orientation=squarish",
      },
      views: 876,
      comments: 14,
      likes: 132,
    },
    {
      id: 6,
      title: "Seasonal Menu Changes: Summer Edition",
      excerpt:
        "Introducing our new summer menu featuring light, refreshing dishes perfect for the warm weather using seasonal produce.",
      content: "Full article content here...",
      date: "June 8, 2025",
      readTime: "4 min read",
      category: "Restaurant News",
      tags: ["Seasonal", "Summer", "Fresh"],
      image:
        "https://readdy.ai/api/search-image?query=Bright%2520summer%2520Indian%2520vegetarian%2520spread%2520with%2520colorful%2520salads%252C%2520chilled%2520soups%252C%2520fruit-based%2520desserts%252C%2520and%2520refreshing%2520drinks%2520garnished%2520with%2520mint%2520and%2520citrus%252C%2520beautifully%2520arranged%2520on%2520a%2520light-colored%2520table%2520with%2520natural%2520sunlight%2520creating%2520a%2520fresh%2520summer%2520ambiance&width=800&height=500&seq=106&orientation=landscape",
      author: {
        name: "Ananya Desai",
        role: "Food & Beverage Manager",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520woman%2520in%2520her%2520early%2520thirties%2520with%2520shoulder-length%2520dark%2520hair%2520wearing%2520business%2520attire%2520with%2520a%2520professional%2520friendly%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520conveying%2520approachability%2520and%2520competence&width=200&height=200&seq=206&orientation=squarish",
      },
      views: 745,
      comments: 9,
      likes: 98,
    },
    {
      id: 7,
      title: "Gluten-Free Indian Breads",
      excerpt:
        "Discover our specially crafted gluten-free alternatives to traditional Indian breads that don't compromise on taste or texture.",
      content: "Full article content here...",
      date: "June 5, 2025",
      readTime: "6 min read",
      category: "Recipes",
      tags: ["Gluten-Free", "Bread", "Dietary Restrictions"],
      image:
        "https://readdy.ai/api/search-image?query=Assortment%2520of%2520gluten-free%2520Indian%2520breads%2520including%2520alternative%2520grain%2520rotis%252C%2520dosas%2520and%2520uttapams%2520made%2520with%2520rice%2520and%2520lentil%2520flours%252C%2520served%2520with%2520various%2520chutneys%2520and%2520accompaniments%2520on%2520traditional%2520banana%2520leaves%2520with%2520warm%2520ambient%2520lighting&width=800&height=500&seq=107&orientation=landscape",
      author: {
        name: "Neha Sharma",
        role: "Nutritionist & Recipe Developer",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520woman%2520in%2520her%2520mid-thirties%2520with%2520long%2520dark%2520hair%2520wearing%2520smart%2520casual%2520attire%2520with%2520a%2520warm%2520knowledgeable%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520soft%2520lighting%2520conveying%2520health%2520expertise&width=200&height=200&seq=207&orientation=squarish",
      },
      views: 1120,
      comments: 31,
      likes: 176,
    },
    {
      id: 8,
      title: "Behind the Scenes: Our Kitchen Operations",
      excerpt:
        "Take a tour of our kitchen and learn about the meticulous processes that ensure quality and consistency in every dish we serve.",
      content: "Full article content here...",
      date: "June 2, 2025",
      readTime: "8 min read",
      category: "Restaurant News",
      tags: ["Kitchen", "Operations", "Quality Control"],
      image:
        "https://readdy.ai/api/search-image?query=Professional%2520Indian%2520restaurant%2520kitchen%2520with%2520chefs%2520in%2520white%2520uniforms%2520working%2520at%2520various%2520stations%252C%2520modern%2520equipment%252C%2520gleaming%2520stainless%2520steel%2520surfaces%252C%2520and%2520organized%2520mise%2520en%2520place%2520with%2520vibrant%2520ingredients%2520in%2520bright%2520kitchen%2520lighting%2520showing%2520culinary%2520professionalism&width=800&height=500&seq=108&orientation=landscape",
      author: {
        name: "Sanjay Kapoor",
        role: "Operations Manager",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520man%2520in%2520his%2520late%2520thirties%2520wearing%2520business%2520attire%2520with%2520a%2520confident%2520efficient%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520professional%2520lighting%2520conveying%2520operational%2520expertise&width=200&height=200&seq=208&orientation=squarish",
      },
      views: 832,
      comments: 12,
      likes: 94,
    },
    {
      id: 9,
      title: "Quick Vegetarian Breakfast Ideas",
      excerpt:
        "Start your day right with these nutritious and delicious Indian breakfast recipes that can be prepared in under 30 minutes.",
      content: "Full article content here...",
      date: "May 30, 2025",
      readTime: "5 min read",
      category: "Recipes",
      tags: ["Breakfast", "Quick Recipes", "Vegetarian"],
      image:
        "https://readdy.ai/api/search-image?query=Variety%2520of%2520quick%2520Indian%2520vegetarian%2520breakfast%2520items%2520including%2520upma%252C%2520poha%252C%2520idli%252C%2520and%2520vegetable%2520sandwich%2520arranged%2520on%2520a%2520breakfast%2520table%2520with%2520fresh%2520fruits%252C%2520chai%252C%2520and%2520morning%2520sunlight%2520creating%2520an%2520inviting%2520start%2520to%2520the%2520day&width=800&height=500&seq=109&orientation=landscape",
      author: {
        name: "Chef Ritu Verma",
        role: "Breakfast Chef",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520female%2520chef%2520in%2520her%2520late%2520twenties%2520wearing%2520a%2520chef%2520coat%2520with%2520a%2520bright%2520energetic%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520morning%2520light%2520quality%2520conveying%2520freshness%2520and%2520vitality&width=200&height=200&seq=209&orientation=squarish",
      },
      views: 1560,
      comments: 38,
      likes: 215,
    },
    {
      id: 10,
      title: "The Perfect Vegetarian Dinner Party Menu",
      excerpt:
        "Impress your guests with this elegant multi-course Indian vegetarian menu complete with planning tips and preparation timeline.",
      content: "Full article content here...",
      date: "May 28, 2025",
      readTime: "12 min read",
      category: "Recipes",
      tags: ["Dinner", "Entertaining", "Party"],
      image:
        "https://readdy.ai/api/search-image?query=Elegant%2520Indian%2520dinner%2520party%2520setup%2520with%2520beautifully%2520plated%2520vegetarian%2520dishes%252C%2520decorative%2520serving%2520platters%252C%2520ambient%2520candle%2520lighting%252C%2520fine%2520dinnerware%252C%2520and%2520tasteful%2520table%2520decorations%2520creating%2520a%2520sophisticated%2520dining%2520experience%2520for%2520guests&width=800&height=500&seq=110&orientation=landscape",
      author: {
        name: "Chef Arjun Nair",
        role: "Catering Specialist",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520male%2520chef%2520in%2520his%2520mid-thirties%2520wearing%2520formal%2520chef%2520attire%2520with%2520a%2520sophisticated%2520professional%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520elegant%2520lighting%2520conveying%2520culinary%2520refinement&width=200&height=200&seq=210&orientation=squarish",
      },
      views: 1245,
      comments: 29,
      likes: 187,
    },
    {
      id: 11,
      title: "Vegan Alternatives in Indian Cooking",
      excerpt:
        "Explore plant-based substitutions for traditional dairy-heavy Indian recipes without sacrificing authentic flavors.",
      content: "Full article content here...",
      date: "May 25, 2025",
      readTime: "7 min read",
      category: "Recipes",
      tags: ["Vegan", "Dairy-Free", "Plant-Based"],
      image:
        "https://readdy.ai/api/search-image?query=Vegan%2520Indian%2520food%2520spread%2520with%2520plant-based%2520alternatives%2520like%2520coconut%2520yogurt%2520raita%252C%2520cashew%2520cream%2520curries%252C%2520and%2520dairy-free%2520desserts%2520alongside%2520traditional%2520dishes%2520made%2520vegan%252C%2520presented%2520on%2520eco-friendly%2520serveware%2520with%2520natural%2520lighting&width=800&height=500&seq=111&orientation=landscape",
      author: {
        name: "Maya Reddy",
        role: "Vegan Cuisine Specialist",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520woman%2520in%2520her%2520early%2520thirties%2520with%2520a%2520modern%2520hairstyle%2520wearing%2520contemporary%2520chef%2520attire%2520with%2520a%2520progressive%2520friendly%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520fresh%2520lighting%2520conveying%2520innovation&width=200&height=200&seq=211&orientation=squarish",
      },
      views: 1380,
      comments: 42,
      likes: 226,
    },
    {
      id: 12,
      title: "Our Journey: From Food Stall to Restaurant Chain",
      excerpt:
        "The inspiring story of how Prasad Food Divine grew from humble beginnings to become a beloved restaurant brand.",
      content: "Full article content here...",
      date: "May 22, 2025",
      readTime: "10 min read",
      category: "Restaurant News",
      tags: ["Business Story", "Growth", "Inspiration"],
      image:
        "https://readdy.ai/api/search-image?query=Visual%2520storytelling%2520collage%2520showing%2520the%2520evolution%2520of%2520an%2520Indian%2520restaurant%2520business%2520from%2520a%2520simple%2520food%2520stall%2520with%2520basic%2520setup%2520to%2520a%2520modern%2520elegant%2520restaurant%2520with%2520multiple%2520locations%252C%2520featuring%2520the%2520same%2520family%2520owners%2520throughout%2520the%2520journey&width=800&height=500&seq=112&orientation=landscape",
      author: {
        name: "Rahul Prasad",
        role: "Founder & CEO",
        image:
          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520man%2520in%2520his%2520fifties%2520with%2520distinguished%2520gray%2520hair%2520wearing%2520business%2520formal%2520attire%2520with%2520a%2520wise%2520confident%2520expression%2520against%2520a%2520neutral%2520background%2520with%2520professional%2520lighting%2520conveying%2520leadership&width=200&height=200&seq=212&orientation=squarish",
      },
      views: 1820,
      comments: 56,
      likes: 312,
    },
  ];

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" ||
      post.category.toLowerCase().replace(/\s+/g, "-") === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "popular") {
      return b.views - a.views;
    }
    return 0;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle sort change
  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      <main className="pt-16">
        {/* Blog Header Section */}
        <div className="relative bg-[#800000] text-white py-16">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%2520Indian%2520spices%2520and%2520ingredients%2520arranged%2520in%2520an%2520artistic%2520pattern%2520with%2520vibrant%2520colors%2520of%2520turmeric%252C%2520red%2520chili%252C%2520coriander%252C%2520and%2520various%2520lentils%2520creating%2520a%2520rich%2520textural%2520background%2520with%2520warm%2520lighting%2520highlighting%2520the%2520culinary%2520heritage&width=1440&height=500&seq=301&orientation=landscape')`,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif mb-6">
                Food & Culture Blog
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Explore our culinary stories, recipes, and insights into Indian
                vegetarian cuisine.
              </p>

              {/* Breadcrumb */}
              <div className="flex items-center justify-center text-sm mb-8">
                <a
                  href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/dbde8e9e-afc8-408a-8679-4ca616319c1c"
                  data-readdy="true"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
                <span className="mx-2 text-white/60">&gt;</span>
                <span className="text-white">Blog</span>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles, recipes, and more..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white cursor-pointer !rounded-button whitespace-nowrap">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs & Filters */}
        <div className="bg-white sticky top-16 z-30 shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 space-y-4 md:space-y-0">
              {/* Category Tabs */}
              <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                <div className="flex space-x-1 md:space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer !rounded-button ${
                        activeCategory === category.id
                          ? "bg-[#800000] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500">Sort by:</span>
                <div className="relative">
                  <button
                    onClick={() => setShowSortOptions(!showSortOptions)}
                    className="flex items-center space-x-1 bg-white border border-gray-300 rounded-md px-3 py-1.5 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <span className="font-medium">
                      {sortBy === "latest"
                        ? "Latest"
                        : sortBy === "oldest"
                        ? "Oldest"
                        : "Most Popular"}
                    </span>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </button>
                  <div
                    className={`absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200 ${
                      showSortOptions ? "visible" : "invisible"
                    }`}
                  >
                    <div className="py-1">
                      <button
                        onClick={() => handleSortChange("latest")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortBy === "latest"
                            ? "bg-gray-100 text-[#800000]"
                            : "text-gray-700 hover:bg-gray-50"
                        } cursor-pointer !rounded-button whitespace-nowrap`}
                      >
                        Latest
                      </button>
                      <button
                        onClick={() => handleSortChange("oldest")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortBy === "oldest"
                            ? "bg-gray-100 text-[#800000]"
                            : "text-gray-700 hover:bg-gray-50"
                        } cursor-pointer !rounded-button whitespace-nowrap`}
                      >
                        Oldest
                      </button>
                      <button
                        onClick={() => handleSortChange("popular")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortBy === "popular"
                            ? "bg-gray-100 text-[#800000]"
                            : "text-gray-700 hover:bg-gray-50"
                        } cursor-pointer !rounded-button whitespace-nowrap`}
                      >
                        Most Popular
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tag Cloud */}
        <div className="bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-500">
                Popular Tags:
              </span>
              {tags.slice(0, 8).map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  {tag}
                </button>
              ))}
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#FF9933] text-xs font-medium hover:underline cursor-pointer !rounded-button whitespace-nowrap"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Blog Posts Grid */}
              <div className="lg:w-full">
                {/* <div className="lg:w-3/4"> */}
                {searchQuery && (
                  <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-600">
                      Showing results for{" "}
                      <span className="font-medium text-[#800000]">
                        "{searchQuery}"
                      </span>{" "}
                      - {filteredPosts.length}{" "}
                      {filteredPosts.length === 1 ? "post" : "posts"} found
                    </p>
                  </div>
                )}

                {currentPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 text-[#800000] px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </div>
                          {/* <div className="absolute top-4 right-4 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <i className="far fa-clock mr-1 text-[#FF9933]"></i>
                            {post.readTime}
                          </div> */}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-serif text-[#800000] mb-3 hover:text-[#FF9933] transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              {post.tags.length > 2 && (
                                <span className="text-gray-500 text-xs flex items-center">
                                  +{post.tags.length - 2} more
                                </span>
                              )}
                            </div>
                            {/* <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <img
                                  src={post.author.image}
                                  alt={post.author.name}
                                  className="w-8 h-8 rounded-full object-cover"
                                />
                                <div>
                                  <p className="text-sm font-medium text-gray-800">
                                    {post.author.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {post.date}
                                  </p>
                                </div>
                              </div>
                            </div> */}
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                              {/* <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <i className="far fa-eye mr-1"></i>{" "}
                                  {post.views}
                                </span>
                                <span className="flex items-center">
                                  <i className="far fa-comment mr-1"></i>{" "}
                                  {post.comments}
                                </span>
                                <span className="flex items-center">
                                  <i className="far fa-heart mr-1"></i>{" "}
                                  {post.likes}
                                </span>
                              </div> */}
                              <Link
                                to={`/blogs/${post.title}`}
                                className="text-[#FF9933] hover:text-[#e88a2a] text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-search text-gray-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      No posts found
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any posts matching your search criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                      className="bg-[#800000] hover:bg-[#6a0000] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
                        } !rounded-button whitespace-nowrap`}
                      >
                        <i className="fas fa-chevron-left text-xs"></i>
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (number) => (
                          <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              currentPage === number
                                ? "bg-[#800000] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                            } cursor-pointer !rounded-button whitespace-nowrap`}
                          >
                            {number}
                          </button>
                        )
                      )}

                      <button
                        onClick={() =>
                          paginate(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          currentPage === totalPages
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
                        } !rounded-button whitespace-nowrap`}
                      >
                        <i className="fas fa-chevron-right text-xs"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              {/* <div className="lg:w-1/4 space-y-8">
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#800000] mb-4 relative pb-2">
                      About Our Blog
                      <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#FF9933]"></span>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Welcome to Prasad Food Divine's culinary journal where we
                      share our passion for authentic Indian vegetarian cuisine,
                      cooking tips, and food stories.
                    </p>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center text-[#800000]">
                        <i className="fas fa-utensils"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">100+ Recipes</p>
                        <p className="text-xs text-gray-500">
                          Traditional & Modern
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center text-[#800000]">
                        <i className="fas fa-users"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          12 Expert Contributors
                        </p>
                        <p className="text-xs text-gray-500">
                          Chefs & Food Specialists
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center text-[#800000]">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Weekly Updates</p>
                        <p className="text-xs text-gray-500">
                          Fresh Content Every Week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

               
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#800000] mb-4 relative pb-2">
                      Popular Posts
                      <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#FF9933]"></span>
                    </h3>
                    <div className="space-y-4">
                      {blogPosts
                        .sort((a, b) => b.views - a.views)
                        .slice(0, 4)
                        .map((post) => (
                          <div
                            key={post.id}
                            className="flex space-x-3 cursor-pointer"
                          >
                            <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-800 hover:text-[#FF9933] transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {post.date}
                              </p>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <i className="far fa-eye mr-1"></i>{" "}
                                  {post.views}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#800000] mb-4 relative pb-2">
                      Categories
                      <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#FF9933]"></span>
                    </h3>
                    <div className="space-y-2">
                      {categories
                        .filter((category) => category.id !== "all")
                        .map((category) => {
                          const count = blogPosts.filter(
                            (post) =>
                              post.category
                                .toLowerCase()
                                .replace(/\s+/g, "-") === category.id
                          ).length;

                          return (
                            <button
                              key={category.id}
                              onClick={() => setActiveCategory(category.id)}
                              className="flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-gray-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                            >
                              <span className="text-gray-700">
                                {category.name}
                              </span>
                              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                                {count}
                              </span>
                            </button>
                          );
                        })}
                    </div>
                  </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#800000] mb-4 relative pb-2">
                      Popular Tags
                      <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#FF9933]"></span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                
                <div className="bg-gradient-to-br from-[#800000] to-[#4a0000] rounded-xl shadow-md overflow-hidden text-white">
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-4 relative pb-2">
                      Subscribe to Our Newsletter
                      <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#FF9933]"></span>
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Get the latest recipes, cooking tips, and exclusive
                      content delivered to your inbox.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#FF9933] hover:bg-[#e88a2a] text-white px-4 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-white/60 text-xs mt-3">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#800000] to-[#4a0000] rounded-2xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2 p-10 text-white">
                  <h2 className="text-3xl font-serif mb-4">
                    Experience Our Culinary Delights
                  </h2>
                  <p className="text-white/80 mb-6">
                    Reading about our food is one thing, but tasting it is
                    another experience altogether. Visit us to enjoy our
                    authentic vegetarian cuisine.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Contact Us
                    </Link>
                    {/* <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                      View Our Menu
                    </button> */}
                  </div>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%2520Indian%2520restaurant%2520interior%2520with%2520warm%2520ambient%2520lighting%252C%2520beautifully%2520set%2520tables%2520with%2520white%2520tablecloths%252C%2520traditional%2520decorative%2520elements%252C%2520and%2520a%2520sophisticated%2520atmosphere%2520that%2520combines%2520modern%2520luxury%2520with%2520authentic%2520Indian%2520cultural%2520touches&width=800&height=600&seq=302&orientation=landscape')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blogs;
