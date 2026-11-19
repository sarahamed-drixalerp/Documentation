---
sidebar_position: 10
title: Currencies
---

# Currencies

A **Currency** in Organization holds currency names, exchange rate, rate timestamp, and base-currency flag on the Organization currency list.

**Path:** Sidebar ← Organization ← … (route may be opened by URL when not in the nav group)  
**Page:** `/Entities/ORG/Currency`

Administration also documents currencies at [ADM Currencies](/docs/adm/currency). Use both pages as needed depending on which route you open.

## What this screen does

- Maintains currency names and descriptions
- Stores **exchangeRate** and **exchangeRateTimeStamp**
- Marks **isBaseCurrency** when applicable
- Supports list Active toggle and CRUD drawer actions

## List columns

| Column | Meaning |
|---|---|
| names | English / Arabic names |
| exchangeRate | Rate value |
| isBaseCurrency | Base currency flag |
| descriptions | Description text |
| Active? | Active switch |
| Actions | Row actions |

## Fields

| Field | Required | Use |
|---|---|---|
| Name / nameAr | No in yup | Display labels |
| Descriptions | No | Optional text |
| exchangeRate | No | Exchange rate |
| exchangeRateTimeStamp | No | When the rate was recorded |
| isBaseCurrency | No | Whether this is the base currency |
| Active | — | List Active toggle |

All currency fields are optional in the Organization yup schema.

## Usage

1. Open Currencies (`/Entities/ORG/Currency`)
2. Create or edit a currency
3. Fill names and descriptions as needed
4. Set **exchangeRate** and **exchangeRateTimeStamp**
5. Mark **isBaseCurrency** when this is the base currency
6. For Administration-route behavior (including Active toast stub notes), see [ADM Currencies](/docs/adm/currency)

## Best Practices

:::tip[Keep rate and timestamp together]
Update exchangeRate and exchangeRateTimeStamp in the same edit so consumers know when the rate was set.
:::

:::note[Shared concept with Administration]
Organization and Administration both surface currency lists. Prefer one operating path for your tenant and cross-check [ADM Currencies](/docs/adm/currency) when working from Administration.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Currencies (ADM)](/docs/adm/currency)
- [Tax Rates](/docs/org/tax-rate)
- [Glossary](/docs/org/glossary)
