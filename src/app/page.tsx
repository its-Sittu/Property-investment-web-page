import { ArrowRight } from "lucide-react";
import "./globals.css";

export default function Home() {
  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo-container">
          {/* A simple placeholder logo resembling "Stake" */}
          <div className="logo-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9 20 6.5 17.5 5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M11 12H17"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span>Stake</span>
        </div>
        <nav className="nav-links">
          <a href="#">Properties</a>
          <a href="#">Digital Assets</a>
          <a href="#">Stake & Earn</a>
        </nav>
        <div className="auth-buttons">
          <a href="#" className="login-btn">
            Login
          </a>
          <a href="#" className="signup-btn">
            Sign Up
          </a>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">
            Discover <span className="highlight">high-growth</span>
            <br />
            property investments
          </h1>
          <p className="hero-subtitle">
            Join the CEG Equity Token batch. Start building your portfolio with
            fractional ownership of global assets.
          </p>
          <button className="cta-button">
            Start Earning Now <ArrowRight size={20} />
          </button>
        </section>

        <section className="showcase-container">
          <div className="showcase-image">
            <div className="puzzle-overlay"></div>
            {/* Playful puzzle piece floating */}
            <div className="puzzle-piece"></div>
          </div>

          <div className="showcase-content">
            <h2>
              Access<br />
              premium<br />
              property<br />
              ownership<br />
              for <span className="highlight">$150</span>
            </h2>

            <div className="returns-card">
              <div className="returns-header">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#f48024"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <circle cx="12" cy="12" r="4" fill="#f48024" />
                </svg>
                All Time Returns
              </div>
              <div className="returns-value">
                <h3>AED 165,000</h3>
                <span className="positive">+111%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="progression-section">
          <div className="progression-header">
            <h3>Price Progression (200 Tokens)</h3>
            <div className="status-badges">
              <span className="badge sold-out">Sold Out 1-3</span>
              <span className="badge active-badge">Active 4</span>
            </div>
          </div>

          <div className="batches-grid">
            <div className="batch-card">
              <span className="batch-lbl">Batch 1</span>
              <span className="batch-val">$4,000</span>
            </div>
            <div className="batch-card">
              <span className="batch-lbl">Batch 2</span>
              <span className="batch-val">$4,250</span>
            </div>
            <div className="batch-card">
              <span className="batch-lbl">Batch 3</span>
              <span className="batch-val">$4,500</span>
            </div>
            <div className="batch-card active">
              <span className="batch-lbl">Batch 4</span>
              <span className="batch-val">$4,750</span>
            </div>
            <div className="batch-card">
              <span className="batch-lbl">Batch 5</span>
              <span className="batch-val">$5,000</span>
            </div>
            <div className="batch-card">
              <span className="batch-lbl">Batch 6</span>
              <span className="batch-val">$5,250</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
