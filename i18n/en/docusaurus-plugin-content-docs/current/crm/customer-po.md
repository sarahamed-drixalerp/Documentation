---
sidebar_position: 10
title: Customer POs
---

# Customer POs

A **CustomerPO** is the customer purchase order in CRM. It confirms commercial intent, can create a sales order, and can take a payment.

**Navigation:** Sidebar → Sales → Customer PO  
**Pages:** `/Entities/CRM/CustomerPO` · `/Entities/CRM/CustomerPO/{id}`

There is no 360 page; the Id workspace uses LineItems, Details, and SalesOrders tabs.

## What a CustomerPO does for your business

- Records the customer’s PO with amounts, budget, and GP%
- Provides **SendForApproval**, **CreateSalesOrder**, and **AddPayment**
- Lists related **SalesOrders** on a dedicated tab
- Appears on customer 360

## CustomerPO list

### Columns (key)

Name, supplierName\*, account manager, issue date, amount, budget, GP%.

### Filters

Search, type, status, supplier\*, portfolio.

:::note[List field quirk]
The list may show a **supplierName** column and **supplier** filter even though this is a customer purchase order. Treat it as the party label on that list — naming quirk in the current UI.
:::

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | PO identity |
| **type** / **status** | Record governance |
| **confidentiality** | Required classification |

## Lifecycle actions

| Action | Function |
|---|---|
| **SendForApproval** | Submits the customer PO for approval |
| **CreateSalesOrder** | Creates a sales order from this PO |
| **AddPayment** | Records a payment against the PO |

## Tabs

| Tab | Content |
|---|---|
| **LineItems** | PO lines |
| **Details** | Customer PO form |
| **SalesOrders** | Related sales orders |

## How to process a CustomerPO

1. Open Customer PO from Sales (or from deal Won / customer 360)
2. Complete names, type, status, and confidentiality
3. Build **LineItems**
4. **SendForApproval** when ready
5. **CreateSalesOrder** to continue fulfillment, and **AddPayment** when cash is received

## Best Practices

:::tip[Create the sales order from the PO]
CreateSalesOrder keeps the SalesOrders tab and downstream invoice links coherent.
:::

:::warning[Check the party on the list]
Because of the supplierName list quirk, open the record to confirm the correct customer before approval.
:::

## Related Sections

- [Quotes](/docs/crm/quote)
- [Sales orders](/docs/crm/sales-order)
- [Payments AR](/docs/crm/payment-ar)
- [Deals](/docs/crm/deal)
- [CRM & Sales introduction](/docs/crm/introduction)
