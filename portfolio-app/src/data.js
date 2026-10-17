// All portfolio content lives here. Numbers are sourced from the CV,
// the Creator Pipeline sheet and the Tohands Creative Requirement sheet.

export const profile = {
  name: 'Swastik Tripathi',
  title: 'Content Strategist & Video Editor',
};

export const contact = {
  email: 'ratanswastik9151@gmail.com',
  linkedin: 'https://www.linkedin.com/in/swastik-ratan-tripathi-8621b436b/',
  linkedinHandle: 'swastik-ratan-tripathi',
  instagram: 'https://www.instagram.com/snick0_/',
  instagramHandle: '@snick0_',
};

export const heroStats = [
  { value: '15.5x', label: 'Peak ad ROAS' },
  { value: '125M+', label: 'Influencer reel views' },
  { value: '37K → 70K', label: 'Instagram followers' },
  { value: '4K → 10.5K', label: 'YouTube subscribers' },
];

export const influencerCase = {
  stats: [
    { value: '43', label: 'creators onboarded', note: '55 collaborations, Feb–Oct 2026' },
    { value: '13', label: 'reels crossed 1M views', note: 'out of 33 tracked' },
    { value: '₹2.7', label: 'per 1,000 views', note: 'vs ~₹69 CPM on paid Meta — ~25x cheaper reach' },
    { value: '127', label: 'inbound creator applications', note: 'via a creator sign-up form' },
  ],
  topReels: [
    { views: '59M', followers: '50K', month: 'Jul 2026', url: 'https://www.instagram.com/reel/DaSlXpupWW-/' },
    { views: '29.7M', followers: '21.8K', month: 'Mar 2026', url: 'https://www.instagram.com/reel/DWtrU4yDxd9/' },
    { views: '21M+', followers: '52K', month: 'Jun 2026', url: 'https://www.instagram.com/reel/DZnGRtZSPqM/' },
  ],
  learnings: [
    'Micro-creators outperformed big accounts: all three 20M+ reels came from creators with under 55K followers, on deals of ₹6K or less.',
    'Every deal includes 3–6 months of ad rights, so winning creator reels go straight into Meta ads.',
    'Engagement was real, not just views: 3.4M likes, 1.39M shares and 593K saves across tracked reels.',
  ],
};

export const adCase = {
  stats: [
    { value: '100+', label: 'ad creatives produced', note: 'scripted, shot, presented & edited' },
    { value: '90', label: 'ads audited', note: 'Feb–Apr 2026 creative analysis' },
    { value: '6.9x', label: 'blended ROAS', note: 'across the full audited set' },
    { value: '3,375', label: 'purchases', note: 'attributed to audited creatives' },
  ],
  winners: [
    { name: 'Discount On Bill', angle: 'Price / offer', roas: '11.5x', ctr: '2.19%', hook: '21%' },
    { name: 'Ek Responsibility Hai', angle: 'Shopkeeper emotion', roas: '11.4x', ctr: '1.31%', hook: '17%' },
    { name: 'Aapke Customer Me Bill', angle: 'Product demo', roas: '9.0x', ctr: '0.86%', hook: '19%' },
    { name: 'Aap Bhi Ek Dukaandar Ho', angle: 'Identity hook', roas: '8.2x', ctr: '1.61%', hook: '13%' },
    { name: 'Making a Parle Bill', angle: 'Real-store demo', roas: '8.0x', ctr: '1.08%', hook: '31%' },
    { name: 'Dukaan Ka CEO', angle: 'Aspiration — top spender', roas: '7.7x', ctr: '0.73%', hook: '15%' },
    { name: 'Creator Collab: Round Figure Customer', angle: 'Influencer whitelisting', roas: '6.6x', ctr: '1.55%', hook: '40%' },
  ],
  learnings: [
    'Creator-made content hooks hardest: a whitelisted creator reel hit a 40% hook rate, the highest of any scaled ad.',
    'Offer-led creatives drove the clicks: "Discount On Bill" posted the best CTR and ROAS among scaled ads.',
    'Hinglish, shopkeeper-POV scripts with a live product demo consistently beat polished brand-speak.',
  ],
};

