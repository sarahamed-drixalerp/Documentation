---
sidebar_position: 11
title: Debit notes AP
---

# Debit notes AP

A **DebitNoteAP** is a debit note against a purchase invoice. It increases what is owed on the AP side; post it with **Post**.

**Navigation:** Sidebar → SRM & Procurement → Debit Notes  
**Pages:** `/Entities/SRM/DebitNoteAP` · `/Entities/SRM/DebitNoteAP/{id}`

## What a DebitNoteAP does for your business

- Records additional debit amounts against an original invoice
- Uses **LineItems** for debit lines
- Supports **Post** (post and lock per rules)

## List

### Columns (key)

Same pattern as other AP notes, including the original invoice.

### Filters

Search, status, supplier, invoice.

## Required fields

Same AP header set as InvoiceAP on the form, plus the original invoice link.

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the debit note |

## How to process a DebitNoteAP

1. Create from **Debit** on the invoice, or open Debit Notes
2. Confirm supplier and original invoice; complete **LineItems**
3. **Post** when ready
4. Settle via [Payments AP](/docs/srm/payment-ap) when needed

:::danger[Post locks the note]
Review lines before posting.
:::

## Best Practices

:::tip[Debit increases what is owed; credit/return goes the other way]
Use DebitNoteAP when AP exposure increases; use CreditNoteAP or ReturnInvoiceAP for the other direction.
:::

:::warning[Post before relying on settlement]
Post the debit note before recording the related payment settlement.
:::

## Related Sections

- [Invoices AP](/docs/srm/invoice-ap)
- [Payments AP](/docs/srm/payment-ap)
- [Credit notes AP](/docs/srm/credit-note-ap)
- [SRM & Procurement introduction](/docs/srm/introduction)
