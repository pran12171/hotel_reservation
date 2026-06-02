const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;600;700&display=swap');

  :root {
    --bg:        #1a1814;
    --bg-warm:   #1f1c17;
    --surface:   #252118;
    --border:    #3a3428;
    --gold:      #c9a84c;
    --gold-lt:   #e0c87a;
    --gold-dim:  rgba(201,168,76,0.18);
    --stone:     #a09070;
    --text:      #f0e8d8;
    --muted:     #8a7d68;
    --white:     #fdf8ef;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .hp {
    min-height: 100vh;
    background: var(--bg);
    padding-top: 64px;
    color: var(--text);
    font-family: 'EB Garamond', serif;
    overflow-x: hidden;
  }

  /* ── ornamental divider ── */
  .ornament {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin: 0 auto;
  }
  .ornament-line {
    width: 80px;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold));
  }
  .ornament-line.rev {
    background: linear-gradient(to left, transparent, var(--gold));
  }
  .ornament-diamond {
    width: 7px;
    height: 7px;
    background: var(--gold);
    transform: rotate(45deg);
    flex-shrink: 0;
  }
  .ornament-sm {
    width: 4px;
    height: 4px;
    background: var(--gold-lt);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  /* ══════════════════════════
     HERO
  ══════════════════════════ */
  .hero {
    position: relative;
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5rem 2rem 6rem;
    overflow: hidden;
  }

  /* layered heritage texture */
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 65%),
      radial-gradient(ellipse 60% 80% at 20% 100%, rgba(201,168,76,0.06) 0%, transparent 55%),
      radial-gradient(ellipse 50% 50% at 80% 50%, rgba(160,144,112,0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  /* subtle kakatiya geometric motif overlay */
  .hero-motif {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 700px;
    opacity: 0.025;
    pointer-events: none;
  }

  .hero-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: 0.72rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.6rem;
    opacity: 0;
    animation: riseIn 0.8s 0.2s ease forwards;
  }

  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 600;
    line-height: 1.0;
    letter-spacing: -0.01em;
    color: var(--white);
    max-width: 820px;
    margin-bottom: 0.4rem;
    opacity: 0;
    animation: riseIn 0.9s 0.35s ease forwards;
  }

  .hero-title em {
    font-style: italic;
    color: var(--gold-lt);
  }

  .hero-sub-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
    font-weight: 400;
    letter-spacing: 0.18em;
    color: var(--stone);
    margin-bottom: 2rem;
    opacity: 0;
    animation: riseIn 0.8s 0.5s ease forwards;
  }

  .hero-ornament {
    margin-bottom: 2rem;
    opacity: 0;
    animation: riseIn 0.7s 0.65s ease forwards;
  }

  .hero-desc {
    font-size: clamp(1rem, 1.6vw, 1.15rem);
    color: var(--muted);
    max-width: 600px;
    line-height: 1.85;
    font-style: italic;
    margin-bottom: 3rem;
    opacity: 0;
    animation: riseIn 0.8s 0.75s ease forwards;
  }

  .hero-actions {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    animation: riseIn 0.8s 0.9s ease forwards;
  }

  .btn-gold {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--bg);
    background: linear-gradient(135deg, var(--gold-lt) 0%, var(--gold) 100%);
    border: none;
    padding: 0.9rem 2.2rem;
    cursor: pointer;
    position: relative;
    transition: opacity 0.25s, box-shadow 0.25s;
    clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  }
  .btn-gold:hover {
    opacity: 0.88;
    box-shadow: 0 8px 32px rgba(201,168,76,0.35);
  }

  .btn-outline {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    background: transparent;
    border: 1px solid var(--gold);
    padding: 0.9rem 2.2rem;
    cursor: pointer;
    transition: background 0.25s, color 0.25s;
    clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  }
  .btn-outline:hover {
    background: var(--gold-dim);
    color: var(--gold-lt);
  }

  /* scroll cue */
  .scroll-cue {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0;
    animation: riseIn 0.7s 1.2s ease forwards;
  }
  .scroll-cue span {
    font-family: 'Cinzel', serif;
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    color: var(--muted);
    text-transform: uppercase;
  }
  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scrollPulse 1.8s ease-in-out infinite;
  }

  /* ══════════════════════════
     ABOUT SECTION
  ══════════════════════════ */
  .about {
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .about-left {
    position: relative;
  }

  .about-frame {
    border: 1px solid var(--border);
    padding: 2.5rem;
    background: var(--surface);
    position: relative;
  }
  .about-frame::before {
    content: '';
    position: absolute;
    top: -1px; left: -1px;
    right: -1px; bottom: -1px;
    border: 1px solid transparent;
    background: linear-gradient(135deg, var(--gold), transparent 50%, var(--gold)) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  .about-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.55rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.65;
    color: var(--text);
    margin-bottom: 1.5rem;
  }

  .about-attribution {
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    color: var(--gold);
    text-transform: uppercase;
  }

  .about-corner {
    position: absolute;
    width: 18px;
    height: 18px;
    border-color: var(--gold);
    border-style: solid;
  }
  .about-corner.tl { top: -8px; left: -8px; border-width: 1px 0 0 1px; }
  .about-corner.tr { top: -8px; right: -8px; border-width: 1px 1px 0 0; }
  .about-corner.bl { bottom: -8px; left: -8px; border-width: 0 0 1px 1px; }
  .about-corner.br { bottom: -8px; right: -8px; border-width: 0 1px 1px 0; }

  .about-right {}

  .section-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: 0.68rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.8rem;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    line-height: 1.1;
    color: var(--white);
    margin-bottom: 1.2rem;
    letter-spacing: -0.01em;
  }

  .section-title em {
    font-style: italic;
    color: var(--gold-lt);
  }

  .about-ornament { margin: 1.5rem 0; justify-content: flex-start; }
  .about-ornament .ornament-line { width: 50px; }

  .about-body {
    font-size: 1.05rem;
    line-height: 1.9;
    color: var(--muted);
  }

  .about-detail {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    color: var(--stone);
    text-transform: uppercase;
  }
  .about-detail::before {
    content: '';
    width: 30px;
    height: 1px;
    background: var(--gold);
    flex-shrink: 0;
  }

  /* ══════════════════════════
     HERITAGE PILLARS
  ══════════════════════════ */
  .pillars {
    background: var(--bg-warm);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 5rem 2rem;
    text-align: center;
  }

  .pillars-header {
    max-width: 560px;
    margin: 0 auto 3.5rem;
  }

  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    max-width: 960px;
    margin: 0 auto;
    border: 1px solid var(--border);
  }

  .pillar {
    padding: 3rem 2.5rem;
    border-right: 1px solid var(--border);
    position: relative;
    transition: background 0.3s;
  }
  .pillar:last-child { border-right: none; }
  .pillar:hover { background: rgba(201,168,76,0.04); }

  .pillar-icon {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    display: block;
  }

  .pillar-title {
    font-family: 'Cinzel', serif;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.8rem;
  }

  .pillar-body {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--muted);
  }

  .pillar-top-accent {
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: var(--gold);
  }

  /* ══════════════════════════
     LOCATION STRIP
  ══════════════════════════ */
  .location-strip {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .location-left {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
  }

  .location-icon {
    color: var(--gold);
    font-size: 1.4rem;
    margin-top: 0.1rem;
    flex-shrink: 0;
  }

  .location-label {
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.35rem;
  }

  .location-text {
    font-size: 1rem;
    line-height: 1.65;
    color: var(--muted);
    max-width: 380px;
  }

  .location-cta {
    font-family: 'Cinzel', serif;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid var(--border);
    padding: 0.8rem 1.8rem;
    cursor: pointer;
    background: transparent;
    transition: border-color 0.25s, background 0.25s;
    white-space: nowrap;
  }
  .location-cta:hover { border-color: var(--gold); background: var(--gold-dim); }

  /* ══════════════════════════
     ANIMATIONS
  ══════════════════════════ */
  @keyframes riseIn {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.4; transform: scaleY(1); }
    50%       { opacity: 1;   transform: scaleY(1.2); }
  }

  @media (max-width: 768px) {
    .about { grid-template-columns: 1fr; gap: 3rem; }
    .pillars-grid { grid-template-columns: 1fr; }
    .pillar { border-right: none; border-bottom: 1px solid var(--border); }
    .pillar:last-child { border-bottom: none; }
    .location-strip { flex-direction: column; align-items: flex-start; }
  }