export const growthCase = {
  stats: [
    { value: '+89%', label: 'Instagram', note: '37K → 70K followers' },
    { value: '2.6x', label: 'YouTube', note: '4K → 10.5K subscribers' },
  ],
  levers: [
    'Weekly audit of the last 30 days of Instagram & Facebook to find what is trending and double down.',
    'Festival and occasion-based campaigns planned ahead of the calendar.',
    'Product tutorials and Shorts made end-to-end: competitor research, scripting, recording, Premiere Pro edit.',
    'Influencer collabs used as a follower-growth lever, not just a sales channel.',
  ],
};

export const editingCase = {
  stats: [
    { value: '100+', label: 'videos edited', note: 'across performance marketing, social media & creator content' },
    { value: '3+', label: 'content formats', note: 'Performance Ads, Social Reels, Influencer Content' },
    { value: '2–3/day', label: 'reels produced', note: 'for ongoing brand and content requirements' },
    { value: 'End-to-End', compact: true, label: 'workflow', note: 'editing, captions, sound design, pacing, transitions & final delivery' },
  ],
  work: [
    { project: 'Performance Ad — Tohands', type: 'Performance Marketing', role: 'Edit + Creative Execution', output: 'Meta Ad' },
    { project: 'Social Media Reels', type: 'Organic Social', role: 'Edit + Content Execution', output: 'Instagram Reel' },
    { project: 'Creator / Influencer Videos', type: 'Influencer Marketing', role: 'Scripting + Storytelling', output: 'Short-form' },
    { project: 'Product / Brand Content', type: 'Brand Content', role: 'Edit + Post Production', output: 'Social Video' },
    { project: 'UGC Performance Creative', type: 'Paid Social', role: 'Storytelling + Scripting + Execution', output: 'Ad Creative' },
  ],
  learnings: [
    { lead: 'The first 2–3 seconds matter', text: 'Strong visual hooks and quick context help stop the scroll.' },
    { lead: 'Pacing beats over-editing', text: 'Every cut, zoom, caption and transition should have a purpose.' },
    { lead: 'Retention is the real metric', text: 'I edit for attention, not just aesthetics.' },
    { lead: 'Platform changes the edit', text: 'Meta ads, Instagram Reels and creator content need different pacing, structure and storytelling.' },
    { lead: 'Good editing starts before Premiere', text: 'Understanding the footage, audience, objective and message makes the final edit stronger.' },
  ],
};

// Work section: one featured video per category, the rest open in "View more".
// platform: 'short' (YouTube Short), 'youtube' (regular video) or 'instagram' (reel).
// Optional `thumb`: path to an image in public/thumbs/ — needed for Instagram and for private YouTube videos.
const shorts = (ids) => ids.map((id) => ({ platform: 'short', id }));

