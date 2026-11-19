---
sidebar_position: 1
title: Administration introduction
---

# Administration introduction

The **Administration** module in Drixal ERP is the control hub for who can sign in, what they can see, and how shared reference data is maintained. It brings application users, roles and permissions, entity management, countries and nationalities, currencies, data confidentiality, and system monitoring into one space.

Without this module, access stays informal: accounts without clear roles, permissions scattered across teams, and reference lists that drift out of sync. Inside Drixal, Administration keeps identity, authorization, and shared lookups tied to the same operating model.

:::note[Workflow not documented]
The Workflow UI in Administration is incomplete, so it is not covered in this help guide.
:::

## What the module does for your business

- Defines who can sign in as an **Application User**, with seat, language, and role links
- Controls access through **Application Roles**, claims, and NCA confidentiality levels
- Configures **Entity** metadata: statuses, types, and attributes used across modules
- Maintains lookup lists: **Country**, **Nationality**, **Currency**, and **Data Confidentiality**
- Runs and observes scheduled **Monitoring** (NightlyJob) work for rates, due items, and trends

## Hierarchy

```text
Administration
  ├── Application Users
  │     └── Roles
  ├── Application Roles
  │     ├── Permissions (claims + NCA)
  │     └── Users
  ├── Entity Management (CAT → entity tree)
  │     ├── Status
  │     ├── Types
  │     └── Attributes
  ├── Lookups (Country, Nationality, Currency, Data Confidentiality)
  └── Monitoring (NightlyJob)
```

| Level | Purpose |
|---|---|
| **Application User** | Sign-in identity, seat, activate/deactivate, role assignment |
| **Application Role** | Permissions, NCA levels, and linked users |
| **Entity Management** | Catalog tree for entity details, statuses, types, and attributes |
| **Lookups** | Shared reference values used on forms and reports |
| **Monitoring** | Nightly job schedule, steps, history, and Run Now |

## Where to find it in the system

**Path:** Sidebar ← Administration ← …

From the side menu choose **Administration**, then:

- **Application Users**
- **Application Roles**
- **Entity Management**
- **Countries**
- **Currencies**
- **Data Confidentiality**
- **Monitoring**

Nationality is available by route even when it does not appear in the sidebar.

## Who uses this section

| Role | Daily use |
|---|---|
| System administrator | Users, roles, permissions, monitoring |
| Security / compliance | Confidentiality levels and role claims |
| Master-data steward | Countries, nationalities, currencies, entity metadata |
| Operations lead | Nightly job health and manual runs when needed |

## How the Administration guide is organized

1. [Application Users](/docs/adm/application-user) — list, create/edit, activate/deactivate, seat type, roles
2. [Application Roles](/docs/adm/application-role) — details, permissions (claims + NCA), users
3. [Entity Management](/docs/adm/entity-management) — CAT tree, status, types, attributes
4. Lookups: [Country](/docs/adm/country), [Nationality](/docs/adm/nationality), [Currency](/docs/adm/currency), [Data Confidentiality](/docs/adm/data-confidentiality)
5. [Monitoring](/docs/adm/monitoring) — NightlyJob schedule, steps, history, Run Now
6. [Glossary](/docs/adm/glossary)

## Best Practices

:::tip[Create the role before handing over the user]
Define the Application Role and its permissions first, then create the user and assign the role. A user without roles may sign in and see nothing useful.
:::

:::warning[Treat identity and security fields as system-only]
Do not change password hash, lockout, two-factor, or failure-count fields from daily Administration screens. Those belong to system administration.
:::

## Related Sections

- [Application Users](/docs/adm/application-user)
- [Application Roles](/docs/adm/application-role)
- [Entity Management](/docs/adm/entity-management)
- [Monitoring](/docs/adm/monitoring)
- [Glossary](/docs/adm/glossary)
