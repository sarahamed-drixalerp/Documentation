---
sidebar_position: 6
title: DMS project owners
---

# DMS project owners

A **DMS project owner (DMSProjectOwner)** is the reference owner party linked to DMS projects: name, type/status, and contact/address data.

**Navigation:** Sidebar → Document Management → DMS project owners  
**Pages:** `/Entities/DMS/DMSProjectOwner` · `/Entities/DMS/DMSProjectOwner/new` · `/Entities/DMS/DMSProjectOwner/{id}`

## What this screen does

- Defines the owner party before or alongside DMS projects
- Stores registration, contact, and address data
- Appears in the project list and its filters

## List

### Columns

| Column | Meaning |
|---|---|
| **Name** | Name |
| **RegistrationNo** | Registration number |
| **Email** | Email |
| **Phone** | Phone |
| **Actions** | Row actions |

### Filters

| Filter | Use |
|---|---|
| **Name** | Search by name |

## Fields

| Field | Required? | Use |
|---|---|---|
| **name** | Yes | Name |
| **nameAr** | Yes | Arabic name |
| **EntityTypeId** | Yes (in SaveDetails) | Entity type |
| **EntityStatusId** | Yes (in SaveDetails) | Entity status |
| description / descriptionAr | No | Descriptions |
| domain / website | No | Domain / website |
| registrationNo | No | Registration number |
| vATRegNo | No | VAT registration number |
| mobile / email | No | Mobile / email |
| **Address** | No | CountryId, city, state, address, street, zipCode |

Type and status are lookup values via EntityType / EntityStatus, not a fixed UI enum.

## How to use the screen

1. Create the owner with name and `nameAr`
2. Set EntityType and EntityStatus
3. Add contact and address when needed
4. Link the owner from the [DMS project](/docs/dms/dms-project) screen

## Best Practices

:::tip[Create the owner before piling up projects]
The owner appears in project lists and filters; setting the owner first makes linking easier later.
:::

:::note[First step in the setup order]
See [Document Management introduction](/docs/dms/introduction) for the order: Owner → Project → Discipline → Type → Document.
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [DMS project](/docs/dms/dms-project)
- [Glossary](/docs/dms/glossary)
