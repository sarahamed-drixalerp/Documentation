---
sidebar_position: 11
title: Brand and model
---

# Brand and model

A **Brand** and a **Brand model (BrandModel)** are classification levels under the category in the catalogue tree. The brand has a list and a record; the model is managed through its record page under the brand.

**Brand pages:** `/Entities/CAT/Brand` and `/Entities/CAT/Brand/{id}`  
**Model page:** `/Entities/CAT/BrandModel/{id}`

:::note[Side menu visibility]
Brand / BrandModel items may not appear as separate side menu entries under Product Catalogue; use the direct paths or links from records when you have permission.
:::

## Brand

### What this screen does

- Manages brands with both names and descriptions
- Optionally links **ProductCategoryId**
- Is selected in the product's cascading classification after the category

### Fields

| Field | Required | Use |
|---|---|---|
| **name** / **nameAr** | Optional in the current interface validation | Name in English and Arabic |
| **description** / **descriptionAr** | Optional | Descriptions |
| **ProductCategoryId** | Optional | Product category |

## Brand model (BrandModel)

### What this screen does

- Shows / edits a model at `/Entities/CAT/BrandModel/{id}`
- Is linked to the brand through **brandId** in the payload
- Is selected on the product after the brand is chosen

### Fields

| Field | Required | Use |
|---|---|---|
| **name** / **nameAr** | Optional in the current interface validation | Name in English and Arabic |
| **description** / **descriptionAr** | Optional | Descriptions |
| **brandId** | From the brand context / defaults | Parent brand |

:::note[No brand picker in the details template]
The model's SaveDetails interface does not show a separate Brand picker in the template; the link comes from the record context / defaults.
:::

## How to use the screens

1. Create a brand and link it to a category when needed
2. Create or open a model under the brand through the BrandModel path
3. On the product, choose MarketUnit → Category → Brand → BrandModel in that order

## Best Practices

:::tip[Keep a single chain for each product line]
A brand without a category, or a model without a brand, breaks the clarity of the tree even if the record is saved.
:::

:::warning[Interface validation is lenient]
The Brand / BrandModel fields are optional in the current yup validation; adopt an internal data policy that requires both names and the classification link.
:::

## Related Sections

- [Product category](/docs/cat/product-category)
- [Product](/docs/cat/product)
- [Product tree](/docs/cat/product-tree)
- [Product Catalogue introduction](/docs/cat/introduction)
