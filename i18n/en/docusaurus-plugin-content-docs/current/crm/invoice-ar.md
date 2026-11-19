---
sidebar_position: 12
title: Invoices AR
---

# Invoices AR

An **InvoiceAR** is the sales invoice (accounts receivable) in CRM. Components live under SalesInvoices; routes use InvoiceAR, including a dedicated **new** page.

**Navigation:** Sidebar → Sales → Invoices AR  
**Pages:** `/Entities/CRM/InvoiceAR` · `/Entities/CRM/InvoiceAR/new` · `/Entities/CRM/InvoiceAR/{id}`

## What an InvoiceAR does for your business

- Bills the customer against a sales order with issue and due dates, currency, and shipping method
- Supports **Post**, **AddPayment**, and **ViewInvoice**
- Creates **Return**, **Credit**, and **Debit** documents from the invoice
- Holds **LineItems** and document preview

## InvoiceAR list

### Columns (key)

Name, customer, sales order, shipping, due date, status.

### Filters

Search, status, customer, sales order, shipping.

## Required fields

| Field | Notes |
|---|---|
| **customer** | Billed party |
| **sales order (SO)** | Source order |
| **issueDate** | Invoice date |
| **currency** | Invoice currency |
| **dueDate** | Payment due date |
| **shippingMethod** | Shipping method |
| **confidentiality** / **status** | Classification and governance |

## Lifecycle actions

| Action | Function |
|---|---|
| **Post** | Posts the invoice (locks per posting rules) |
| **AddPayment** | Records a payment against the invoice |
| **ViewInvoice** | Opens the invoice document view |
| **Return / Credit / Debit** | Creates ReturnInvoiceAR, CreditNoteAR, or DebitNoteAR |

## Tabs / chrome

Details, Activities, Attachments, Logs, plus **LineItems**.

## How to create an InvoiceAR

1. Prefer **CreateInvoice** from a sales order, or open `/Entities/CRM/InvoiceAR/new`
2. Set customer, SO, issueDate, currency, dueDate, shippingMethod, confidentiality, and status
3. Complete **LineItems**
4. Review, then **Post**
5. Use **AddPayment** or create Return / Credit / Debit as needed; **ViewInvoice** for the document

:::danger[Post locks the record]
Review header and lines before Post. Posted invoices follow lock/read-only rules.
:::

## Best Practices

:::tip[Always link the sales order]
SO is required and keeps customer 360 and SO 360 invoice tabs consistent.
:::

:::warning[Due date and shipping are required]
Do not leave dueDate or shippingMethod empty; validation blocks save.
:::

## Related Sections

- [Sales orders](/docs/crm/sales-order)
- [Return invoices AR](/docs/crm/return-invoice-ar)
- [Credit notes AR](/docs/crm/credit-note-ar)
- [Debit notes AR](/docs/crm/debit-note-ar)
- [Payments AR](/docs/crm/payment-ar)
- [CRM & Sales introduction](/docs/crm/introduction)
