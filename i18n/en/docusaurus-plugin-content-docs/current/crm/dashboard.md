---
sidebar_position: 2
title: CRM dashboard
---

# CRM dashboard

The **CRM Dashboard** is an analytical summary of sales funnel and accounts-receivable KPIs. The screen is for reading and refreshing — not for creating, editing, or deleting CRM records.

**Navigation:** Sidebar → Sales → Dashboard  
**Page:** `/Entities/CRM/Dashboard`

## Filters

| Filter | Meaning |
|---|---|
| **Period** | **Month** · **Quarter** · **Year** |
| **Customer** | One customer or all (customer-scoped charts and KPIs) |

Changing a filter reloads dashboard data. Use **Refresh** to reload without leaving the page.

## Key metrics (KPI strip)

| KPI | Meaning |
|---|---|
| **Deal Value** | Total deal amount |
| **Weighted Pipeline** | Deal amount × stage probability |
| **Quote Value** | Total quotation amount |
| **Sales Orders** | Sales order commitment |
| **Outstanding AR** | Unpaid sales invoices |
| **Customer Exposure** | Customer due invoices total |

## Dashboard sections

| Section | Content |
|---|---|
| **Sales Pipeline** | Deal funnel (Lead → Qualified → Deals → Won → Customers); pies for Leads / Deals / Quotes by status |
| **Revenue & Accounts Receivable** | Deal value by status; pipeline forecast by pipeline; deals by confidence; AR invoices / unpaid AR by status; revenue by customer |
| **Historical Trends** | Deal pipeline and related trend charts over time |

## How to use the dashboard

1. Open the CRM dashboard from Sales
2. Choose a period (Month, Quarter, or Year)
3. Optionally filter by customer
4. Review the KPI strip, then the pipeline and AR charts
5. Select **Refresh** before a review meeting if data may have changed

## Best Practices

:::tip[Filter by customer for account reviews]
Use the customer filter so KPIs and AR charts match the account you are discussing.
:::

:::warning[No CRUD on the dashboard]
Create and edit leads, deals, invoices, and payments from their entity screens — not from dashboard cards.
:::

:::note[Figures follow your permissions]
Totals and charts use data available to your permissions; they are not a sealed external audit report.
:::

## Related Sections

- [CRM & Sales introduction](/docs/crm/introduction)
- [Deals](/docs/crm/deal)
- [Invoices AR](/docs/crm/invoice-ar)
- [Glossary](/docs/crm/glossary)
