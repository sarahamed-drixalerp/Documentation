---
sidebar_position: 14
title: Refunds AP
---

# Refunds AP

**RefundAP** in procurement is a thin shell over **SHRD** refund list and forms on the accounts-payable side. Assign refunds from return invoices and credit notes.

**Navigation:** Sidebar → SRM & Procurement → Refund Payments  
**Pages:** `/Entities/SRM/RefundAP` · `/Entities/SRM/RefundAP/{id}`

## What RefundAP does for your business

- Lists supplier refunds (name, code, supplier, refund number, amount, status) via SHRD
- Supports create and **Assign** for return / credit rows
- Completes settlement after ReturnInvoiceAP or CreditNoteAP is posted
- Locks the record on **Post**

## List and filters

| Area | Content |
|---|---|
| **Columns** | Name, code, supplier, refundNo, amount, status (SHRD) |
| **Filters** | Search, supplier, status |

## Form focus

| Field / area | Notes |
|---|---|
| **refundNo** | Refund number on the form |
| **Assign** rows | Link refund amounts to return/credit documents |
| **Post** | Posts the refund and locks the record |

## How to assign a refund

1. Prefer starting after **Post** on a [return invoice](/docs/srm/return-invoice-ap) or [credit note](/docs/srm/credit-note-ap)
2. Or open Refunds AP and create/assign through the SHRD form
3. Confirm supplier, refundNo, amount, and **Assign** rows
4. Save, then **Post** until settlement completes and the refund locks

:::danger[Posted refunds are locked]
After Post, do not expect free edits to assign rows or the header.
:::

## Best Practices

:::tip[Assign from the return or credit]
Starting from the source document keeps assign rows correct.
:::

:::note[SRM shell, SHRD engine]
Lists and routes are SRM; list and forms are powered by SHRD (AP side).
:::

## Related Sections

- [Return invoices AP](/docs/srm/return-invoice-ap)
- [Credit notes AP](/docs/srm/credit-note-ap)
- [Payments AP](/docs/srm/payment-ap)
- [SRM & Procurement introduction](/docs/srm/introduction)
