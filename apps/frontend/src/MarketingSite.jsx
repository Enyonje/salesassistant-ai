import React from 'react';
import {
  ArrowRight, ArrowUpRight, BrainCircuit, Building2, Check,
  ChevronRight, CirclePlay, Compass, Cpu, Globe2, Layers3,
  LineChart, Menu, Network, Search, ShieldCheck, Sparkles,
  Target, TrendingUp, Users, Workflow, Zap
} from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Build your AI-powered sales operation.',
    employees: '3 AI employees',
    features: [
      'AI prospect discovery',
      'Essential sales workflows',
      'Basic marketing operations',
      'SEO essentials',
      'Performance dashboard',
      'Standard AI execution allowance'
    ]
  },
  {
    name: 'Professional',
    price: 99,
    popular: true,
    description: 'For businesses ready to scale.',
    employees: '10 AI employees',
    features: [
      'Everything in Starter',
      'Advanced prospect research',
      'Coordinated sales workflows',
      'Full marketing operations',
      'Advanced SEO intelligence',
      'Campaign management',
      'Advanced analytics',
      'Higher AI execution allowance'
    ]
  },
  {
    name: 'Business',
    price: 249,
    description: 'An intelligent workforce for growing companies.',
    employees: '25 AI employees',
    features: [
      'Everything in Professional',
      'Multiple workspaces',
      'Advanced workforce coordination',
      'Expanded execution capacity',
      'Team collaboration',
      'Revenue operations intelligence',
      'Priority support'
    ]
  }
];

const departments = [
  {
    icon: Target,
    name: 'Sales',
    description: 'Discover prospects, qualify opportunities and coordinate sales execution.',
    tag: 'REVENUE GENERATION'
  },
  {
    icon: Globe2,
    name: 'Marketing',
    description: 'Plan campaigns, develop content and coordinate marketing activities.',
    tag: 'DEMAND GENERATION'
  },
  {
    icon: Search,
    name: 'Market Intelligence',
    description: 'Research markets, competitors, industries and emerging opportunities.',
    tag: 'BUSINESS INTELLIGENCE'
  },
  {
    icon: TrendingUp,
    name: 'Growth',
    description: 'Identify opportunities and develop strategies for sustainable growth.',
    tag: 'GROWTH STRATEGY'
  },
  {
    icon: Compass,
    name: 'SEO',
    description: 'Research keywords, audit websites and develop organic growth strategies.',
    tag: 'ORGANIC GROWTH'
  },
  {
    icon: Workflow,
    name: 'Operations',
    description: 'Coordinate workflows, assign responsibilities and monitor execution.',
    tag: 'EXECUTION'
  },
  {
    icon: Users,
    name: 'Customer Success',
    description: 'Support customer relationships, engagement and retention.',
    tag: 'CUSTOMER EXPERIENCE'
  },
  {
    icon: LineChart,
    name: 'Finance & Revenue',
    description: 'Monitor business performance and revenue operations.',
    tag: 'PERFORMANCE'
  }
];

const steps = [
  ['01', 'Define your business', 'Tell your AI workforce about your business, products, customers and objectives.'],
  ['02', 'Configure your workforce', 'Choose departments, assign AI employees and establish responsibilities.'],
  ['03', 'Set your growth objectives', 'Define target markets, sales goals and marketing priorities.'],
  ['04', 'Coordinate execution', 'Your AI employees research, plan, collaborate and prepare actionable deliverables.'],
  ['05', 'Measure performance', 'Monitor progress, review recommendations and optimize your operations.']
];

function Brand({ light = false }) {
  return (
    <a href="/" className="brand">
      <span className="brand-icon"><Zap size={21} fill="currentColor" /></span>
      <span>
        <strong>SALES ASSISTANT AI</strong>
        <small>YOUR AUTONOMOUS WORKFORCE</small>
      </span>
    </a>
  );
}

