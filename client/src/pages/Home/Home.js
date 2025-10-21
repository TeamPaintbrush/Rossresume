import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPalette, FaBullhorn, FaCode, FaBriefcase, FaLightbulb, 
  FaPaintBrush, FaBox, FaRobot, FaDesktop, FaSearch, 
  FaPenFancy, FaShareAlt, FaReact, FaGithub, FaGamepad,
  FaBuilding, FaUsers, FaChartLine, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import useScrollReveal from '../../hooks/useScrollReveal';
import DownloadResume from '../../components/Resume/DownloadResume';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  
  // Scroll reveal hooks
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.2 });
  const [aboutRef, aboutVisible] = useScrollReveal({ threshold: 0.3 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.2 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const services = [
    {
      icon: <FaPalette />,
      title: 'Creative & Design Skills',
      color: '#FF6B6B',
      description: 'Brand identity, packaging design, AI-driven design automation, and web design',
      subcategories: [
        {
          icon: <FaPaintBrush />,
          name: 'Brand Identity & Visual Design',
          skills: [
            'Logo creation (concept to final render)',
            'Brand consistency systems across packaging & web',
            'Moodboard and color-palette curation',
            'Typography pairing and layout hierarchy'
          ]
        },
        {
          icon: <FaBox />,
          name: 'Label & Packaging Design',
          skills: [
            'Expert in energy drink, beer, wine, vape, and supplement labels',
            'Flat label generation (front + back) with compliance info',
            '3D mockups and realistic can/bottle renders',
            'Die-line creation and dimension fitting for print manufacturers',
            'Zone-based template system (logo zone, info zone, regulatory zone)'
          ]
        },
        {
          icon: <FaRobot />,
          name: 'AI-Driven Design Automation',
          skills: [
            'Creator of AI Label Flat App — generates structured product labels with DALL-E / GPT integration',
            'JSONL training, fine-tuning OpenAI models for design tasks',
            'React/Next.js front-end systems with dynamic label rendering',
            'Integration with Stable Diffusion & ControlNet for visual precision'
          ]
        },
        {
          icon: <FaDesktop />,
          name: 'Web & Digital Design',
          skills: [
            'Responsive website design and redesign',
            'E-commerce store setup (Shopify, Wix, WordPress, etc.)',
            'Maintenance & content updates for clients',
            'UX/UI prototyping and component system design'
          ]
        }
      ]
    },
    {
      icon: <FaBullhorn />,
      title: 'Marketing & Content Creation',
      color: '#4ECDC4',
      description: 'Digital marketing, content strategy, and social media branding',
      subcategories: [
        {
          icon: <FaSearch />,
          name: 'Digital Marketing',
          skills: [
            'SEO-optimized product descriptions and meta content',
            'Keyword targeting for packaging and e-commerce',
            'Email campaigns, promotional funnels, and conversion copywriting',
            'Google & social media ad creative design'
          ]
        },
        {
          icon: <FaPenFancy />,
          name: 'Content Strategy',
          skills: [
            'Blog articles and branded storytelling',
            'Video marketing (80M+ views from social media storytelling)',
            'Scriptwriting for viral short-form content',
            'Engaging post and caption copywriting for platforms like Threads, Instagram, and TikTok'
          ]
        },
        {
          icon: <FaShareAlt />,
          name: 'Social Media Branding',
          skills: [
            'Campaign direction for brand launches',
            'Mascot-based marketing (e.g., Savvy Turtle Shell Shocked)',
            'Themed limited editions and flavor campaigns',
            'Brand storytelling through visuals and humor'
          ]
        }
      ]
    },
    {
      icon: <FaCode />,
      title: 'Technical & Development Skills',
      color: '#95E1D3',
      description: 'Web development, AI automation, and game design',
      subcategories: [
        {
          icon: <FaReact />,
          name: 'Web Development',
          skills: [
            'React & Next.js (frontend architecture)',
            'JSON data structure for dynamic rendering',
            'Plugin creation for WordPress (shortcodes, calculators, etc.)'
          ]
        },
        {
          icon: <FaGithub />,
          name: 'GitHub & Plesk Deployment',
          skills: [
            'API integration and dataset management',
            'Training OpenAI models with fine-tuned datasets',
            'Implementing AI design workflows in VS Code',
            'Structured data prompt generation for creative automation'
          ]
        },
        {
          icon: <FaGamepad />,
          name: 'Game Design',
          skills: [
            'Unreal Engine setup & blueprint integration',
            'Camera systems, AI enemy spawns, and level structure logic'
          ]
        }
      ]
    },
    {
      icon: <FaBriefcase />,
      title: 'Business & Strategy',
      color: '#F38181',
      description: 'Entrepreneurship, community consulting, and operations management',
      subcategories: [
        {
          icon: <FaBuilding />,
          name: 'Entrepreneurship',
          skills: [
            'Founder of Paintbrush Marketing (AI design & branding)',
            'Founder of TaxesByRoss (tax & accounting)',
            'Founder of Titan Couriers (medical courier logistics)',
            'Founder of Rent & Relax USA (event & leisure rentals)',
            'Business development and client acquisition',
            'Product creation, marketing, and monetization strategy'
          ]
        },
        {
          icon: <FaUsers />,
          name: 'Community & Consulting',
          skills: [
            'Brand strategy consulting for small businesses',
            'Membership & outreach initiatives (e.g., TOBA)',
            'Workshop planning (e.g., "Branding for Small Business")'
          ]
        },
        {
          icon: <FaChartLine />,
          name: 'Operations & Organization',
          skills: [
            'CRM system setup and client management',
            'Pricing models for design and tax services',
            'Cross-industry coordination (creative + logistics + finance)'
          ]
        }
      ]
    },
    {
      icon: <FaLightbulb />,
      title: 'Personality & Strengths',
      color: '#FFD93D',
      description: 'The Swiss Army Knife of Hustle - multi-disciplinary problem solver',
      subcategories: [
        {
          icon: <FaLightbulb />,
          name: 'Core Strengths',
          skills: [
            'Multi-disciplinary problem solver ("Swiss Army Knife of Hustle")',
            'Strong balance between creative design, business logic, and marketing psychology',
            'Ability to simplify complex systems (taxes, AI, or branding) into actionable results',
            'Highly adaptive — moves seamlessly between industries',
            'Visionary thinker who builds tools, not just services'
          ]
        }
      ]
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''} ${heroVisible ? 'scroll-reveal' : ''}`}>
            <div className="hero-text fade-in-left">
              <h1>Hi, I'm Leroy Ross</h1>
              <p className="hero-subtitle">Creative Technologist, AI Design Innovator & Multi-Industry Entrepreneur</p>
              <p className="hero-description">
                The "Swiss Army Knife of Hustle" — I blend brand design, AI automation, web development, 
                and business strategy to transform ideas into profitable realities across multiple industries.
              </p>
              <div className="hero-buttons">
                <Link to="/portfolio" className="btn">View My Work</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
                <DownloadResume variant="primary" showDropdown={true} />
              </div>
            </div>

            <div className="profile-image-wrapper fade-in-right">
              <img 
                src={`${process.env.PUBLIC_URL}/images/LeroyRoss.jpg`} 
                alt="Leroy Ross" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" ref={aboutRef}>
        <div className="container">
          <h2 className={`section-title fade-in-up ${aboutVisible ? 'scroll-reveal' : ''}`}>About Me</h2>
          <div className={`about-content ${aboutVisible ? 'scroll-reveal' : ''}`}>
            <div className="about-text fade-in-left">
              <p>
                I'm <strong>Leroy Ross</strong> — a multi-disciplinary entrepreneur and creative technologist based in Tampa, FL. 
                Often called the <em>"Swiss Army Knife of Hustle"</em>, I seamlessly blend creative design, technical development, 
                business strategy, and marketing psychology to deliver transformative solutions across multiple industries.
              </p>
              <p>
                As the founder of <strong>Paintbrush Marketing</strong>, I specialize in AI-driven design automation and brand identity, 
                creating everything from energy drink labels to full-scale e-commerce systems. My expertise spans label and packaging design, 
                AI model training, React/Next.js development, and social media campaigns that have generated over 80 million views.
              </p>
              <p>
                Beyond design and tech, I've built and scaled ventures including <strong>TaxesByRoss</strong> (tax & accounting), 
                <strong>Titan Couriers</strong> (medical logistics), and <strong>Rent & Relax USA</strong> (event rentals). 
                I thrive on simplifying complex systems — whether it's taxes, AI workflows, or branding — into actionable, 
                profitable results.
              </p>
              <p>
                I'm not just building services; I'm creating tools, systems, and experiences that empower businesses to grow, 
                brands to stand out, and ideas to become reality.
              </p>
            </div>

            <div className="skills-section fade-in-right">
              <h3>Core Competencies</h3>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Creative & Design Skills</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>Marketing & Content Creation</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>Technical & Development Skills</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>Business & Strategy</span>
                  <span>92%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>Personality & Strengths</span>
                  <span>98%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" ref={servicesRef}>
        <div className="container">
          <h2 className={`section-title fade-in-up ${servicesVisible ? 'scroll-reveal' : ''}`}>What I Do</h2>
          <p className={`section-subtitle fade-in-up ${servicesVisible ? 'scroll-reveal' : ''}`}>
            A comprehensive suite of creative, technical, and strategic services
          </p>
          <div className={`services-grid ${servicesVisible ? 'scroll-reveal' : ''}`}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card-advanced fade-in-up ${expandedCategory === index ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="service-card-header"
                  onClick={() => toggleCategory(index)}
                >
                  <div className="service-icon-advanced" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <div className="service-header-text">
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="expand-icon">
                    {expandedCategory === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {expandedCategory === index && (
                  <div className="service-card-body">
                    {service.subcategories.map((sub, subIndex) => (
                      <div key={subIndex} className="subcategory">
                        <div className="subcategory-header">
                          <span className="subcategory-icon" style={{ color: service.color }}>
                            {sub.icon}
                          </span>
                          <h4>{sub.name}</h4>
                        </div>
                        <ul className="skills-list">
                          {sub.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>
                              <span className="skill-bullet" style={{ backgroundColor: service.color }}>•</span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in-up">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
            <Link to="/contact" className="btn">Start a Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
