---
sidebar_position: 2
title: Product Catalogue dashboard
---

# Product Catalogue dashboard

The **Product Catalogue dashboard (CAT Dashboard)** is an analytical summary of catalogue value, profit margin, stock health, category distribution, and commercial capabilities. The screen is for reading and navigation only — there is no create, edit, or delete.

**Path:** Side menu → Product Catalogue → Catalogue dashboard  
**Page:** `/Entities/CAT/Dashboard`

## Filters

| Filter | Meaning |
|---|---|
| **Filter Category** | A single category, or all |
| **Capability Filter** | `all` / `sold` / `purchased` / `expensed` |

After you change a filter, the dashboard data reloads and the number of matching items is shown.

## Summary indicators (KPIs)

| Indicator | Meaning |
|---|---|
| **Total Products** | Number of products after filtering |
| **Avg Margin** | Average profit margin % |
| **Total Sales Val** | Sum of the displayed selling values |
| **Categories** | Number of categories |
| **Re-Order Alerts** | Re-order limit alerts |

## Chart cards

| Card | Content |
|---|---|
| **Profit Margin % by Category** | Average margin across categories |
| **Pricing Tier Distribution** | Distribution of products across price tiers |
| **Category Distribution** | Number of products per category |
| **Re-Order & Stock Health** | Products with safety limits versus standard |
| **Status & Lifecycle Breakdown** | Distribution of statuses (such as Active / Draft / Archived) |

## Top highest margin products

The **Top Highest Margin Products** table shows the top 5 products by gross profit margin, with the columns: SKU, Product name, Category, Unit cost, Unit price, Profit margin.

The **View All Products** link opens `/Entities/CAT/Product`.

## Quick actions

| Action | Destination / function |
|---|---|
| **Products** | `/Entities/CAT/Product` |
| **Categories** | `/Entities/CAT/ProductCategory` |
| **Refresh** | Reloads the dashboard data |

## Best Practices

:::tip[Refresh the dashboard before a pricing meeting]
Select Refresh and apply the right category / capability filter so the figures reflect the latest products.
:::

:::note[The summary reflects the loaded data]
The indicators are calculated from the product list that the dashboard returns for your permissions; it is not a closed accounting report.
:::

:::warning[No CRUD on the dashboard]
Editing is done from the Products, Categories, and Inventory screens, not from the dashboard cards.
:::

## Related Sections

- [Product Catalogue introduction](/docs/cat/introduction)
- [Product](/docs/cat/product)
- [Product category](/docs/cat/product-category)
- [Product tree](/docs/cat/product-tree)
