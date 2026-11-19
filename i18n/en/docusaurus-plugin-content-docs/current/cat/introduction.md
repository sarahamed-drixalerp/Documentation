---
sidebar_position: 1
title: Product Catalogue introduction
---

# Product Catalogue introduction

The **Product Catalogue (CAT)** module in Drixal ERP is the hub for defining products, services, pricing, and inventory. It brings the classification tree, products, units of measure, price lists, inventories, and stock transactions into one space, then links every product to its commercial, tax, and storage capabilities.

Without this module, items stay scattered: a price in a quote, a balance in a file, and a category in spreadsheets. Inside Drixal, a product becomes a connected record linked to its category, brand, unit of measure, inventory, and price list.

## What the module does for your business

- Unifies the working language: Market unit → Category → Brand → Brand model → Product
- Gives operations one screen to define selling, purchasing, storage, and cost
- Lets management see profit margin and re-order alerts from the dashboard
- Links the catalogue to sales, purchasing, and inventory through prices and transactions

## Hierarchy

```text
Market unit (MarketUnit)
  └── Product category (ProductCategory)
        └── Brand
              └── Brand model (BrandModel)
                    └── Product
                          ├── Product UOMs (ProductUOMs)
                          ├── Deliverables
                          ├── Inventories
                          └── Sub-products / bundles (SubProducts)
```

| Level | Purpose |
|---|---|
| **Market unit (MarketUnit)** | Classification root in the tree and filters |
| **Product category (ProductCategory)** | Groups products under an optional market unit |
| **Brand / Brand model (Brand / BrandModel)** | Finer commercial classification of the product |
| **Product** | Day-to-day working unit: price, cost, capabilities, tax |
| **Inventory and transaction** | Product balance and add / withdraw / transfer movements |
| **Price list / UOM** | Quantity-based pricing and the structure of base and sub-units |

You can open a product directly from the list. Linking to a market unit, category, and brand is optional at creation, but it matters for the tree and reports.

## Where to find it in the system

From the side menu, choose **Product Catalogue**, then:

- Catalogue dashboard
- **Products** ← the focus of this guide
- Product tree
- Product categories
- Price lists
- Market units
- Tax rates
- Units of measure
- Trading types
- Inventories
- Inventory transactions

## Who uses this section

| Role | Daily use |
|---|---|
| Catalogue manager | Defining products, classification, and pricing |
| Warehouse | Inventories, balances, and add / withdraw / transfer transactions |
| Sales | Selling prices, price lists, and the sales warning text at the point of sale |
| Purchasing | Cost, the purchase warning text, and the supplier on add transactions |
| Finance | Tax rates and the journal entry preview when posting a transaction |

## How this Product Catalogue guide is organized

1. Understand the hierarchy and the dashboard
2. Define products and the Draft → Post lifecycle
3. Browse the tree and balances
4. Manage inventories and inventory transactions
5. Price lists and units of measure
6. Reference data (market unit, category, brand, tax, lookups)

## Best Practices

:::tip[Build the classification before piling up products]
Create market units, categories, and brands first, then add products. Classifying later makes the tree and filters harder to use.
:::

:::warning[Posting locks the record]
Posting a product or an inventory transaction puts the record into a locked, read-only state according to the status rules. Review before you select Post.
:::

## Related Sections

- [Product Catalogue dashboard](/docs/cat/dashboard)
- [Product](/docs/cat/product)
- [Product tree](/docs/cat/product-tree)
- [Inventory](/docs/cat/inventory)
- [Inventory transaction](/docs/cat/inventory-transaction)
- [Glossary](/docs/cat/glossary)
