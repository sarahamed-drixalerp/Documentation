---
sidebar_position: 4
title: Cost & Profit Centers
---

# Cost & Profit Centers

**CostCenter** and **ProfitCenter** are hierarchical accounting dimensions used on journals and accounts when dimensions are required. Shared UI: tree + list + workspace with details and transactions.

## What Centers Do for Your Business

- Build a cost or profit dimension hierarchy (parent / posting)
- Control allowed currencies per center
- Show balances and posted journal activity for the center
- Act as required dimensions when an account requires cost/profit centers

**Navigation:** Sidebar → Finance → Cost Centers / Profit Centers  
**Pages:** `/Entities/FIN/CostCenter` · `/{id}` and `/Entities/FIN/ProfitCenter` · `/{id}`

## Workspace

| View | Use |
|---|---|
| **Tree** (default) | Add root/child, edit structure, open workspace |
| **List** | Tabular search by name, type, status |

### Record workspace

Two tabs after save: **Details** | **Transactions**. Balance strip in base currency with FX detail when available.

## Create or Edit a Center

Preferred: from the tree **new root** or add a child under a parent.

| Field / setting | Notes |
|---|---|
| **Name** | Required |
| **Arabic name** | Recommended |
| **Description** (EN/AR) | Optional |
| **Parent** | When created under a parent; locked after save |
| **Center code** | System-generated after save |
| **Parent? / Posting?** | Structure switches |
| **All currencies?** | Otherwise select at least one currency |

:::warning[Parent + posting together]
Combining both may show a warning. Follow accounting policy before save.
:::

:::danger[Do not delete a center with children]
Delete is rejected when children exist. Remove or restructure children first.
:::

## Best Practices

:::tip[Build dimensions before heavy journals]
When accounts require cost/profit centers, prepare the tree and currencies first.
:::

## Related

- [Chart of Accounts](/docs/fin/account)
- [Journals](/docs/fin/journal)
- [Finance overview](/docs/fin/)
