import React, { useEffect, useRef, useState } from 'react';
import {
  TrendingUp, ArrowRight, ArrowUpRight, Briefcase, Users, Target,
  Lightbulb, Clock, Award, GraduationCap, Eye, Clapperboard,
} from 'lucide-react';
import './index.css';
import {
  profile, contact, heroStats, influencerCase, adCase, editingCase, growthCase,
  process, experience, education, certifications, skillGroups,
} from './data.js';
import WorkShowcase from './WorkShowcase.jsx';

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

const navLinks = [
  { id: 'work', label: 'Impact' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'samples', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Matches every number in a stat string, e.g. "37K → 70K", "₹2.7", "3,375".
const NUMBER = /\d[\d,]*(?:\.\d+)?/g;

const scaleNumber = (token, progress) => {
  const decimals = (token.split('.')[1] || '').length;
  const value = parseFloat(token.replace(/,/g, '')) * progress;
  return token.includes(',')
    ? value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : value.toFixed(decimals);
};

// Counts every number in `value` up from zero the first time it scrolls into view.
const CountUp = ({ value }) => {
  const ref = useRef(null);
  const animated = /\d/.test(value) && !prefersReducedMotion();
  const [text, setText] = useState(() => (animated ? value.replace(NUMBER, (m) => scaleNumber(m, 0)) : value));

  useEffect(() => {
    if (!animated) return undefined;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / 1600, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        setText(t < 1 ? value.replace(NUMBER, (m) => scaleNumber(m, eased)) : value);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [animated, value]);

  return <span ref={ref} className="count-up">{text}</span>;
};

const StatGrid = ({ stats }) => (
  <div className="stat-grid">
    {stats.map((s) => (
      <div key={s.label} className="stat-cell">
        <span className={`stat-value${s.compact ? ' stat-value-compact' : ''}`}><CountUp value={s.value} /></span>
        <span className="stat-label">{s.label}</span>
        {s.note && <span className="stat-note">{s.note}</span>}
      </div>
    ))}
  </div>
);

const Learnings = ({ items, title = 'What the data taught me' }) => (
  <div className="learnings">
    <p className="learnings-title"><Lightbulb size={16} /> {title}</p>
    <ul>
      {items.map((item) => (typeof item === 'string'
        ? <li key={item}>{item}</li>
        : <li key={item.lead}><strong className="learning-lead">{item.lead}:</strong> {item.text}</li>
      ))}
    </ul>
  </div>
);

function App() {
  const navRef = useRef(null);
  const [activeId, setActiveId] = useState('');

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

  // Scroll progress, background parallax and the compact navbar
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--progress', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
      navRef.current?.classList.toggle('scrolled', window.scrollY > 40);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the nav link for the section in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { id } = entry.target;
        if (entry.isIntersecting) setActiveId(id);
        else setActiveId((current) => (current === id ? '' : current));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    ['top', ...navLinks.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Cursor-following glow on cards
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="app">
      <div className="scroll-progress" aria-hidden="true"></div>
      <div className="glow-bg"></div>

      {/* Floating Dynamic Objects */}
      <div className="floating-objects">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Floating Navbar */}
      <nav className="navbar" ref={navRef}>
        <div className="container nav-content">
          <a href="#top" className="logo">SWASTIK</a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={activeId === link.id ? 'active' : ''}>
                {link.label}
              </a>
            ))}
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

          <p className="hero-eyebrow reveal delay-1">
            {profile.name} <span className="eyebrow-dot">·</span> <span className="hl eyebrow-title">{profile.title}</span>
          </p>

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
              <div key={s.label} className="hero-stat spotlight">
                <span className="hero-stat-value"><CountUp value={s.value} /></span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT I DO (BENTO GRID) */}
        <section id="work" className="section-wrapper">
          <h2 className="section-title reveal">Flagship Impact</h2>

          <div className="bento-grid">

            <div className="bento-card spotlight span-2 reveal reveal-left">
              <div className="card-icon">
                <TrendingUp size={24} color="#D4FF00" />
              </div>
              <h3>10.5x–15.5x ROAS on Ad Content</h3>
              <p>
                100+ performance marketing creatives produced end-to-end — scripted, shot, presented on camera and edited —
                then optimised weekly on CTR, Hook Rate, Hold Rate and ROAS. Several became the brand's top-performing ads.
              </p>
            </div>

            <div className="bento-card spotlight reveal reveal-right delay-1">
              <span className="stat-huge"><CountUp value="125M+" /></span>
              <h3>Influencer Views</h3>
              <p>Top reels: <strong className="hl">59M</strong>, <strong className="hl">29.7M</strong> and <strong className="hl">21M+</strong> views — from creators with under 55K followers.</p>
            </div>

            <div className="bento-card spotlight reveal reveal-left">
              <span className="stat-huge"><CountUp value="70K" /></span>
              <h3>Instagram Followers</h3>
              <p>Grew Instagram from 37K → 70K and YouTube from 4K → 10.5K with festival campaigns and weekly audits.</p>
            </div>

            <div className="bento-card spotlight span-2 reveal reveal-right delay-1">
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

          {/* Case 1: Ad creative lab */}
          <article className="case-card spotlight reveal reveal-zoom">
            <div className="case-head">
              <span className="case-kicker"><Target size={14} /> Performance Marketing Creatives · 01</span>
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
                  {adCase.winners.map((ad, i) => (
                    <tr key={ad.name} style={{ '--i': i }}>
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

          {/* Case 2: Video editing */}
          <article className="case-card spotlight reveal reveal-zoom">
            <div className="case-head">
              <span className="case-kicker"><Clapperboard size={14} /> Video Editing · 02</span>
              <h3>The editing studio</h3>
              <p className="case-lede">
                I turn raw footage into platform-ready content built to hold attention. From selecting the strongest hooks and
                structuring the story to pacing, captions, sound design and final delivery — I handle the edit end-to-end.
              </p>
            </div>

            <StatGrid stats={editingCase.stats} />

            <h4 className="table-title">Selected Work</h4>
            <div className="table-wrap">
              <table className="ad-table text-table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Type</th>
                    <th>Role</th>
                    <th>Output</th>
                  </tr>
                </thead>
                <tbody>
                  {editingCase.work.map((w, i) => (
                    <tr key={w.project} style={{ '--i': i }}>
                      <td className="strong">{w.project}</td>
                      <td>{w.type}</td>
                      <td>{w.role}</td>
                      <td>{w.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-spacer" />

            <Learnings items={editingCase.learnings} title="What editing taught me" />
          </article>

          {/* Case 3: Influencer engine */}
          <article className="case-card spotlight reveal reveal-zoom">
            <div className="case-head">
              <span className="case-kicker"><Users size={14} /> Influencer Marketing · 03</span>
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
                  <span className="reel-views"><Eye size={18} /> <CountUp value={r.views} /></span>
                  <span className="reel-meta">{r.followers}-follower creator · {r.month}</span>
                  <span className="reel-link">Watch reel <ArrowUpRight size={14} /></span>
                </a>
              ))}
            </div>

            <Learnings items={influencerCase.learnings} />
          </article>

          {/* Case 4: Social media growth */}
          <article className="case-card spotlight case-split reveal reveal-zoom">
            <div className="case-head">
              <span className="case-kicker"><TrendingUp size={14} /> Social Media Growth · 04</span>
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
                  <span className="stat-value"><CountUp value={s.value} /></span>
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-note">{s.note}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* WORK SAMPLES */}
        <section id="samples" className="section-wrapper">
          <h2 className="section-title reveal">Work Samples</h2>
          <p className="section-subtitle reveal">One highlight from each lane — hit <span className="hl">View more</span> for the rest.</p>

          <WorkShowcase />
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="section-wrapper">
          <h2 className="section-title reveal">My Execution Engine</h2>
          <p className="section-subtitle reveal">A week in the life — from 80 reels on a screen to a live, tracked campaign.</p>

          <div className="process-grid">
            {process.map((step, i) => (
              <div key={step.title} className={`process-step spotlight reveal reveal-zoom ${delayClass(i)}`}>
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
              <div key={job.role} className={`exp-item reveal ${i % 2 ? 'reveal-right' : 'reveal-left'}`}>
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
                <div key={ed.title} className={`exp-item reveal reveal-left ${i % 2 ? 'delay-1' : ''}`}>
                  <div className="exp-header">
                    <h3><GraduationCap size={20} className="inline-icon-left" /> {ed.title}</h3>
                    <span className="exp-date">{ed.date}</span>
                  </div>
                  <p className="exp-company">{ed.school}</p>
                </div>
              ))}
            </div>
            <div className="cert-list reveal reveal-right delay-1">
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
          <div className="skill-groups">
            {skillGroups.map((group, g) => (
              <div
                key={group.name}
                className={`skill-group spotlight reveal ${g % 2 ? 'reveal-right delay-1' : 'reveal-left'}`}
                style={{ '--bubble-color': group.color }}
              >
                <div className="skill-group-head">
                  <div className="bubble bubble-lg">
                    <span className="bubble-emoji">{group.emoji}</span>
                  </div>
                  <div>
                    <h3>{group.name}</h3>
                    <span className="muted">{group.skills.length} skills</span>
                  </div>
                </div>
                <div className="bubble-cloud skill-bubbles">
                  {group.skills.map((skill, i) => (
                    <div
                      key={skill.label}
                      className="bubble bubble-skill"
                      style={{ '--i': i, animationDelay: `${(i * 0.4 + g) % 4}s` }}
                    >
                      <span className="bubble-emoji">{skill.emoji}</span>
                      <span className="bubble-label">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <div className="footer-cta reveal reveal-zoom">
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
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link insta-link"
              title="Instagram"
            >
              <InstagramIcon />
              <span>{contact.instagramHandle}</span>
            </a>
            <span className="footer-dot">·</span>
            <a href={`mailto:${contact.email}`} className="footer-social-link">
              {contact.email}
            </a>
          </div>
          <p className="footer-title">{profile.name} — {profile.title}</p>
          <p className="footer-copy">© 2026 Swastik Tripathi. Engineered for Growth.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
