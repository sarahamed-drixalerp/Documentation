---
sidebar_position: 8
title: P&L
---

# P&amp;L

A **Pnl** is the deal cost and margin sheet in CRM. It is typically created from a deal (**CreatePnl** / CreatedFromDeal), then sent for approval and used to create a quotation.

**Navigation:** Sidebar → Sales → Pnl  
**Pages:** `/Entities/CRM/Pnl` · `/Entities/CRM/Pnl/{id}` · `/Entities/CRM/Pnl/360/{id}`

## What a Pnl does for your business

- Captures name, customer, account manager, issue date, amount, budget, planned GP%
- Holds **LineItems** that feed margin calculations
- Provides **SendForApproval** and **CreateQuotation**
- Appears on deal and customer 360

## Pnl list

### Columns (key)

Name, customer, account manager, issue date, amount, budget, planned GP%.

### Filters

Search, type, status, customer, deal, issue date.

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Sheet identity |
| **type** / **status** | Record governance |
| **confidentiality** | Required classification |

Customer and currency are optional on the form; prefer linking them when the sheet comes from a deal.

## Lifecycle actions

| Action | Function |
|---|---|
| **SendForApproval** | Submits the P&amp;L for approval |
| **CreateQuotation** | Creates a quote from this P&amp;L |

## Tabs

| Tab | Content |
|---|---|
| **LineItems** | Cost/margin lines |
| **Details** | P&amp;L form |
| **360 nav tabs** | Related navigation where available |

## How to work a Pnl from a Deal

1. On the deal, select **CreatePnl** (or open an existing Pnl)
2. Complete names, type, status, and confidentiality; confirm customer/currency links
3. Build **LineItems**
4. **SendForApproval** when ready
5. **CreateQuotation** to continue the sales flow

## Best Practices

:::tip[Create Pnl from the deal]
Using CreatePnl keeps the deal link and 360 lists consistent.
:::

:::warning[Approve before quoting casually]
SendForApproval is the formal step; CreateQuotation should follow a reviewed sheet.
:::

## Related Sections

- [Deals](/docs/crm/deal)
- [Quotes](/docs/crm/quote)
- [Customers](/docs/crm/customer)
- [CRM & Sales introduction](/docs/crm/introduction)