function CTA({ children = 'Build Your AI Workforce', href = '/signup', secondary = false }) {
  return (
    <a className={secondary ? 'button button-outline' : 'button button-primary'} href={href}>
      {children} <ArrowUpRight size={17} />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="site-header">
      <div className="site-nav container">
        <Brand />
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <Menu />
        </button>
        <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
          <a href="/features">Platform</a>
          <a href="/how-it-works">How it works</a>
          <a href="/pricing">Pricing</a>
          <a href="/demo">Explore demo</a>
          <a href="/login" className="nav-login">Log in</a>
          <CTA>Start free</CTA>
        </nav>
      </div>
    </header>
  );
}

function DashboardPreview() {
  return (
    <div className="preview-shell">
      <div className="preview-topbar">
        <div className="preview-brand"><span /> SALES ASSISTANT <small>WORKFORCE COMMAND</small></div>
        <div className="preview-live"><span /> SYSTEM OVERVIEW</div>
      </div>
      <div className="preview-content">
        <div className="preview-heading">
          <div>
            <span className="eyebrow">EXECUTIVE COMMAND CENTER</span>
            <h3>Your AI workforce</h3>
            <p>A coordinated view of your business operations.</p>
          </div>
          <span className="preview-status"><span /> Workforce ready</span>
        </div>
        <div className="preview-stats">
          <div><small>AI DEPARTMENTS</small><strong>08</strong><span>Organized workforce</span></div>
          <div><small>AI EMPLOYEES</small><strong>25</strong><span>Specialized roles</span></div>
          <div><small>WORKFLOWS</small><strong>12</strong><span>Illustrative preview</span></div>
        </div>
        <div className="preview-lower">
          <div className="preview-panel">
            <div className="panel-title">DEPARTMENT NETWORK <span>OVERVIEW</span></div>
            {[
              ['Sales', 'Research & pipeline', 'cyan'],
              ['Marketing', 'Campaign operations', 'purple'],
              ['Market Intelligence', 'Market research', 'blue'],
              ['SEO', 'Organic growth', 'green']
            ].map(([name, sub, color]) => (
              <div className="department-row" key={name}>
                <span className={`department-dot ${color}`} />
                <span><b>{name}</b><small>{sub}</small></span>
                <ChevronRight size={16} />
              </div>
            ))}
          </div>
          <div className="preview-panel execution-panel">
            <div className="panel-title">WORKFORCE ACTIVITY <span>DEMO</span></div>
            <div className="activity-orb"><BrainCircuit size={38} /></div>
            <b>Intelligence at work</b>
            <p>Research, coordination and execution in one workspace.</p>
            <div className="activity-line"><span /></div>
          </div>
        </div>
      </div>
      <div className="preview-foot"><ShieldCheck size={14} /> Human oversight and approval controls remain part of the workflow.</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="announcement"><Sparkles size={14} /> INTRODUCING THE AUTONOMOUS AI WORKFORCE <ArrowRight size={14} /></div>
          <h1>Your next growth team isn't <span>human-sized.</span></h1>
          <p className="hero-description">
            Build an intelligent sales and marketing workforce that researches markets,
            discovers opportunities, coordinates campaigns and helps move your business forward.
          </p>
          <div className="hero-actions">
            <CTA />
            <CTA href="/how-it-works" secondary> <CirclePlay size={17} /> See how it works </CTA>
          </div>
          <div className="hero-proof">
            <span><Check size={15} /> Specialized AI employees</span>
            <span><Check size={15} /> Coordinated departments</span>
            <span><Check size={15} /> Human-controlled execution</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-label"><span /> INTELLIGENT BUSINESS OPERATIONS</div>
          <DashboardPreview />
          <div className="floating-card floating-card-one"><BrainCircuit size={19} /><span><b>AI Intelligence</b><small>Research and discovery</small></span></div>
          <div className="floating-card floating-card-two"><Network size={19} /><span><b>Connected workforce</b><small>Coordinated operations</small></span></div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>ONE INTELLIGENT PLATFORM</span>
        <div><span>SALES</span><span>MARKETING</span><span>GROWTH</span><span>INTELLIGENCE</span><span>SEO</span><span>OPERATIONS</span></div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section problem-section">
      <div className="container problem-grid">
        <div>
          <span className="eyebrow">A BETTER WAY TO OPERATE</span>
          <h2>Stop managing disconnected tools. <span>Start building momentum.</span></h2>
        </div>
        <div>
          <p className="section-lead">Growing a business means coordinating dozens of responsibilities. Sales, marketing, research and operations shouldn't operate in separate silos.</p>
          <p className="muted">Sales Assistant AI brings these functions together through specialized AI employees, shared workflows and a central command environment.</p>
        </div>
      </div>
      <div className="container challenge-grid">
        {[
          ['01', 'Fragmented operations', 'Too many disconnected tools and manual handoffs.'],
          ['02', 'Missed opportunities', 'Potential customers and market signals go undiscovered.'],
          ['03', 'Slow execution', 'Important work gets lost between teams and tasks.'],
          ['04', 'Limited visibility', 'Business leaders struggle to see what is happening.']
        ].map(([n, title, text]) => (
          <div className="challenge-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="section departments-section" id="departments">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">THE AI WORKFORCE</span>
          <h2>One company. <span>Multiple intelligent departments.</span></h2>
          <p>Specialized AI employees designed to work within coordinated business functions.</p>
        </div>
        <div className="department-grid">
          {departments.map(({ icon: Icon, name, description, tag }) => (
            <article className="department-card" key={name}>
              <div className="department-icon"><Icon size={22} /></div>
              <span className="eyebrow">{tag}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href="/features">Explore department <ArrowUpRight size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="section workflow-section">
      <div className="container workflow-layout">
        <div className="workflow-intro">
          <span className="eyebrow">FROM STRATEGY TO EXECUTION</span>
          <h2>Your business goals become <span>coordinated AI workflows.</span></h2>
          <p>Give your workforce direction. Let specialized agents research, plan and prepare the work. Keep control over important decisions and external actions.</p>
          <CTA href="/how-it-works">Discover the workflow</CTA>
        </div>
        <div className="steps">
          {steps.map(([number, title, text], index) => (
            <div className="step" key={number}>
              <div className="step-number">{number}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
              {index !== steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="section platform-section">
      <div className="container platform-card">
        <div className="platform-copy">
          <span className="eyebrow">YOUR BUSINESS. ONE COMMAND CENTER.</span>
          <h2>See the whole operation. <span>Direct the next move.</span></h2>
          <p>Bring your AI workforce, prospecting, campaigns, SEO and business intelligence into one connected environment.</p>
          <ul>
            <li><Check /> Central workforce command</li>
            <li><Check /> Prospect discovery and sales operations</li>
            <li><Check /> Marketing and SEO management</li>
            <li><Check /> Task monitoring and human approvals</li>
          </ul>
          <CTA href="/demo">Explore the platform</CTA>
        </div>
        <div className="platform-art">
          <div className="platform-orbit orbit-one" />
          <div className="platform-orbit orbit-two" />
          <div className="platform-core"><BrainCircuit size={55} /><b>AI CORE</b></div>
          {[['Sales', Target], ['Marketing', Globe2], ['Growth', TrendingUp], ['Intelligence', Search], ['Operations', Workflow], ['SEO', Compass]].map(([name, Icon], i) => (
            <div className={`orbit-node orbit-node-${i + 1}`} key={name}><Icon size={19} /><span>{name}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">STRAIGHTFORWARD SUBSCRIPTIONS</span>
          <h2>Build your workforce. <span>Choose your capacity.</span></h2>
          <p>Start with the capabilities you need and expand as your business grows.</p>
        </div>
        <div className="pricing-grid">
          {plans.map(plan => (
            <article className={`price-card ${plan.popular ? 'price-popular' : ''}`} key={plan.name}>
              {plan.popular && <div className="popular-label">MOST POPULAR</div>}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price"><sup>$</sup>{plan.price}<small>/ month</small></div>
              <div className="employee-limit"><Users size={16} /> {plan.employees}</div>
              <a className={plan.popular ? 'button button-primary price-button' : 'button button-outline price-button'} href="/signup">Get started <ArrowRight size={16} /></a>
              <div className="feature-list">
                {plan.features.map(feature => <div key={feature}><Check size={16} /> {feature}</div>)}
              </div>
            </article>
          ))}
        </div>
        <p className="pricing-note">Proposed launch pricing. Usage allowances, employee limits and included capabilities are subject to final plan configuration. <a href="mailto:sales@salesassistant.nexusthecore.com">Contact us for Enterprise pricing.</a></p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div className="cta-glow" />
        <span className="eyebrow">THE NEXT ERA OF BUSINESS OPERATIONS</span>
        <h2>Build a workforce that <span>moves your business forward.</span></h2>
        <p>Give your business an intelligent operating team. Start building your AI workforce today.</p>
        <div className="hero-actions">
          <CTA />
          <CTA href="/pricing" secondary>Explore pricing</CTA>
        </div>
        <small>No credit card required for initial registration. Trial availability and limits are subject to configuration.</small>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Brand /><p>An autonomous AI sales and marketing workforce for ambitious businesses.</p></div>
        <div><b>Platform</b><a href="/features">Features</a><a href="/how-it-works">How it works</a><a href="/demo">Explore demo</a></div>
        <div><b>Company</b><a href="/pricing">Pricing</a><a href="mailto:sales@salesassistant.nexusthecore.com">Contact</a><a href="/login">Customer login</a></div>
        <div><b>Get started</b><a href="/signup">Create account</a><a href="/pricing">Plans</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sales Assistant AI. All rights reserved.</span><span>Independent AI workforce platform.</span></div>
    </footer>
  );
}

function InfoPage({ page }) {
  const content = {
    '/features': {
      label: 'THE PLATFORM',
      title: 'An intelligent workforce for every part of your business.',
      description: 'Explore specialized AI departments designed to research, coordinate and support your business operations.',
      items: departments
    },
    '/how-it-works': {
      label: 'HOW IT WORKS',
      title: 'From business objectives to coordinated execution.',
      description: 'Configure your business, define goals and direct specialized AI employees through connected workflows.',
      items: steps.map(([number, name, description]) => ({ name: `${number}. ${name}`, description, icon: Workflow }))
    },
    '/demo': {
      label: 'PRODUCT OVERVIEW',
      title: 'A command center for your AI-powered business.',
      description: 'Explore the departments, workflows and operational capabilities that bring your AI workforce together.',
      items: [
        { name: 'Workforce Command Center', description: 'Manage departments, employees, assignments and execution.', icon: Network },
        { name: 'Prospect Discovery', description: 'Research markets and identify potential business opportunities.', icon: Search },
        { name: 'Marketing Operations', description: 'Coordinate campaigns, content and marketing activities.', icon: Globe2 },
        { name: 'SEO Command Center', description: 'Organize keyword research, website audits and organic growth.', icon: Compass }
      ]
    }
  }[page];

  return (
    <main className="info-page">
      <section className="info-hero container">
        <span className="eyebrow">{content.label}</span>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <CTA />
      </section>
      <section className="container info-grid">
        {content.items.map((item, index) => {
          const Icon = item.icon || Cpu;
          return <article className="department-card" key={item.name}>
            <div className="department-icon"><Icon size={23} /></div>
            <span className="eyebrow">CAPABILITY {String(index + 1).padStart(2, '0')}</span>
            <h3>{item.name}</h3><p>{item.description}</p>
          </article>;
        })}
      </section>
      <FinalCTA />
    </main>
  );
}

export default function MarketingSite({ path }) {
  const isHome = path === '/';
  const isPricing = path === '/pricing';

  return (
    <div className="marketing-site">
      <Navbar />
      {isHome ? (
        <>
          <Hero />
          <Problem />
          <Departments />
          <WorkflowSection />
          <PlatformSection />
          <Pricing />
          <FinalCTA />
        </>
      ) : isPricing ? (
        <main className="pricing-page">
          <section className="info-hero container">
            <span className="eyebrow">PLANS THAT SCALE WITH YOU</span>
            <h1>The right AI workforce for your next stage of growth.</h1>
            <p>Choose a starting point for your business. Expand your workforce as your needs evolve.</p>
          </section>
          <Pricing />
          <FinalCTA />
        </main>
      ) : <InfoPage page={path} />}
      <Footer />
    </div>
  );
}
