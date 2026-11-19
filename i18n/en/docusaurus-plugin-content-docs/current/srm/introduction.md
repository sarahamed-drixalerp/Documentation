---
sidebar_position: 1
title: SRM & Procurement introduction
---

# SRM & Procurement introduction

The **SRM & Procurement** module in Drixal ERP manages the supply path from internal demand to cash out: suppliers, purchase requisitions, quote requests and bids, supplier quotes, purchase orders, AP invoices and related notes, payments, and refunds.

Without this module, buying requests live in spreadsheets and email. Inside Drixal, each step becomes a connected record that hands off to the next document in the procurement flow.

## What the module does for your business

- Masters suppliers and runs Block, price list, opening balance, invoice, and payment actions from **Supplier** and **360**
- Captures demand as a **PurchaseRequisition**, then converts it to a **QuoteRequest** or **Bid**
- Collects **SupplierQuote** offers through Accept / Reject and Convert to PO
- Issues **PurchaseOrder**, then **InvoiceAP** (and Return / Credit / Debit), and records **PaymentAP** / **RefundAP**
- Gives management a read-only **Dashboard** of commitment and AP KPIs

## Procurement flow

This order is not a built-in wizard; foreign keys and day-to-day use imply it:

```text
PurchaseRequisition
  ├── QuoteRequest (RFQ)
  │     └── SupplierQuote
  │           └── PurchaseOrder
  └── Bid
        └── SupplierQuote (award)
              └── PurchaseOrder
                    └── InvoiceAP
                          ├── ReturnInvoiceAP / CreditNoteAP / DebitNoteAP
                          └── PaymentAP / RefundAP
```

| Step | Record | Purpose |
|---|---|---|
| 1 | **PurchaseRequisition** | Internal demand; Submit, then Convert to QuoteRequest or Bid |
| 2 | **QuoteRequest** / **Bid** | Single-supplier RFQ, or multi-supplier bid |
| 3 | **SupplierQuote** | Supplier offer; Accept / Reject, then Convert to PO |
| 4 | **PurchaseOrder** | Buying commitment; Send, Accept, Create Invoice, Add Payment |
| 5 | **InvoiceAP** | Purchase invoice; Post, Add Payment, Return / Credit / Debit |
| 6 | **PaymentAP** / **RefundAP** | Supplier payments and refunds (SRM shells over FIN / SHRD) |

:::note[Customer PO is not SRM]
**CustomerPO** (customer purchase order) is documented in [CRM](/docs/crm/customer-po), not in these procurement guides.
:::

## Where to find it in the system

From the side menu, choose **SRM & Procurement**, then:

- [SRM dashboard](/docs/srm/dashboard)
- [Suppliers](/docs/srm/supplier)
- [Purchase requisitions](/docs/srm/purchase-requisition)
- [Quote requests](/docs/srm/quote-request)
- [Bids](/docs/srm/bid)
- [Supplier quotes](/docs/srm/supplier-quote)
- [Purchase orders](/docs/srm/purchase-order)
- [Invoices AP](/docs/srm/invoice-ap)
- [Return invoices AP](/docs/srm/return-invoice-ap)
- [Debit notes AP](/docs/srm/debit-note-ap)
- [Credit notes AP](/docs/srm/credit-note-ap)
- [Payments AP](/docs/srm/payment-ap)
- [Refunds AP](/docs/srm/refund-ap)

Select **Help** in the app header while on an SRM page to open the matching guide.

## Goals in the organization

- Govern spend through requisition → quote → order → invoice → payment
- Keep a single supplier master with block, pricing, and opening balance actions
- Speed conversion from requisition to RFQ or bid, then purchase order
- Link costs to projects (portfolio/project fields on orders) and post into FIN on Post
- Keep contracts and files on each transaction via shared attachments (DMS)

## Who uses this section

| Role | Daily use |
|---|---|
| Procurement manager / buyer | Requisitions, RFQs, bids, quotes, purchase orders |
| Warehouse / operations | Follow purchase orders and related receipt work |
| AP accountant | InvoiceAP, notes, PaymentAP, RefundAP |
| Management | Dashboard KPIs for commitment and payables |

## How this SRM guide is organized

1. Introduction and dashboard
2. Suppliers
3. Requisition, quote request, bid, supplier quote
4. Purchase order and Invoice AP
5. Return, notes, payments, refunds
6. Glossary

## Best Practices

:::tip[Follow the chain before inventing shortcuts]
Submit the requisition, send the RFQ or publish the bid, accept the quote, then issue the PO and invoice. Skipping steps breaks links and 360 tabs.
:::

:::warning[Read-only dashboard]
The SRM dashboard does not create or edit records. Open the entity pages for CRUD.
:::

:::note[Help from the header]
Select **Help** in the app header while on an SRM page to open the matching guide.
:::

## Related Sections

- [SRM dashboard](/docs/srm/dashboard)
- [Suppliers](/docs/srm/supplier)
- [Purchase requisitions](/docs/srm/purchase-requisition)
- [Purchase orders](/docs/srm/purchase-order)
- [Invoices AP](/docs/srm/invoice-ap)
- [Glossary](/docs/srm/glossary)
