import {
  type ReactNode,
  type FormEvent,
  type SVGProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';
import styles from './index.module.css';
import {
  IconSearch,
  IconArrow,
  IconBook,
  IconSliders,
  IconKey,
  IconBriefcase,
  IconUsers,
  IconCoins,
  IconHandshake,
  IconCart,
  IconPackage,
  IconFolder,
  IconBuilding,
  IconGrid,
  IconLayers,
  IconHeadset,
  IconExternal,
} from '@site/src/components/HomeIcons';
import {getHomeCopy, type IconName} from '@site/src/components/homeContent';

const icons: Record<IconName, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
  book: IconBook,
  sliders: IconSliders,
  key: IconKey,
  briefcase: IconBriefcase,
  users: IconUsers,
  coins: IconCoins,
  handshake: IconHandshake,
  cart: IconCart,
  package: IconPackage,
  folder: IconFolder,
  building: IconBuilding,
  grid: IconGrid,
  layers: IconLayers,
  headset: IconHeadset,
};

function Icon({name}: {name: IconName}): ReactNode {
  const Cmp = icons[name];
  return <Cmp aria-hidden="true" />;
}

export default function Home(): ReactNode {
  const history = useHistory();
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const copy = getHomeCopy(currentLocale);
  const searchPath = useBaseUrl('/search');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [shortcut, setShortcut] = useState('Ctrl K');

  // Guide counts come from the real docs registry so they never go stale.
  const allDocs = useAllDocsData();
  const docIds = useMemo(() => {
    const versions = Object.values(allDocs).flatMap((plugin) => plugin.versions);
    return versions.flatMap((version) => version.docs.map((doc) => doc.id));
  }, [allDocs]);
  const countFor = (prefixes: string[]) =>
    docIds.filter(
      (id) => prefixes.some((p) => id.startsWith(`${p}/`)) && !id.endsWith('/index'),
    ).length;

  useEffect(() => {
    if (/Mac|iPhone|iPad/i.test(navigator.platform)) {
      setShortcut('⌘ K');
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const q = String(data.get('q') || '').trim();
    history.push(q ? `${searchPath}?q=${encodeURIComponent(q)}` : searchPath);
  };

  return (
    <Layout title={copy.meta.title} description={copy.meta.description}>
      <div className={styles.page}>
        {/* ── Hero ─────────────────────────────────────────── */}
        <header className={styles.hero}>
          <span className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <Heading as="h1" className={styles.heroTitle}>
              {copy.hero.title} <span className={styles.heroAccent}>{copy.hero.titleAccent}</span>
            </Heading>
            <p className={styles.heroLead}>{copy.hero.lead}</p>

            <form className={styles.searchForm} onSubmit={onSearch} role="search">
              <IconSearch className={styles.searchIcon} aria-hidden="true" />
              <input
                ref={searchInputRef}
                className={styles.searchInput}
                type="search"
                name="q"
                placeholder={copy.hero.placeholder}
                aria-label={copy.hero.searchLabel}
                autoComplete="off"
              />
              <kbd className={styles.searchKbd} aria-hidden="true">
                {shortcut}
              </kbd>
              <button className={styles.searchBtn} type="submit">
                {copy.hero.searchButton}
              </button>
            </form>

            <div className={styles.chips} aria-label={copy.hero.popularLabel} role="group">
              <span className={styles.chipsLabel}>{copy.hero.popularLabel}</span>
              {copy.hero.popular.map((chip) => (
                <Link
                  key={chip.q}
                  className={styles.chip}
                  to={`/search?q=${encodeURIComponent(chip.q)}`}>
                  {chip.label}
                </Link>
              ))}
            </div>

            <nav className={styles.pillStrip} aria-label={copy.hero.jumpLabel}>
              {copy.hero.jump.map((pill) => (
                <Link key={pill.to} className={styles.pill} to={pill.to}>
                  <span className={styles.pillIcon}>
                    <Icon name={pill.icon} />
                  </span>
                  {pill.label}
                </Link>
              ))}
              <a className={`${styles.pill} ${styles.pillMuted}`} href="#modules">
                {copy.hero.allModules}
                <IconArrow className={styles.flip} aria-hidden="true" />
              </a>
            </nav>
          </div>
        </header>

        <div className={styles.wrap}>
          {/* ── Start here ───────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="start-title">
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.sectionEyebrow}>{copy.start.eyebrow}</p>
                <Heading as="h2" id="start-title" className={styles.sectionTitle}>
                  {copy.start.title}
                </Heading>
              </div>
            </div>
            <div className={styles.startGrid}>
              {copy.start.cards.map((card, index) => (
                <Link key={card.to} className={styles.startCard} to={card.to}>
                  <div className={styles.startTop}>
                    <span className={styles.iconTile}>
                      <Icon name={card.icon} />
                    </span>
                    <span className={styles.startNum} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <Heading as="h3" className={styles.cardTitle}>
                    {card.title}
                  </Heading>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <span className={styles.cardLink}>
                    {copy.start.cta}
                    <IconArrow className={styles.flip} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Explore by module ────────────────────────────── */}
          <section
            id="modules"
            className={styles.section}
            aria-labelledby="modules-title">
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.sectionEyebrow}>{copy.modules.eyebrow}</p>
                <Heading as="h2" id="modules-title" className={styles.sectionTitle}>
                  {copy.modules.title}
                </Heading>
              </div>
              <Link className={styles.sectionLink} to={copy.modules.ctaTo}>
                {copy.modules.cta}
                <IconArrow className={styles.flip} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.moduleGrid}>
              {copy.modules.items.map((item) => (
                <Link key={item.id} className={styles.moduleCard} to={item.to}>
                  <div className={styles.moduleTop}>
                    <span className={styles.iconTile}>
                      <Icon name={item.icon} />
                    </span>
                    <span className={styles.moduleCount}>
                      {copy.countLabel(countFor(item.prefixes))}
                    </span>
                  </div>
                  <Heading as="h3" className={styles.cardTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Popular guides ───────────────────────────────── */}
          <section className={styles.section} aria-labelledby="guides-title">
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.sectionEyebrow}>{copy.guides.eyebrow}</p>
                <Heading as="h2" id="guides-title" className={styles.sectionTitle}>
                  {copy.guides.title}
                </Heading>
              </div>
            </div>
            <ul className={styles.guideList}>
              {copy.guides.items.map((item) => (
                <li key={item.to}>
                  <Link className={styles.guideItem} to={item.to}>
                    <span className={styles.guideTitle}>{item.title}</span>
                    <span className={styles.tag}>{item.tag}</span>
                    <IconArrow className={`${styles.guideArrow} ${styles.flip}`} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* ── End-to-end workflows ─────────────────────────── */}
          <section className={styles.section} aria-labelledby="workflows-title">
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.sectionEyebrow}>{copy.workflows.eyebrow}</p>
                <Heading as="h2" id="workflows-title" className={styles.sectionTitle}>
                  {copy.workflows.title}
                </Heading>
              </div>
            </div>
            <div className={styles.workflowStrip}>
              {copy.workflows.items.map((flow, flowIndex) => (
                <article key={flow.title} className={styles.workflow}>
                  <span className={styles.workflowIndex} aria-hidden="true">
                    {String(flowIndex + 1).padStart(2, '0')}
                  </span>
                  <Heading as="h3" className={styles.workflowTitle}>
                    {flow.title}
                  </Heading>
                  <ol className={styles.steps}>
                    {flow.steps.map((step, index) => (
                      <li key={step.to}>
                        <Link className={styles.step} to={step.to}>
                          <span className={styles.stepNum} aria-hidden="true">
                            {index + 1}
                          </span>
                          <span className={styles.stepLabel}>{step.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          {/* ── Support band ─────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="support-title">
            <div className={styles.band}>
              <span className={`${styles.iconTile} ${styles.bandIcon}`}>
                <Icon name="headset" />
              </span>
              <div className={styles.bandBody}>
                <Heading as="h2" id="support-title" className={styles.bandTitle}>
                  {copy.support.title}
                </Heading>
                <p className={styles.bandText}>{copy.support.text}</p>
              </div>
              <div className={styles.bandActions}>
                {copy.support.links.map((link, index) =>
                  link.external ? (
                    <a
                      key={link.to}
                      className={index === 0 ? styles.btnPrimary : styles.btnSoft}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer">
                      {link.label}
                      <IconExternal aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      key={link.to}
                      className={index === 0 ? styles.btnPrimary : styles.btnSoft}
                      to={link.to}>
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
