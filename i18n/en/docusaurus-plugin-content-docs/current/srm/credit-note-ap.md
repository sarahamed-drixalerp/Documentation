---
sidebar_position: 12
title: Credit notes AP
---

# Credit notes AP

A **CreditNoteAP** is a credit note against a purchase invoice. It follows the same AP header pattern as returns, with **Post**, then settlement via supplier refunds when needed.

**Navigation:** Sidebar → SRM & Procurement → Credit Notes  
**Pages:** `/Entities/SRM/CreditNoteAP` · `/Entities/SRM/CreditNoteAP/{id}`

## What a CreditNoteAP does for your business

- Records credit amounts against an original invoice
- Uses **LineItems** for credit lines
- Supports **Post** (post and lock per rules)

## List

### Columns (key)

Same pattern as returns: name, original invoice context, supplier, issue date, totals, status.

### Filters

Search, status, supplier, invoice.

## Required fields

Same AP header set as InvoiceAP / ReturnInvoiceAP on the form.

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the credit note |

## How to process a CreditNoteAP

1. Create from **Credit** on the invoice, or open Credit Notes
2. Confirm supplier and original invoice; complete **LineItems**
3. **Post** when ready
4. Settle via [Refunds AP](/docs/srm/refund-ap) when needed

:::danger[Post locks the note]
Review lines before posting.
:::

## Best Practices

:::tip[Choose return vs credit on purpose]
ReturnInvoiceAP and CreditNoteAP are separate documents; pick what matches the commercial event.
:::

:::note[Settlement via RefundAP]
Refund assignment runs from the supplier refunds shell (SHRD) after the credit or return is posted.
:::

## Related Sections

- [Invoices AP](/docs/srm/invoice-ap)
- [Return invoices AP](/docs/srm/return-invoice-ap)
- [Refunds AP](/docs/srm/refund-ap)
- [SRM & Procurement introduction](/docs/srm/introduction)
