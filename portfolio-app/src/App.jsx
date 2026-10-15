import React, { useEffect } from 'react';
import { TrendingUp, Play, ArrowRight, Briefcase, ExternalLink } from 'lucide-react';
import './index.css';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="glow-bg"></div>
      
      {/* Floating Dynamic Objects */}
      <div className="floating-objects">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Floating Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">SWASTIK</div>
          <div className="nav-links">
            <a href="#work">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#samples">Work</a>
            <a href="#process">Process</a>
          </div>
          <a href="mailto:ratanswastik9151@gmail.com" className="btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}>
            Contact Me
          </a>
        </div>
      </nav>

      <div className="container">
        {/* HERO SECTION */}
        <section className="hero reveal active">
          <div className="pill-badge reveal delay-1">
            <div className="status-dot"></div>
              Open to Opportunities
          </div>
          
          <h1 className="reveal delay-2">
            Strategy behind the story.
            <br />
            <span className="accent-text">Precision in every cut.</span>
          </h1>
          
          <p className="subtitle reveal delay-3">
            I help brands scale revenue through dynamic content & influencers — from creator research to performance analysis, end-to-end.
          </p>
          
          <a href="#samples" className="btn-primary reveal delay-3" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
            View My Work <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }}/>
          </a>
        </section>

        {/* WHAT I DO (BENTO GRID) */}
        <section id="work" className="section-wrapper">
          <h2 className="section-title reveal">Flagship Impact</h2>
          
          <div className="bento-grid">
            
            <div className="bento-card span-2 reveal">
              <div className="card-icon">
                <TrendingUp size={24} color="#D4FF00" />
              </div>
              <h3>15.5x Peak Ad ROAS</h3>
              <p>
                Lowered CPA on Meta Ads by producing 100+ end-to-end performance marketing content pieces. Implemented a rapid testing framework optimizing for Hook Rate and Hold Rate.
              </p>
            </div>

            <div className="bento-card reveal delay-1">
              <span className="stat-huge">125M+</span>
              <h3>Influencer Views</h3>
              <p>Top reels: <strong style={{color:'var(--accent-1)'}}>58.6M</strong>, <strong style={{color:'var(--accent-1)'}}>33.2M</strong>, and <strong style={{color:'var(--accent-1)'}}>20M</strong> views. Full-cycle management from research to performance tracking.</p>
            </div>

            <div className="bento-card reveal">
              <span className="stat-huge">10.5K</span>
              <h3>YouTube Subs</h3>
              <p>Grew YouTube from 3K → 10.5K & Instagram from 37K → 70K through data-driven content strategy.</p>
            </div>

            <div className="bento-card span-2 reveal delay-1">
              <div className="card-icon">
                <Play size={24} color="#D4FF00" />
              </div>
              <h3>End-to-End Production</h3>
              <p>
                From competitor research and scriptwriting to on-camera presenting and Premiere Pro editing. 
                I manage the entire YouTube channel ecosystem, growing subscribers from 4K to 10.5K organically.
              </p>
            </div>

          </div>
        </section>

        {/* WORK SAMPLES - YouTube Thumbnails */}
        <section id="samples" className="section-wrapper">
          <h2 className="section-title reveal">Work Samples</h2>
          <p className="section-subtitle reveal">Content I scripted, directed & edited for <span style={{color:'var(--accent-1)'}}>@Tohands</span></p>
          
          <div className="yt-grid">
            {[
              { id: 'Epso8CsmMbk', title: 'Barcode Billing Tutorial', tag: 'Tutorial' },
              { id: 'TFYw6IctjGM', title: 'Smart Dukaan Setup', tag: 'Product' },
              { id: 'qsvA_IG5oUw', title: 'Inventory Management', tag: 'How-To' },
              { id: 'yyCdw3BOSdM', title: 'Tohands V5 Unboxing', tag: 'Brand' },
              { id: '9h1IET37Vyc', title: 'QR Code Payment', tag: 'Tutorial' },
              { id: '00aqiegoGrQ', title: 'Printer Setup Guide', tag: 'Tutorial' },
              { id: 'w8hcMvVOf80', title: 'ASMR Billing Session', tag: 'Creative' },
              { id: 'WS_4Djuc22Y', title: 'Ledger & Accounts', tag: 'How-To' },
            ].map((video, i) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className={`yt-card reveal ${i % 3 === 0 ? '' : i % 3 === 1 ? 'delay-1' : 'delay-2'}`}
              >
                <div className="yt-thumb-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="yt-thumb"
                    onError={(e) => { e.target.style.display='none'; }}
                  />
                  <div className="yt-overlay">
                    <div className="yt-play-btn">
                      <Play fill="#fff" color="#fff" size={24} />
                    </div>
                  </div>
                  <span className="yt-tag">{video.tag}</span>
                </div>
                <div className="yt-info">
                  <h4>{video.title}</h4>
                  <p>Tohands • Scripted & Edited by Swastik</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="section-wrapper">
          <h2 className="section-title reveal">My Execution Engine</h2>
          
          <div className="process-grid">
            
            <div className="process-step reveal">
              <span className="step-number">01</span>
              <h3>Research & Shortlisting</h3>
              <p>
                I review 70–80 reels on Instagram and Meta Creator Hub per cycle. 
                I analyze views, engagement quality, past brand collabs, and audience tone to shortlist the top 10 creators.
              </p>
            </div>

            <div className="process-step reveal delay-1">
              <span className="step-number">02</span>
              <h3>Negotiation & Onboarding</h3>
              <p>
                I collect insights to calculate base pricing and benchmark audience quality. 
                I handle all commercial negotiations and contract agreements directly to ensure ROI alignment.
              </p>
            </div>

            <div className="process-step reveal">
              <span className="step-number">03</span>
              <h3>Scripting & Production</h3>
              <p>
                I spend 3-4 hours studying competitor videos to develop concepts. 
                I handle both briefing external creators and recording/editing 1-2 performance marketing videos daily myself.
              </p>
            </div>

            <div className="process-step reveal delay-1">
              <span className="step-number">04</span>
              <h3>Data-Driven Auditing</h3>
              <p>
                Every week, I conduct deep-dive audits of 30-day organic performance and 
                influencer metrics (CTR, Hook Rate, Hold Rate) to aggressively pivot and steer the next week's content.
              </p>
            </div>

          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-wrapper">
          <h2 className="section-title reveal">Experience</h2>
          
          <div className="experience-timeline">

            <div className="exp-item reveal">
              <div className="exp-header">
                <h3>Content Strategist & Growth Specialist</h3>
                <span className="exp-date">Dec 2025 – Present</span>
              </div>
              <p className="exp-company"><Briefcase size={16} style={{display:'inline', marginRight:'5px'}}/> Tohands Smart Calculator · Bengaluru, India</p>
              <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Full-cycle influencer ownership — creator research, outreach, pricing, contracting, briefing & performance tracking.</li>
                <li>Collaborations generating <strong style={{color:'var(--text-primary)'}}>125M+ cumulative views</strong> (top reels: 58.6M, 33.2M, 20M views).</li>
                <li>Created on-camera Performance Marketing videos (presenting + voiceover) with strong conversion results.</li>
                <li>Grew Instagram <strong style={{color:'var(--accent-1)'}}>37K → 70K</strong> followers; YouTube <strong style={{color:'var(--accent-1)'}}>3K → 10.5K</strong> subscribers.</li>
                <li>Led a 2-member content team (social media + video interns).</li>
              </ul>
            </div>

            <div className="exp-item reveal delay-1">
              <div className="exp-header">
                <h3>Video Editor</h3>
                <span className="exp-date">Jul 2025 – Dec 2025</span>
              </div>
              <p className="exp-company"><Briefcase size={16} style={{display:'inline', marginRight:'5px'}}/> Tohands Smart Calculator · Bengaluru, India</p>
              <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Produced and edited video content for Performance Marketing and social media campaigns.</li>
                <li>Promoted to Content Strategist due to outstanding creative performance and initiative.</li>
              </ul>
            </div>

            <div className="exp-item reveal">
              <div className="exp-header">
                <h3>Freelance Video Editor</h3>
                <span className="exp-date">Jul 2024 – Present</span>
              </div>
              <p className="exp-company"><Briefcase size={16} style={{display:'inline', marginRight:'5px'}}/> Fiverr & Upwork · US, UK Clients</p>
              <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Independent video editing work for international clients across the US and UK.</li>
              </ul>
            </div>

            <div className="exp-item reveal delay-1">
              <div className="exp-header">
                <h3>Junior Video Editor</h3>
                <span className="exp-date">May 2023 – Jul 2025</span>
              </div>
              <p className="exp-company"><Briefcase size={16} style={{display:'inline', marginRight:'5px'}}/> WorkRoot</p>
              <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Edited social media content, news-style videos, and promos for clients.</li>
                <li>Designed animated openers, transitions, and branded lower-thirds.</li>
                <li>Exported videos optimized for YouTube, Instagram, and mobile platforms.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="section-wrapper">
          <h2 className="section-title reveal">Education</h2>
          <div className="experience-timeline">
            <div className="exp-item reveal">
              <div className="exp-header">
                <h3>Bachelor of Commerce</h3>
                <span className="exp-date">Apr 2025 – Jul 2028</span>
              </div>
              <p className="exp-company">Dayanand Anglo Vedic (DAV) Degree College · Business Administration & Management</p>
            </div>
            <div className="exp-item reveal delay-1">
              <div className="exp-header">
                <h3>Intermediate</h3>
                <span className="exp-date">Apr 2024 – Mar 2025</span>
              </div>
              <p className="exp-company">Dayanand Anglo Vedic (DAV) Intermediate College · Business / Commerce</p>
            </div>
          </div>
        </section>

        {/* SKILLS BUBBLE CLOUD */}
        <section className="section-wrapper skills-section">
          <h2 className="section-title reveal">In My Arsenal</h2>
          <p className="section-subtitle reveal">Every skill, one cut at a time.</p>
          <div className="bubble-cloud reveal">
            {[
              { label: 'Premiere Pro',         emoji: '🎬', size: 'xl',  color: '#D4FF00' },
              { label: 'Influencer Marketing',  emoji: '🤳', size: 'xl',  color: '#a855f7' },
              { label: 'Meta Ads',              emoji: '📊', size: 'lg',  color: '#3b82f6' },
              { label: 'Scriptwriting',         emoji: '✍️', size: 'lg',  color: '#D4FF00' },
              { label: '15.5x ROAS',            emoji: '🚀', size: 'lg',  color: '#f97316' },
              { label: 'Hook Rate Optimization',emoji: '🎣', size: 'md',  color: '#ec4899' },
              { label: 'On-Camera',             emoji: '🎥', size: 'lg',  color: '#D4FF00' },
              { label: 'Storyboarding',         emoji: '🖼️', size: 'md',  color: '#22d3ee' },
              { label: 'Voiceover',             emoji: '🎙️', size: 'md',  color: '#a855f7' },
              { label: 'Creator Outreach',      emoji: '📩', size: 'md',  color: '#3b82f6' },
              { label: 'A/B Testing',           emoji: '🔬', size: 'md',  color: '#f97316' },
              { label: 'Hold Rate',             emoji: '⏱️', size: 'sm',  color: '#D4FF00' },
              { label: 'Negotiation',           emoji: '🤝', size: 'md',  color: '#22d3ee' },
              { label: 'Content Strategy',      emoji: '🧠', size: 'lg',  color: '#ec4899' },
              { label: 'Instagram Growth',      emoji: '📈', size: 'md',  color: '#D4FF00' },
              { label: 'YouTube',               emoji: '▶️', size: 'md',  color: '#f97316' },
              { label: 'Team Leadership',       emoji: '👥', size: 'sm',  color: '#a855f7' },
              { label: 'Brand Building',        emoji: '🏆', size: 'sm',  color: '#22d3ee' },
              { label: 'Pipeline Management',   emoji: '🗂️', size: 'sm',  color: '#3b82f6' },
              { label: 'Weekly Auditing',       emoji: '📋', size: 'sm',  color: '#ec4899' },
            ].map((skill, i) => (
              <div
                key={skill.label}
                className={`bubble bubble-${skill.size}`}
                style={{ '--bubble-color': skill.color, animationDelay: `${(i * 0.4) % 4}s` }}
              >
                <span className="bubble-emoji">{skill.emoji}</span>
                <span className="bubble-label">{skill.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <div className="footer-cta reveal">
          <h2>Ready to scale your content?</h2>
          <div className="footer-cta-actions">
            <a href="mailto:ratanswastik9151@gmail.com" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Let's Talk
            </a>
            <a
              href="https://www.linkedin.com/in/swastik-ratan-tripathi-8621b436b/"
              target="_blank"
              rel="noreferrer"
              className="btn-linkedin"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <footer className="footer-bottom reveal delay-1">
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/swastik-ratan-tripathi-8621b436b/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link linkedin-link"
              title="LinkedIn"
            >
              <LinkedInIcon />
              <span>swastik-ratan-tripathi</span>
            </a>
            <span className="footer-dot">·</span>
            <a
              href="https://www.instagram.com/tohands.in/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link insta-link"
              title="Instagram"
            >
              <InstagramIcon />
              <span>@tohands.in</span>
            </a>
            <span className="footer-dot">·</span>
            <a href="mailto:ratanswastik9151@gmail.com" className="footer-social-link">
              ratanswastik9151@gmail.com
            </a>
          </div>
          <p style={{ marginTop: '1rem' }}>© 2026 Swastik Tripathi. Engineered for Growth.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
