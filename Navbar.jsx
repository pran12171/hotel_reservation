import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:wght@400;500;600&display=swap');

  :root {
    --bg: #0a0a0f;
    --surface: #13131a;
    --border: #2a2a3a;
    --accent: #7c6af7;
    --accent-glow: rgba(124, 106, 247, 0.25);
    --text: #e8e8f0;
    --muted: #6b6b80;
    --white: #ffffff;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    height: 64px;
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    color: var(--white);
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  .nav-logo span {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--muted);
    text-decoration: none;
    padding: 0.4rem 0.9rem;
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--text);
    background: rgba(255,255,255,0.05);
  }

  .nav-cta {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--white);
    background: var(--accent);
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 0 0 var(--accent-glow);
  }

  .nav-cta:hover {
    opacity: 0.88;
    box-shadow: 0 0 20px var(--accent-glow);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
  }

  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .mobile-menu {
    display: none;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 0.25rem;
    z-index: 99;
  }

  .mobile-menu.open { display: flex; }

  .mobile-menu a {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--muted);
    text-decoration: none;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border);
    transition: color 0.2s;
  }

  .mobile-menu a:last-child { border-bottom: none; }
  .mobile-menu a:hover { color: var(--text); }

  @media (max-width: 768px) {
    .nav-links, .nav-cta { display: none; }
    .hamburger { display: flex; }
  }
`;

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Features", page: "features" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
          project<span>.</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.page}>
              <a
                href="#"
                className={currentPage === link.page ? "active" : ""}
                onClick={(e) => { e.preventDefault(); onNavigate(link.page); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="nav-cta"
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate("login"); }}
        >
          Sign in
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.page}
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate(link.page); setMenuOpen(false); }}
          >
            {link.label}
          </a>
        ))}
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("login"); setMenuOpen(false); }}>
          Sign in →
        </a>
      </div>
    </>
  );
}
