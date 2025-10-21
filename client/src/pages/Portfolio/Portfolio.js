import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Portfolio.css';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  
  // Scroll reveal hooks
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.3 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  const filters = ['all', 'branding', 'packaging', 'ai-automation', 'web-dev', 'marketing', 'business'];

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/portfolio`);
      setPortfolioItems(response.data);
      setFilteredItems(response.data);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      // Use demo data if API fails
      const demoData = [
        {
          _id: '1',
          title: 'AI Label Flat App',
          description: 'Revolutionary AI-powered label generation system using DALL-E and GPT integration. Automatically creates structured product labels with compliance information and branding.',
          category: 'ai-automation',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
          link: '#',
          technologies: ['React', 'Next.js', 'OpenAI API', 'DALL-E', 'GPT-4']
        },
        {
          _id: '2',
          title: 'Savvy Turtle Energy Drink Brand',
          description: 'Complete brand identity and packaging design for Savvy Turtle energy drink line. Includes mascot design, flavor campaigns, and Shell Shocked marketing initiative.',
          category: 'branding',
          image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800&q=80',
          link: '#',
          technologies: ['Brand Identity', 'Mascot Design', 'Social Media', 'Campaign Strategy']
        },
        {
          _id: '3',
          title: 'Premium Beer Label Series',
          description: 'Craft beer label designs with 3D mockups and realistic bottle renders. Complete die-line creation and compliance info integration for print manufacturers.',
          category: 'packaging',
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80',
          link: '#',
          technologies: ['Label Design', '3D Mockups', 'Die-line Creation', 'Print Production']
        },
        {
          _id: '4',
          title: 'Paintbrush Marketing Website',
          description: 'Full-stack website for AI design and branding agency. Features dynamic portfolio rendering, client showcase, and service integration.',
          category: 'web-dev',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
          link: '#',
          technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Vercel']
        },
        {
          _id: '5',
          title: 'Vape Product Line Packaging',
          description: 'Modern vape product packaging with zone-based template system. Includes regulatory compliance, ingredient listings, and eye-catching graphics.',
          category: 'packaging',
          image: 'https://images.unsplash.com/photo-1594923736144-29e1f6c13e2e?w=800&q=80',
          link: '#',
          technologies: ['Packaging Design', 'Compliance Graphics', 'Product Photography', 'Print Ready']
        },
        {
          _id: '6',
          title: 'Viral Social Media Campaign',
          description: '80M+ views achieved through strategic short-form content and storytelling. Includes scriptwriting, video marketing, and platform optimization for TikTok and Instagram.',
          category: 'marketing',
          image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
          link: '#',
          technologies: ['Video Marketing', 'Scriptwriting', 'Social Media', 'Viral Content']
        },
        {
          _id: '7',
          title: 'E-Commerce Shopify Store',
          description: 'Complete e-commerce store setup with custom theme, product optimization, and conversion-focused design. Includes SEO optimization and payment integration.',
          category: 'web-dev',
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
          link: '#',
          technologies: ['Shopify', 'Liquid', 'SEO', 'Payment Integration', 'Analytics']
        },
        {
          _id: '8',
          title: 'Supplement Label Design System',
          description: 'Professional supplement label designs with full nutritional compliance. Includes front and back label generation with ingredient lists and regulatory information.',
          category: 'packaging',
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
          link: '#',
          technologies: ['FDA Compliance', 'Nutrition Labels', '3D Renders', 'Product Design']
        },
        {
          _id: '9',
          title: 'Small Business Branding Workshop',
          description: 'Comprehensive brand strategy workshop for TOBA members. Covers logo creation, brand consistency systems, and digital presence optimization.',
          category: 'business',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
          link: '#',
          technologies: ['Consulting', 'Brand Strategy', 'Workshop Planning', 'Community Outreach']
        },
        {
          _id: '10',
          title: 'Wine Label Collection',
          description: 'Elegant wine label designs with premium aesthetics. Features custom typography, color palette curation, and layout hierarchy for luxury positioning.',
          category: 'packaging',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
          link: '#',
          technologies: ['Wine Labels', 'Typography', 'Luxury Branding', 'Print Design']
        },
        {
          _id: '11',
          title: 'Fine-Tuned AI Design Models',
          description: 'Custom OpenAI model training with JSONL datasets for design automation. Integration with Stable Diffusion and ControlNet for visual precision.',
          category: 'ai-automation',
          image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
          link: '#',
          technologies: ['OpenAI Fine-tuning', 'JSONL', 'Stable Diffusion', 'ControlNet', 'Python']
        },
        {
          _id: '12',
          title: 'Multi-Brand Corporate Identity',
          description: 'Cohesive brand identity system for multiple business ventures including Paintbrush Marketing, TaxesByRoss, Titan Couriers, and Rent & Relax USA.',
          category: 'branding',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
          link: '#',
          technologies: ['Multi-Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines']
        }
      ];
      setPortfolioItems(demoData);
      setFilteredItems(demoData);
    } finally {
      setLoading(false);
    }
  };

  const filterItems = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category));
    }
  };

  const formatFilterLabel = (filter) => {
    const labels = {
      'all': 'All',
      'branding': 'Branding',
      'packaging': 'Packaging',
      'ai-automation': 'AI Automation',
      'web-dev': 'Web Development',
      'marketing': 'Marketing',
      'business': 'Business'
    };
    return labels[filter] || filter;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      <div className="container">
        <h1 className={`section-title fade-in-up ${headerVisible ? 'scroll-reveal' : ''}`} ref={headerRef}>My Portfolio</h1>
        <p className={`portfolio-subtitle fade-in-up ${headerVisible ? 'scroll-reveal' : ''}`}>A showcase of creative design, AI innovation, and multi-industry projects</p>

        {/* Filter Buttons */}
        <div className={`portfolio-filters fade-in-up ${headerVisible ? 'scroll-reveal' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => filterItems(filter)}
            >
              {formatFilterLabel(filter)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className={`portfolio-grid ${gridVisible ? 'scroll-reveal' : ''}`} ref={gridRef}>
          {filteredItems.map((item, index) => (
            <div 
              key={item._id} 
              className="portfolio-item fade-in-up"
              data-category={item.category}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image-wrapper">
                <img src={item.image} alt={item.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <a 
                    href="https://www.behance.net/Paintbrushmarketing" 
                    className="view-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSearch /> View Details
                  </a>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{formatFilterLabel(item.category)}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.technologies && (
                  <div className="portfolio-technologies">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
