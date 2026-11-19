---
sidebar_position: 15
title: Debit notes AR
---

# Debit notes AR

A **DebitNoteAR** is a debit note against a sales invoice. It increases what the customer owes; settle with **AddPayment** after **Post**.

**Navigation:** Sidebar → Sales → Debit Notes AR  
**Pages:** `/Entities/CRM/DebitNoteAR` · `/Entities/CRM/DebitNoteAR/{id}`

## What a DebitNoteAR does for your business

- Debits additional amounts against an original invoice
- Uses **LineItems** for debit lines
- Supports **Post** and **AddPayment** (not AddRefund)

## List

### Columns (key)

Same pattern as other AR notes, including original invoice.

### Filters

Search, status, customer, invoice.

## Required fields

Same AR header set as InvoiceAR on the form.

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the debit note |
| **AddPayment** | Records payment against the debit |

## How to process a DebitNoteAR

1. Create from the invoice Debit action, or open Debit Notes AR
2. Confirm customer and original invoice; complete **LineItems**
3. **Post** when ready
4. **AddPayment** when the customer pays the additional amount

## Best Practices

:::tip[Debit collects; credit/return refunds]
Use DebitNoteAR when the customer owes more; use CreditNoteAR or ReturnInvoiceAR when settling the other way.
:::

:::warning[Post before AddPayment]
Post the debit note before recording payment settlement.
:::

## Related Sections

- [Invoices AR](/docs/crm/invoice-ar)
- [Payments AR](/docs/crm/payment-ar)
- [Credit notes AR](/docs/crm/credit-note-ar)
- [CRM & Sales introduction](/docs/crm/introduction)
