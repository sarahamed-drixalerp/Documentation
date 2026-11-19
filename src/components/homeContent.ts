/**
 * Homepage copy for each supported locale.
 * Routes point at existing docs only; Docusaurus <Link> adds the locale prefix.
 */

export type IconName =
  | 'book'
  | 'sliders'
  | 'key'
  | 'briefcase'
  | 'users'
  | 'coins'
  | 'handshake'
  | 'cart'
  | 'package'
  | 'folder'
  | 'building'
  | 'grid'
  | 'layers'
  | 'headset';

export type HomeLink = {label: string; to: string};

export type StartCard = {icon: IconName; title: string; desc: string; to: string};

export type ModuleCard = {
  id: string;
  icon: IconName;
  title: string;
  desc: string;
  to: string;
  /** Doc id prefixes used to compute the guide count. */
  prefixes: string[];
  links: HomeLink[];
};

export type GuideItem = {title: string; tag: string; to: string};

export type Workflow = {title: string; steps: HomeLink[]};

export type HomeCopy = {
  meta: {title: string; description: string};
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    placeholder: string;
    searchLabel: string;
    searchButton: string;
    popularLabel: string;
    popular: {label: string; q: string}[];
    jumpLabel: string;
    jump: {icon: IconName; label: string; to: string}[];
    allModules: string;
  };
  start: {eyebrow: string; title: string; cta: string; cards: StartCard[]};
  modules: {
    eyebrow: string;
    title: string;
    cta: string;
    ctaTo: string;
    open: string;
    items: ModuleCard[];
  };
  guides: {eyebrow: string; title: string; items: GuideItem[]};
  workflows: {eyebrow: string; title: string; items: Workflow[]};
  support: {
    title: string;
    text: string;
    links: {label: string; to: string; external?: boolean}[];
  };
  countLabel: (n: number) => string;
};

