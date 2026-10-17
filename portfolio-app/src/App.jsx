import React, { useEffect } from 'react';
import {
  TrendingUp, Play, ArrowRight, ArrowUpRight, Briefcase, Users, Target,
  Lightbulb, Clock, Award, GraduationCap, Eye,
} from 'lucide-react';
import './index.css';
import {
  contact, heroStats, influencerCase, adCase, growthCase, videos,
  process, experience, education, certifications, skills,
} from './data.js';

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

const delayClass = (i) => ['', 'delay-1', 'delay-2'][i % 3];

const StatGrid = ({ stats }) => (
  <div className="stat-grid">
    {stats.map((s) => (
      <div key={s.label} className="stat-cell">
        <span className="stat-value">{s.value}</span>
        <span className="stat-label">{s.label}</span>
        {s.note && <span className="stat-note">{s.note}</span>}
      </div>
    ))}
  </div>
);

const Learnings = ({ items }) => (
  <div className="learnings">
    <p className="learnings-title"><Lightbulb size={16} /> What the data taught me</p>
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </div>
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
          <a href="#top" className="logo">SWASTIK</a>
          <div className="nav-links">
            <a href="#work">Impact</a>
            <a href="#cases">Case Studies</a>
            <a href="#samples">Work</a>
            <a href="#process">Process</a>
            <a href="#experience">Experience</a>
          </div>
          <a href={`mailto:${contact.email}`} className="btn-primary btn-sm">
            Contact Me
          </a>
        </div>
      </nav>

      <div className="container">
        {/* HERO SECTION */}
        <section id="top" className="hero reveal active">
          <div className="pill-badge reveal delay-1">
            <div className="status-dot"></div>
            Open to Opportunities · Bengaluru
          </div>

          <h1 className="reveal delay-2">
            <span className="hero-line">Strategy behind the story.</span>
            <br />
            <span className="accent-text">Precision in every cut.</span>
          </h1>

          <p className="subtitle reveal delay-3">
            I'm Swastik — a content strategist and video editor who turns scripts, creators and cuts into revenue.
            I write, shoot, present and edit performance ads, and run influencer programs end-to-end.
          </p>

          <div className="hero-actions reveal delay-3">
            <a href="#cases" className="btn-primary btn-lg">
              See the Case Studies <ArrowRight size={18} className="inline-icon" />
            </a>
            <a href="#samples" className="btn-ghost">Watch My Work</a>
          </div>

          <div className="hero-stats reveal delay-3">
            {heroStats.map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT I DO (BENTO GRID) */}
        <section id="work" className="section-wrapper">
          <h2 className="section-title reveal">Flagship Impact</h2>

          <div className="bento-grid">

            <div className="bento-card span-2 reveal">
              <div className="card-icon">
                <TrendingUp size={24} color="#D4FF00" />
              </div>
              <h3>10.5x–15.5x ROAS on Ad Content</h3>
              <p>
                100+ performance marketing creatives produced end-to-end — scripted, shot, presented on camera and edited —
                then optimised weekly on CTR, Hook Rate, Hold Rate and ROAS. Several became the brand's top-performing ads.
              </p>
            </div>

            <div className="bento-card reveal delay-1">
              <span className="stat-huge">125M+</span>
              <h3>Influencer Views</h3>
              <p>Top reels: <strong className="hl">59M</strong>, <strong className="hl">29.7M</strong> and <strong className="hl">21M+</strong> views — from creators with under 55K followers.</p>
            </div>

            <div className="bento-card reveal">
              <span className="stat-huge">70K</span>
              <h3>Instagram Followers</h3>
              <p>Grew Instagram from 37K → 70K and YouTube from 4K → 10.5K with festival campaigns and weekly audits.</p>
            </div>

            <div className="bento-card span-2 reveal delay-1">
              <div className="card-icon">
                <Users size={24} color="#D4FF00" />
              </div>
              <h3>Editor → Strategist → Team Lead</h3>
              <p>
                Joined Tohands as a video editor, cut 55+ performance videos, got promoted to Content Strategist,
                and now lead a 3-member content team (2 interns + a video editor).
              </p>
            </div>

          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="section-wrapper">
          <h2 className="section-title reveal">Case Studies</h2>
          <p className="section-subtitle reveal">Real numbers from the pipelines and ad reports I run at <span className="hl">Tohands</span>.</p>

          {/* Case 1: Influencer engine */}
          <article className="case-card reveal">
            <div className="case-head">
              <span className="case-kicker"><Users size={14} /> Influencer Marketing · 01</span>
              <h3>Micro-creators, macro reach</h3>
              <p className="case-lede">
                Tohands sells a smart billing calculator to shopkeepers across India. I built the influencer program from zero —
                sourcing, pricing, contracting, briefing and tracking every creator myself — to find reach that paid ads couldn't buy.
              </p>
            </div>

            <StatGrid stats={influencerCase.stats} />

            <div className="reel-row">
              {influencerCase.topReels.map((r, i) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className={`reel-tile reveal ${delayClass(i)}`}>
                  <span className="reel-rank">#{i + 1}</span>
                  <span className="reel-views"><Eye size={18} /> {r.views}</span>
                  <span className="reel-meta">{r.followers}-follower creator · {r.month}</span>
                  <span className="reel-link">Watch reel <ArrowUpRight size={14} /></span>
                </a>
              ))}
            </div>

            <Learnings items={influencerCase.learnings} />
          </article>

          {/* Case 2: Ad creative lab */}
          <article className="case-card reveal">
            <div className="case-head">
              <span className="case-kicker"><Target size={14} /> Performance Creatives · 02</span>
              <h3>The ad creative lab</h3>
              <p className="case-lede">
                Daily output of 1–2 Meta ad videos, each one tagged and tracked. I audit every creative on Hook Rate, Hold Rate,
                CTR and ROAS, kill the losers fast, and brief the next batch off what's winning.
              </p>
            </div>

            <StatGrid stats={adCase.stats} />

            <div className="table-wrap">
              <table className="ad-table">
                <thead>
                  <tr>
                    <th>Creative</th>
                    <th>Angle</th>
                    <th>ROAS</th>
                    <th>CTR</th>
                    <th>Hook rate</th>
                  </tr>
                </thead>
                <tbody>
                  {adCase.winners.map((ad) => (
                    <tr key={ad.name}>
                      <td>{ad.name}</td>
                      <td className="muted">{ad.angle}</td>
                      <td className="hl strong">{ad.roas}</td>
                      <td>{ad.ctr}</td>
                      <td>{ad.hook}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-caption">Top scaled creatives from the Feb–Apr 2026 creative audit (ads with ₹40K+ spend).</p>

            <Learnings items={adCase.learnings} />
          </article>

          {/* Case 3: Organic growth */}
          <article className="case-card case-split reveal">
            <div className="case-head">
              <span className="case-kicker"><TrendingUp size={14} /> Organic Growth · 03</span>
              <h3>Nearly doubling the brand's audience</h3>
              <p className="case-lede">
                No paid boosts — just a consistent content calendar, a weekly data review and owning YouTube end-to-end.
              </p>
              <ul className="check-list">
                {growthCase.levers.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
            <div className="growth-stats">
              {growthCase.stats.map((s) => (
                <div key={s.label} className="stat-cell">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-note">{s.note}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* WORK SAMPLES - YouTube Thumbnails */}
        <section id="samples" className="section-wrapper">
          <h2 className="section-title reveal">Work Samples</h2>
          <p className="section-subtitle reveal">Content I scripted, directed & edited for <span className="hl">@Tohands</span></p>

          <div className="yt-grid">
            {videos.map((video, i) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className={`yt-card reveal ${delayClass(i)}`}
              >
                <div className="yt-thumb-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="yt-thumb"
                    loading="lazy"
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
          <p className="section-subtitle reveal">A week in the life — from 80 reels on a screen to a live, tracked campaign.</p>

          <div className="process-grid">
            {process.map((step, i) => (
              <div key={step.title} className={`process-step reveal ${i % 2 ? 'delay-1' : ''}`}>
                <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="step-time"><Clock size={13} /> {step.time}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-wrapper">
          <h2 className="section-title reveal">Experience</h2>

          <div className="experience-timeline">
            {experience.map((job, i) => (
              <div key={job.role} className={`exp-item reveal ${i % 2 ? 'delay-1' : ''}`}>
                <div className="exp-header">
                  <h3>{job.role}</h3>
                  <span className="exp-date">{job.date}</span>
                </div>
                <p className="exp-company"><Briefcase size={16} className="inline-icon-left" /> {job.company}</p>
                <ul className="exp-points">
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="section-wrapper">
          <h2 className="section-title reveal">Education & Certifications</h2>
          <div className="edu-grid">
            <div className="experience-timeline">
              {education.map((ed, i) => (
                <div key={ed.title} className={`exp-item reveal ${i % 2 ? 'delay-1' : ''}`}>
                  <div className="exp-header">
                    <h3><GraduationCap size={20} className="inline-icon-left" /> {ed.title}</h3>
                    <span className="exp-date">{ed.date}</span>
                  </div>
                  <p className="exp-company">{ed.school}</p>
                </div>
              ))}
            </div>
            <div className="cert-list reveal delay-1">
              {certifications.map((c) => (
                <div key={c.name + c.issuer} className="cert-item">
                  <Award size={20} color="#D4FF00" />
                  <div>
                    <strong>{c.name}</strong>
                    <span className="muted">{c.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS BUBBLE CLOUD */}
        <section className="section-wrapper skills-section">
          <h2 className="section-title reveal">In My Arsenal</h2>
          <p className="section-subtitle reveal">Every skill, one cut at a time.</p>
          <div className="bubble-cloud reveal">
            {skills.map((skill, i) => (
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
          <p className="footer-cta-sub">
            Performance ads, influencer programs or a channel that needs to grow — let's talk numbers.
          </p>
          <div className="footer-cta-actions">
            <a href={`mailto:${contact.email}`} className="btn-primary btn-lg">
              Let's Talk
            </a>
            <a
              href={contact.linkedin}
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
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link linkedin-link"
              title="LinkedIn"
            >
              <LinkedInIcon />
              <span>{contact.linkedinHandle}</span>
            </a>
            <span className="footer-dot">·</span>
            <a
              href={contact.brandInstagram}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link insta-link"
              title="Tohands on Instagram — the brand account I grew"
            >
              <InstagramIcon />
              <span>@tohands.in (brand I grew)</span>
            </a>
            <span className="footer-dot">·</span>
            <a href={`mailto:${contact.email}`} className="footer-social-link">
              {contact.email}
            </a>
          </div>
          <p className="footer-copy">© 2026 Swastik Tripathi. Engineered for Growth.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
