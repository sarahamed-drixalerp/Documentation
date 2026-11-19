---
sidebar_position: 4
title: Product tree
---

# Product tree

The **Product tree (Product Tree)** is a hierarchical browsing screen for the catalogue with a warehouse balances grid. It is for navigation and lookup only — there is no product creation form on this page.

**Path:** Side menu → Product Catalogue → Product tree  
**Page:** `/Entities/CAT/ProductTree`

## What this screen does

- Shows the hierarchy: market unit → category → brand → model → product
- Offers a warehouse filter with an "All" option
- Shows the warehouse products grid with balance, price, and cost
- Opens the product record from the link, without creating from the tree

## Displayed hierarchy

```text
MarketUnit
  └── ProductCategory
        └── Brand
              └── BrandModel
                    └── Product
```

## Warehouse products grid

| Column | Meaning |
|---|---|
| **Product** | Name and ID; a warehouse chip when all warehouses are shown |
| **UOM** | Unit of measure |
| **Balance** | Balance |
| **Price** | Price |
| **Cost** | Cost |

Selecting a product opens `/Entities/CAT/Product/{id}`. The list icon takes you to `/Entities/CAT/Product`.

## How to use the screen

1. Open the product tree
2. Browse the nodes from market unit down to product
3. Choose a warehouse, or "All", for the balances grid
4. Open the product from the grid when you need to edit it

## Best Practices

:::tip[Use the tree to verify classification]
If a product appears somewhere unexpected, check MarketUnit → Category → Brand → BrandModel on the product record.
:::

:::note[No creation from the tree]
Products are created from the products list at `/Entities/CAT/Product/new`, not from ProductTree.
:::

## Related Sections

- [Product Catalogue introduction](/docs/cat/introduction)
- [Product](/docs/cat/product)
- [Market unit](/docs/cat/market-unit)
- [Product category](/docs/cat/product-category)
- [Brand and model](/docs/cat/brand)
