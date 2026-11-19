---
sidebar_position: 7
title: Deals
---

# Deals

A **Deal** is a sales opportunity on a pipeline in Drixal ERP. It connects customer, currency, stage, line items, P&amp;L, and quotes, and closes as Won or Lost.

**Navigation:** Sidebar → Sales → Deals  
**Pages:** `/Entities/CRM/Deal` · `/Entities/CRM/Deal/{id}` · `/Entities/CRM/Deal/360/{id}`

## What a Deal does for your business

- Defines the opportunity: name, customer, account manager, pipeline, stage, calculated amounts
- Collects line items, quotes, and Etimad data when needed
- Provides actions: **NextStage**, **CreatePnl**, **Won**, **Lost** (ConvertToAgreement dialog exists)
- Summarizes KPIs: amount, budget, planned GP, billed, unbilled

## Two types of Deal pages

| Page | When to use it |
|---|---|
| **Standard view** `/Entities/CRM/Deal/{id}` | Focus on details and line items |
| **360 view** `/Entities/CRM/Deal/360/{id}` | Daily operations: line items, details, P&amp;Ls, quotations |

Creating from the drawer often navigates to 360 after save.

## Deal list

### Views

List, cards, and tree (group by type, status, customer, pipeline, or account manager).

### Columns and aggregates

Name, customer, account manager, pipeline, stage, calculated amount, pipeline amount.  
Sums: amount, budget, planned GP, pipeline amount.

### Filters

Search, type, status, customer, pipeline.

## Create a Deal

### Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Opportunity identity |
| **type** / **status** | Record governance |
| **customer** | Required commercial link |
| **currency** | Basis for amounts |
| **pipeline** | Defines available stages |
| **stage** | Cleared when pipeline changes; disabled until a pipeline is selected |

### Important sections

| Section | Content |
|---|---|
| **General** | Account manager, dates, customer, currency, pipeline, stage, confidence, description |
| **Etimad information** | Etimad number, bids, guarantees, payment days |
| **Notes** | Technical, financial, account, lost |
| **Closure** | Close date, competitor, lost reason, cost to complete |

## Lifecycle actions

| Action | Behavior |
|---|---|
| **NextStage** (Move to next stage) | Optional comment; final stage shows read-only info |
| **CreatePnl** | Creates a draft P&amp;L and can open it |
| **Won** | Choose Customer PO and/or Sales Order and/or both; documents may be created and opened |
| **Lost** | Required: lost reason, competitor, competitor won amount (&gt; 0), and comment |

## Line items and 360 tabs

| Area | Content |
|---|---|
| **LineItems** | Products/lines that drive calculated amounts |
| **Details** | Deal form |
| **Pnls** (360) | Related P&amp;L lists |
| **Quotations** (360) | Related quotes |

KPIs on 360 include amount, budget, planned GP, recognized revenue, billed, unbilled, due.

## Common mistakes

- Choosing a stage before a pipeline (“Please select a pipeline first”)
- End date before start date
- Closing as Lost without competitor, amount, or reason
- Trying to save while not on the Details tab

## Best Practices

:::tip[Build line items early]
Calculated amounts depend on lines. Do not leave them until close day.
:::

:::warning[Review the pipeline before Won]
Confirm the final stage and products before creating a sales order or customer PO.
:::

:::danger[Lost requires full closure data]
Lost reason, competitor, competitor won amount (&gt; 0), and comment are all required.
:::

## Related Sections

- [Leads](/docs/crm/lead)
- [Customers](/docs/crm/customer)
- [Pipelines and stages](/docs/crm/pipeline)
- [P&amp;L](/docs/crm/pnl)
- [Quotes](/docs/crm/quote)
- [CRM & Sales introduction](/docs/crm/introduction)
