---
sidebar_position: 9
title: Quotes
---

# Quotes

A **Quote** is a quotation in CRM, typically from a P&amp;L or deal. It moves through approval, send-to-customer, and customer acceptance.

**Navigation:** Sidebar → Sales → Quotes  
**Pages:** `/Entities/CRM/Quote` · `/Entities/CRM/Quote/{id}` · `/Entities/CRM/Quote/360/{id}`

## What a Quote does for your business

- Holds quotation header data in the same commercial shape as Pnl
- Manages **LineItems** and quotation document views where available
- Provides **SendForApproval**, **SendtoCustomer**, and **AcceptedByCustomer**
- Links to customer, deal, and Pnl when set

## Quote list

### Columns (key)

Same commercial shape as Pnl: name, customer, account manager, dates, amounts, GP%.

### Filters

Search, type, status, customer, deal, quote date.

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Quote identity |
| **type** / **status** | Record governance |

Customer, deal, Pnl, and currency are optional on the form; set them when the quote comes from the sales chain.

## Lifecycle actions

| Action | Function |
|---|---|
| **SendForApproval** | Submits the quote for internal approval |
| **SendtoCustomer** | Marks/sends the quote to the customer |
| **AcceptedByCustomer** | Records customer acceptance |

## Tabs

| Tab | Content |
|---|---|
| **LineItems** | Quotation lines |
| **Details** | Quote form |

## How to process a Quote

1. Create from **CreateQuotation** on a Pnl, or open Quotes and create/edit
2. Confirm links to customer, deal, and Pnl when applicable
3. Complete **LineItems**
4. **SendForApproval**, then **SendtoCustomer**
5. When the customer accepts, run **AcceptedByCustomer** and continue to [Customer PO](/docs/crm/customer-po) / [Sales order](/docs/crm/sales-order) as needed

## Best Practices

:::tip[Keep line items aligned with the Pnl]
Mismatch between Pnl and quote lines causes friction at acceptance and order creation.
:::

:::warning[Do not skip acceptance]
AcceptedByCustomer is the formal customer-acceptance step in the CRM lifecycle.
:::

## Related Sections

- [P&amp;L](/docs/crm/pnl)
- [Deals](/docs/crm/deal)
- [Customer POs](/docs/crm/customer-po)
- [CRM & Sales introduction](/docs/crm/introduction)
