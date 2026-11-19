---
sidebar_position: 6
title: Bids
---

# Bids

A **Bid** invites several suppliers, collects quotes, then closes for evaluation and awards a winning quote.

**Navigation:** Sidebar → SRM & Procurement → Bids  
**Pages:** `/Entities/SRM/Bid` · `/Entities/SRM/Bid/new` · `/Entities/SRM/Bid/{id}`

## What a Bid does for your business

- Plans invited suppliers and details before publish
- Publishes with **Publish**, then closes for evaluation with **Close** (Close/Evaluate)
- Awards with **Award** on a supplier quote, or **Cancel** to stop the path

## Bid stages

| Stage | Meaning |
|---|---|
| **Planning** | Draft planning; add invited suppliers and details before publish |
| **Published** | Published to suppliers; waiting for quotes |
| **Closed** | Closed for evaluation (after Close/Evaluate) |
| **Awarded** | Awarded to a winning supplier |

:::note[Cancel]
**Cancel** takes the bid off the active path (cancelled) and stops further Publish/Close/Award.
:::

## Lifecycle actions

| Action | Function |
|---|---|
| **Publish** | Publishes the bid to Published; sends invites to invited suppliers |
| **Close** (Close/Evaluate) | Closes intake and moves to Closed for evaluation |
| **Award** | Awards a supplier quote from the quotes tab/dialog |
| **Cancel** | Cancels the bid |

## How to run a bid

1. Create a bid from the list or convert from a submitted purchase requisition
2. In **Planning**, complete details and add invited suppliers
3. **Publish** when ready
4. After quotes arrive, **Close**, then **Award** the winning quote
5. Use **Cancel** only when stopping the bid before award

## Best Practices

:::tip[Do not publish without suppliers]
Publish needs the checklist complete, including invited suppliers.
:::

:::warning[Close before Award]
Close intake for evaluation before award so the quote set is stable.
:::

:::danger[Cancel ends the active path]
Cancel stops Publish/Close/Award for the cancelled bid.
:::

## Related Sections

- [Purchase requisitions](/docs/srm/purchase-requisition)
- [Supplier quotes](/docs/srm/supplier-quote)
- [Purchase orders](/docs/srm/purchase-order)
- [SRM & Procurement introduction](/docs/srm/introduction)
