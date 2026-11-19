---
sidebar_position: 2
title: SRM dashboard
---

# SRM dashboard

The **SRM Dashboard** is an analytics summary of the procurement pipeline, purchase-order commitment, and accounts payable. The screen is for reading and refresh — not for creating, editing, or deleting SRM records.

**Navigation:** Sidebar → SRM & Procurement → SRM Dashboard  
**Page:** `/Entities/SRM/Dashboard`

## Filters

| Filter | Meaning |
|---|---|
| **Supplier** | One supplier or **All Suppliers** (for supplier-scoped KPIs and charts) |

Changing the filter reloads dashboard data. Use **Refresh** to reload without leaving the page.

## Key metrics (KPI strip)

| KPI | Meaning |
|---|---|
| **PO Commitment** | Purchase order commitment (sum of amount) |
| **PO Unpaid** | Unpaid amount on purchase orders |
| **AP Outstanding** | Outstanding purchase invoice payables |
| **AP Paid** | Paid amount on purchase invoices |
| **Supplier Exposure** | Supplier exposure (invoice dues) |
| **Bid Pipeline** | Bid pipeline value |

## Dashboard sections

| Section | Content |
|---|---|
| **Procurement Pipeline** | Status pies for PurchaseRequisition, Bid, and SupplierQuote |
| **Spend & Accounts Payable** | PO commitment by status; AP invoices / unpaid by status; spend and invoiced by supplier; bid value by status |
| **Historical Trends** | PO commitment trend; invoice vs paid; payments to suppliers; bid pipeline value over time |

## How to use the dashboard

1. Open the SRM dashboard from Procurement
2. Optionally filter by supplier (or leave All Suppliers)
3. Review the KPI strip, then pipeline and AP charts
4. Click **Refresh** before a review meeting if data may have changed

## Best Practices

:::tip[Filter by supplier for account reviews]
Use the supplier filter so KPIs and AP charts match the account you are discussing.
:::

:::warning[No CRUD on the dashboard]
Create and edit requisitions, orders, invoices, and payments from entity screens — not from dashboard cards.
:::

:::note[Figures follow your permissions]
Totals and charts come from data available to your permissions; they are not an external locked audit report.
:::

## Related Sections

- [SRM & Procurement introduction](/docs/srm/introduction)
- [Suppliers](/docs/srm/supplier)
- [Purchase orders](/docs/srm/purchase-order)
- [Invoices AP](/docs/srm/invoice-ap)
- [Glossary](/docs/srm/glossary)
