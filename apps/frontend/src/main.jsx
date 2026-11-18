import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity, ArrowRight, BriefcaseBusiness, CheckCircle2,
  LockKeyhole, Mail, ShieldCheck, Sparkles, Zap
} from 'lucide-react';

import SalesAssistant from './sales-assistant/SalesAssistant.jsx';
import WorkforceCommandCenter from './workforce/WorkforceCommandCenter.jsx';
import ProspectingCenter from './workforce/ProspectingCenter.jsx';
import AdminConsole from './workforce/AdminConsole.jsx';
import MarketingCenter from './workforce/MarketingCenter.jsx';
import SEOCommandCenter from './workforce/SEOCommandCenter.jsx';
import SocialCenter from './workforce/SocialCenter.jsx';
import MarketingSite from './MarketingSite.jsx';
import { apiFetch } from './lib/api.js';
import './styles.css';

function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

function Auth({ initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError('');

    try {
      const data = await apiFetch(`/auth/${mode}`, {
        method: 'POST',
        body: { email, name, password }
      });

      localStorage.setItem('salesAssistantAccessToken', data.token);
      localStorage.setItem('salesAssistantUser', JSON.stringify(data.user));

      window.dispatchEvent(new CustomEvent('sales-assistant:authenticated', {
        detail: data.token
      }));

      navigate('/app');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-screen">
      <section className="auth-brand-panel">
        <a href="/" className="auth-brand"><Zap size={23} /> SALES ASSISTANT AI</a>
        <div>
          <span className="eyebrow">YOUR AUTONOMOUS AI WORKFORCE</span>
          <h1>Build an intelligent team that helps your business grow.</h1>
          <p>Coordinate sales, marketing, market intelligence and growth operations from one AI-powered workspace.</p>
          <div className="auth-benefits">
            {['Specialized AI employees', 'Connected business departments', 'Human-controlled execution'].map(x => (
              <div key={x}><CheckCircle2 size={18} /> {x}</div>
            ))}
          </div>
        </div>
        <small>Independent Sales Assistant AI account and workspace.</small>
      </section>

      <section className="auth-form-panel">
        <div className="auth-form">
          <a href="/" className="auth-back">← Back to website</a>
          <div className="auth-symbol"><BriefcaseBusiness size={24} /></div>
          <span className="eyebrow">{mode === 'login' ? 'CUSTOMER ACCESS' : 'GET STARTED'}</span>
          <h2>{mode === 'login' ? 'Welcome back.' : 'Build your AI workforce.'}</h2>
          <p>{mode === 'login' ? 'Sign in to continue to your workspace.' : 'Create your Sales Assistant AI account.'}</p>

          <form onSubmit={submit}>
            {mode === 'register' && (
              <label>Your name
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
              </label>
            )}

            <label>Email address
              <div className="auth-input-icon"><Mail size={17} /><input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" /></div>
            </label>

            <label>Password
              <div className="auth-input-icon"><LockKeyhole size={17} /><input required minLength={8} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 8 characters" /></div>
            </label>

            {error && <div className="auth-error">{error}</div>}

            <button className="button button-primary auth-submit" disabled={busy}>
              {busy ? 'Please wait…' : mode === 'login' ? 'Sign in securely' : 'Create account'}
              <ArrowRight size={17} />
            </button>
          </form>

          <p className="auth-switch">
            {mode === 'login' ? 'New to Sales Assistant AI?' : 'Already have an account?'}
            <button onClick={() => {
              setMode(mode === 'login' ? 'register' : 'login');
              setError('');
              navigate(mode === 'login' ? '/signup' : '/login');
            }}>{mode === 'login' ? 'Create account' : 'Sign in'}</button>
          </p>

          <div className="auth-security"><ShieldCheck size={15} /> Independent authentication · Secure password storage</div>
        </div>
      </section>
    </main>
  );
}

function Workspace({ onSignOut }) {
  const [view, setView] = useState('workforce');
  const [isAdmin, setIsAdmin] = useState(() => JSON.parse(localStorage.getItem('salesAssistantUser') || '{}').is_platform_admin === true);

  useEffect(() => {
    apiFetch('/auth/me').then(data => {
      const old = JSON.parse(localStorage.getItem('salesAssistantUser') || '{}');
      localStorage.setItem('salesAssistantUser', JSON.stringify({ ...old, ...data.user }));
      setIsAdmin(data.user.is_platform_admin === true);
    }).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#07111f]">
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#081322]/95 px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400 text-slate-950"><Zap size={18} /></div>
          <div><b className="text-sm tracking-wide text-white">SALES ASSISTANT AI</b><div className="text-[10px] uppercase tracking-widest text-slate-500">Autonomous sales & marketing workforce</div></div>
        </div>
        <nav className="flex flex-wrap items-center gap-2">
          {[
            ['workforce', 'Workforce command'],
            ['sales', 'Sales workspace'],
            ['prospecting', 'Prospect discovery'],
            ['marketing', 'Marketing'],
            ['seo', 'SEO'],
            ['social', 'Social media'],
            ...(isAdmin ? [['admin', 'Admin panel']] : [])
          ].map(([id, label]) => (
            <button key={id} onClick={() => setView(id)} className={`rounded-lg px-3 py-2 text-xs font-semibold ${view === id ? 'bg-cyan-400 text-slate-950' : 'text-slate-300 hover:bg-white/5'}`}>{label}</button>
          ))}
          <button onClick={onSignOut} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300">Sign out</button>
        </nav>
      </header>

      {view === 'workforce' ? <WorkforceCommandCenter /> :
        view === 'sales' ? <SalesAssistant /> :
        view === 'prospecting' ? <ProspectingCenter /> :
        view === 'marketing' ? <MarketingCenter /> :
        view === 'seo' ? <SEOCommandCenter /> :
        view === 'social' ? <SocialCenter /> : <AdminConsole />}
    </div>
  );
}

function Root() {
  const [token, setToken] = useState(() => localStorage.getItem('salesAssistantAccessToken'));
  const [path, setPath] = useState(window.location.pathname.replace(/\/+$/, '') || '/');

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname.replace(/\/+$/, '') || '/');
    const syncToken = () => setToken(localStorage.getItem('salesAssistantAccessToken'));
    const authenticated = event => {
      setToken(event.detail || localStorage.getItem('salesAssistantAccessToken'));
      syncPath();
    };
    const unauthorized = () => setToken(null);

    window.addEventListener('popstate', syncPath);
    window.addEventListener('storage', syncToken);
    window.addEventListener('sales-assistant:authenticated', authenticated);
    window.addEventListener('sales-assistant:unauthorized', unauthorized);

    return () => {
      window.removeEventListener('popstate', syncPath);
      window.removeEventListener('storage', syncToken);
      window.removeEventListener('sales-assistant:authenticated', authenticated);
      window.removeEventListener('sales-assistant:unauthorized', unauthorized);
    };
  }, []);

  const signOut = () => {
    localStorage.removeItem('salesAssistantAccessToken');
    localStorage.removeItem('salesAssistantUser');
    setToken(null);
    navigate('/');
  };

  if (token && path !== '/login' && path !== '/signup') {
    return <Workspace onSignOut={signOut} />;
  }

  if (path === '/login') return <Auth key="login" initialMode="login" />;
  if (path === '/signup') return <Auth key="signup" initialMode="register" />;

  if (token) return <Workspace onSignOut={signOut} />;

  const publicPaths = ['/', '/features', '/how-it-works', '/pricing', '/demo'];
  if (publicPaths.includes(path)) return <MarketingSite path={path} />;

  return <MarketingSite path="/" />;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><Root /></React.StrictMode>
);
