import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Merged sidebar:
 * - Restored Arabic getting-started + full PMO docs
 * - Module stubs used by Aspire-Frontend Help routing
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'البداية',
      collapsed: false,
      items: ['getting-started/introduction'],
    },
    {
      type: 'category',
      label: 'مكتب إدارة المشاريع',
      collapsed: false,
      items: [
        'pmo/introduction',
        'pmo/project-overview',
        'pmo/project-list',
        'pmo/create-project',
        'pmo/project-details',
        'pmo/workspace-360',
        'pmo/line-items',
        'pmo/scope',
        'pmo/schedule',
        'pmo/stakeholders',
        'pmo/time-phases',
        'pmo/financials',
        'pmo/risks-issues',
        'pmo/delivery-proofs',
        'pmo/management-center',
        'pmo/project-actions',
        'pmo/timesheet',
        'pmo/insights',
        'pmo/glossary',
      ],
    },
    {
      type: 'category',
      label: 'الموارد البشرية',
      collapsed: true,
      items: ['hrm/index', 'hrm/employee', 'hrm/payroll'],
    },
    {
      type: 'category',
      label: 'المبيعات وعلاقات العملاء',
      collapsed: true,
      items: ['crm/index', 'crm/lead', 'crm/deal'],
    },
    {
      type: 'category',
      label: 'المشتريات',
      collapsed: true,
      items: ['srm/index', 'srm/purchase-order'],
    },
    {
      type: 'category',
      label: 'المالية',
      collapsed: true,
      items: ['fin/index', 'fin/journal', 'fin/account'],
    },
    {
      type: 'category',
      label: 'إدارة الوثائق',
      collapsed: true,
      items: ['dms/index', 'dms/document'],
    },
    {
      type: 'category',
      label: 'كتالوج المنتجات',
      collapsed: true,
      items: ['cat/index'],
    },
    {
      type: 'category',
      label: 'المؤسسة والإدارة',
      collapsed: true,
      items: [
        'org/index',
        'adm/index',
        'adm/application-user',
        'gps/index',
        'srv/index',
        'sla/index',
      ],
    },
    {
      type: 'category',
      label: 'تطبيقاتي',
      collapsed: true,
      items: [
        'app/index',
        'app/tasks',
        'app/calendar',
        'app/timesheet',
        'app/services',
        'app/my-requests',
        'app/inbox',
        'app/incidents',
        'app/attendance',
        'app/profile',
        'app/change-password',
        'app/privacy-policy',
      ],
    },
    {
      type: 'category',
      label: 'وحدات أخرى',
      collapsed: true,
      items: ['flt', 'fms', 'grc', 'hsp', 'rsk', 'scl'],
    },
  ],
};

export default sidebars;
