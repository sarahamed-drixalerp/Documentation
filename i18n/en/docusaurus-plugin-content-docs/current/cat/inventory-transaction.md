---
sidebar_position: 6
title: Inventory transaction
---

# Inventory transaction

An **Inventory transaction (Inventory Transaction)** records adding, withdrawing, or transferring product quantities between inventories. It is created as a draft and then posted; after posting the record is locked and a journal entry can be previewed.

**Path:** Side menu → Product Catalogue → Inventory transactions  
**List:** `/Entities/CAT/InventoryTransaction`  
**Create:** `/Entities/CAT/InventoryTransaction/new?type=...`  
**Record:** `/Entities/CAT/InventoryTransaction/{id}`

## Transaction types

| Type | Meaning | Required inventory |
|---|---|---|
| **Add** | Add to the inventory | **ToInventory** |
| **Withdraw** | Withdraw from the inventory | **FromInventory** |
| **Transfer** | Transfer between two inventories | **FromInventory** and **ToInventory** |

## List columns and filters

| Column | Meaning |
|---|---|
| **name** | Transaction name |
| **From / To** | Source / target inventory |
| **transactionDate** | Transaction date |
| **entityTypeName** | Type |
| **entityStatusName** | Status |
| **actions** | Open / row actions |

**Filters:** search by name / ID; EntityTypeId; EntityStatusId; FromInventoryId; ToInventoryId; CustomerId; SupplierId.

## Required fields

| Field | Use |
|---|---|
| **transactionDate** | Transaction date |
| **dataConfidentialityId** | Data confidentiality |
| **toInventoryId** | Required for Add and Transfer |
| **fromInventoryId** | Required for Withdraw and Transfer |

## Optional fields

| Field | Use |
|---|---|
| **supplierId** | Supplier — Add interface |
| **customerId** | Customer — Withdraw interface |
| **name** / descriptions / **entityTypeId** | Additional naming and classification |

## Transaction lines

Each line requires a **Product** and a **quantity**. In a transfer, balance columns related to the transfer may appear.

## Draft → Post lifecycle

1. Create the transaction with the appropriate type from the list
2. Fill in the date, confidentiality, inventory / inventories, and lines
3. Save as a draft
4. Select **Post**; a **Journal Entry** preview with calculated debit / credit lines appears in the posting dialog
5. After posting, the record is locked

:::danger[Posting condition]
A record is considered posted if its status name contains `post` (or an equivalent in the interface, such as مرحل) **or** if `entityStatusId === 159`.
:::

## How to use the screen

1. From the list, choose Add, Withdraw, or Transfer
2. Fill in the required fields for the type
3. Add Product + quantity lines
4. Link a Supplier on Add, or a Customer on Withdraw, if needed
5. Save, then post after reviewing the entry preview

## Best Practices

:::tip[Check the source and target inventories before a transfer]
In Transfer both fields are required; a wrong direction moves the balance to the wrong inventory once the record is locked.
:::

:::warning[Do not edit after posting]
After Post, the transaction is locked. Correct it with a new draft according to your operations policy if needed.
:::

:::note[The preview is not a standalone journal screen]
The Journal Entry preview is part of the posting flow on the transaction; it is not a substitute for the full financial journal.
:::

## Related Sections

- [Inventory](/docs/cat/inventory)
- [Product](/docs/cat/product)
- [Product Catalogue introduction](/docs/cat/introduction)
- [Glossary](/docs/cat/glossary)
