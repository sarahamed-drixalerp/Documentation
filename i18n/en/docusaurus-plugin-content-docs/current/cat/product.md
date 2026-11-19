---
sidebar_position: 3
title: Product
---

# Product

The **Product** is the operational catalogue record: name, price, cost, commercial capabilities, classification, and tax. From the list you create, filter, and group; from the record page you manage the details and the child tabs until posting.

**Path:** Side menu → Product Catalogue → Products  
**List:** `/Entities/CAT/Product`  
**Create:** `/Entities/CAT/Product/new`  
**Record:** `/Entities/CAT/Product/{id}`

## What this screen does

- Shows products by name, status, unit price, and unit cost
- Lets you filter by type and status, and group by type / status / category / market unit / tax rate
- Supports card view and a **DlgView** preview without opening the full record
- Links the product to units of measure, deliverables, inventories, and bundles after creation

## List columns

| Column | Meaning |
|---|---|
| **name** | Name with a thumbnail and a link to the record |
| **entityStatusName** | Record status |
| **unitPrice_val** | Unit price (selling) |
| **unitCost_val** | Unit cost (purchasing) |
| **actions** | Preview / edit / delete |

**Filters:** search by name; **Product.EntityTypeId**; **Product.EntityStatusId**.

**Views:** List | Cards | Tree (grouping).

**Grouping:** EntityTypeId, EntityStatusId, ProductCategoryId, MarketUnitId, TaxRateId.

### Card view

Each card shows the image / status badge, the title, category · market unit, price, and edit / delete actions. Selecting a card opens `/Entities/CAT/Product/{id}`. Pagination: 12 / 24 / 36.

### DlgView preview

The eye icon opens a read-only preview dialog showing: both names, status, ID, SKU, PN, price / cost, classification, unit of measure, capability flags, and description, with a button to open the product.

## Required fields

| Field | Use |
|---|---|
| **name** | Name in English |
| **nameAr** | Name in Arabic |

## Optional fields

| Field | Use |
|---|---|
| **pN** | External part number (PN) |
| **sKUNo** | Internal identifier (SKU) |
| **uOMId** | Base unit of measure |
| **marketUnitId** → **productCategoryId** → **brandId** → **brandModelId** | Cascading classification; clearing a parent clears its children |
| **taxRateId** | Tax rate |
| **tradingTypeId** | Trading type |
| **deliveryProofId** | Proof of delivery |
| **billingFrequencyId** | Billing frequency |
| **reOrderLimit_dec** | Re-order limit (≥ 0) |
| **unitPrice_val** / **unitCost_val** | Unit price and unit cost |
| **descriptionSales** / **descriptionPurchase** | Sales / purchase description |
| **warningSales** / **warningPurchase** | Warning at sale / purchase |
| **description** / **descriptionAr** | General description |
| **photoUrl** | Product images (entity attachments) |
| **dataConfidentialityId** | Data confidentiality |
| **entityTypeId** / **entityStatusId** | Type and status |

## Capabilities

| Capability | Meaning |
|---|---|
| **IsCanBeSold** | Can be sold |
| **IsCanBePurchased** | Can be purchased |
| **IsCanBeExpensed** | Can be expensed |
| **IsCanBeStored** | Can be stored |
| **IsCanBeDecimal** | Allows decimal quantities |

In the quick-create drawer, Sold / Purchased are shown; on the record details, all five capabilities are shown.

## Draft → Post lifecycle

1. Create the product with the two required fields and save
2. Complete the classification, prices, and capabilities
3. Select **Post** through the posting dialog once the record exists
4. On posting, fields are locked, Save / Post are hidden, and attachments become read-only

:::danger[Posting locks the form]
A product is considered posted when its status name (converted to lowercase) contains one of: `post`, `مرحل`, `منشور`, or `publish`. A fixed status ID is not used for the product.
:::

## Record tabs `/Entities/CAT/Product/{id}`

| Tab | Content |
|---|---|
| **Details** | Details form and Save / Post |
| **ProductUOMs** | Linked units of measure: UOM + unitPrice_val / unitCost_val — create / edit / delete |
| **Deliverables** | Deliverables by name — create / edit / delete |
| **Inventories** | Inventory links by name — create / edit / delete |
| **SubProducts** | Bundles / sub-products by name — create / edit / delete |

### Activities / attachments / logs

From the extras menu on the record:

- **Activities** through the shared activities component
- **Attachments**
- **Logs**

:::note[ProductActivity ListSub]
A `ProductActivity/ListSub` component exists with create, edit, and delete, but it is not mounted as a tab on the current product page. The activities shown from the extras menu use the shared activities path.
:::

## How to use the screen

1. Open the products list
2. Filter by type or status, or switch to cards / grouping when needed
3. Create a product from **Create New Product**, or edit an existing row
4. Fill in **name** and **nameAr**, then optionally PN / SKU, the cascading classification, and capabilities
5. Save, then manage the child tabs (UOMs, Deliverables, Inventories, SubProducts)
6. Post when the definition is complete, if your policy requires locking

## Best Practices

:::tip[Define the unit of measure before multi-unit pricing]
Link the base **uOMId** first, then add ProductUOM rows for additional unit prices.
:::

:::warning[Classification is cascading]
In the interface you cannot select a category without a market unit selected, a brand without a category, or a model without a brand. Clear a parent with care because it clears its children.
:::

:::note[The image locks after posting]
The images component becomes read-only when the product is posted.
:::

## Related Sections

- [Product Catalogue introduction](/docs/cat/introduction)
- [Product tree](/docs/cat/product-tree)
- [Unit of measure](/docs/cat/uom)
- [Inventory](/docs/cat/inventory)
- [Price list](/docs/cat/price-list)
- [Reference data](/docs/cat/lookups)
