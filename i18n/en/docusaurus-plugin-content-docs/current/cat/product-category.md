---
sidebar_position: 10
title: Product category
---

# Product category

A **Product category (ProductCategory)** is a classification group under an optional market unit. It appears in the products list, the dashboard, and the tree.

**Path:** Side menu → Product Catalogue → Product categories  
**List:** `/Entities/CAT/ProductCategory`  
**Record:** `/Entities/CAT/ProductCategory/{id}`

## What this screen does

- Manages product categories with both names
- Optionally links **MarketUnitId**
- Is used in dashboard filters and product grouping

## Fields

| Field | Required | Use |
|---|---|---|
| **name** | Required (in the save details) | Name in English |
| **nameAr** | Required (in the save details) | Name in Arabic |
| **MarketUnitId** | Optional | Parent market unit |
| **description** / **descriptionAr** | Optional | Descriptions |

## How to use the screen

1. Open the product categories list
2. Create a category with both names
3. Link **MarketUnitId** if the category belongs to a market unit
4. Later, choose the category from the product record after selecting the market unit

## Best Practices

:::tip[Link the category to a market unit when you adopt the tree]
Without MarketUnitId, the clarity of the path in the Product Tree is weakened.
:::

:::note[Cascading on the product]
On the product, categories are filtered by the selected market unit.
:::

## Related Sections

- [Market unit](/docs/cat/market-unit)
- [Brand and model](/docs/cat/brand)
- [Product](/docs/cat/product)
- [Product Catalogue dashboard](/docs/cat/dashboard)
