---
sidebar_position: 13
title: Return invoices AR
---

# Return invoices AR

A **ReturnInvoiceAR** is a return document against a sales invoice. It uses the same AR header pattern as InvoiceAR, then **Post** and **AddRefund**.

**Navigation:** Sidebar → Sales → Return Invoices AR  
**Pages:** `/Entities/CRM/ReturnInvoiceAR` · `/Entities/CRM/ReturnInvoiceAR/{id}`

## Return vs InvoiceAR

| Topic | InvoiceAR | ReturnInvoiceAR |
|---|---|---|
| Purpose | Bill the customer | Reverse / return against an original invoice |
| Typical create | From SO or `/InvoiceAR/new` | From invoice Return action or return list |
| Cash action | **AddPayment** | **AddRefund** |
| Link | Customer + SO | Customer + original invoice |

## List

### Columns (key)

Name, original invoice, customer, issue date, total, status.

### Filters

Search, status, customer, invoice.

## Required fields

Same AR header set as invoice: customer, related invoice linkage, issue date, currency, due date, shipping method, confidentiality, and status as enforced on the form.

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the return |
| **AddRefund** | Assigns / records a refund |

## Tabs

Details, Activities, Attachments, Logs, plus **LineItems**.

## How to process a return

1. Create from the invoice Return action, or open Return Invoice AR
2. Confirm customer and original invoice; complete header and **LineItems**
3. **Post** when ready
4. **AddRefund** to settle the return (see [Refunds AR](/docs/crm/refund-ar))

## Best Practices

:::tip[Start from the original invoice]
Creating the return from InvoiceAR keeps the original-invoice link correct.
:::

:::warning[Post before refund settlement]
Complete and Post the return before relying on AddRefund for settlement.
:::

## Related Sections

- [Invoices AR](/docs/crm/invoice-ar)
- [Refunds AR](/docs/crm/refund-ar)
- [Credit notes AR](/docs/crm/credit-note-ar)
- [CRM & Sales introduction](/docs/crm/introduction)
