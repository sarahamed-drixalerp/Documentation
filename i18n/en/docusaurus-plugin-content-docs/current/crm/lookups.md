---
sidebar_position: 19
title: Reference data
---

# Reference data

CRM **lookups** are bilingual reference values used on leads, customers, deals, and related screens. The standard pattern: **name** and **nameAr** are required, with an Active switch — except where noted.

## Industry

**Industry** classifies leads and customers.

**Page:** `/Entities/CRM/Industry`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **Active** | Switch |

## Sector

**Sector** further classifies leads and customers.

**Page:** `/Entities/CRM/Sector`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **Active** | Switch |

## Confidence

**Confidence** is selected on deals (open-deal confidence mix on the dashboard).

**Page:** `/Entities/CRM/Confidence`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **Active** | Switch |

## DealLostReason

**DealLostReason** is required when closing a deal as Lost.

**Page:** `/Entities/CRM/DealLostReason`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **Active** | Switch |

## LeadSource

**LeadSource** classifies where the lead originated.

**Page:** `/Entities/CRM/LeadSource`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **Active** | Switch |

## Competitor

**Competitor** is used on deal Lost (competitor and competitor won amount). Competitors have list and Id pages (not index-only).

**Pages:** `/Entities/CRM/Competitor` · `/Entities/CRM/Competitor/{id}`

| Field | Required |
|---|---|
| **name** / **nameAr** | Required |
| **type** / **status** | Record governance |

## DeliveryAddress (child only)

**DeliveryAddress** has ListSub and Save components only — **no standalone pages**. It is maintained as a child under the parent that uses delivery addresses.

## Common usage

1. Open the lookup page you need (Industry, Sector, Confidence, DealLostReason, LeadSource, or Competitor)
2. Create or edit with both names (and Active / type-status as applicable)
3. Select the value from the matching field on Lead, Customer, Deal, or related screens

## Best Practices

:::tip[Keep lists short and consistent]
Avoid duplicating the same meaning under different names so filters and Lost reasons stay clean.
:::

:::warning[Lost needs DealLostReason and Competitor]
Configure these before sales teams close deals as Lost.
:::

## Related Sections

- [Leads](/docs/crm/lead)
- [Customers](/docs/crm/customer)
- [Deals](/docs/crm/deal)
- [Glossary](/docs/crm/glossary)