export const workCategories = [
  {
    id: 'performance',
    name: 'Performance Marketing',
    color: '#3b82f6',
    badge: '15.5x ROAS',
    label: 'Performance Creative',
    tags: ['Strategy', 'Script', 'Shoot', 'Edit'],
    videos: shorts([
      '7zg-yGk4A_k', 'qBTrczhcot0', 'ek9OiFmjx4A', 'UVdAFRIBXMk', '2Z2Jm34X_pg',
      'pNMg0uJov64', 'Fjdz40Es_3Q', 'DpeDe59REMM', 'Lx0tjc-KK8o',
    ]),
  },
  {
    id: 'editing',
    name: 'Video Editing',
    color: '#D4FF00',
    badge: '100+ videos edited',
    label: 'Edit',
    tags: ['Hook', 'Pacing', 'Captions', 'Sound'],
    videos: shorts([
      'qCZZ8VTf3us', 'eOK1HpxrLDE', 'dCyOk9fdFyk', 'IMNtvBxJsso', 'IsxYAnI7PwA', '2GJS6eMElG8', 'jEV1_I54hFw',
    ]),
  },
  {
    id: 'influencer',
    name: 'Influencer Marketing',
    color: '#a855f7',
    badge: '125M+ views',
    label: 'Creator Collab',
    tags: ['Source', 'Brief', 'Launch', 'Track'],
    videos: [
      { platform: 'instagram', id: 'DaSlXpupWW-', badge: '59M views', thumb: '/thumbs/ig-DaSlXpupWW-.jpg' },
      { platform: 'instagram', id: 'DZnGRtZSPqM', badge: '21M+ views', thumb: '/thumbs/ig-DZnGRtZSPqM.jpg' },
      { platform: 'instagram', id: 'DeHPlvgJ2oQ', thumb: '/thumbs/ig-DeHPlvgJ2oQ.jpg' },
    ],
  },
  {
    id: 'youtube',
    name: 'YouTube & Social',
    color: '#ec4899',
    badge: '4K → 10.5K subs',
    label: 'YouTube Tutorial',
    tags: ['Research', 'Script', 'Record', 'Edit'],
    videos: [
      { platform: 'youtube', id: 'Epso8CsmMbk', title: 'Connect the 2-in-1 Label Printer' },
      { platform: 'youtube', id: 'TFYw6IctjGM', title: 'Settle Your Due Amount' },
      { platform: 'youtube', id: 'qsvA_IG5oUw', title: '2-Inch & 3-Inch Printer Setup' },
      { platform: 'youtube', id: '9h1IET37Vyc', title: 'Dynamic Payment Display Setup' },
      { platform: 'youtube', id: '00aqiegoGrQ', title: 'Link the Calculator with the App (Hindi)' },
      { platform: 'youtube', id: 'w8hcMvVOf80', title: 'Connect a Keyboard' },
      { platform: 'youtube', id: 'WS_4Djuc22Y', title: 'Add Your Shop Logo to Printed Bills' },
      { platform: 'youtube', id: 'yyCdw3BOSdM', title: 'Getting Help from Support' },
    ],
  },
];

export const process = [
  {
    title: 'Research & Shortlist',
    time: '~1 day',
    text: 'Screen 70–80 reels on Instagram and Meta Creator Hub per cycle — views, comment quality, saves, shares and past brand collabs — down to 10 creators.',
  },
  {
    title: 'Outreach & Pricing',
    time: '~½ day',
    text: 'Collect each creator’s Instagram Insights, benchmark reach and audience quality to set a base price, negotiate, and send the agreement.',
  },
  {
    title: 'Brief & Follow Through',
    time: '~6 hrs / 5 creators',
    text: 'Brief creators on the product and reel concept, follow up daily until the device lands and the reel is live. If 2–3 drop, restart the pipeline.',
  },
  {
    title: 'Script & Shoot',
    time: '5–7 hrs / video',
    text: '3–4 hours studying competitor and brand videos to build the concept and script, then 2–3 hours recording — often on camera myself.',
  },
  {
    title: 'Edit',
    time: '1–2 ads / day',
    text: 'Performance ads cut daily in Premiere Pro. YouTube tutorials range from a 2-hour clean edit to multi-day frame-by-frame productions.',
  },
  {
    title: 'Audit & Iterate',
    time: 'Weekly',
    text: 'Review CTR, Hook Rate, Hold Rate and ROAS on ads, plus every influencer reel’s weekly performance, to steer the next briefs and creatives.',
  },
];

