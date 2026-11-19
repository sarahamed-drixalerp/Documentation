---
sidebar_position: 12
title: Service Priorities
---

# Service Priorities

A **Service Priority** is a lookup for priority names, descriptions, and color.

**Path:** Sidebar ← Organization ← … (route may be opened by URL when not in the nav group)  
**Page:** `/Entities/ORG/ServicePriority`

## What a Service Priority does for your business

- Maintains bilingual priority names and descriptions
- Stores a **color** for display in service flows
- Supports list Active toggle and CRUD drawer actions

## List columns

| Column | Meaning |
|---|---|
| names | English / Arabic names |
| descriptions | Description text |
| Active? | Active switch |
| Actions | Row actions |

The list does not show a dedicated color column; color is edited on the form.

## Fields

| Field | Required | Use |
|---|---|---|
| Name / nameAr | No in yup | Display labels |
| Descriptions | No | Optional text |
| color | No | Display color |
| Active | — | List Active toggle |

All fields are optional in the yup schema.

## Usage

1. Open Service Priorities (`/Entities/ORG/ServicePriority`)
2. Create or edit a priority
3. Fill names and descriptions
4. Set **color** for UI display
5. Save

## Best Practices

:::tip[Use distinct colors]
Choose colors that stay readable next to each other in lists and badges.
:::

:::note[Lookup, not workflow engine]
Service Priority stores the priority value and color; it does not by itself define SLA timers in this screen.
:::

## Related Sections

- [Organization introduction](/docs/org/introduction)
- [Tax Rates](/docs/org/tax-rate)
- [Glossary](/docs/org/glossary)
