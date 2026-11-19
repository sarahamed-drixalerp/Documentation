---
sidebar_position: 11
title: Tax Rates
---

# Tax Rates

A **Tax Rate** is a lookup for tax percentage, invoice label, and default flag.

**Path:** Sidebar ← Organization ← … (route may be opened by URL when not in the nav group)  
**Page:** `/Entities/ORG/TaxRate`

## What a Tax Rate does for your business

- Stores bilingual names and descriptions
- Holds **taxValue_prc** (percentage)
- Sets **labelOnInvoice** for invoice display
- Marks **isDefault** when this rate should be the default

## List columns

| Column | Meaning |
|---|---|
| names | English / Arabic names |
| taxValue_prc | Tax percentage |
| descriptions | Description text |
| Active? | Active switch |
| Actions | Row actions |

## Fields

| Field | Required | Use |
|---|---|---|
| Name / nameAr | No in yup | Display labels |
| Descriptions | No | Optional text |
| taxValue_prc | No | Tax percentage |
| labelOnInvoice | No | Label printed on invoices |
| isDefault | No | Default tax rate flag |
| Active | — | List Active toggle |

All fields are optional in the yup schema.

## Usage

1. Open Tax Rates (`/Entities/ORG/TaxRate`)
2. Create or edit a tax rate
3. Fill names and **taxValue_prc**
4. Set **labelOnInvoice** for invoice wording
5. Mark **isDefault** when this should be the default rate
6. Save

## Best Practices

:::tip[One clear default]
Keep a single isDefault rate unless your process intentionally uses multiple contexts.
:::

:::note[Invoice label matters]
labelOnInvoice is what customers see—keep it short and accurate.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Currencies](/docs/org/currency)
- [Glossary](/docs/org/glossary)
