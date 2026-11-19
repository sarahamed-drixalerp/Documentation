---
sidebar_position: 10
title: Return invoices AP
---

# Return invoices AP

A **ReturnInvoiceAP** is a return document against an original purchase invoice. It follows the same AP header pattern as InvoiceAP, then **Post**.

**Navigation:** Sidebar → SRM & Procurement → Return Invoices  
**Pages:** `/Entities/SRM/ReturnInvoiceAP` · `/Entities/SRM/ReturnInvoiceAP/{id}`

## Return vs InvoiceAP

| Topic | InvoiceAP | ReturnInvoiceAP |
|---|---|---|
| Purpose | Bill the supplier | Reverse / return against an original invoice |
| Usual create | From PO or `/InvoiceAP/new` | From Return on the invoice, or the return list |
| Link | Supplier + PO | Supplier + original invoice (+ PO context on the header) |
| Main action | **Post**, **Add Payment** | **Post** |

## List

### Columns (key)

Name, original invoice, supplier, issue date, total, status.

### Filters

Search, status, supplier, invoice.

## Required fields

Same AP header set as the invoice on the form: supplier, purchase order, issue date, currency, due date, shipping method, confidentiality, and status — plus the original invoice link.

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the return and locks the record per posting rules |

## How to process a return

1. Create from **Return** on InvoiceAP, or open Return Invoices
2. Confirm supplier and original invoice; complete header and **LineItems**
3. **Post** when ready
4. Settle cash via [Refunds AP](/docs/srm/refund-ap) when needed

:::danger[Post locks the return]
Review header and lines against the original invoice before posting.
:::

## Best Practices

:::tip[Start from the original invoice]
Creating the return from InvoiceAP keeps the original invoice link correct.
:::

:::warning[Post before refund settlement]
Complete and Post the return before relying on Assign on RefundAP.
:::

## Related Sections

- [Invoices AP](/docs/srm/invoice-ap)
- [Refunds AP](/docs/srm/refund-ap)
- [Credit notes AP](/docs/srm/credit-note-ap)
- [SRM & Procurement introduction](/docs/srm/introduction)
