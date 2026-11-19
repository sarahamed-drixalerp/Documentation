---
sidebar_position: 12
title: Tax rates
---

# Tax rates

A **Tax rate (Tax Rate)** is a reference value for the tax percentage, the invoice label, and the default assignment. Within the Product Catalogue it is selected on the product through **taxRateId**.

**Path (Product Catalogue):** Side menu → Product Catalogue → Tax rates  
**Page (CAT):** `/Entities/CAT/TaxRate`  
**Page (ORG):** `/Entities/ORG/TaxRate`

:::note[Interface and API ownership]
The CAT interface and the catalogue's side menu path open `/Entities/CAT/TaxRate`. An interface also exists under the organization at `/Entities/ORG/TaxRate`, and the backend API follows the ORG controller.
:::

## What this screen does

- Manages tax rates with both names, the percentage, and the invoice label
- Lets you set **isDefault** for the default rate
- Is linked to the product for tax on sale / purchase, depending on use

## Fields

| Field | Required | Use |
|---|---|---|
| **name** / **nameAr** | Required in the CAT interface | Name in English and Arabic |
| **taxValue_prc** | Optional in validation (≥ 0) | Tax percentage % |
| **labelOnInvoice** | Optional | Label on the invoice |
| **isDefault** | Optional | Whether it is the default rate |
| **description** / **descriptionAr** | Optional | Descriptions |

### CAT list columns

name / nameAr / descriptions / Active? / actions — without a taxValue column in the current CAT list.

### ORG list columns

Adds a **taxValue_prc** column alongside the names, descriptions, and active status.

## How to use the screen

1. Open `/Entities/CAT/TaxRate` from the catalogue menu (or the ORG path when working from the organization)
2. Create or edit a rate with both names, **taxValue_prc**, **labelOnInvoice**, and **isDefault**
3. Later, choose the rate from the tax field on the [Product](/docs/cat/product)

## Best Practices

:::tip[Standardize the invoice label]
Make **labelOnInvoice** match what the customer sees so the wording does not differ between teams.
:::

:::note[Default rate]
**isDefault** marks the rate used by default within the list.
:::

:::warning[Two interface paths]
Edit from a single approved path in your organization (CAT or ORG) to avoid operational confusion, bearing in mind that the backend API is under ORG.
:::

## Related Sections

- [Product](/docs/cat/product)
- [Product Catalogue introduction](/docs/cat/introduction)
- [Organization tax rates](/docs/org/tax-rate)
