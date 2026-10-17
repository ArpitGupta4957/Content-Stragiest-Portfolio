import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { workCategories } from './data.js';

const videoUrl = (video) => {
  if (video.platform === 'instagram') return `https://www.instagram.com/reel/${video.id}/`;
  if (video.platform === 'short') return `https://youtube.com/shorts/${video.id}`;
  return `https://youtube.com/watch?v=${video.id}`;
};

const platformLabel = {
  short: 'YouTube Short',
  youtube: 'YouTube',
  instagram: 'Instagram Reel',
};

// YouTube serves a 120×90 grey placeholder (with a 404) for private or missing videos.
const isPlaceholderThumb = (img) => img.naturalWidth <= 120;

// A `thumb` set in data.js (an image in public/thumbs/) wins; otherwise YouTube's own thumbnail.
const thumbFor = (video) => {
  if (video.thumb) return video.thumb;
  if (video.platform === 'instagram') return null;
  return `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
};

const VideoCard = ({ category, video, index, featured = false }) => {
  const thumb = thumbFor(video);
  const [thumbOk, setThumbOk] = useState(Boolean(thumb));
  const title = video.title || `${category.label} #${String(index + 1).padStart(2, '0')}`;
  const badge = video.badge || (featured ? category.badge : null);

  return (
    <a
      href={videoUrl(video)}
      target="_blank"
      rel="noreferrer"
      className={`work-card${featured ? ' work-card-featured' : ''}`}
    >
      <div className="work-frame">
        {thumbOk ? (
          <>
            <img src={thumb} alt="" aria-hidden="true" className="work-thumb-blur" loading="lazy" />
            <img
              src={thumb}
              alt={title}
              className={`work-thumb${video.thumb ? ' work-thumb-fill' : ''}`}
              loading="lazy"
              onError={() => setThumbOk(false)}
              onLoad={(e) => { if (isPlaceholderThumb(e.currentTarget)) setThumbOk(false); }}
            />
          </>
        ) : (
          <div className="work-placeholder" aria-hidden="true">
            <span className="work-placeholder-text">Video / Reel</span>
          </div>
        )}
        <span className="work-platform">{platformLabel[video.platform]}</span>
        <span className="work-play"><Play size={22} fill="currentColor" /></span>
        {badge && <span className="work-badge">{badge}</span>}
      </div>
      <div className="work-caption">
        <h4>{title}</h4>
        <p>{category.tags.join(' • ')}</p>
        <span className="work-open">Watch <ArrowUpRight size={14} /></span>
      </div>
    </a>
  );
};

const WorkModal = ({ category, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="work-modal" onClick={onClose}>
      <div
        className="work-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-modal-title"
        style={{ '--work-color': category.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="work-modal-head">
          <div>
            <span className="work-column-count">{category.videos.length} videos</span>
            <h3 id="work-modal-title">{category.name}</h3>
          </div>
          <button ref={closeRef} type="button" className="work-modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <div className="work-modal-grid">
          {category.videos.map((video, i) => (
            <VideoCard key={video.id} category={category} video={video} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkShowcase = () => {
  const [openId, setOpenId] = useState(null);
  const close = useCallback(() => setOpenId(null), []);
  const openCategory = workCategories.find((c) => c.id === openId);

  return (
    <>
      <div className="work-columns">
        {workCategories.map((category, i) => (
          <div
            key={category.id}
            className={`work-column spotlight reveal reveal-zoom ${['', 'delay-1', 'delay-2', 'delay-3'][i % 4]}`}
            style={{ '--work-color': category.color }}
          >
            <div className="work-column-head">
              <span className="work-column-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{category.name}</h3>
              <span className="work-column-count">{category.videos.length} videos</span>
            </div>

            <VideoCard category={category} video={category.videos[0]} index={0} featured />

            {category.videos.length > 1 && (
              <button type="button" className="work-more" onClick={() => setOpenId(category.id)}>
                View more <span className="work-more-count">+{category.videos.length - 1}</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {openCategory && <WorkModal category={openCategory} onClose={close} />}
    </>
  );
};

export default WorkShowcase;
