import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Drixal ERP',
  tagline: 'Unified cloud ERP documentation',
  favicon: 'img/favicon.ico',

  url: 'https://docs.drixalerp.com',
  baseUrl: '/',

  organizationName: 'drixal',
  projectName: 'drixal-erp-docs',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    localeConfigs: {
      ar: {
        label: 'العربية',
        direction: 'rtl',
        htmlLang: 'ar',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap',
      type: 'text/css',
    },
  ],

  clientModules: ['./src/clientModules/forceLightMode.ts'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'ar'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      hideOnScroll: false,
      title: '',
      logo: {
        alt: 'Drixal ERP',
        src: 'img/logo.png',
        href: '/',
        width: 140,
        height: 44,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'التوثيق',
        },
        {
          to: '/docs/pmo/introduction',
          label: 'مكتب إدارة المشاريع',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'التوثيق',
          items: [
            {label: 'البداية', to: '/docs/getting-started/introduction'},
            {label: 'مكتب إدارة المشاريع', to: '/docs/pmo/introduction'},
            {label: 'المشروع', to: '/docs/pmo/project-overview'},
            {label: 'الموارد البشرية', to: '/docs/hrm/'},
            {label: 'المالية', to: '/docs/fin/'},
          ],
        },
        {
          title: 'المنتج',
          items: [
            {label: 'موقع Drixal', href: 'https://drixalerp.com'},
            {label: 'طلب عرض توضيحي', href: 'https://drixalerp.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Drixal ERP`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
