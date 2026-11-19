---
sidebar_position: 8
title: Purchase Orders
---

# Purchase Orders

A **PurchaseOrder** is the supplier purchasing commitment in Drixal ERP: header, line items, send to supplier, accept, then invoices and payments.

**Navigation:** Sidebar → SRM & Procurement → Purchase Orders  
**Pages:** `/Entities/SRM/PurchaseOrder` · `/Entities/SRM/PurchaseOrder/new` · `/Entities/SRM/PurchaseOrder/{id}`

## What a Purchase Order does for your business

- Defines the order: name, supplier, account manager, date, amounts and budget
- Collects line items and links portfolio/project, payment term, and shipping
- Provides **Send to Supplier** then **Accept** after send
- Opens **Create Invoice** and **Add Payment** flows

## Purchase Order list

### Views

List, cards, and tree (group by type, status, supplier, or portfolio).

### Columns and aggregates

- Name, supplier, account manager, issue date, calculated amount, budget, planned GP %
- Sums: amount, paid, unpaid

### Filters

Name, type, status, supplier, portfolio.

Row actions: edit, delete, create invoice, add payment.

## Create a Purchase Order

### Required fields

| Field | Notes |
|---|---|
| **Name / Arabic name** | Order identity |
| **Type / status** | Usually starts as Draft |

### Recommended fields

Supplier, account manager, issue date, portfolio, project, payment term, shipping method, required delivery date, cost to complete and currency, description. Default confidentiality is often Internal.

## Lifecycle actions

| Action | Function |
|---|---|
| **Send to Supplier** | Emails PDF; needs ≥1 line item; unavailable if already Sent or Accepted |
| **Accept** | Only from Sent → Accepted by Supplier |
| **Create Invoice** | Opens the InvoiceAP create path |
| **Add Payment** | Opens the PaymentAP add path |

## Record tabs

| Tab | Content |
|---|---|
| **LineItems** | Line items (default for an existing record) |
| **Details** | Header details and form |
| **Invoices** | Invoices linked to the order |

:::note[Save from the Details tab]
Save Changes is disabled off the Details tab — switch to Details before saving.
:::

## How to create and process a purchase order

1. Create from the list or convert from an accepted supplier quote
2. Fill names, supplier, and recommended details
3. Complete **LineItems**, then **Send to Supplier**
4. After send, **Accept** when the supplier accepts
5. Use **Create Invoice** / **Add Payment** from the record or list

## Common Mistakes

- Sending without line items
- Trying to accept before send
- Changing status manually instead of Send / Accept actions

## Best Practices

:::tip[Complete lines and supplier before send]
Send is for the final document. Gaps show up to the supplier in the PDF.
:::

:::tip[After accept, create the invoice from the same record]
Use Create Invoice / Add Payment to keep payments tied to the calculated amount.
:::

:::warning[Send needs at least one line]
The button stays disabled without LineItems.
:::

## Related Sections

- [Supplier quotes](/docs/srm/supplier-quote)
- [Invoices AP](/docs/srm/invoice-ap)
- [Payments AP](/docs/srm/payment-ap)
- [Suppliers](/docs/srm/supplier)
- [SRM & Procurement introduction](/docs/srm/introduction)
