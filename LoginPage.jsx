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
    --error: #f87171;
  }

  .login-page {
    min-height: 100vh;
    background: var(--bg);
    padding-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Instrument Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .login-page::before {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(124,106,247,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .login-card {
    width: 100%;
    max-width: 420px;
    margin: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 2.5rem;
    animation: fadeUp 0.5s ease forwards;
  }

  .login-logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--white);
    margin-bottom: 2rem;
    display: block;
  }

  .login-logo span { color: var(--accent); }

  .login-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--white);
    margin: 0 0 0.4rem;
    letter-spacing: -0.02em;
  }

  .login-subtitle {
    font-size: 0.9rem;
    color: var(--muted);
    margin: 0 0 2rem;
  }

  .form-group {
    margin-bottom: 1.1rem;
  }

  .form-label {
    display: block;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.4rem;
    letter-spacing: 0.01em;
  }

  .form-input {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 9px;
    padding: 0.7rem 1rem;
    font-family: 'Instrument Sans', sans-serif;
    font-size: 0.95rem;
    color: var(--text);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .form-input::placeholder { color: var(--muted); }

  .form-input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
  }

  .form-input.error { border-color: var(--error); }

  .form-error {
    font-size: 0.8rem;
    color: var(--error);
    margin-top: 0.3rem;
  }

  .form-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .remember-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--muted);
    cursor: pointer;
  }

  .remember-label input[type="checkbox"] {
    accent-color: var(--accent);
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  .forgot-link {
    font-size: 0.85rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }

  .forgot-link:hover { text-decoration: underline; }

  .btn-login {
    width: 100%;
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: var(--white);
    background: var(--accent);
    border: none;
    padding: 0.85rem;
    border-radius: 10px;
    cursor: pointer;
    transition: opacity 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px var(--accent-glow);
    margin-bottom: 1.5rem;
  }

  .btn-login:hover { opacity: 0.85; }
  .btn-login:disabled { opacity: 0.5; cursor: not-allowed; }

  .divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .divider::before,
  .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .divider span {
    font-size: 0.8rem;
    color: var(--muted);
  }

  .btn-oauth {
    width: 100%;
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--text);
    background: transparent;
    border: 1px solid var(--border);
    padding: 0.7rem;
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    margin-bottom: 0.75rem;
  }

  .btn-oauth:hover { border-color: var(--muted); background: rgba(255,255,255,0.03); }

  .signup-row {
    text-align: center;
    font-size: 0.875rem;
    color: var(--muted);
    margin-top: 1rem;
  }

  .signup-row a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
  }

  .signup-row a:hover { text-decoration: underline; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

export default function LoginPage({ onNavigate }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email.includes("@")) e.email = "Enter a valid email address.";
    if (form.password.length < 6) e.password = "Password must be at least 6 characters.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate("home"); // replace with real auth logic
    }, 1200);
  };

  const set = (field) => (ev) => {
    setForm({ ...form, [field]: ev.target.value });
    setErrors({ ...errors, [field]: undefined });
  };

  return (
    <>
      <style>{styles}</style>

      <div className="login-page">
        <div className="login-card">
          <span className="login-logo">project<span>.</span></span>

          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">Sign in to your account to continue.</p>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className={`form-input ${errors.email ? "error" : ""}`}
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={set("email")}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className={`form-input ${errors.password ? "error" : ""}`}
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={set("password")}
            />
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>

          <div className="form-row">
            <label className="remember-label">
              <input type="checkbox" /> Remember me
            </label>
            <a className="forgot-link" href="#">Forgot password?</a>
          </div>

          <button className="btn-login" onClick={handleSubmit} disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>

          <div className="divider"><span>or</span></div>

          <button className="btn-oauth">Continue with Google</button>
          <button className="btn-oauth">Continue with GitHub</button>

          <p className="signup-row">
            Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}
