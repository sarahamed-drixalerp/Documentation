import type {ReactNode, FormEvent} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useHistory} from '@docusaurus/router';
import styles from './index.module.css';

const quickLinks = [
  {
    icon: '🚀',
    title: 'البداية مع Drixal',
    description: 'تعرّف على المنصة وكيف تستخدم التوثيق وزر المساعدة داخل النظام.',
    to: '/docs/getting-started/introduction',
    cta: 'ابدأ هنا',
  },
  {
    icon: '🗂️',
    title: 'مكتب إدارة المشاريع',
    description: 'المحافظ والبرامج والاتفاقيات وصولًا إلى تسليم المشروع والفوترة.',
    to: '/docs/pmo/introduction',
    cta: 'افتح الدليل',
  },
  {
    icon: '📋',
    title: 'دليل المشروع',
    description: 'إنشاء المشروع، الحقول، القائمة، ومساحة العمل 360 خطوة بخطوة.',
    to: '/docs/pmo/project-overview',
    cta: 'عرض المشروع',
  },
  {
    icon: '👥',
    title: 'الموارد البشرية',
    description: 'دورة حياة الموظف والحضور والرواتب — صفحات تمهيدية للوحدة.',
    to: '/docs/hrm/',
    cta: 'استكشف',
  },
  {
    icon: '📗',
    title: 'المالية',
    description: 'الحسابات والقيود والتقارير المالية المرتبطة بالعمليات.',
    to: '/docs/fin/',
    cta: 'استكشف',
  },
  {
    icon: '🤝',
    title: 'المبيعات والعملاء',
    description: 'الفرص والصفقات وبناء علاقة مستمرة مع العميل.',
    to: '/docs/crm/',
    cta: 'استكشف',
  },
  {
    icon: '📄',
    title: 'إدارة الوثائق',
    description: 'الإصدارات ومسارات الاعتماد والحفظ الآمن للمستندات.',
    to: '/docs/dms/',
    cta: 'استكشف',
  },
  {
    icon: '📱',
    title: 'تطبيقاتي',
    description: 'المهام والوارد والحضور والجداول الزمنية وخدماتي.',
    to: '/docs/app/',
    cta: 'استكشف',
  },
];

const faqs = [
  {
    q: 'كيف أفتح المساعدة من داخل النظام؟',
    a: (
      <>
        من رأس التطبيق اضغط أيقونة <strong>المساعدة</strong>. تُفتح صفحة التوثيق
        المناسبة للشاشة الحالية وبلغتك الحالية (العربية أو الإنجليزية).
      </>
    ),
  },
  {
    q: 'من أين أبدأ إذا كنت جديدًا على المشروع؟',
    a: (
      <>
        ابدأ من{' '}
        <Link to="/docs/pmo/introduction">مقدمة مكتب إدارة المشاريع</Link>
        ، ثم{' '}
        <Link to="/docs/pmo/create-project">إنشاء مشروع</Link>
        ومساحة العمل 360.
      </>
    ),
  },
  {
    q: 'هل باقي الوحدات موثّقة بالكامل؟',
    a: (
      <>
        دليل <strong>PMO / المشروع</strong> هو الأكثر اكتمالًا حاليًا. بقية الوحدات
        لديها صفحات تمهيدية يمكن توسيعها، وما زالت مرتبطة بزر المساعدة.
      </>
    ),
  },
  {
    q: 'كيف أبدّل لغة التوثيق؟',
    a: (
      <>
        من قائمة اللغة في شريط التوثيق العلوي اختر <strong>العربية</strong> أو{' '}
        <strong>English</strong>. الواجهة والاتجاه (RTL/LTR) يتبدلان تلقائيًا.
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
      title="الدعم والتوثيق"
      description="دعم وتوثيق Drixal ERP — ابحث أو تصفّح الإجابات السريعة ودليل مكتب إدارة المشاريع.">
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              توثيق Drixal ERP
            </p>
            <Heading as="h1" className={styles.heroTitle}>
              الدعم والتوثيق
            </Heading>
            <p className={styles.heroLead}>
              هل علقت في خطوة أو تبدأ للتو؟ ابحث في الدليل أو تصفّح الإجابات
              السريعة — بنفس أسلوب المساعدة داخل النظام.
            </p>
            <form className={styles.searchForm} onSubmit={onSearch} role="search">
              <SearchIcon />
              <input
                className={styles.searchInput}
                type="search"
                name="q"
                placeholder="ابحث عن مشروع، رواتب، وثائق..."
                aria-label="بحث في التوثيق"
                autoComplete="off"
              />
              <button className={styles.searchBtn} type="submit">
                بحث
              </button>
            </form>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="quickfind-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>دليل سريع</p>
            <Heading as="h2" id="quickfind-title" className={styles.sectionTitle}>
              إجابات سريعة
            </Heading>
            <p className={styles.sectionLead}>
              اختصارات لأهم أقسام التوثيق — من البداية وحتى الوحدات التشغيلية.
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
            <p className={styles.sectionEyebrow}>مساعدة</p>
            <Heading as="h2" id="faq-title" className={styles.sectionTitle}>
              أسئلة عامة
            </Heading>
            <p className={styles.sectionLead}>
              إجابات مختصرة لأكثر الأسئلة تكرارًا حول التوثيق وزر المساعدة.
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
            ابدأ من دليل المشروع
          </Heading>
          <p className={styles.ctaLead}>
            أكمل مسار PMO من المقدمة إلى إنشاء المشروع ومساحة العمل 360.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaPrimary} to="/docs/pmo/introduction">
              مقدمة المكتب
            </Link>
            <Link className={styles.ctaSecondary} to="/docs/pmo/create-project">
              إنشاء مشروع
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
