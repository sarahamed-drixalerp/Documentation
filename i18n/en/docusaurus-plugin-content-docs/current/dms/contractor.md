---
sidebar_position: 8
title: Contractors
---

# Contractors

A **contractor** is an external party that uploads and reviews project documents in DMS. The record holds name, account manager, registration and contact data, and assigned projects.

**Navigation:** Sidebar → Document Management → Contractors  
**Pages:** `/Entities/DMS/Contractor` · `/Entities/DMS/Contractor/new` · `/Entities/DMS/Contractor/{id}`

## What this screen does

- Defines the contractor used on projects, documents, and external users
- Assigns an **Account Manager**
- Stores registration, contact, address, and commercial data
- Shows **Assigned Projects** after save

## List

### Columns

| Column | Meaning |
|---|---|
| **Name** | Name |
| **EntityStatusId** | Status |
| **AccountManagerUsr** | Account manager |
| **RegistrationNo** | Registration number |
| **Email** | Email |
| **Phone** | Phone |
| **Actions** | Row actions |

### Filters

| Filter | Use |
|---|---|
| **Name** | Search by name |
| **EntityTypeId** | Entity type |
| **EntityStatusId** | Status |
| **AccountManagerUsrId** | Account manager |

## Fields

| Field | Required? | Use |
|---|---|---|
| **name** | Yes | Contractor name |
| AccountManagerUsrId | No | Account manager |
| IndustryId / SectorId / CurrencyId | No | Industry / sector / currency |
| annualRevenue_val / employees_num | No | Revenue / headcount |
| cRNo / vATRegNo / registrationNo | No | CR / VAT / registration |
| phone / mobile / email / website / domain | No | Contact and digital presence |
| description | No | Description |
| **Address** | No | Address fields |

## Tabs

| Tab | Purpose |
|---|---|
| **Details** | Identity, account manager, registration, contact |
| **Assigned Projects** | Projects linked to the contractor |

:::note[Assigned Projects after save]
The Assigned Projects tab is disabled until the contractor record is saved.
:::

## How to use the screen

1. Create the contractor with a name and set Account Manager when needed
2. Enter registration and contact data
3. Save, then review Assigned Projects
4. Link the contractor from DMS project and/or document and/or external user
5. On the portal, external-user access depends on contractor and permission level

## Best Practices

:::tip[Link the account manager before go-live]
The account manager appears in the list and filters and helps internal follow-up on the contractor.
:::

:::warning[The portal depends on the contractor]
External users are linked to a contractor; without a correct contractor, permission and assigned-project management on the portal break down.
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [External user](/docs/dms/external-user)
- [DMS project](/docs/dms/dms-project)
- [Documents](/docs/dms/document)
- [Glossary](/docs/dms/glossary)
