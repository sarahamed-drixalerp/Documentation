import type {ReactNode, FormEvent} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useHistory} from '@docusaurus/router';
import styles from '@site/src/pages/index.module.css';

const quickLinks = [
  {
    icon: '🚀',
    title: 'Getting started with Drixal',
    description: 'Learn the platform and how in-app Help opens the right docs page.',
    to: '/docs/getting-started/introduction',
    cta: 'Start here',
  },
  {
    icon: '🗂️',
    title: 'Project Management Office',
    description: 'Portfolios, programmes, and agreements through delivery and billing.',
    to: '/docs/pmo/introduction',
    cta: 'Open guide',
  },
  {
    icon: '📋',
    title: 'Project guide',
    description: 'Create projects, key fields, list views, and the 360 workspace.',
    to: '/docs/pmo/project-overview',
    cta: 'View project',
  },
  {
    icon: '👥',
    title: 'Human Resources',
    description: 'Employee lifecycle, attendance, and payroll starter docs.',
    to: '/docs/hrm/',
    cta: 'Explore',
  },
  {
    icon: '📗',
    title: 'Finance',
    description: 'Accounts, journals, and financial reporting linked to operations.',
    to: '/docs/fin/',
    cta: 'Explore',
  },
  {
    icon: '🤝',
    title: 'CRM & Sales',
    description: 'Opportunities, deals, and ongoing customer relationships.',
    to: '/docs/crm/',
    cta: 'Explore',
  },
  {
    icon: '📄',
    title: 'Document Management',
    description: 'Versions, approval flows, and secure document storage.',
    to: '/docs/dms/',
    cta: 'Explore',
  },
  {
    icon: '📱',
    title: 'My apps',
    description: 'Tasks, inbox, attendance, timesheets, and services.',
    to: '/docs/app/',
    cta: 'Explore',
  },
];

const faqs = [
  {
    q: 'How do I open Help from the product?',
    a: (
      <>
        In the app header, click the <strong>Help</strong> icon. It opens the docs
        page for your current screen in your active language (Arabic or English).
      </>
    ),
  },
  {
    q: 'Where should I start if I am new to Project?',
    a: (
      <>
        Start with the{' '}
        <Link to="/docs/pmo/introduction">PMO introduction</Link>
        , then{' '}
        <Link to="/docs/pmo/create-project">Create a project</Link>
        and the 360 workspace.
      </>
    ),
  },
  {
    q: 'Are all modules fully documented?',
    a: (
      <>
        The <strong>PMO / Project</strong> guide is the most complete today. Other
        modules have starter pages that still open from Help and can grow over time.
      </>
    ),
  },
  {
    q: 'How do I switch documentation language?',
    a: (
      <>
        Use the language menu in the docs navbar and choose <strong>العربية</strong>{' '}
        or <strong>English</strong>. Layout direction (RTL/LTR) updates automatically.
      </>
    ),
  },
];

function SearchIcon() {
  return (
    <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <span className={styles.faqChevronWrap} aria-hidden="true">
      <svg className={styles.faqChevron} viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg className={styles.quickCtaArrow} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home(): ReactNode {
  const history = useHistory();
  const searchPath = useBaseUrl('/search');

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const q = String(data.get('q') || '').trim();
    history.push(q ? `${searchPath}?q=${encodeURIComponent(q)}` : searchPath);
  };

  return (
    <Layout
      title="Support & Documentation"
      description="Drixal ERP support and documentation — search or browse quick answers and the PMO guide.">
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Drixal ERP Docs
            </p>
            <Heading as="h1" className={styles.heroTitle}>
              Support & Documentation
            </Heading>
            <p className={styles.heroLead}>
              Stuck on something or getting started? Search the guide or browse
              quick answers — the same Help experience as in the product.
            </p>
            <form className={styles.searchForm} onSubmit={onSearch} role="search">
              <SearchIcon />
              <input
                className={styles.searchInput}
                type="search"
                name="q"
                placeholder="Search projects, payroll, documents..."
                aria-label="Search documentation"
                autoComplete="off"
              />
              <button className={styles.searchBtn} type="submit">
                Search
              </button>
            </form>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="quickfind-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Quick guide</p>
            <Heading as="h2" id="quickfind-title" className={styles.sectionTitle}>
              Quickfind answers
            </Heading>
            <p className={styles.sectionLead}>
              Shortcuts to the most useful docs — from getting started to operating modules.
            </p>
          </div>
          <div className={styles.quickGrid}>
            {quickLinks.map((item) => (
              <Link key={item.to} className={styles.quickCard} to={item.to}>
                <span className={styles.quickIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <Heading as="h3" className={styles.quickTitle}>
                  {item.title}
                </Heading>
                <p className={styles.quickDesc}>{item.description}</p>
                <span className={styles.quickCta}>
                  {item.cta}
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Help</p>
            <Heading as="h2" id="faq-title" className={styles.sectionTitle}>
              General FAQs
            </Heading>
            <p className={styles.sectionLead}>
              Short answers to the most common questions about docs and in-app Help.
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>
                  <span>{item.q}</span>
                  <ChevronIcon />
                </summary>
                <div className={styles.faqBody}>{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.ctaBand} aria-labelledby="cta-title">
          <Heading as="h2" id="cta-title" className={styles.ctaTitle}>
            Start with the Project guide
          </Heading>
          <p className={styles.ctaLead}>
            Follow the PMO path from introduction to project creation and the 360 workspace.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaPrimary} to="/docs/pmo/introduction">
              PMO introduction
            </Link>
            <Link className={styles.ctaSecondary} to="/docs/pmo/create-project">
              Create a project
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
