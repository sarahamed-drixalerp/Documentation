---
sidebar_position: 9
title: Market unit
---

# Market unit

A **Market unit (MarketUnit)** is a reference value and the root of the product tree. It is selected in a product's cascading classification and in product categories.

**Path:** Side menu → Product Catalogue → Market units  
**List:** `/Entities/CAT/MarketUnit`  
**Record:** `/Entities/CAT/MarketUnit/{id}`

## What this screen does

- Manages market units with both names and an optional color
- Forms the root of the hierarchy in the Product Tree
- Is used to filter and group products

## Fields

| Field | Required | Use |
|---|---|---|
| **name** | Required | Name in English |
| **nameAr** | Required | Name in Arabic |
| **description** / **descriptionAr** | Optional | Descriptions |
| **color** | Optional | Display color |

## How to use the screen

1. Open the market units list
2. Create a unit with both names and choose a color if needed
3. Link categories and products to this unit later

## Best Practices

:::tip[Settle market units before categories]
The tree starts from MarketUnit; changing the root later disrupts the classification.
:::

:::note[Color is for display]
**color** is optional and helps visual distinction without affecting the required fields.
:::

## Related Sections

- [Product category](/docs/cat/product-category)
- [Product tree](/docs/cat/product-tree)
- [Product](/docs/cat/product)
- [Product Catalogue introduction](/docs/cat/introduction)
