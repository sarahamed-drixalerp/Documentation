---
sidebar_position: 17
title: Refunds AR
---

# Refunds AR

**RefundAR** in CRM is a thin shell over the **SHRD** refund list and forms. Assign refunds from return invoices and credit notes.

**Navigation:** Sidebar → Sales → Refunds AR  
**Pages:** `/Entities/CRM/RefundAR` · `/Entities/CRM/RefundAR/{id}`

## What RefundAR does for your business

- Lists customer refunds (name, code, customer, refund number, amount, status) via SHRD
- Supports create and **assign** rows from return / credit flows
- Completes settlement after **AddRefund** on ReturnInvoiceAR or CreditNoteAR

## List and filters

| Area | Content |
|---|---|
| **Columns** | Name, code, customer, refundNo, amount, status (SHRD) |
| **Filters** | Search, customer, status |

## Required / form focus

| Field | Notes |
|---|---|
| **refundNo** | Refund number on the form |
| Assign rows | Link refund amounts to return/credit documents |

## How to assign a refund

1. Prefer **AddRefund** from a posted [Return invoice AR](/docs/crm/return-invoice-ar) or [Credit note AR](/docs/crm/credit-note-ar)
2. Or open Refunds AR and create/assign via the SHRD form
3. Confirm customer, refundNo, amount, and assignment rows
4. Save so the return/credit settlement is complete

## Best Practices

:::tip[Assign from return or credit]
Starting from AddRefund on the source document keeps assignment rows correct.
:::

:::note[CRM shell, SHRD engine]
Menus and routes are CRM; list and forms are SHRD-backed.
:::

## Related Sections

- [Return invoices AR](/docs/crm/return-invoice-ar)
- [Credit notes AR](/docs/crm/credit-note-ar)
- [Payments AR](/docs/crm/payment-ar)
- [CRM & Sales introduction](/docs/crm/introduction)
