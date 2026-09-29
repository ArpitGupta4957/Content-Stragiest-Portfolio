import React, { useEffect } from 'react';
import { TrendingUp, Play, ArrowRight, Briefcase } from 'lucide-react';
import './index.css';

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
            Available for Full-time Roles
          </div>
          
          <h1 className="reveal delay-2">
            I help brands scale revenue through <span className="accent-text">dynamic content</span> & influencers.
          </h1>
          
          <p className="subtitle reveal delay-3">
            I don't just make videos. I build end-to-end content systems that convert, driven by rigorous A/B testing, data auditing, and massive influencer pipelines.
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
              <p>Achieved massive top-of-funnel reach, including 3 viral reels hitting over 20M+ views each (Peak: 59M).</p>
            </div>

            <div className="bento-card reveal">
              <span className="stat-huge">70K</span>
              <h3>IG Followers</h3>
              <p>Grew audience from 37K to 70K through consistent content strategy and weekly organic performance audits.</p>
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
          <p className="section-subtitle reveal">Content I scripted, directed & edited for <span style={{color:'var(--accent-1)'}}>@Tohands</span> YouTube channel</p>
          
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

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-wrapper">
          <h2 className="section-title reveal">Experience</h2>
          
          <div className="experience-timeline">
            <div className="exp-item reveal">
              <div className="exp-header">
                <h3>Content Strategist & Growth Specialist</h3>
                <span className="exp-date">Dec 2025 – Present</span>
              </div>
              <p className="exp-company"><Briefcase size={16} style={{display:'inline', marginRight:'5px'}}/> Tohands PVT LTD</p>
              <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Owned the full influencer cycle: creator research, outreach, pricing, and briefing (70-80 reels audited per cycle).</li>
                <li>Led collaborations generating 125M+ cumulative views (59M, 29.7M, 21M+).</li>
                <li>Built and led a 3-member content team, running weekly audits of brand and influencer content.</li>
                <li>Scripted, shot, and appeared on camera for top-performing ads.</li>
              </ul>
            </div>

            <div className="exp-item reveal delay-1">
              <div className="exp-header">
                <h3>Freelance Video Editor</h3>
                <span className="exp-date">Prior to Dec 2025</span>
              </div>
              <p className="exp-company"><Briefcase size={16} style={{display:'inline', marginRight:'5px'}}/> Tohands PVT LTD</p>
              <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Edited 55+ high-converting performance marketing videos for the brand.</li>
                <li>Executed full frame-by-frame professional editing, audio syncing, and color correction in Premiere Pro.</li>
                <li>Promoted to Content Strategist due to outstanding creative performance and initiative.</li>
              </ul>
            </div>
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
        
        {/* FOOTER CTA */}
        <div className="footer-cta reveal">
          <h2>Ready to scale your content?</h2>
          <a href="mailto:ratanswastik9151@gmail.com" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', marginTop: '1rem' }}>
            Let's Talk
          </a>
        </div>

        <footer className="footer-bottom reveal delay-1">
          <p>© 2026 Swastik Tripathi. Engineered for Growth.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
