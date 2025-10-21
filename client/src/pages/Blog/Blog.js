import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Scroll reveal hooks
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.3 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/blog');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Demo data for development
      setPosts([
        {
          _id: '1',
          title: 'Cafe Lumiere of Paris',
          excerpt: 'Elegant Parisian café branding featuring sophisticated typography and classic French aesthetics. Complete brand identity with logo design, color palette, and packaging materials.',
          image: `${process.env.PUBLIC_URL}/images/CafeLumiereofParis.jpg`,
          tags: ['Branding', 'Logo Design', 'Café'],
          createdAt: new Date('2025-09-15')
        },
        {
          _id: '2',
          title: 'BlockChainY (UI and UX) HTML',
          excerpt: 'Modern blockchain platform UI/UX design with clean HTML structure. Features intuitive navigation, responsive layouts, and cryptocurrency-focused visual elements.',
          image: `${process.env.PUBLIC_URL}/images/BlockChainY(UIandUX)HTML.jpg`,
          tags: ['UI/UX', 'Web Design', 'Blockchain'],
          createdAt: new Date('2025-08-22')
        },
        {
          _id: '3',
          title: 'Coffee Ice Brew Package',
          excerpt: 'Premium cold brew coffee packaging design with modern minimalist aesthetics. Eye-catching label design featuring bold typography and refreshing color schemes.',
          image: `${process.env.PUBLIC_URL}/images/CoffeeIceBrewPackage.jpg`,
          tags: ['Packaging', 'Product Design', 'Coffee'],
          createdAt: new Date('2025-07-10')
        },
        {
          _id: '4',
          title: 'Nuclear Warning Energy Drink',
          excerpt: 'Bold and edgy energy drink branding with industrial aesthetics. Features striking warning-themed graphics, 3D can mockups, and compliance-ready label design.',
          image: `${process.env.PUBLIC_URL}/images/NuclearWarningEnergyDrink.jpg`,
          tags: ['Energy Drink', 'Packaging', 'Label Design'],
          createdAt: new Date('2025-06-18')
        },
        {
          _id: '5',
          title: 'Fender Hand Crafted Beer',
          excerpt: 'Artisan craft beer label design inspired by classic Fender guitar aesthetics. Premium packaging with vintage typography and handcrafted visual elements.',
          image: `${process.env.PUBLIC_URL}/images/FenderHandCraftedBeer.jpg`,
          tags: ['Beer Label', 'Craft Beer', 'Vintage Design'],
          createdAt: new Date('2025-05-25')
        },
        {
          _id: '6',
          title: 'Evolve Ur Game Energy Drink',
          excerpt: 'Gaming-focused energy drink branding with dynamic graphics and bold colors. Complete label system featuring front and back designs with nutritional compliance.',
          image: `${process.env.PUBLIC_URL}/images/EvolveUrGameEnergyDrink.jpg`,
          tags: ['Energy Drink', 'Gaming', 'Label Design'],
          createdAt: new Date('2025-10-05')
        },
        {
          _id: '7',
          title: 'Nike Concepts Shoes Design',
          excerpt: 'Conceptual Nike footwear design showcasing innovative sneaker aesthetics. Features product visualization, color variations, and lifestyle presentation.',
          image: `${process.env.PUBLIC_URL}/images/NikeConceptsShoesDesign.jpg`,
          tags: ['Product Design', 'Footwear', 'Concept Art'],
          createdAt: new Date('2025-04-12')
        },
        {
          _id: '8',
          title: 'GameOver Energy Wix Website',
          excerpt: 'Full e-commerce website design for GameOver Energy drink brand on Wix platform. Features responsive design, product showcase, and integrated shopping functionality.',
          image: `${process.env.PUBLIC_URL}/images/GameOverEnergyWixWebsite.jpg`,
          tags: ['Web Design', 'Wix', 'E-commerce'],
          createdAt: new Date('2025-03-08')
        },
        {
          _id: '9',
          title: 'Burger Advertising - Social Media',
          excerpt: 'Mouth-watering burger advertisement campaign designed for social media platforms. High-impact visuals optimized for Instagram, Facebook, and TikTok engagement.',
          image: `${process.env.PUBLIC_URL}/images/BurgerAdvertising-SocialMedia.jpg`,
          tags: ['Social Media', 'Advertising', 'Food Photography'],
          createdAt: new Date('2025-08-30')
        },
        {
          _id: '10',
          title: 'Grim Reaper Ale - Beer',
          excerpt: 'Dark and mysterious craft beer label featuring Grim Reaper themed artwork. Gothic aesthetic with premium label design and 3D bottle renders.',
          image: `${process.env.PUBLIC_URL}/images/GrimReaperAle-Beer.jpg`,
          tags: ['Beer Label', 'Gothic Design', 'Craft Beer'],
          createdAt: new Date('2025-02-14')
        },
        {
          _id: '11',
          title: '8th Avenue Mens Products',
          excerpt: 'Sophisticated men\'s grooming product line branding. Clean, masculine packaging design with modern typography and premium finishing touches.',
          image: `${process.env.PUBLIC_URL}/images/8thAvenueMensProducts.jpg`,
          tags: ['Mens Products', 'Packaging', 'Grooming'],
          createdAt: new Date('2025-07-28')
        },
        {
          _id: '12',
          title: 'Optimum Supplement Bottle (REMAKE)',
          excerpt: 'Redesigned supplement bottle packaging with FDA-compliant labeling. Features improved readability, nutritional information hierarchy, and modern fitness aesthetics.',
          image: `${process.env.PUBLIC_URL}/images/OptimumSupplementBottle(REMAKE).jpg`,
          tags: ['Supplements', 'FDA Compliance', 'Packaging'],
          createdAt: new Date('2025-09-03')
        },
        {
          _id: '13',
          title: 'Wank! Energy Drink',
          excerpt: 'Bold and provocative energy drink branding with edgy graphics and eye-catching design. Complete can design with front and back label compliance information.',
          image: `${process.env.PUBLIC_URL}/images/Wank!EnergyDrink.jpg`,
          tags: ['Energy Drink', 'Edgy Design', 'Label Design'],
          createdAt: new Date('2025-06-05')
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="blog">
        <div className="blog-loading">Loading designs...</div>
      </div>
    );
  }

  return (
    <div className="blog">
      <div className="blog-content">
        <h1 ref={headerRef} className={headerVisible ? 'scroll-reveal' : ''}>Designs</h1>
        <p className={`blog-subtitle ${headerVisible ? 'scroll-reveal' : ''}`}>
          Showcase of branding, packaging, web design, and creative projects
        </p>

        {posts.length === 0 ? (
          <div className="blog-empty">
            <h3>No designs yet</h3>
            <p>Check back soon for new content!</p>
          </div>
        ) : (
          <div className={`blog-grid ${gridVisible ? 'scroll-reveal' : ''}`} ref={gridRef}>
            {posts.map((post) => (
              <a 
                href="https://www.behance.net/Paintbrushmarketing" 
                key={post._id} 
                className="blog-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-image" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(post.createdAt)}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags && post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="read-more">
                    Learn More →
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
