---
sidebar_position: 9
title: Invoices AP
---

# Invoices AP

An **InvoiceAP** is the accounts-payable purchase invoice against a purchase order. Components live under PurchaseInvoices; routes use InvoiceAP, including a dedicated **new** page.

**Navigation:** Sidebar → SRM & Procurement → Purchase Invoices  
**Pages:** `/Entities/SRM/InvoiceAP` · `/Entities/SRM/InvoiceAP/new` · `/Entities/SRM/InvoiceAP/{id}`

## What an InvoiceAP does for your business

- Bills the supplier against a purchase order with issue and due dates, currency, and shipping method
- Supports **Post** and **Add Payment**
- Creates **Return**, **Credit**, and **Debit** documents from the invoice
- Holds **LineItems** and amount summary

## InvoiceAP list

### Columns (key)

Name, supplier, purchase order, shipping, due date, status.

### Filters

Search, status, supplier, purchase order, shipping.

## Required fields

| Field | Notes |
|---|---|
| **supplier** | Billed party |
| **purchase order (PO)** | Source order |
| **issueDate** | Invoice date |
| **currency** | Invoice currency |
| **dueDate** | Payment due date |
| **shippingMethod** | Shipping method |
| **confidentiality** / **status** / **type** | Classification and governance |

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the invoice (locks per posting rules) |
| **Add Payment** | Records a payment against the invoice |
| **Return / Credit / Debit** | Creates ReturnInvoiceAP, CreditNoteAP, or DebitNoteAP |

## Tabs / chrome

Details, Activities, Attachments, Logs, plus **LineItems**.

## How to create an InvoiceAP

1. Prefer **Create Invoice** from a purchase order, or open `/Entities/SRM/InvoiceAP/new`
2. Set supplier, PO, issueDate, currency, dueDate, shippingMethod, confidentiality, and status
3. Complete **LineItems**
4. Review, then **Post**
5. Use **Add Payment** or create Return / Credit / Debit as needed

:::danger[Post locks the record]
Review header and lines before Post. Posted invoices follow lock/read-only rules.
:::

## Best Practices

:::tip[Always link the purchase order]
PO is required and keeps supplier 360 and PO 360 invoice tabs consistent.
:::

:::warning[Due date and shipping are required]
Do not leave dueDate or shippingMethod empty; validation blocks save.
:::

## Related Sections

- [Purchase orders](/docs/srm/purchase-order)
- [Return invoices AP](/docs/srm/return-invoice-ap)
- [Credit notes AP](/docs/srm/credit-note-ap)
- [Debit notes AP](/docs/srm/debit-note-ap)
- [Payments AP](/docs/srm/payment-ap)
- [SRM & Procurement introduction](/docs/srm/introduction)
