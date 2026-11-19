---
sidebar_position: 18
title: Agreements
---

# Agreements

An **Agreement** is the commercial agreement record in CRM. It holds line items, details, related sales orders, and projects, and can create a project.

**Navigation:** (entity pages; also from sales order ConvertToAgreement and customer 360)  
**Pages:** `/Entities/CRM/Agreement` · `/Entities/CRM/Agreement/{id}`

## What an Agreement does for your business

- Captures bilingual name, type, and status for the agreement
- Groups **LineItems**, **Details**, **SalesOrders**, and **Projects**
- Provides **CreateProject** to start a project from the agreement
- Can be fed from sales order **ConvertToAgreement**

## Required fields

| Field | Why |
|---|---|
| **name** / **nameAr** | Agreement identity |
| **type** / **status** | Record governance |

## Tabs

| Tab | Content |
|---|---|
| **LineItems** | Agreement lines |
| **Details** | Agreement form |
| **SalesOrders** | Related sales orders |
| **Projects** | Related projects |

## Lifecycle actions

| Action | Function |
|---|---|
| **CreateProject** | Creates a project from the agreement |

## How to work an Agreement

1. Create via **ConvertToAgreement** on a sales order, or open Agreements directly
2. Complete names, type, and status; build **LineItems**
3. Review **SalesOrders** and **Projects** tabs
4. Select **CreateProject** when delivery should start as a project

## Best Practices

:::tip[Convert from the sales order when possible]
ConvertToAgreement keeps the SalesOrders tab linked to the source order.
:::

:::note[Projects tab]
Use CreateProject so the Projects tab reflects the new delivery record.
:::

## Related Sections

- [Sales orders](/docs/crm/sales-order)
- [Customers](/docs/crm/customer)
- [Deals](/docs/crm/deal)
- [CRM & Sales introduction](/docs/crm/introduction)