`;

export default function HomePage({ onNavigate }) {
  return (
    <>
      <style>{styles}</style>

      <div className="hp">

        {/* ═══ HERO ═══ */}
        <section className="hero">
          {/* Kakatiya geometric star motif */}
          <svg className="hero-motif" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="350,50 400,250 600,250 440,370 500,570 350,450 200,570 260,370 100,250 300,250" fill="none" stroke="#c9a84c" strokeWidth="1"/>
            <circle cx="350" cy="350" r="280" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
            <circle cx="350" cy="350" r="200" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
            <circle cx="350" cy="350" r="120" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
            <line x1="70" y1="350" x2="630" y2="350" stroke="#c9a84c" strokeWidth="0.4"/>
            <line x1="350" y1="70" x2="350" y2="630" stroke="#c9a84c" strokeWidth="0.4"/>
            <line x1="150" y1="150" x2="550" y2="550" stroke="#c9a84c" strokeWidth="0.4"/>
            <line x1="550" y1="150" x2="150" y2="550" stroke="#c9a84c" strokeWidth="0.4"/>
          </svg>

          <p className="hero-eyebrow">Jubilee Hills, Hyderabad</p>

          <h1 className="hero-title">
            Experience the <em>Royal Flavors</em><br />of Telangana
          </h1>

          <p className="hero-sub-title">Mana Telangana Ruchulu</p>

          <div className="hero-ornament ornament">
            <div className="ornament-line rev"></div>
            <div className="ornament-sm"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-sm"></div>
            <div className="ornament-line"></div>
          </div>

          <p className="hero-desc">
            Authentic Telugu heritage cuisine served in a luxurious fine-dining
            atmosphere inspired by tradition, culture, and timeless taste.
          </p>

          <div className="hero-actions">
            <button className="btn-gold">Explore Menu</button>
            <button className="btn-outline" onClick={() => onNavigate("login")}>Reserve a Table</button>
          </div>

          <div className="scroll-cue">
            <span>Discover</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section className="about">
          <div className="about-left">
            <div className="about-frame">
              <div className="about-corner tl"></div>
              <div className="about-corner tr"></div>
              <div className="about-corner bl"></div>
              <div className="about-corner br"></div>

              <p className="about-quote">
                "Every dish tells a story of Telangana's rich culinary legacy — 
                where slow-cooked heritage meets refined hospitality."
              </p>
              <p className="about-attribution">— Kakatiya Angan</p>
            </div>
          </div>

          <div className="about-right">
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-title">
              More Than a Restaurant.<br /><em>A Celebration.</em>
            </h2>

            <div className="ornament about-ornament">
              <div className="ornament-line rev" style={{width: '40px'}}></div>
              <div className="ornament-diamond"></div>
              <div className="ornament-line" style={{width: '40px', background: 'linear-gradient(to right, var(--gold), transparent)'}}></div>
            </div>

            <p className="about-body">
              Kakatiya Angan is more than a restaurant — it is a celebration of Telangana's 
              culinary heritage. Located in the heart of Jubilee Hills, Hyderabad, we bring 
              authentic regional flavors to life through traditional recipes, elegant interiors, 
              and a refined dining experience crafted for modern connoisseurs.
              <br /><br />
              Inspired by the grandeur of the Kakatiya era, we bring together authentic regional 
              flavors, timeless recipes, and refined hospitality in a luxurious heritage setting.
            </p>

            <p className="about-detail">
              Jubilee Hills, Road No. 10, MLA Colony, Hyderabad
            </p>
          </div>
        </section>

        {/* ═══ PILLARS ═══ */}
        <section className="pillars">
          <div className="pillars-header">
            <p className="section-eyebrow">The Kakatiya Promise</p>
            <h2 className="section-title">
              Crafted with <em>Heritage</em>
            </h2>

            <div className="ornament" style={{marginTop: '1rem'}}>
              <div className="ornament-line rev"></div>
              <div className="ornament-sm"></div>
              <div className="ornament-diamond"></div>
              <div className="ornament-sm"></div>
              <div className="ornament-line"></div>
            </div>
          </div>

          <div className="pillars-grid">
            <div className="pillar">
              <div className="pillar-top-accent"></div>
              <span className="pillar-icon">🏺</span>
              <p className="pillar-title">Authentic Recipes</p>
              <p className="pillar-body">
                Slow-cooked delicacies and handcrafted recipes passed down through 
                generations — prepared with traditional spices and time-honoured techniques.
              </p>
            </div>

            <div className="pillar">
              <div className="pillar-top-accent"></div>
              <span className="pillar-icon">✦</span>
              <p className="pillar-title">Heritage Ambiance</p>
              <p className="pillar-body">
                An elegant, heritage-inspired setting that echoes the grandeur of the 
                Kakatiya dynasty — where every corner tells a story.
              </p>
            </div>

            <div className="pillar">
              <div className="pillar-top-accent"></div>
              <span className="pillar-icon">🌿</span>
              <p className="pillar-title">Refined Hospitality</p>
              <p className="pillar-body">
                Warm, luxurious service rooted in the spirit of Telugu culture — 
                guests are not merely diners, they are honoured guests.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ LOCATION STRIP ═══ */}
        <section className="location-strip">
          <div className="location-left">
            <span className="location-icon">◈</span>
            <div>
              <p className="location-label">Find Us</p>
              <p className="location-text">
                Road No. 10, MLA Colony, beside My Home Raka,<br />
                Jubilee Hills, Hyderabad
              </p>
            </div>
          </div>
          <button className="location-cta">Get Directions</button>
        </section>

      </div>
    </>
  );
}
