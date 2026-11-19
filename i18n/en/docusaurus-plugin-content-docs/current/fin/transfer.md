---
sidebar_position: 5
title: Transfers
---

# Transfers

A **Transfer** moves cash between bank accounts and treasuries (`TreasuryTransaction`): from/to, amount, date, then **Post** to lock the movement.

## What a Transfer Does for Your Business

- Moves cash Bank↔Bank, Treasury↔Treasury, Treasury↔Bank, Bank↔Treasury
- Shows current balance, balance after, and received amount when currencies differ
- Locks the movement via **Post** (no edit/delete afterward)

**Navigation:** Sidebar → Finance → Transfers  
**Pages:** `/Entities/FIN/Transfer` · `/{id}`

## Transfer List

### Columns

Name (with number), From/To, transaction date, amount, type, status, actions.

### Filters

Search name and number; status.

List or cards view; aggregates for count and sum of base amount.

:::danger[Do not delete a posted transfer]
Delete is disabled for posted transfers.
:::

## Create and Post a Transfer

1. Create a new transfer
2. Set **Name**, **Transfer date**, and **Transfer type** (four direction cards)
3. Choose **From** and **To** accounts and amount (> 0)
4. Set FX rate when currencies differ; review received amount and balance after
5. Set confidentiality and type/status, then **Save Changes** then **Post**

### Key fields

| Field | Notes |
|---|---|
| **Name** | Required |
| **Transfer date** | Required |
| **Transfer type** | Bank→Bank, Treasury→Treasury, Treasury→Bank, Bank→Treasury |
| **From / To** | By type; bank currency locked to the account |
| **Amount** | Required and greater than zero |
| **FX rate** | When currencies differ |
| **Confidentiality** | Required on the header |

### Lifecycle

| State | Meaning |
|---|---|
| **Draft / saved** | Editable; can save and post |
| **Posted** | Read-only; no save, post, or delete |

Post saves first, then locks status. If post fails after save, the record stays draft.

## Common Errors

- Insufficient balance
- Account without currency or missing transfer type
- Required fields empty before post

## Best Practices

:::tip[Review balance after before posting]
Check current balance, balance after, and received amount for cross-currency moves.
:::

:::warning[Posting closes the cash movement]
Do not edit after post. Correct with a new reversing transfer per finance policy.
:::

## Related

- [Cash masters](/docs/fin/cash-masters)
- [Journals](/docs/fin/journal)
- [Finance overview](/docs/fin/)
