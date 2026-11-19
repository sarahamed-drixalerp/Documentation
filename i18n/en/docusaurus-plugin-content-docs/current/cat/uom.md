---
sidebar_position: 8
title: Unit of measure
---

# Unit of measure

A **Unit of measure (UOM)** defines the base and sub-units for quantities. A unit without a parent must have a quantity of 1; a sub-unit is linked to a parent and has a quantity greater than 1.

**Path:** Side menu → Product Catalogue → Units of measure  
**List:** `/Entities/CAT/UOM`  
**Create:** `/Entities/CAT/UOM/new`  
**Record:** `/Entities/CAT/UOM/{id}`

## What this screen does

- Manages units of measure by name, abbreviations, precision, and quantity
- Links sub-units to a parent through Parent
- Shows sub-units in ListSub on the record

## List columns

| Column | Meaning |
|---|---|
| **name** / **nameAr** | Name |
| **abbrvShort** / **abbrvLong** | Short / long abbreviation |
| **quantity_dec** | Quantity factor |
| **roundingPrecision_dec** | Rounding precision |
| **unitPrice_val** | Optional price |
| **actions** | Open / actions |

## Required fields

| Field | Use |
|---|---|
| **name** | Name |
| **quantity_dec** | Quantity — see the rule below |
| **roundingPrecision_dec** | Rounding precision (≥ 0) |

### quantity_dec rule

| Case | Required value |
|---|---|
| No **parentId** (base unit) | Must equal **1** |
| With **parentId** (sub-unit) | Must be **> 1** |

## Optional fields

| Field | Use |
|---|---|
| **nameAr** | Name in Arabic |
| **description** / **descriptionAr** | Descriptions |
| **abbrvShort** / **abbrvLong** | Abbreviations |
| **parentId** | Parent unit |
| **unitPrice_val** / **unitCost_val** | Optional price / cost (≥ 0 if provided) |

## Sub-units (ListSub)

On the record, a sub-list appears with the columns: name, abbrvShort, quantity_dec, roundingPrecision_dec, with create / edit / delete.

## How to use the screen

1. Create a base unit: **name**, **quantity_dec = 1**, **roundingPrecision_dec**
2. Create sub-units with a Parent and a quantity greater than 1
3. Link products to base units from the product screen, and add ProductUOMs when needed

## Best Practices

:::tip[Keep base units clean]
Do not give a base unit a parent; the rule enforces a quantity of 1 when there is no parent.
:::

:::warning[A sub-unit quantity must be > 1]
A value of 1 with a parent, or a value other than 1 without a parent, is rejected by the interface with the quantity rule message.
:::

## Related Sections

- [Product](/docs/cat/product)
- [Price list](/docs/cat/price-list)
- [Product Catalogue introduction](/docs/cat/introduction)
