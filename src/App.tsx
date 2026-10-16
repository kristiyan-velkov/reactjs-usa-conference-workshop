import { useState } from "react";
import "./App.css";

const sessions = [
  {
    time: "09:00",
    title: "Secure defaults in React 19",
    speaker: "Kristiyan Velkov",
    tag: "Fundamentals",
  },
  {
    time: "11:00",
    title: "XSS, secrets & client bundles",
    speaker: "Workshop track",
    tag: "Front-end",
  },
  {
    time: "14:00",
    title: "Supply chain: npm & lockfiles",
    speaker: "Live demo",
    tag: "DevSecOps",
  },
];

export default function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="page">
      <div className="glow glow-a" aria-hidden />
      <div className="glow glow-b" aria-hidden />

      <header className="header">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          <span>React USA</span>
        </div>
        <nav className="nav">
          <a href="#agenda">Agenda</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Conference workshop · 2026</p>
          <h1>
            Build React apps that stay <em>secure by default</em>
          </h1>
          <p className="lede">
            A hands-on session on modern React patterns, dependency hygiene, and
            what to look for before you run <code>npm install</code>.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setRegistered(true)}
            >
              {registered ? "You're on the list" : "Reserve a seat"}
            </button>
            <a className="btn btn-ghost" href="#agenda">
              View agenda
            </a>
          </div>
          {registered && (
            <p className="confirm" role="status">
              Thanks — check your inbox for workshop materials (mock).
            </p>
          )}
        </section>

        <section id="agenda" className="agenda">
          <h2>Today&apos;s sessions</h2>
          <ul className="session-list">
            {sessions.map((s) => (
              <li key={s.title} className="session-card">
                <time dateTime={s.time}>{s.time}</time>
                <div>
                  <span className="tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.speaker}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="about">
          <div className="about-card">
            <h2>What you&apos;ll take away</h2>
            <ul>
              <li>Actionable React security rules for real codebases</li>
              <li>How to review PRs that touch dependencies</li>
              <li>Safe install habits: lockfiles, audits, ignore-scripts</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>React USA Conference Workshop · Demo app (safe on <code>main</code>)</p>
      </footer>
    </div>
  );
}
