---
sidebar_position: 9
title: External users
---

# External users

An **external user (ExternalUser)** is a portal account linked to a contractor, a permission level, and assigned projects. It controls who can view documents, add them, or manage contractor users in Aspire-Contractor.

**Navigation:** Sidebar → Document Management → External users  
**Pages:** `/Entities/DMS/ExternalUser` · `/Entities/DMS/ExternalUser/new` · `/Entities/DMS/ExternalUser/{id}`

## What this screen does

- Creates contractor portal users with name and email
- Sets **permissionLevel**
- Links contractor and projects via **ProjectPicker**
- Activates or deactivates the account (**Active** / `isActive`)

## List and summary cards

### List columns

| Column | Meaning |
|---|---|
| **Full Name** | Full name |
| **Contractor** | Contractor |
| **Email** | Email |
| **Phone** | Phone |
| **Assigned Projects** | Assigned projects |
| **Permission Level** | Permission level |
| **Status** | Active toggle |
| **Actions** | Row actions |

### Filters

| Filter | Use |
|---|---|
| **Search** | FullName / Name / Email / Phone |
| **Contractor** | Contractor |
| **PermissionLevel** | Permission level |

### Stats cards

Total Users · Active Users · Contractor Admins · Contractor Projects

## Fields

| Field | Required? | Use |
|---|---|---|
| **fullName** | Yes | Full name |
| **email** | Yes | Email (portal login) |
| phone | No | Phone |
| **permissionLevel** | Yes | See table below (default: View Only) |
| **Contractor** | — | Linked contractor |
| **Assigned Projects** | — | Projects via ProjectPicker |
| **isActive (Active)** | — | Account active |

### permissionLevel values

| Value | Portal meaning |
|---|---|
| **View Only** | Read documents and statuses |
| **Add New Document** | View and submit new documents |
| **Admin** | Manage users, projects, and documents within the contractor scope |

Legacy values accepted in some edit checks: `upload and comment` (case-insensitive match).

## How to use the screen

1. Create the [contractor](/docs/dms/contractor) and projects first
2. Create the user with fullName and email
3. Choose permissionLevel and contractor
4. Set Assigned Projects from ProjectPicker
5. Leave Active enabled for portal access

## Best Practices

:::tip[Least privilege that still works]
Start with **View Only** or **Add New Document**; reserve **Admin** for people who actually manage contractor users.
:::

:::warning[Only Admin manages users]
Managing external users from the portal requires permissionLevel = **Admin**. Otherwise create/update of users is denied.
:::

:::note[Assigned projects bound the scope]
Without correct assigned projects, portal access to project documents narrows or breaks.
:::

## Related Sections

- [Document Management introduction](/docs/dms/introduction)
- [Contractor](/docs/dms/contractor)
- [Documents](/docs/dms/document)
- [DMS project](/docs/dms/dms-project)
- [Glossary](/docs/dms/glossary)
