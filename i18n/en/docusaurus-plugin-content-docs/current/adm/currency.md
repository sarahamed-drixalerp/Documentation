---
sidebar_position: 7
title: Currencies
---

# Currencies

A **Currency** is a shared lookup used for amounts and preferences in Drixal ERP. The Administration route opens the **APP** Currency list components.

**Path:** Sidebar ← Administration ← Currencies  
**Page:** `/Entities/ADM/Currency` *(uses APP Currency list)*

## What this screen does

- Maintains currency names and descriptions
- Stores exchange rate and rate timestamp
- Marks a base currency when applicable

## Fields

| Field | Use |
|---|---|
| Name / nameAr | Display labels |
| Descriptions | Optional text |
| exchangeRate | Rate value |
| exchangeRateTimeStamp | When the rate was recorded |
| isBaseCurrency | Whether this is the base currency |
| Active | UI switch — toast stub only (does **not** persist like Country) |

:::warning[Active switch does not persist]
On Currency, the Active control shows a UI toast stub only. Unlike Country/Nationality, toggling Active here does not persist the same way. Document and operate accordingly.
:::

## Usage

1. Open Currencies from Administration
2. Create or edit a currency
3. Fill name / nameAr and rate fields as needed
4. Set base currency when required
5. Do not rely on the Active toast stub as a lasting Active flag

## Best Practices

:::tip[Prefer rate fields over the Active stub]
Keep exchangeRate and exchangeRateTimeStamp accurate. Do not assume the Active switch behaves like Country.
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Countries](/docs/adm/country)
- [Monitoring](/docs/adm/monitoring)
- [Glossary](/docs/adm/glossary)
