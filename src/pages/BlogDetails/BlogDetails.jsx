import { Link } from "react-router-dom";

const BlogDetails = () => {
  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: "Regional Variations in Indian Spice Blends",
      excerpt:
        "Explore how spice combinations change across different regions of India and what makes each unique.",
      image:
        "https://readdy.ai/api/search-image?query=Map%20of%20India%20with%20different%20regions%20highlighted%20showing%20various%20spice%20collections%20from%20each%20area%20with%20regional%20spice%20mixes%20in%20small%20bowls%20arranged%20geographically%20with%20warm%20lighting%20on%20a%20wooden%20surface&width=400&height=250&seq=601&orientation=landscape",
      category: "Culinary Insights",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Healing Properties of Common Kitchen Spices",
      excerpt:
        "Discover the Ayurvedic medicinal benefits behind everyday Indian spices found in your kitchen.",
      image:
        "https://readdy.ai/api/search-image?query=Ayurvedic%20medicine%20concept%20with%20common%20Indian%20kitchen%20spices%20like%20turmeric%20ginger%20cardamom%20cinnamon%20arranged%20with%20mortar%20and%20pestle%20medicinal%20herbs%20and%20small%20bottles%20of%20essential%20oils%20on%20natural%20fabric&width=400&height=250&seq=602&orientation=landscape",
      category: "Health & Wellness",
      readTime: "9 min read",
    },
    {
      id: 4,
      title: "Modern Fusion: Indian Spices in International Cuisine",
      excerpt:
        "How chefs around the world are incorporating traditional Indian spices into non-Indian dishes.",
      image:
        "https://readdy.ai/api/search-image?query=Fusion%20cuisine%20dishes%20featuring%20Indian%20spices%20in%20international%20recipes%20like%20turmeric%20risotto%20curry%20infused%20pasta%20garam%20masala%20roasted%20vegetables%20and%20cardamom%20chocolate%20desserts%20elegantly%20plated%20on%20modern%20dinnerware&width=400&height=250&seq=603&orientation=landscape",
      category: "Culinary Insights",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      <main className="pt-24">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link
                to="/"
                className="hover:text-[#800000] transition-colors cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <Link
                to="/blogs"
                data-readdy="true"
                className="hover:text-[#800000] transition-colors cursor-pointer"
              >
                Blogs
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-[#800000]">The Art of Indian Spices</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-8 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-full">
                {/* <div className="lg:w-3/4"> */}
                {/* Back to Blog Button */}
                <a
                  href="https://readdy.ai/home/55548fe4-7589-4e6a-8f24-b1011f92292e/e144530f-8758-468e-8b0c-b41e9de02be2"
                  data-readdy="true"
                  className="inline-flex items-center mb-6 text-[#800000] hover:text-[#FF9933] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to Blog
                </a>

                {/* Featured Image */}
                <div className="rounded-xl overflow-hidden mb-8 shadow-md">
                  <img
                    src="https://readdy.ai/api/search-image?query=Artistic%20arrangement%20of%20colorful%20Indian%20spices%20in%20traditional%20copper%20and%20brass%20containers%20with%20mortar%20and%20pestle%2C%20cinnamon%20sticks%2C%20cardamom%20pods%2C%20turmeric%20powder%2C%20red%20chili%20powder%2C%20and%20cumin%20seeds%20beautifully%20displayed%20against%20a%20rustic%20wooden%20background%20with%20warm%20lighting&width=1200&height=600&seq=101&orientation=landscape"
                    alt="The Art of Indian Spices"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-serif text-[#800000] mb-6">
                    The Art of Indian Spices
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    {/* Author Info */}
                    <div className="flex items-center">
                      {/* <img
                        src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20Indian%20female%20chef%20in%20her%20thirties%20wearing%20a%20white%20chef%20coat%20with%20a%20confident%20expression%20against%20a%20neutral%20background%20with%20soft%20lighting%20highlighting%20her%20professional%20demeanor&width=200&height=200&seq=201&orientation=squarish"
                        alt="Chef Priya Sharma"
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      /> */}
                      <div>
                        <p className="text-xs text-gray-500">Author</p>
                        <p className="text-sm font-medium">Chef Priya Sharma</p>
                      </div>
                    </div>

                    {/* Publication Date */}
                    <div className="flex items-center text-gray-600 text-sm">
                      <i className="far fa-calendar-alt mr-2 text-[#FF9933]"></i>
                      June 20, 2025
                    </div>

                    {/* Read Time */}
                    {/* <div className="flex items-center text-gray-600 text-sm">
                      <i className="far fa-clock mr-2 text-[#FF9933]"></i>8 min
                      read
                    </div> */}

                    {/* Category */}
                    <div className="flex items-center">
                      <span className="bg-[#FF9933]/10 text-[#FF9933] text-xs px-3 py-1 rounded-full font-medium">
                        Culinary Insights
                      </span>
                    </div>
                  </div>

                  {/* Social Share */}
                  {/* <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">Share:</span>
                    <button className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fab fa-whatsapp"></i>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fas fa-envelope"></i>
                    </button>
                  </div> */}
                </div>

                {/* Article Content */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-6 leading-relaxed">
                      In the heart of Indian cuisine lies a treasure trove of
                      spices that have been celebrated for centuries not just
                      for their flavors, but for their remarkable health
                      benefits. These aromatic ingredients are the soul of our
                      dishes, transforming simple vegetables and grains into
                      culinary masterpieces that delight the senses and nourish
                      the body.
                    </p>

                    <h2 className="text-2xl font-serif text-[#800000] mt-8 mb-4">
                      The Foundation of Indian Spice Blends
                    </h2>

                    <p className="mb-6 leading-relaxed">
                      Every Indian kitchen houses a spice box, or "masala
                      dabba," containing the essential spices that form the
                      foundation of our cooking. These typically include cumin,
                      coriander, turmeric, red chili, mustard seeds, and
                      fenugreek. The art lies not just in using these spices
                      individually, but in understanding how they interact with
                      each other to create complex flavor profiles.
                    </p>

                    <div className="bg-[#FFFDD0] border-l-4 border-[#800000] p-4 my-6 rounded-r-md">
                      <p className="italic text-[#800000]">
                        "Spices are the poetry of Indian cooking – each one has
                        its own voice, but when combined thoughtfully, they
                        create a harmony that is greater than the sum of its
                        parts."
                      </p>
                    </div>

                    <p className="mb-6 leading-relaxed">
                      The sequence in which spices are added to a dish is
                      crucial. Some are tempered in hot oil at the beginning to
                      release their essential oils, while others are added later
                      to preserve their delicate aromas. This layering of
                      flavors is what gives Indian cuisine its distinctive depth
                      and complexity.
                    </p>

                    <h2 className="text-2xl font-serif text-[#800000] mt-8 mb-4">
                      Health Benefits Beyond Flavor
                    </h2>

                    <p className="mb-6 leading-relaxed">
                      Long before modern science confirmed their medicinal
                      properties, traditional wisdom recognized the healing
                      power of spices. Here are some of the remarkable health
                      benefits of common Indian spices:
                    </p>

                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li>
                        <strong>Turmeric:</strong> Contains curcumin, a powerful
                        anti-inflammatory compound that also has antioxidant
                        properties.
                      </li>
                      <li>
                        <strong>Cumin:</strong> Aids digestion, improves
                        immunity, and helps regulate blood sugar levels.
                      </li>
                      <li>
                        <strong>Cardamom:</strong> Freshens breath, improves
                        digestion, and has detoxifying properties.
                      </li>
                      <li>
                        <strong>Cinnamon:</strong> Helps lower blood sugar and
                        has antimicrobial effects.
                      </li>
                      <li>
                        <strong>Black Pepper:</strong> Contains piperine, which
                        enhances the absorption of nutrients and has
                        antibacterial properties.
                      </li>
                    </ul>

                    {/* In-article image */}
                    {/* <div className="my-8 rounded-lg overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=Close-up%20of%20hands%20grinding%20fresh%20spices%20in%20a%20traditional%20stone%20mortar%20and%20pestle%20with%20vibrant%20turmeric%20cardamom%20cloves%20and%20cinnamon%20arranged%20around%20it%20on%20a%20rustic%20wooden%20surface%20with%20soft%20natural%20lighting%20highlighting%20the%20textures%20and%20colors&width=800&height=500&seq=301&orientation=landscape"
                        alt="Grinding fresh spices"
                        className="w-full h-auto"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">
                        Traditional stone mortar and pestle used for grinding
                        fresh spices to release their essential oils
                      </p>
                    </div> */}

                    <h2 className="text-2xl font-serif text-[#800000] mt-8 mb-4">
                      Balancing Flavors: The Six Tastes
                    </h2>

                    <p className="mb-6 leading-relaxed">
                      Ayurveda, India's ancient system of medicine, recognizes
                      six tastes that should be included in a balanced meal:
                      sweet, sour, salty, pungent, bitter, and astringent.
                      Spices play a crucial role in achieving this balance,
                      which is believed to promote optimal digestion and overall
                      health.
                    </p>

                    <p className="mb-6 leading-relaxed">
                      For example, a pinch of asafoetida (hing) can reduce the
                      gaseous effects of beans and lentils, while a touch of
                      ginger can make heavy foods more digestible. This
                      thoughtful use of spices is not just about flavor
                      enhancement but about creating harmony within the body.
                    </p>

                    <h2 className="text-2xl font-serif text-[#800000] mt-8 mb-4">
                      Regional Variations in Spice Blends
                    </h2>

                    <p className="mb-6 leading-relaxed">
                      India's vast geographical diversity has given rise to
                      distinct regional cuisines, each with its signature spice
                      blends:
                    </p>

                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li>
                        <strong>North India:</strong> Garam masala, a warming
                        blend of cardamom, cinnamon, cloves, and black pepper,
                        dominates the cuisine.
                      </li>
                      <li>
                        <strong>South India:</strong> Curry leaves, mustard
                        seeds, and dried red chilies feature prominently in
                        tempering.
                      </li>
                      <li>
                        <strong>East India:</strong> Panch phoron, a five-spice
                        blend of cumin, fennel, fenugreek, nigella, and mustard
                        seeds, is distinctive to Bengali cuisine.
                      </li>
                      <li>
                        <strong>West India:</strong> Kokum, a souring agent, and
                        coconut-based masalas characterize the coastal cuisines.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#800000] mt-8 mb-4">
                      Modern Applications of Traditional Spices
                    </h2>

                    <p className="mb-6 leading-relaxed">
                      At Prasad Food Divine, we honor these ancient traditions
                      while embracing modern culinary techniques. Our chefs
                      experiment with innovative applications of traditional
                      spices – from turmeric-infused smoothies to
                      cardamom-scented desserts – creating dishes that are both
                      authentic and contemporary.
                    </p>

                    <p className="mb-6 leading-relaxed">
                      We also recognize that the quality of spices is paramount.
                      That's why we source our spices directly from sustainable
                      farms across India, ensuring they are fresh, potent, and
                      ethically produced. Many of our signature spice blends are
                      ground in-house to preserve their essential oils and
                      aromas.
                    </p>

                    <h2 className="text-2xl font-serif text-[#800000] mt-8 mb-4">
                      Tips for Using Indian Spices at Home
                    </h2>

                    <p className="mb-6 leading-relaxed">
                      For those looking to explore the world of Indian spices in
                      their own kitchens, here are some practical tips:
                    </p>

                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li>
                        Buy whole spices when possible and grind them as needed
                        to preserve their flavors.
                      </li>
                      <li>
                        Store spices in airtight containers away from direct
                        sunlight and heat.
                      </li>
                      <li>
                        Toast whole spices before grinding to enhance their
                        aromas.
                      </li>
                      <li>
                        Start with small amounts and adjust according to your
                        taste preferences.
                      </li>
                      <li>
                        Understand the cooking process – some spices are added
                        at the beginning, others at the end.
                      </li>
                    </ol>

                    <p className="mb-6 leading-relaxed">
                      Remember that spices are not just ingredients; they are
                      carriers of culture, history, and tradition. By
                      incorporating them into your cooking, you're participating
                      in a culinary legacy that spans thousands of years.
                    </p>

                    <h2 className="text-2xl font-serif text-[#800000] mt-8 mb-4">
                      Conclusion: The Continuing Journey
                    </h2>

                    <p className="mb-6 leading-relaxed">
                      The art of Indian spices is a lifelong journey of
                      discovery. Even after years of cooking with these aromatic
                      treasures, there are always new combinations to explore,
                      new techniques to master, and new dimensions of flavor to
                      uncover.
                    </p>

                    <p className="mb-6 leading-relaxed">
                      We invite you to join us on this journey, whether by
                      dining at our restaurant, participating in our cooking
                      workshops, or simply experimenting with spices in your own
                      kitchen. The world of Indian spices is vast and vibrant –
                      a universe of flavor waiting to be explored.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-gray-700 font-medium">Tags:</span>
                      <a
                        href="#"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Traditional
                      </a>
                      <a
                        href="#"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Spicy
                      </a>
                      <a
                        href="#"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Health & Wellness
                      </a>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h3 className="text-xl font-serif text-[#800000] mb-6 relative pb-2">
                    You Might Also Like
                    <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#FF9933]"></span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((post) => (
                      <div key={post.id} className="group">
                        <div className="rounded-lg overflow-hidden mb-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <Link to={`/blogs/${post.title}`} className="block">
                            <h4 className="text-lg font-medium text-gray-800 group-hover:text-[#FF9933] transition-colors mb-2 cursor-pointer">
                              {post.title}
                            </h4>
                          </Link>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="bg-[#FF9933]/10 text-[#FF9933] text-xs px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                            {/* <span className="text-gray-500 text-xs flex items-center">
                              <i className="far fa-clock mr-1"></i>
                              {post.readTime}
                            </span> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
