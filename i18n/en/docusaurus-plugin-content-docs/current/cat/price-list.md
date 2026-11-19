---
sidebar_position: 7
title: Price list
---

# Price list

A **Price list (Price List)** defines quantity-based pricing for products: two names, data confidentiality, and product lines with a price and from / to quantity limits.

**Path:** Side menu → Product Catalogue → Price lists  
**List:** `/Entities/CAT/PriceList`  
**Create:** `/Entities/CAT/PriceList/new`  
**Record:** `/Entities/CAT/PriceList/{id}`

## What this screen does

- Creates price lists with bilingual names and confidentiality
- Adds product lines with the unit price and a quantity range
- Is shown in the create drawer with General and Products tabs

## List columns

| Column | Meaning |
|---|---|
| **name** / **nameAr** | Name in English and Arabic |
| **description** / **descriptionAr** | Descriptions |
| **Active?** | Active status |
| **actions** | Edit / delete |

## Required fields (header)

| Field | Use |
|---|---|
| **name** | Name in English |
| **nameAr** | Name in Arabic |
| **dataConfidentialityId** | Data confidentiality |

## Optional fields (header)

| Field | Use |
|---|---|
| **description** / **descriptionAr** | Descriptions |

## Product lines

| Field | Use |
|---|---|
| **Product** (+ UOM through the product / unit selection) | Product and unit of measure |
| **unitPrice_val** | Unit price |
| **fromQuantity_dec** | From quantity |
| **toQuantity_dec** | To quantity |

Lines support create, edit, and delete inside the list.

## Tabs / sections

| Section | Content |
|---|---|
| **General** | Both names, descriptions, confidentiality |
| **Products** | Pricing lines table |

On the record page, fields and sections appear through SaveDetails, with activities / attachments / logs from the extras menu when available.

## How to use the screen

1. Open `/Entities/CAT/PriceList/new`, or create from the list
2. Fill in **name**, **nameAr**, and **dataConfidentialityId** in General
3. Add Products lines: product, price, FromQty, ToQty
4. Save and open the record `/Entities/CAT/PriceList/{id}` to continue

## Best Practices

:::tip[Define the quantity range clearly]
Keep **fromQuantity_dec** and **toQuantity_dec** from overlapping for the same product within the list so the price is not ambiguous at the point of sale.
:::

:::note[Confidentiality is required]
The header cannot be saved without **dataConfidentialityId**.
:::

## Related Sections

- [Product](/docs/cat/product)
- [Unit of measure](/docs/cat/uom)
- [Product Catalogue introduction](/docs/cat/introduction)
