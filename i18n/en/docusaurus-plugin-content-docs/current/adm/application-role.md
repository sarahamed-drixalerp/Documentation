---
sidebar_position: 3
title: Application Roles
---

# Application Roles

An **Application Role** defines what users can see and do in Drixal ERP: details, permissions (claims and NCA levels), and the users assigned to the role.

## What an Application Role Does for Your Business

- Groups permissions so you do not configure every user screen by screen
- Sets NCA confidentiality ceilings for data the role may access
- Links one role to many users from the Users tab

**Path:** Sidebar ← Administration ← Application Roles  
**Pages:** `/Entities/ADM/ApplicationRole` · `/new` · `/{id}`

## Role List

### Columns and filters

- Columns: **name** and row **actions**
- Filters: search, type, status
- **Create** opens `/Entities/ADM/ApplicationRole/new`

## Create and Edit a Role

1. Create a new role or open an existing record
2. Fill **Name** and **Arabic name** (`name`, `nameAr`) — required
3. Optionally add description(s), set type, and keep **isActive** on (default true)
4. Save
5. Open **Permission** to set claims and NCA levels
6. Open **Users** to assign or remove users

### Required fields

| Field | Use |
|---|---|
| Name (`name`) | Display name |
| Arabic name (`nameAr`) | Arabic display name |

### Optional fields

| Field | Use |
|---|---|
| Description(s) | Explain the role purpose |
| Type | Optional classification |
| isActive | Active toggle (default true) |

## Record page (Id)

Tabs:

| Tab | When available | Purpose |
|---|---|---|
| **Details** | Always | Name, descriptions, active flag |
| **Permission** | After create | Claims and NCA levels |
| **Users** | After create | Assign / remove users |

Header action: **Delete Role**.

## Permissions

Permissions use a **CAT → entity** tree. For each entity you can grant claims such as:

| Claim | Meaning |
|---|---|
| **GetAll** | List / browse |
| **GetById** | Open a single record |
| **Create** | Create |
| **Edit** | Edit |
| **Delete** | Delete |
| **360** | 360 workspace (plus any entity-specific claims where offered) |

### Claim implications

- Granting **GetAll** also implies **GetById**
- Granting **360** also implies **GetById**

### NCA levels

| Level | Label |
|---|---|
| 1 | Public |
| 2 | Internal |
| 3 | Confidential |
| 4 | Top Secret |

:::warning[Unsaved leave guard]
If you leave Permissions with unsaved changes, the screen warns you before discarding them.
:::

## Users tab

- Assign or remove users linked to the role
- Shows Active / Inactive, email, and jobTitle

## Best Practices

:::tip[Start with least privilege]
Grant only the claims the role needs. Prefer GetById over GetAll when list access is not required.
:::

:::tip[Align NCA with Data Confidentiality]
Set the role’s NCA ceiling to match the sensitivity of the records those users must open. See [Data Confidentiality](/docs/adm/data-confidentiality).
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Application Users](/docs/adm/application-user)
- [Data Confidentiality](/docs/adm/data-confidentiality)
- [Glossary](/docs/adm/glossary)
