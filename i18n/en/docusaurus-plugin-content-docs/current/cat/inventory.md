---
sidebar_position: 5
title: Inventory
---

# Inventory

An **Inventory** is an operational storage location with bilingual names and data confidentiality, and it can be linked to an owner and a location. From the record page you manage the inventory's products and their balances. There is no Post on the inventory itself.

**Path:** Side menu → Product Catalogue → Inventories  
**List:** `/Entities/CAT/Inventory`  
**Create:** `/Entities/CAT/Inventory/new`  
**Record:** `/Entities/CAT/Inventory/{id}`

## What this screen does

- Creates and edits inventories with both names and data confidentiality
- Optionally links an owner (OwnerUsr) and a location (Location)
- Manages the inventory products table: add / edit / delete with balance
- Is used as a source or target in inventory transactions

## Required fields

| Field | Use |
|---|---|
| **name** | Name in English |
| **nameAr** | Name in Arabic |
| **dataConfidentialityId** | Data confidentiality |

## Optional fields

| Field | Use |
|---|---|
| **ownerUsrId** | Owner user (OwnerUsr) |
| **locationId** | Location |
| **description** / **descriptionAr** | Descriptions |

## Products table on the record

| Column | Meaning |
|---|---|
| **productName** | Product |
| **balance** (Balance_dec) | Balance |
| **actions** | Edit / save / delete |

You can add a new product row, then save or delete it through the ProductInventory interfaces.

:::warning[No Post on the inventory]
The inventory page is save-only. Locking happens on the **inventory transaction** after posting, not on the inventory record.
:::

## How to use the screen

1. Open the inventories list and create a new inventory
2. Fill in **name**, **nameAr**, and **dataConfidentialityId**
3. Add OwnerUsr and Location when needed, then save
4. From the record, manage the products table and balances
5. Run actual movements from the inventory transactions screen

## Best Practices

:::tip[Define confidentiality at creation]
**dataConfidentialityId** is required; do not postpone choosing it, or saving will fail.
:::

:::note[The balance moves with transactions]
Editing product rows on the inventory manages the link and the displayed balance; operational add, withdraw, and transfer happen through Inventory Transaction.
:::

## Related Sections

- [Inventory transaction](/docs/cat/inventory-transaction)
- [Product](/docs/cat/product)
- [Product tree](/docs/cat/product-tree)
- [Product Catalogue introduction](/docs/cat/introduction)
