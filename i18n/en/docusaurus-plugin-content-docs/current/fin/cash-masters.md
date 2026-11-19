---
sidebar_position: 6
title: Cash Masters
---

# Cash Masters

**Treasury**, **Bank**, and **BankAccount** are cash reference masters. Managed as list + drawer screens, used by transfers, custody, loans, and expenses.

## Treasury

Internal cash drawer / petty cash.

**Page:** `/Entities/FIN/Treasury`

| Area | Content |
|---|---|
| **Columns** | EN/AR name, EN/AR description, Active?, actions |
| **Filters** | Search by name |
| **Required in drawer** | Entity type, entity status |
| **Optional** | EN/AR name, EN/AR description, balance (≥ 0), confidentiality |

## Bank

Financial institution master.

**Page:** `/Entities/FIN/Bank`

| Area | Content |
|---|---|
| **Columns** | EN/AR name, country, EN/AR description, Active?, actions |
| **Filters** | Search by name |
| **Fields** | EN/AR name, EN/AR description, country (optional in validation) |

**Active?** persists via edit. Delete asks for confirmation and cannot be undone.

## Bank Account

Account linked to a bank with currency, IBAN, and balance.

**Page:** `/Entities/FIN/BankAccount`

| Area | Content |
|---|---|
| **Columns** | EN/AR name, bank, currency, IBAN, balance, description, Active?, actions |
| **Filters** | Search by name |
| **Required in drawer** | Entity type, entity status |
| **Optional** | Names/descriptions, bank, currency, customer, supplier, purchase order, IBAN, balance |

## How Operations Use Them

| Process | Use |
|---|---|
| [Transfers](/docs/fin/transfer) | From/to bank or treasury by type |
| [Custody](/docs/fin/custody) / [Loans](/docs/fin/loan) | Payment source: bank or treasury, then account/treasury |
| [Expenses](/docs/fin/expense) | Optional treasury on the expense |

## Best Practices

:::tip[Create banks and accounts before transfers]
Prepare treasuries, bank accounts, and currencies before large transfers or custody records.
:::

:::note[Drawer UIs]
Treasury, Bank, and BankAccount are list + drawer — not multi-tab detail pages like journals.
:::

## Related

- [Transfers](/docs/fin/transfer)
- [Expenses](/docs/fin/expense)
- [Finance overview](/docs/fin/)
