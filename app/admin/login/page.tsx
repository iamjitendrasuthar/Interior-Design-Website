"use client";

import { useState } from "react";

// ✅ CHANGE YOUR CREDENTIALS HERE
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "portfolio@2024";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Set cookie
        document.cookie = `admin_auth=true; path=/; max-age=${60 * 60 * 24 * 7}`;
        // Hard full-page redirect to /admin
        window.location.replace("/admin");
      } else {
        setError("Incorrect username or password. Please try again.");
        setShake(true);
        setTimeout(() => setShake(false), 600);
        setLoading(false);
      }
    }, 600);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .login-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #0d1f0d;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .login-root::before {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, #1a4a1a 0%, transparent 70%);
          top: -200px; right: -200px;
          pointer-events: none;
        }
        .login-root::after {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, #112211 0%, transparent 70%);
          bottom: -150px; left: -100px;
          pointer-events: none;
        }
        .login-card {
          background: #fff;
          border-radius: 24px;
          padding: 48px 44px;
          width: 100%;
          max-width: 420px;
          position: relative;
          z-index: 1;
          box-shadow: 0 32px 64px rgba(0,0,0,0.4);
        }
        .login-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 32px; }
        .login-logo-icon {
          width: 40px; height: 40px; background: #132A13;
          border-radius: 12px; display: flex;
          align-items: center; justify-content: center; font-size: 20px;
        }
        .login-logo-text {
          font-size: 15px; font-weight: 700; color: #132A13;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .login-heading { font-size: 26px; font-weight: 700; color: #132A13; margin-bottom: 6px; }
        .login-subtext { font-size: 14px; color: #888; margin-bottom: 32px; }
        .login-label {
          display: block; font-size: 12px; font-weight: 600; color: #555;
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 7px;
        }
        .login-field { margin-bottom: 20px; }
        .login-input-wrap { position: relative; }
        .login-input {
          width: 100%; border: 1.5px solid #e0e0e0; border-radius: 12px;
          padding: 12px 16px; font-size: 14px; font-family: inherit;
          outline: none; background: #fafafa; color: #222;
          transition: border-color 0.2s, background 0.2s;
        }
        .login-input:focus { border-color: #4F772D; background: #fff; }
        .login-input.has-toggle { padding-right: 46px; }
        .toggle-pass {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          font-size: 18px; color: #aaa; padding: 0; line-height: 1;
        }
        .login-error {
          background: #fff5f5; border: 1.5px solid #ffcdd2;
          border-radius: 10px; padding: 10px 14px; font-size: 13px;
          color: #c62828; margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
        .shake { animation: shake 0.5s ease; }
        .login-btn {
          width: 100%; background: #132A13; color: #fff; border: none;
          border-radius: 12px; padding: 14px; font-size: 15px; font-weight: 600;
          font-family: inherit; cursor: pointer; letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.1s;
          display: flex; align-items: center; justify-content: center;
          gap: 8px; margin-top: 8px;
        }
        .login-btn:hover:not(:disabled) { background: #1e3d1e; }
        .login-btn:active:not(:disabled) { transform: scale(0.98); }
        .login-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .login-footer { text-align: center; margin-top: 24px; font-size: 12px; color: #bbb; }
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="login-root">
        <div className={`login-card ${shake ? "shake" : ""}`}>
          <div className="login-logo">
            <div className="login-logo-icon">🌿</div>
            <span className="login-logo-text">Portfolio Admin</span>
          </div>

          <h1 className="login-heading">Welcome back</h1>
          <p className="login-subtext">Sign in to access your dashboard</p>

          <form onSubmit={handleLogin}>
            <div className="login-field">
              <label className="login-label">Username</label>
              <input
                className="login-input"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                autoComplete="username"
                required
              />
            </div>

            <div className="login-field">
              <label className="login-label">Password</label>
              <div className="login-input-wrap">
                <input
                  className="login-input has-toggle"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="toggle-pass"
                  onClick={() => setShowPass((v) => !v)}
                  tabIndex={-1}
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {error && (
              <div className="login-error">
                <span>⚠️</span> {error}
              </div>
            )}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner" />
                  Verifying...
                </>
              ) : (
                "Sign In →"
              )}
            </button>
          </form>

          <p className="login-footer">Interior Design Portfolio © 2024</p>
        </div>
      </div>
    </>
  );
}