const en: HomeCopy = {
  meta: {
    title: 'Drixal ERP Documentation',
    description:
      'Step-by-step guides and module handbooks for projects, HR, finance, sales, procurement and more.',
  },
  hero: {
    eyebrow: 'Documentation & guides',
    title: 'Learn Drixal ERP,',
    titleAccent: 'at your own pace',
    lead: 'Clear, step-by-step guides for every module — from your first sign-in to everyday operations.',
    placeholder: 'Search guides, screens and fields…',
    searchLabel: 'Search the documentation',
    searchButton: 'Search',
    popularLabel: 'Popular searches',
    popular: [
      {label: 'Create a project', q: 'create project'},
      {label: 'Run payroll', q: 'payroll'},
      {label: 'Chart of accounts', q: 'chart of accounts'},
      {label: 'User roles', q: 'roles'},
    ],
    jumpLabel: 'Jump to a module',
    jump: [
      {icon: 'briefcase', label: 'Projects', to: '/docs/pmo/introduction'},
      {icon: 'users', label: 'HR', to: '/docs/hrm/introduction'},
      {icon: 'coins', label: 'Finance', to: '/docs/fin/'},
      {icon: 'handshake', label: 'Sales', to: '/docs/crm/'},
      {icon: 'cart', label: 'Procurement', to: '/docs/srm/'},
      {icon: 'package', label: 'Catalogue', to: '/docs/cat/introduction'},
    ],
    allModules: 'All modules',
  },
  start: {
    eyebrow: 'Start here',
    title: 'New to Drixal ERP?',
    cta: 'Read guide',
    cards: [
      {
        icon: 'layers',
        title: 'Platform overview',
        desc: 'See how the modules fit together and which guide to open first for your role.',
        to: '/docs/getting-started/introduction',
      },
      {
        icon: 'sliders',
        title: 'First-time setup',
        desc: 'Set up departments, branches and holidays so every module starts on solid ground.',
        to: '/docs/org/introduction',
      },
      {
        icon: 'key',
        title: 'Roles & permissions',
        desc: 'Decide who can see and do what by configuring application roles.',
        to: '/docs/adm/application-role',
      },
    ],
  },
  modules: {
    eyebrow: 'Explore by module',
    title: 'Find the guides for your team',
    cta: 'Browse everything',
    ctaTo: '/docs/getting-started/introduction',
    open: 'Open module',
    items: [
      {
        id: 'pmo',
        icon: 'briefcase',
        title: 'Projects (PMO)',
        desc: 'Plan, deliver and bill projects from one workspace.',
        to: '/docs/pmo/introduction',
        prefixes: ['pmo'],
        links: [
          {label: 'Create a new project', to: '/docs/pmo/create-project'},
          {label: '360 workspace', to: '/docs/pmo/workspace-360'},
          {label: 'Financials and billing', to: '/docs/pmo/financials'},
        ],
      },
      {
        id: 'hrm',
        icon: 'users',
        title: 'Human Resources',
        desc: 'Employees, leave, payroll, hiring and evaluations.',
        to: '/docs/hrm/introduction',
        prefixes: ['hrm'],
        links: [
          {label: 'Create a new employee', to: '/docs/hrm/create-employee'},
          {label: 'Payrolls', to: '/docs/hrm/payroll'},
          {label: 'Employee leave', to: '/docs/hrm/employee-leave'},
        ],
      },
      {
        id: 'fin',
        icon: 'coins',
        title: 'Finance',
        desc: 'Accounts and journals that keep your books in order.',
        to: '/docs/fin/',
        prefixes: ['fin'],
        links: [
          {label: 'Chart of accounts', to: '/docs/fin/account'},
          {label: 'Journals', to: '/docs/fin/journal'},
        ],
      },
      {
        id: 'crm',
        icon: 'handshake',
        title: 'Sales & CRM',
        desc: 'Follow leads through to closed deals.',
        to: '/docs/crm/',
        prefixes: ['crm'],
        links: [
          {label: 'Leads', to: '/docs/crm/lead'},
          {label: 'Deals', to: '/docs/crm/deal'},
        ],
      },
      {
        id: 'srm',
        icon: 'cart',
        title: 'Procurement',
        desc: 'Suppliers and purchase orders, kept in one flow.',
        to: '/docs/srm/',
        prefixes: ['srm'],
        links: [{label: 'Purchase orders', to: '/docs/srm/purchase-order'}],
      },
      {
        id: 'cat',
        icon: 'package',
        title: 'Product Catalogue',
        desc: 'Products, price lists and inventory movements.',
        to: '/docs/cat/introduction',
        prefixes: ['cat'],
        links: [
          {label: 'Products', to: '/docs/cat/product'},
          {label: 'Price lists', to: '/docs/cat/price-list'},
          {label: 'Inventory', to: '/docs/cat/inventory'},
        ],
      },
      {
        id: 'dms',
        icon: 'folder',
        title: 'Document Management',
        desc: 'Store, find and share business documents.',
        to: '/docs/dms/',
        prefixes: ['dms'],
        links: [{label: 'Documents', to: '/docs/dms/document'}],
      },
      {
        id: 'admin',
        icon: 'building',
        title: 'Organization & Admin',
        desc: 'Company structure, users and system settings.',
        to: '/docs/org/introduction',
        prefixes: ['org', 'adm'],
        links: [
          {label: 'Departments', to: '/docs/org/department'},
          {label: 'Application users', to: '/docs/adm/application-user'},
          {label: 'Application roles', to: '/docs/adm/application-role'},
        ],
      },
      {
        id: 'app',
        icon: 'grid',
        title: 'My apps',
        desc: 'Everyday tools for tasks, calendar and timesheets.',
        to: '/docs/app/',
        prefixes: ['app'],
        links: [
          {label: 'Tasks', to: '/docs/app/tasks'},
          {label: 'Calendar', to: '/docs/app/calendar'},
          {label: 'Timesheet', to: '/docs/app/timesheet'},
        ],
      },
    ],
  },
  guides: {
    eyebrow: 'Popular guides',
    title: 'Essential reading',
    items: [
      {title: 'Create a new project', tag: 'Projects', to: '/docs/pmo/create-project'},
      {title: 'Payrolls', tag: 'HR', to: '/docs/hrm/payroll'},
      {title: 'Create a new employee', tag: 'HR', to: '/docs/hrm/create-employee'},
      {title: 'Chart of accounts', tag: 'Finance', to: '/docs/fin/account'},
      {title: 'Product Catalogue introduction', tag: 'Catalogue', to: '/docs/cat/introduction'},
      {title: 'Journals', tag: 'Finance', to: '/docs/fin/journal'},
      {title: 'Timesheet approval', tag: 'Projects', to: '/docs/pmo/timesheet'},
      {title: 'Application roles', tag: 'Admin', to: '/docs/adm/application-role'},
    ],
  },
  workflows: {
    eyebrow: 'End-to-end workflows',
    title: 'Follow a journey from start to finish',
    items: [
      {
        title: 'Welcome a new hire',
        steps: [
          {label: 'Create the employee', to: '/docs/hrm/create-employee'},
          {label: 'Add salary items', to: '/docs/hrm/employee-salary-items'},
          {label: 'Include in payroll', to: '/docs/hrm/payroll'},
        ],
      },
      {
        title: 'Launch a project',
        steps: [
          {label: 'Create the project', to: '/docs/pmo/create-project'},
          {label: 'Build the schedule', to: '/docs/pmo/schedule'},
          {label: 'Track financials', to: '/docs/pmo/financials'},
        ],
      },
      {
        title: 'Win new business',
        steps: [
          {label: 'Capture a lead', to: '/docs/crm/lead'},
          {label: 'Progress the deal', to: '/docs/crm/deal'},
          {label: 'Check price lists', to: '/docs/cat/price-list'},
        ],
      },
      {
        title: 'Buy and stock',
        steps: [
          {label: 'Raise a purchase order', to: '/docs/srm/purchase-order'},
          {label: 'Record the movement', to: '/docs/cat/inventory-transaction'},
          {label: 'Review inventory', to: '/docs/cat/inventory'},
        ],
      },
    ],
  },
  support: {
    title: 'Not finding what you need?',
    text: 'Try the search, or check the glossary for unfamiliar terms.',
    links: [
      {label: 'Search the docs', to: '/search'},
      {label: 'Glossary', to: '/docs/pmo/glossary'},
    ],
  },
  countLabel: (n) => (n === 1 ? '1 guide' : `${n} guides`),
};

