---
sidebar_position: 4
title: Purchase requisitions
---

# Purchase requisitions

A **PurchaseRequisition** records internal demand for review and approval before buying starts through a quote request or a bid.

**Navigation:** Sidebar → SRM & Procurement → Purchase Requisitions  
**Pages:** `/Entities/SRM/PurchaseRequisition` · `/Entities/SRM/PurchaseRequisition/new` · `/Entities/SRM/PurchaseRequisition/{id}`

## What a Purchase Requisition does for your business

- Defines demand with bilingual name, requester, and due date
- Supports **Submit** to move from draft to submitted
- After submit, opens **Convert To Quote Request** and **Convert To Bid**

## Purchase requisition list

### Columns (key)

Number/name, status, requester, and due fields as shown on the list.

### Filters

Search and the status/type filters available on screen.

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Requisition identity |
| **requester (ownerUsrId)** | Who requested the buy |
| **dueDate** | Due date |
| **type** / **status** | Record governance |

## Lifecycle actions

| Action | Function |
|---|---|
| **Submit** | Submits the requisition (Submitted status) and locks free draft editing |
| **Convert To Quote Request** | Creates a quote request from the submitted requisition |
| **Convert To Bid** | Creates a bid from the submitted requisition |

:::note[After Submit]
Convert actions appear after submit. Converted requisitions are locked from a duplicate convert path.
:::

## How to create and process a requisition

1. Open Purchase Requisitions and create a new record
2. Fill **name**, **nameAr**, **requester**, **dueDate**, and type/status
3. Save, then **Submit**
4. Choose **Convert To Quote Request** or **Convert To Bid** for the buying path

## Best Practices

:::tip[Complete requester and due date before Submit]
Validation blocks save without requester, dueDate, and names.
:::

:::warning[Choose the convert path on purpose]
QuoteRequest is for one supplier; Bid is for several. Convert builds the next record in the chain.
:::

## Related Sections

- [Quote requests](/docs/srm/quote-request)
- [Bids](/docs/srm/bid)
- [SRM & Procurement introduction](/docs/srm/introduction)
