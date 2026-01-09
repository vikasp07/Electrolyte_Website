import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Blog.css";

// Blog data - can be moved to a separate data file or fetched from backend
export const blogData = [
  {
    id: 1,
    title: "The Future of Cybersecurity: Data Diodes and Zero Trust Architecture",
    excerpt:
      "Explore how data diodes are becoming essential components in modern zero trust security frameworks, providing unidirectional data transfer for critical infrastructure...",
    content: `
      <p>In today's rapidly evolving threat landscape, organizations are increasingly adopting zero trust architecture to protect their most critical assets. At the heart of this security transformation lies the data diode – a hardware-based security solution that enforces unidirectional data transfer.</p>
      
      <h3>Understanding Data Diodes</h3>
      <p>A data diode is a network appliance that allows data to travel only in one direction. Unlike firewalls, which can be configured or compromised, data diodes provide a physical guarantee that information can only flow from one network to another, never in reverse.</p>
      
      <h3>The Role in Zero Trust</h3>
      <p>Zero trust architecture operates on the principle of "never trust, always verify." Data diodes complement this approach by:</p>
      <ul>
        <li>Providing air-gap level security without complete network isolation</li>
        <li>Enabling real-time data sharing while maintaining security</li>
        <li>Protecting against both external attacks and insider threats</li>
        <li>Ensuring compliance with regulatory requirements</li>
      </ul>
      
      <h3>Industry Applications</h3>
      <p>Data diodes are finding increasing adoption across various sectors including energy, manufacturing, defense, and financial services. Organizations are leveraging these solutions to securely transfer operational data from isolated networks to enterprise systems for analysis and monitoring.</p>
      
      <h3>Looking Ahead</h3>
      <p>As cyber threats continue to evolve, the combination of data diodes and zero trust principles will become even more critical. Organizations that adopt these technologies today will be better positioned to protect their assets and maintain operational continuity in the face of sophisticated attacks.</p>
    `,
    image: "/images/Home/Secure-File-Transfer-and-Syslog-Replication-Using-Owl-Data-Diodes.jpg",
    author: "Electrolyte Security Team",
    date: "January 5, 2026",
    category: "Cybersecurity",
    tags: ["Data Diodes", "Zero Trust", "Network Security"],
  },
  {
    id: 2,
    title: "Securing Industrial Control Systems: Best Practices for OT Security",
    excerpt:
      "Learn about the critical importance of securing operational technology environments and the best practices for protecting industrial control systems from cyber threats...",
    content: `
      <p>Industrial Control Systems (ICS) and Operational Technology (OT) environments are increasingly becoming targets for sophisticated cyber attacks. Protecting these systems requires a unique approach that balances security with operational requirements.</p>
      
      <h3>The OT Security Challenge</h3>
      <p>Unlike traditional IT environments, OT systems have unique characteristics that make security challenging:</p>
      <ul>
        <li>Long equipment lifecycles with legacy systems</li>
        <li>Real-time operational requirements</li>
        <li>Limited downtime windows for updates</li>
        <li>Safety-critical operations</li>
      </ul>
      
      <h3>Best Practices for OT Security</h3>
      <p><strong>1. Network Segmentation:</strong> Implement proper network segmentation between IT and OT environments using firewalls and data diodes.</p>
      <p><strong>2. Asset Inventory:</strong> Maintain a comprehensive inventory of all OT assets including their configurations and vulnerabilities.</p>
      <p><strong>3. Access Control:</strong> Implement strict access controls and monitoring for all connections to OT networks.</p>
      <p><strong>4. Continuous Monitoring:</strong> Deploy monitoring solutions designed for OT protocols and communication patterns.</p>
      
      <h3>The Role of Data Diodes</h3>
      <p>Data diodes provide an essential layer of protection for OT environments by enabling secure, unidirectional data transfer. This allows organizations to:</p>
      <ul>
        <li>Share operational data with enterprise systems safely</li>
        <li>Maintain air-gap level security for critical systems</li>
        <li>Enable real-time monitoring without introducing risk</li>
      </ul>
    `,
    image: "/images/Home/OSI-PI-Historian-Replication-Using-OWL-Data-Diodes.jpg",
    author: "Electrolyte OT Team",
    date: "December 28, 2025",
    category: "Industrial Security",
    tags: ["OT Security", "ICS", "Industrial Control"],
  },
  {
    id: 3,
    title: "OPC UA Security: Protecting Industrial Communications",
    excerpt:
      "Discover how to secure OPC UA communications in industrial environments using hardware-based security solutions and best practices...",
    content: `
      <p>OPC Unified Architecture (OPC UA) has become the standard for industrial communication, providing a platform-independent, service-oriented architecture for data exchange. However, securing OPC UA communications is crucial for protecting industrial operations.</p>
      
      <h3>Understanding OPC UA</h3>
      <p>OPC UA is designed with security in mind, offering built-in features such as:</p>
      <ul>
        <li>Authentication and authorization</li>
        <li>Encryption and message signing</li>
        <li>Audit logging capabilities</li>
        <li>Certificate-based security</li>
      </ul>
      
      <h3>Security Challenges</h3>
      <p>Despite built-in security features, organizations face challenges in implementing OPC UA securely:</p>
      <ul>
        <li>Complex certificate management</li>
        <li>Integration with legacy systems</li>
        <li>Performance overhead of encryption</li>
        <li>Configuration complexity</li>
      </ul>
      
      <h3>Hardware-Based Protection</h3>
      <p>Data diodes provide an additional layer of security for OPC UA communications by:</p>
      <ul>
        <li>Enforcing unidirectional data flow</li>
        <li>Protecting against network-based attacks</li>
        <li>Enabling secure data replication</li>
        <li>Supporting OPC UA protocol translation</li>
      </ul>
      
      <h3>Implementation Best Practices</h3>
      <p>When implementing OPC UA security, consider these best practices: proper certificate management, regular security assessments, network segmentation, and continuous monitoring of OPC UA traffic.</p>
    `,
    image: "/images/Home/Secure-OPC-Data-Replication-Using-Owl-Data-Diodes.jpg",
    author: "Electrolyte Engineering Team",
    date: "December 15, 2025",
    category: "Industrial Protocols",
    tags: ["OPC UA", "Industrial Communication", "Protocol Security"],
  },
  {
    id: 4,
    title: "Database Replication Security: Ensuring Data Integrity Across Networks",
    excerpt:
      "Learn how to implement secure database replication across network boundaries while maintaining data integrity and protecting sensitive information...",
    content: `
      <p>Database replication is essential for many organizations, enabling data availability, disaster recovery, and analytics. However, replicating databases across network boundaries introduces security challenges that must be addressed.</p>
      
      <h3>The Need for Secure Replication</h3>
      <p>Organizations often need to replicate data from secure operational networks to business networks for:</p>
      <ul>
        <li>Business intelligence and analytics</li>
        <li>Compliance and audit requirements</li>
        <li>Disaster recovery and backup</li>
        <li>Integration with enterprise applications</li>
      </ul>
      
      <h3>Security Considerations</h3>
      <p>When implementing database replication across security zones, consider:</p>
      <ul>
        <li>Data classification and filtering</li>
        <li>Encryption in transit and at rest</li>
        <li>Access control and authentication</li>
        <li>Audit logging and monitoring</li>
      </ul>
      
      <h3>Data Diode Solutions</h3>
      <p>Data diodes enable secure database replication by:</p>
      <ul>
        <li>Providing guaranteed unidirectional transfer</li>
        <li>Supporting multiple database platforms</li>
        <li>Enabling real-time or scheduled replication</li>
        <li>Maintaining data integrity during transfer</li>
      </ul>
      
      <h3>Implementation Guide</h3>
      <p>Successful implementation requires careful planning, including: identifying data requirements, selecting appropriate replication methods, configuring security policies, and establishing monitoring procedures.</p>
    `,
    image: "/images/Home/Database-Replication-Using-Data-Diodes.jpg",
    author: "Electrolyte Data Team",
    date: "November 30, 2025",
    category: "Data Security",
    tags: ["Database Security", "Replication", "Data Integrity"],
  },
  {
    id: 5,
    title: "CCTV Network Security: Protecting Surveillance Systems from Cyber Threats",
    excerpt:
      "Explore the critical importance of securing CCTV networks and learn how to protect surveillance systems from cyber attacks while maintaining operational effectiveness...",
    content: `
      <p>CCTV and surveillance systems are critical for physical security but are increasingly becoming targets for cyber attacks. Securing these networks is essential for protecting both the surveillance infrastructure and the broader enterprise network.</p>
      
      <h3>The Growing Threat</h3>
      <p>CCTV systems face numerous cyber threats including:</p>
      <ul>
        <li>Unauthorized access to video feeds</li>
        <li>Malware infections through network cameras</li>
        <li>DDoS attacks using compromised devices</li>
        <li>Data exfiltration through surveillance networks</li>
      </ul>
      
      <h3>Security Architecture</h3>
      <p>A secure CCTV architecture should include:</p>
      <ul>
        <li>Network segmentation for surveillance systems</li>
        <li>Strong authentication for camera access</li>
        <li>Encrypted video transmission</li>
        <li>Regular firmware updates and patching</li>
      </ul>
      
      <h3>Data Diode Protection</h3>
      <p>Data diodes provide enhanced protection for CCTV networks by:</p>
      <ul>
        <li>Enabling video streaming to monitoring centers securely</li>
        <li>Preventing attack propagation from compromised cameras</li>
        <li>Isolating surveillance networks from enterprise systems</li>
        <li>Supporting compliance with security regulations</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>Organizations should implement: network segmentation, regular security assessments, camera hardening procedures, and incident response plans specific to surveillance systems.</p>
    `,
    image: "/images/Home/Securing-Critical-CCTV-Networks-and-Enterprise.jpg",
    author: "Electrolyte Security Team",
    date: "November 15, 2025",
    category: "Physical Security",
    tags: ["CCTV Security", "Surveillance", "Network Protection"],
  },
  {
    id: 6,
    title: "Understanding Compliance Requirements for Critical Infrastructure Security",
    excerpt:
      "Navigate the complex landscape of compliance requirements for critical infrastructure protection and learn how to meet regulatory obligations effectively...",
    content: `
      <p>Critical infrastructure organizations face a complex web of compliance requirements that govern how they must protect their systems and data. Understanding and meeting these requirements is essential for both regulatory compliance and effective security.</p>
      
      <h3>Key Regulatory Frameworks</h3>
      <p>Critical infrastructure organizations may need to comply with:</p>
      <ul>
        <li>NERC CIP for energy sector</li>
        <li>NIST Cybersecurity Framework</li>
        <li>IEC 62443 for industrial systems</li>
        <li>ISO 27001 for information security management</li>
      </ul>
      
      <h3>Common Requirements</h3>
      <p>Despite differences between frameworks, common requirements include:</p>
      <ul>
        <li>Network segmentation and access control</li>
        <li>Continuous monitoring and logging</li>
        <li>Incident response capabilities</li>
        <li>Regular security assessments</li>
      </ul>
      
      <h3>The Role of Data Diodes</h3>
      <p>Data diodes help organizations meet compliance requirements by:</p>
      <ul>
        <li>Providing verifiable network segmentation</li>
        <li>Enabling secure data transfer for monitoring</li>
        <li>Supporting audit requirements with logging</li>
        <li>Demonstrating defense-in-depth controls</li>
      </ul>
      
      <h3>Implementation Approach</h3>
      <p>A successful compliance program requires: understanding applicable requirements, conducting gap assessments, implementing appropriate controls, and maintaining continuous compliance through monitoring and auditing.</p>
    `,
    image: "/images/Home/Industry-based-Use-Cases.jpg",
    author: "Electrolyte Compliance Team",
    date: "October 25, 2025",
    category: "Compliance",
    tags: ["Compliance", "Regulations", "Critical Infrastructure"],
  },
];