export const experience = [
  {
    role: 'Content Strategist & Growth Specialist',
    date: 'Dec 2025 – Present',
    company: 'Tohands PVT LTD · Bengaluru, India',
    points: [
      'Produced 100+ end-to-end performance marketing creatives, achieving 10.5x–15.5x ROAS.',
      'Scripted, shot and presented on camera in ad videos — several became the brand’s top-performing ads.',
      'Owned the full influencer cycle: research, outreach, pricing, negotiation, contracting, briefing and follow-ups.',
      'Creator collaborations generated 125M+ cumulative views, including reels at 59M, 29.7M and 21M+.',
      'Grew Instagram 37K → 70K followers and YouTube 4K → 10.5K subscribers.',
      'Built and led a 3-member content team (2 interns + a video editor) running weekly performance audits.',
    ],
  },
  {
    role: 'Video Editor',
    date: 'Jul 2025 – Dec 2025',
    company: 'Tohands PVT LTD · Bengaluru, India',
    points: [
      'Edited 55+ performance marketing videos for Meta ad campaigns and social media.',
      'Promoted to Content Strategist on the strength of creative performance and initiative.',
    ],
  },
  {
    role: 'Freelance Video Editor',
    date: 'Jul 2024 – Present',
    company: 'Fiverr & Upwork · US, UK Clients',
    points: ['Independent video editing for international clients across the US and UK.'],
  },
  {
    role: 'Junior Video Editor',
    date: 'May 2023 – Jul 2025',
    company: 'WorkRoot',
    points: [
      'Edited social media content, news-style videos and promos for clients.',
      'Designed animated openers, transitions and branded lower-thirds.',
      'Exported videos optimised for YouTube, Instagram and mobile.',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Commerce (B.Com)',
    date: 'Pursuing · 2025 – 2028',
    school: 'Dayanand Anglo Vedic (DAV) Degree College',
  },
  {
    title: 'Intermediate (Class XII), Accounts',
    date: 'Grade: 75%',
    school: 'Dayanand Anglo Vedic (DAV) Inter College',
  },
];

export const certifications = [
  { issuer: 'Meta', name: 'Performance Marketing' },
  { issuer: 'LinkedIn Learning', name: 'Influencer Marketing' },
  { issuer: 'HubSpot Academy', name: 'Social Media Management' },
  { issuer: 'HubSpot Academy', name: 'Social Media Marketing' },
];

export const skillGroups = [
  {
    name: 'Performance Marketing',
    emoji: '📊',
    color: '#3b82f6',
    skills: [
      { label: 'Meta Ads', emoji: '📣' },
      { label: '15.5x ROAS', emoji: '🚀' },
      { label: 'Hook Rate Optimization', emoji: '🎣' },
      { label: 'Hold Rate', emoji: '⏱️' },
      { label: 'A/B Testing', emoji: '🔬' },
      { label: 'Performance Analysis', emoji: '📈' },
      { label: 'Weekly Auditing', emoji: '📋' },
    ],
  },
  {
    name: 'Video Editing',
    emoji: '🎬',
    color: '#D4FF00',
    skills: [
      { label: 'Premiere Pro', emoji: '🎞️' },
      { label: 'Scriptwriting', emoji: '✍️' },
      { label: 'Storyboarding', emoji: '🖼️' },
      { label: 'On-Camera', emoji: '🎥' },
      { label: 'Voiceover', emoji: '🎙️' },
      { label: 'Video Production', emoji: '📹' },
      { label: 'Creative Editing', emoji: '✂️' },
    ],
  },
  {
    name: 'Social Media',
    emoji: '📱',
    color: '#ec4899',
    skills: [
      { label: 'Content Strategy', emoji: '🧠' },
      { label: 'Instagram Growth', emoji: '📸' },
      { label: 'YouTube', emoji: '▶️' },
      { label: 'Brand Building', emoji: '🏆' },
      { label: 'Content Planning', emoji: '🗓️' },
      { label: 'Audience Growth', emoji: '👥' },
      { label: 'Weekly Auditing', emoji: '🔁' },
    ],
  },
  {
    name: 'Influencer Marketing',
    emoji: '🤳',
    color: '#a855f7',
    skills: [
      { label: 'Influencer Marketing', emoji: '🌟' },
      { label: 'Creator Outreach', emoji: '📩' },
      { label: 'Creator Sourcing', emoji: '🔎' },
      { label: 'Negotiation', emoji: '🤝' },
      { label: 'Campaign Management', emoji: '🗂️' },
      { label: 'Pipeline Management', emoji: '🧩' },
      { label: 'Creator Performance Analysis', emoji: '📊' },
    ],
  },
];
