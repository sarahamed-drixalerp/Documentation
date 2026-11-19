---
sidebar_position: 2
title: Journals
---

# Journals

A **journal** is a manual accounting entry in Drixal ERP: a header plus debit/credit lines, then **Post** to the ledger. Automatic journals are system-created; the UI defaults type to **Manual**.

## What a Journal Does for Your Business

- Records an accounting movement with date, description, and code/number
- Balances debit and credit with currencies, tax, and dimensions (cost/profit centers)
- Locks the movement through **Post** and prevents later edits
- Links lines to posting (leaf) accounts in the chart of accounts

**Navigation:** Sidebar → Finance → Journals  
**Pages:** `/Entities/FIN/Journal` · `/new` · `/{id}`

There is no separate 360; the record page is the workspace.

## Journal List

### Columns

- Code (opens the record)
- Number
- Journal date
- Description
- Status (saved / posted)
- Actions: view/edit; delete only if not posted

### Filters

Search code, number, description; type; status.

:::danger[Do not delete a posted journal]
Delete is disabled for posted journals. Delete may also fail when lines exist.
:::

## Create and Post a Journal

1. Create a new journal
2. Set **journal date** (required), description, and confidentiality
3. Add lines: leaf account, currency, debit **or** credit, tax if needed, dimensions
4. Verify balance
5. **Save Changes**, then **Post**

### Line rules

| Rule | Detail |
|---|---|
| Date first | Lines stay locked until the journal date is set |
| Leaf account only | Pick a posting account (not a folder-only parent) |
| Debit or credit | Not both on the same line |
| Dimensions | Account may require cost/profit centers totaling 100% |
| Balance | Posting requires balance, amounts, and valid currencies |

### Lifecycle

| Status | Meaning |
|---|---|
| **Saved (draft)** | Editable; can save and post |
| **Posted** | Read-only; no save, post, or delete |

Post saves first, then posts the journal. On success you usually return to the list.

## Common Mistakes

- Empty line or missing account
- Debit and credit on the same line
- Posting an unbalanced journal
- FX refresh that unbalances the entry
- Missing required dimensions for the account

## Best Practices

:::tip[Check balance before post]
Use the debit/credit summary and difference. Posting locks the movement in the ledger.
:::

:::warning[Posting is an accounting close for the journal]
After post, do not edit lines. Correct with a reversing journal per finance policy.
:::

## Related Sections

- [Chart of Accounts](/docs/fin/account)
- [Cost & Profit Centers](/docs/fin/centers)
- [Transfers](/docs/fin/transfer)
- [Finance overview](/docs/fin/)