const ar: HomeCopy = {
  meta: {
    title: 'توثيق Drixal ERP',
    description: 'أدلة خطوة بخطوة وكتيبات الوحدات للمشاريع والموارد البشرية والمالية والمبيعات والمشتريات وغيرها.',
  },
  hero: {
    eyebrow: 'التوثيق والأدلة',
    title: 'تعلّم Drixal ERP',
    titleAccent: 'بالسرعة التي تناسبك',
    lead: 'أدلة واضحة خطوة بخطوة لكل وحدة — من أول دخول إلى العمل اليومي.',
    placeholder: 'ابحث في الأدلة والشاشات والحقول…',
    searchLabel: 'البحث في التوثيق',
    searchButton: 'بحث',
    popularLabel: 'عمليات بحث شائعة',
    popular: [
      {label: 'إنشاء مشروع', q: 'إنشاء مشروع'},
      {label: 'مسير الرواتب', q: 'مسيرات الرواتب'},
      {label: 'دليل الحسابات', q: 'دليل الحسابات'},
      {label: 'أدوار المستخدمين', q: 'أدوار التطبيق'},
    ],
    jumpLabel: 'انتقل إلى وحدة',
    jump: [
      {icon: 'briefcase', label: 'المشاريع', to: '/docs/pmo/introduction'},
      {icon: 'users', label: 'الموارد البشرية', to: '/docs/hrm/introduction'},
      {icon: 'coins', label: 'المالية', to: '/docs/fin/'},
      {icon: 'handshake', label: 'المبيعات', to: '/docs/crm/'},
      {icon: 'cart', label: 'المشتريات', to: '/docs/srm/'},
      {icon: 'package', label: 'الكتالوج', to: '/docs/cat/introduction'},
    ],
    allModules: 'كل الوحدات',
  },
  start: {
    eyebrow: 'ابدأ من هنا',
    title: 'جديد على Drixal ERP؟',
    cta: 'اقرأ الدليل',
    cards: [
      {
        icon: 'layers',
        title: 'نظرة عامة على المنصة',
        desc: 'تعرّف على ترابط الوحدات وأي دليل تفتحه أولًا حسب دورك.',
        to: '/docs/getting-started/introduction',
      },
      {
        icon: 'sliders',
        title: 'الإعداد الأولي',
        desc: 'أنشئ الأقسام والفروع والعطلات لتبدأ كل الوحدات على أساس سليم.',
        to: '/docs/org/introduction',
      },
      {
        icon: 'key',
        title: 'الأدوار والصلاحيات',
        desc: 'حدّد من يرى ماذا ومن يفعل ماذا عبر ضبط أدوار التطبيق.',
        to: '/docs/adm/application-role',
      },
    ],
  },
  modules: {
    eyebrow: 'تصفّح حسب الوحدة',
    title: 'اعثر على أدلة فريقك',
    cta: 'تصفّح كل شيء',
    ctaTo: '/docs/getting-started/introduction',
    open: 'افتح الوحدة',
    items: [
      {
        id: 'pmo',
        icon: 'briefcase',
        title: 'المشاريع (PMO)',
        desc: 'خطّط وسلّم وافوتر مشاريعك من مساحة عمل واحدة.',
        to: '/docs/pmo/introduction',
        prefixes: ['pmo'],
        links: [
          {label: 'إنشاء مشروع جديد', to: '/docs/pmo/create-project'},
          {label: 'مساحة العمل 360', to: '/docs/pmo/workspace-360'},
          {label: 'الماليات والفوترة', to: '/docs/pmo/financials'},
        ],
      },
      {
        id: 'hrm',
        icon: 'users',
        title: 'الموارد البشرية',
        desc: 'الموظفون والإجازات والرواتب والتوظيف والتقييمات.',
        to: '/docs/hrm/introduction',
        prefixes: ['hrm'],
        links: [
          {label: 'إنشاء موظف جديد', to: '/docs/hrm/create-employee'},
          {label: 'مسيرات الرواتب', to: '/docs/hrm/payroll'},
          {label: 'إجازات الموظف', to: '/docs/hrm/employee-leave'},
        ],
      },
      {
        id: 'fin',
        icon: 'coins',
        title: 'المالية',
        desc: 'الحسابات والقيود التي تُبقي دفاترك منظمة.',
        to: '/docs/fin/',
        prefixes: ['fin'],
        links: [
          {label: 'دليل الحسابات', to: '/docs/fin/account'},
          {label: 'القيود اليومية', to: '/docs/fin/journal'},
        ],
      },
      {
        id: 'crm',
        icon: 'handshake',
        title: 'المبيعات وCRM',
        desc: 'تابع العملاء المحتملين حتى إغلاق الصفقات.',
        to: '/docs/crm/',
        prefixes: ['crm'],
        links: [
          {label: 'العملاء المحتملون', to: '/docs/crm/lead'},
          {label: 'الصفقات', to: '/docs/crm/deal'},
        ],
      },
      {
        id: 'srm',
        icon: 'cart',
        title: 'المشتريات',
        desc: 'الموردون وأوامر الشراء ضمن مسار واحد.',
        to: '/docs/srm/',
        prefixes: ['srm'],
        links: [{label: 'أوامر الشراء', to: '/docs/srm/purchase-order'}],
      },
      {
        id: 'cat',
        icon: 'package',
        title: 'كتالوج المنتجات',
        desc: 'المنتجات وقوائم الأسعار وحركات المخزون.',
        to: '/docs/cat/introduction',
        prefixes: ['cat'],
        links: [
          {label: 'المنتج', to: '/docs/cat/product'},
          {label: 'قائمة الأسعار', to: '/docs/cat/price-list'},
          {label: 'المخزن', to: '/docs/cat/inventory'},
        ],
      },
      {
        id: 'dms',
        icon: 'folder',
        title: 'إدارة الوثائق',
        desc: 'احفظ وثائق العمل وابحث عنها وشاركها.',
        to: '/docs/dms/',
        prefixes: ['dms'],
        links: [{label: 'الوثائق', to: '/docs/dms/document'}],
      },
      {
        id: 'admin',
        icon: 'building',
        title: 'المؤسسة والإدارة',
        desc: 'هيكل الشركة والمستخدمون وإعدادات النظام.',
        to: '/docs/org/introduction',
        prefixes: ['org', 'adm'],
        links: [
          {label: 'الأقسام', to: '/docs/org/department'},
          {label: 'مستخدمو التطبيق', to: '/docs/adm/application-user'},
          {label: 'أدوار التطبيق', to: '/docs/adm/application-role'},
        ],
      },
      {
        id: 'app',
        icon: 'grid',
        title: 'تطبيقاتي',
        desc: 'أدوات يومية للمهام والتقويم وسجل الدوام.',
        to: '/docs/app/',
        prefixes: ['app'],
        links: [
          {label: 'المهام', to: '/docs/app/tasks'},
          {label: 'التقويم', to: '/docs/app/calendar'},
          {label: 'سجل الدوام', to: '/docs/app/timesheet'},
        ],
      },
    ],
  },
  guides: {
    eyebrow: 'أدلة شائعة',
    title: 'قراءات أساسية',
    items: [
      {title: 'إنشاء مشروع جديد', tag: 'المشاريع', to: '/docs/pmo/create-project'},
      {title: 'مسيرات الرواتب', tag: 'الموارد البشرية', to: '/docs/hrm/payroll'},
      {title: 'إنشاء موظف جديد', tag: 'الموارد البشرية', to: '/docs/hrm/create-employee'},
      {title: 'دليل الحسابات', tag: 'المالية', to: '/docs/fin/account'},
      {title: 'مقدمة كتالوج المنتجات', tag: 'الكتالوج', to: '/docs/cat/introduction'},
      {title: 'القيود اليومية', tag: 'المالية', to: '/docs/fin/journal'},
      {title: 'اعتماد الجداول الزمنية', tag: 'المشاريع', to: '/docs/pmo/timesheet'},
      {title: 'أدوار التطبيق', tag: 'الإدارة', to: '/docs/adm/application-role'},
    ],
  },
  workflows: {
    eyebrow: 'مسارات عمل متكاملة',
    title: 'تابع الرحلة من البداية إلى النهاية',
    items: [
      {
        title: 'استقبال موظف جديد',
        steps: [
          {label: 'إنشاء الموظف', to: '/docs/hrm/create-employee'},
          {label: 'إضافة بنود الراتب', to: '/docs/hrm/employee-salary-items'},
          {label: 'إدراجه في المسير', to: '/docs/hrm/payroll'},
        ],
      },
      {
        title: 'إطلاق مشروع',
        steps: [
          {label: 'إنشاء المشروع', to: '/docs/pmo/create-project'},
          {label: 'بناء الجدول الزمني', to: '/docs/pmo/schedule'},
          {label: 'متابعة الماليات', to: '/docs/pmo/financials'},
        ],
      },
      {
        title: 'كسب أعمال جديدة',
        steps: [
          {label: 'تسجيل عميل محتمل', to: '/docs/crm/lead'},
          {label: 'تقدّم الصفقة', to: '/docs/crm/deal'},
          {label: 'مراجعة قوائم الأسعار', to: '/docs/cat/price-list'},
        ],
      },
      {
        title: 'الشراء والتخزين',
        steps: [
          {label: 'إصدار أمر شراء', to: '/docs/srm/purchase-order'},
          {label: 'تسجيل حركة المخزون', to: '/docs/cat/inventory-transaction'},
          {label: 'مراجعة المخزن', to: '/docs/cat/inventory'},
        ],
      },
    ],
  },
  support: {
    title: 'لم تجد ما تبحث عنه؟',
    text: 'جرّب البحث، أو راجع المصطلحات للكلمات غير المألوفة.',
    links: [
      {label: 'ابحث في التوثيق', to: '/search'},
      {label: 'المصطلحات', to: '/docs/pmo/glossary'},
    ],
  },
  countLabel: (n) => {
    if (n === 1) return 'دليل واحد';
    if (n === 2) return 'دليلان';
    if (n >= 3 && n <= 10) return `${n} أدلة`;
    return `${n} دليلًا`;
  },
};

export const homeContent: Record<string, HomeCopy> = {en, ar};

export function getHomeCopy(locale: string): HomeCopy {
  return homeContent[locale] ?? en;
}
