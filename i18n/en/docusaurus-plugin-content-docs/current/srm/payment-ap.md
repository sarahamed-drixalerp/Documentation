---
sidebar_position: 13
title: Payments AP
---

# Payments AP

**PaymentAP** in procurement is a thin shell over **FIN** payment list and forms. Use it from SRM to work supplier payments without leaving the procurement menu.

**Navigation:** Sidebar → SRM & Procurement → Suppliers Payments  
**Pages:** `/Entities/SRM/PaymentAP` · `/Entities/SRM/PaymentAP/{id}`

## What PaymentAP does for your business

- Lists supplier payments (name, code, supplier, reference, amount, status) via the FIN list
- Opens create/edit through FIN payment forms
- Locks the record when **posted**
- Is reachable from **Add Payment** on supplier, purchase order, and invoice

## List and filters

| Area | Content |
|---|---|
| **Columns** | Name, code, supplier, reference, amount, status (FIN list) |
| **Filters** | Search, supplier, status |

## Lifecycle

| Step | Behavior |
|---|---|
| Create / edit | Through FIN payment forms from the SRM shell |
| **Assign** | Allocate payment amounts to invoices / debit notes |
| **Post** | Locks the payment when posted |

:::danger[Posted payments are locked]
Do not expect free edits after posting. Correct errors through the allowed FIN/SRM correction path for your role.
:::

## How to record a payment

1. Open Payments AP, or use **Add Payment** from supplier, purchase order, or invoice
2. Complete the FIN payment form (supplier, amount, reference, status)
3. Assign invoice/debit rows as needed
4. Save, then **Post** per FIN rules until the payment locks

## Best Practices

:::tip[Start Add Payment from the source document]
Opening payment from the invoice or purchase order keeps the commercial link clear.
:::

:::note[SRM shell, FIN engine]
Lists and routes are SRM; list and Id chrome are powered by FIN.
:::

## Related Sections

- [Invoices AP](/docs/srm/invoice-ap)
- [Debit notes AP](/docs/srm/debit-note-ap)
- [Suppliers](/docs/srm/supplier)
- [Purchase orders](/docs/srm/purchase-order)
- [SRM & Procurement introduction](/docs/srm/introduction)