// Blog List Component - Shows all blogs
const BlogList = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(blogData.map(blog => blog.category))];
  
  const filteredBlogs = selectedCategory === "All" 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  return (
    <div className="blog-page">
      <section className="blog-hero-section">
        <div className="blog-hero-bg" style={{ backgroundImage: "url('/images/Home/Industry-based-Use-Cases.jpg')" }} />
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Our Blog</h1>
          <p className="blog-hero-subtitle">
            Insights, updates, and expert perspectives on cybersecurity, industrial protection, and data diode technology
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="blog-container">
          <div className="blog-filter-bar">
            <span className="filter-label">Filter by Category:</span>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.id} 
                className="blog-card"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className="blog-card-image">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                  <span className="blog-category-badge">{blog.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">{blog.date}</span>
                    <span className="blog-author">By {blog.author}</span>
                  </div>
                  <h2 className="blog-card-title">{blog.title}</h2>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-tags">
                      {blog.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <Link to={`/blog/${blog.id}`} className="read-more-btn">
                      Read More <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Single Blog Post Component
const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogData.find(b => b.id === parseInt(id));
    setBlog(foundBlog);
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog post not found</h2>
        <button onClick={() => navigate('/blog')} className="btn-back">
          Back to Blog
        </button>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogData
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      <section className="blog-post-hero">
        <div className="blog-post-hero-bg" style={{ backgroundImage: `url('${blog.image}')` }} />
        <div className="blog-post-hero-overlay" />
        <div className="blog-post-hero-content">
          <span className="blog-category-badge">{blog.category}</span>
          <h1 className="blog-post-title">{blog.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-author">
              <i className="ri-user-line"></i> {blog.author}
            </span>
            <span className="blog-post-date">
              <i className="ri-calendar-line"></i> {blog.date}
            </span>
          </div>
        </div>
      </section>

      <section className="blog-post-content-section">
        <div className="blog-post-container">
          <button onClick={() => navigate('/blog')} className="btn-back-to-blog">
            <i className="ri-arrow-left-line"></i> Back to Blog
          </button>
          
          <article className="blog-post-article">
            <div 
              className="blog-post-body"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <div className="blog-post-tags">
              <span className="tags-label">Tags:</span>
              {blog.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </article>

          <div className="blog-post-share">
            <span className="share-label">Share this article:</span>
            <div className="share-buttons">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-btn twitter">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="share-btn linkedin">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-btn facebook">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h3 className="related-posts-title">Related Articles</h3>
              <div className="related-posts-grid">
                {relatedPosts.map(post => (
                  <article 
                    key={post.id} 
                    className="related-post-card"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    <div className="related-post-image">
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </div>
                    <div className="related-post-content">
                      <h4 className="related-post-title">{post.title}</h4>
                      <span className="related-post-date">{post.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Main Blog Component with routing
const Blog = () => {
  const { id } = useParams();
  
  if (id) {
    return <BlogPost />;
  }
  
  return <BlogList />;
};

export default Blog;
export { BlogList, BlogPost, blogData as blogs };
