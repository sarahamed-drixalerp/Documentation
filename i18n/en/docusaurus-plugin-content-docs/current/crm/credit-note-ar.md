---
sidebar_position: 14
title: Credit notes AR
---

# Credit notes AR

A **CreditNoteAR** is a credit note against a sales invoice. It follows the same AR header pattern as returns, with **Post** and refund settlement via the shared refund dialog.

**Navigation:** Sidebar → Sales → Credit Notes AR  
**Pages:** `/Entities/CRM/CreditNoteAR` · `/Entities/CRM/CreditNoteAR/{id}`

## What a CreditNoteAR does for your business

- Credits amounts against an original invoice
- Uses **LineItems** for credit lines
- Supports **Post** and **AddRefund** (shared refund dialog with returns)

## List

### Columns (key)

Same pattern as return: name, original invoice context, customer, issue date, totals, status.

### Filters

Search, status, customer, invoice.

## Required fields

Same AR header set as InvoiceAR / ReturnInvoiceAR on the form.

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the credit note |
| **AddRefund** | Settles via the shared refund dialog |

## How to process a CreditNoteAR

1. Create from the invoice Credit action, or open Credit Notes AR
2. Confirm customer and original invoice; complete **LineItems**
3. **Post** when ready
4. **AddRefund** when cash or balance must be returned (see [Refunds AR](/docs/crm/refund-ar))

## Best Practices

:::tip[Choose return vs credit deliberately]
ReturnInvoiceAR and CreditNoteAR are separate documents; pick the one that matches the commercial event.
:::

:::note[Shared refund dialog]
Refund assignment uses the same refund dialog pattern as returns.
:::

## Related Sections

- [Invoices AR](/docs/crm/invoice-ar)
- [Return invoices AR](/docs/crm/return-invoice-ar)
- [Refunds AR](/docs/crm/refund-ar)
- [CRM & Sales introduction](/docs/crm/introduction)
