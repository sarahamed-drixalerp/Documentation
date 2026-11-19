---
sidebar_position: 7
title: Expenses
---

# Expenses

An **Expense** is an operational spend record with amount, date, and number, plus optional treasury, supplier, and accounts. It is locked via **Publish** (Draft → submitted/locked) — not a full GL journal post.

## What an Expense Does for Your Business

- Records spend with external number, amount, currency, and date
- Optionally links treasury, supplier, account/sub-account, and taxes
- Publishes the draft to lock free editing per status rules

**Navigation:** Sidebar → Finance → Expenses  
**Pages:** `/Entities/FIN/Expense` · `/new` · `/{id}`

## Expense List

| Area | Content |
|---|---|
| **Columns** | Expense number, category, amount, date, treasury, supplier, status, actions |
| **Filters** | Search, status, category, treasury, supplier, date |

## Create and Publish

1. Create a new expense
2. Set **Amount** + currency, **Expense number**, and **Date**
3. Complete confidentiality and entity type; add treasury/supplier/accounts/taxes as needed
4. **Save Changes** then **Publish** (available on Draft)

### Key fields

| Field | Notes |
|---|---|
| **Amount + currency** | Required |
| **Expense number** | Required (external ref) |
| **Date** | Required |
| **Confidentiality / type** | Required on the header |
| **Treasury, taxes, account, supplier** | Optional |

### Tabs

**Details** | **Attachments**

### Lifecycle

| Step | Behavior |
|---|---|
| Draft | Save, edit, publish |
| **Publish** | Saves, changes status, and locks per the publish dialog |

:::warning[Publish is not a journal post]
Publish locks the operational expense path. Ledger posting uses [Journals](/docs/fin/journal) when required by finance policy.
:::

## Best Practices

:::tip[Complete number and date before publish]
Confirm expense number, amount, and currency before publish so incomplete data is not locked.
:::

## Related

- [Cash masters](/docs/fin/cash-masters)
- [Custody](/docs/fin/custody)
- [Finance overview](/docs/fin/)
