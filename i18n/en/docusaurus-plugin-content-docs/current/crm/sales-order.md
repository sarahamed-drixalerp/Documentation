---
sidebar_position: 11
title: Sales orders
---

# Sales orders

A **SalesOrder** is the confirmed sales order in CRM. From here you create invoices, add payments, and optionally convert to an agreement.

**Navigation:** Sidebar → Sales → Sales Orders  
**Pages:** `/Entities/CRM/SalesOrder` · `/Entities/CRM/SalesOrder/{id}` · `/Entities/CRM/SalesOrder/360/{id}`

## What a SalesOrder does for your business

- Locks commercial commitment: name, customer, amounts, budget, GP%
- Provides **CreateInvoice**, **AddPayment**, and **ConvertToAgreement**
- Exposes **360** with Invoices and Stakeholders
- Links back to customer PO and agreements when set

## Two types of SalesOrder pages

| Page | When to use it |
|---|---|
| **Standard view** `/Entities/CRM/SalesOrder/{id}` | LineItems and Details |
| **360 view** `/Entities/CRM/SalesOrder/360/{id}` | Operations: + Invoices, Stakeholders |

## SalesOrder list

### Columns (key)

Name, customer, account manager, issue date, amount, budget, GP%.

### Filters

Search, type, status, customer, agreement.

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Order identity |
| **type** / **status** | Record governance |
| **confidentiality** | Required classification |

## Lifecycle actions

| Action | Function |
|---|---|
| **CreateInvoice** | Creates an AR invoice from the order |
| **AddPayment** | Records a payment |
| **ConvertToAgreement** | Converts the order into an agreement |

## Tabs

| Area | Content |
|---|---|
| **LineItems** / **Details** | Order lines and form |
| **Invoices** (360) | Related InvoiceAR records |
| **Stakeholders** (360) | Stakeholders on the order |

## How to fulfill a SalesOrder

1. Open the sales order (from CustomerPO CreateSalesOrder, deal Won, or the list)
2. Confirm customer, confidentiality, and **LineItems**
3. **CreateInvoice** when ready to bill
4. **AddPayment** as cash arrives
5. **ConvertToAgreement** when the commercial relationship should become an agreement

## Best Practices

:::tip[Invoice from the sales order]
CreateInvoice keeps the 360 Invoices tab and SO link on InvoiceAR aligned.
:::

:::note[Agreement path]
ConvertToAgreement feeds the [Agreements](/docs/crm/agreement) flow and later project creation.
:::

## Related Sections

- [Customer POs](/docs/crm/customer-po)
- [Invoices AR](/docs/crm/invoice-ar)
- [Agreements](/docs/crm/agreement)
- [Payments AR](/docs/crm/payment-ar)
- [CRM & Sales introduction](/docs/crm/introduction)
