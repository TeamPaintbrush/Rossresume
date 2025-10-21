import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft, FaClock, FaCalendar } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`/api/blog/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      // Demo data for development
      setPost({
        _id: id,
        title: 'Building Modern Web Applications with React',
        content: `
          <h2>Introduction</h2>
          <p>React has revolutionized the way we build web applications. In this comprehensive guide, we'll explore the key concepts and best practices for building modern, scalable web applications using React.</p>
          
          <h2>Getting Started with React</h2>
          <p>React is a JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular tools for frontend development.</p>
          
          <h3>Key Features</h3>
          <ul>
            <li>Component-based architecture</li>
            <li>Virtual DOM for optimal performance</li>
            <li>Unidirectional data flow</li>
            <li>Rich ecosystem and community support</li>
          </ul>
          
          <h2>React Hooks</h2>
          <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have changed the way we write React components.</p>
          
          <h3>Common Hooks</h3>
          <ul>
            <li><strong>useState</strong> - For managing component state</li>
            <li><strong>useEffect</strong> - For side effects and lifecycle events</li>
            <li><strong>useContext</strong> - For consuming context values</li>
            <li><strong>useCallback</strong> - For memoizing functions</li>
          </ul>
          
          <h2>Best Practices</h2>
          <p>Here are some best practices to follow when building React applications:</p>
          
          <ol>
            <li>Keep components small and focused</li>
            <li>Use functional components with hooks</li>
            <li>Implement proper error boundaries</li>
            <li>Optimize performance with React.memo and useMemo</li>
            <li>Follow consistent naming conventions</li>
          </ol>
          
          <h2>State Management</h2>
          <p>For larger applications, you might need a state management solution. Popular options include:</p>
          
          <ul>
            <li>Redux - Predictable state container</li>
            <li>MobX - Simple, scalable state management</li>
            <li>Context API - Built-in React solution</li>
            <li>Zustand - Minimal and fast</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>React continues to evolve and improve, making it an excellent choice for building modern web applications. By following best practices and leveraging the rich ecosystem, you can create powerful, maintainable applications.</p>
        `,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200',
        tags: ['React', 'Web Development', 'JavaScript'],
        author: 'Leroy Ross',
        createdAt: new Date('2024-01-15')
      });
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

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  if (loading) {
    return (
      <div className="blog-post">
        <div className="blog-post-loading">Loading design...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post">
        <div className="blog-post-error">
          <h2>Design not found</h2>
          <Link to="/blog" className="btn btn-primary">
            Back to Designs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="blog-post-content">
        <Link to="/blog" className="back-link">
          <FaArrowLeft /> Back to Designs
        </Link>

        <article className="post-article">
          <header className="post-header">
            <div className="post-meta">
              <span className="post-meta-item">
                <FaCalendar /> {formatDate(post.createdAt)}
              </span>
              <span className="post-meta-item">
                <FaClock /> {getReadingTime(post.content)} min read
              </span>
            </div>

            <h1>{post.title}</h1>

            <div className="post-author">
              <span>By {post.author || 'Leroy Ross'}</span>
            </div>

            {post.tags && (
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="post-tag">{tag}</span>
                ))}
              </div>
            )}
          </header>

          {post.image && (
            <div className="post-image-wrapper">
              <img src={post.image} alt={post.title} className="post-image" />
            </div>
          )}

          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="post-footer">
          <Link to="/blog" className="btn btn-primary">
            <FaArrowLeft /> Back to Designs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
