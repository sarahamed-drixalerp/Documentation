---
sidebar_position: 3
title: Suppliers
---

# Suppliers

A **Supplier** is the account master in procurement: commercial identity, pricing, block state, and the hub for related purchase orders and AP invoices.

**Navigation:** Sidebar → SRM & Procurement → Suppliers  
**Pages:** `/Entities/SRM/Supplier` · `/Entities/SRM/Supplier/{id}` · `/Entities/SRM/Supplier/360/{id}`

## What a Supplier does for your business

- Holds bilingual name, type, status, and contact/account data
- Supports **Block** / **UnBlock**, **AssignPriceList**, **OpeningBalance**, **CreateInvoice**, and **AddPayment**
- Provides a **360** workspace for purchase orders and invoices

## Two supplier pages

| Page | When to use it |
|---|---|
| **Standard** `/Entities/SRM/Supplier/{id}` | Focus on details and record chrome |
| **360** `/Entities/SRM/Supplier/360/{id}` | Day-to-day work across POs and invoices |

## Supplier list

### Columns (key)

Name, status, and account fields as shown on the supplier list.

### Filters

Search and the list filters available on screen.

### Row actions

Edit, open **360**.

## Lifecycle actions

| Action | Function |
|---|---|
| **Block** / **UnBlock** | Restrict or restore commercial activity on the supplier account |
| **AssignPriceList** | Link a price list to the supplier |
| **OpeningBalance** | Set or change the opening balance |
| **CreateInvoice** | Start an AP invoice for the supplier |
| **AddPayment** | Record a payment for the supplier |

## After save — 360 tabs

| Tab | Content |
|---|---|
| **Details** | Supplier form |
| **PurchaseOrders** | Related purchase orders |
| **Invoices** | Related purchase invoices |

## How to create or maintain a supplier

1. Open the supplier list and create a supplier or open an existing record
2. Fill identity, type, status, and contact data
3. Save, then use Id or 360 for actions and related tabs
4. Use Block only when stopping activity; UnBlock when restoring

## Best Practices

:::tip[360 is the operating hub]
Use 360 when working across purchase orders and invoices for one supplier.
:::

:::warning[Block restricts activity]
Do not block a supplier that still has active orders or invoices without an operational agreement.
:::

:::note[CreateInvoice and AddPayment from the supplier]
You can start invoice and payment from supplier actions while keeping the party link clear.
:::

## Related Sections

- [Purchase orders](/docs/srm/purchase-order)
- [Invoices AP](/docs/srm/invoice-ap)
- [Payments AP](/docs/srm/payment-ap)
- [SRM & Procurement introduction](/docs/srm/introduction)
