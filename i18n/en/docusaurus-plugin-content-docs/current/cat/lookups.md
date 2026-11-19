---
sidebar_position: 13
title: Reference data
---

# Reference data

Bilingual **Lookups** values are selected from product fields or related screens. The standard pattern: **name** and **nameAr** are required, and descriptions are optional — except where stated otherwise.

## BillingFrequency

**Billing frequency (BillingFrequency)** is selected on the product through **billingFrequencyId**.

**Page:** `/Entities/CAT/BillingFrequency`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **description** / **descriptionAr** | Optional |

## DeliveryProof

**Proof of delivery (DeliveryProof)** is selected on the product through **deliveryProofId**.

**Page:** `/Entities/CAT/DeliveryProof`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **description** / **descriptionAr** | Optional |

## DiscountType

**Discount type (DiscountType)** is a reference value for discounts in flows that use this classification.

**Page:** `/Entities/CAT/DiscountType`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **description** / **descriptionAr** | Optional |

## ManagementBufferType

**Management buffer type (ManagementBufferType)** is a reference value for a management margin / buffer.

**Page:** `/Entities/CAT/ManagementBufferType`

| Field | Required |
|---|---|
| **name** / **nameAr** | Optional in the current interface validation (weaker than the other lookups) |
| Descriptions | Per the form |

:::note[Weaker validation]
Unlike BillingFrequency, DeliveryProof, DiscountType, and TradingType, the Save validation for ManagementBufferType does not enforce name / nameAr as required in the current interface.
:::

## TradingType

**Trading type (TradingType)** is selected on the product through **tradingTypeId**. It appears in the catalogue side menu.

**Page:** `/Entities/CAT/TradingType`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **description** / **descriptionAr** | Optional |

## Common usage

1. Open the page of the lookup you need
2. Create or edit the value with both names (where required)
3. Choose it from the corresponding field on the [Product](/docs/cat/product) or the related screen

## Best Practices

:::tip[Keep lists short and consistent]
Avoid duplicating the same meaning under different names so that search and filtering stay clean.
:::

:::warning[Permissions and paths]
Some lookup pages may not appear in the side menu; the direct path works when you have permission.
:::

## Related Sections

- [Product](/docs/cat/product)
- [Market unit](/docs/cat/market-unit)
- [Product category](/docs/cat/product-category)
- [Brand and model](/docs/cat/brand)
- [Tax rates](/docs/cat/tax-rate)
- [Glossary](/docs/cat/glossary)
