---
sidebar_position: 2
title: Application Users
---

# Application Users

An **Application User** is the sign-in and permissions account in Drixal ERP: profile, seat, activate/deactivate, and roles.

## What an Application User Does for Your Business

- Links a person to sign-in identity (user name, email, mobile)
- Sets organization preferences: currency, language, seat type
- Enables or stops access without deleting the record
- Grants roles from the Roles tab

**Path:** Sidebar ← Administration ← Application Users  
**Pages:** `/Entities/ADM/ApplicationUser` · `/new` · `/{id}`

## User List

### Columns and views

- Default columns: **name** and row **actions**
- Primary view is list (cards/tree usually off)

### Filters

- Name
- EntityTypeId
- EntityStatusId

### Row and list actions

| Action | Meaning |
|---|---|
| **Edit** | Opens the record page |
| **Delete** | Removes the record (prefer deactivate when someone leaves) |
| **Activate** | Re-enables access |
| **Deactivate** | Stops access without deleting the record |
| **Change seat type** (`changeSeatType`) | Updates the seat license |
| **Create** | Opens `/Entities/ADM/ApplicationUser/new` |

## Create and Edit a User

1. Create a new user or open an existing record
2. Fill **Name** and **Arabic name** (`name`, `nameAr`) — required on the record page
3. Add optional profile and preference fields as needed
4. Save, then assign **Roles** from the dedicated tab
5. Use Activate / Deactivate / Change seat type from the record header when needed

### Required fields

| Field | Use |
|---|---|
| Name (`name`) | Display name |
| Arabic name (`nameAr`) | Arabic display name |

### Optional end-user fields

| Field | Use |
|---|---|
| CurrencyId | Preferred currency |
| LanguageId / langAbbrv | UI language |
| OrganizationId | Organization link |
| seatType | License / seat |
| firstName / lastName | Personal name parts |
| jobTitle | Job title |
| mobile / phone | Contact |
| email / userName | Sign-in identity |
| isActive | Whether they can sign in |

:::warning[Identity and security fields]
Some technical fields (`passwordHash`, lockout, two-factor / 2FA, `accessFailedCount`) belong to system administration. Do not change them casually from daily user screens.
:::

## Record page (Id)

Tabs:

| Tab | When available | Purpose |
|---|---|---|
| **Details** | Always | Profile and preferences |
| **Roles** | After create / on existing record | Assign application roles |

Header actions: **Activate**, **Deactivate**, **Change seat type**.

From the record sidebar you can use Activities, Attachments, Insights, and Logs, plus quick Note / Call / Task / Meeting / Visit.

## Lifecycle Actions

| Action | Meaning |
|---|---|
| **Activate** | Re-enables access (with a comment in the dialog) |
| **Deactivate** | Stops access without deleting the record |
| **Change seat type** | Updates the seat license with a comment |

## After Save

- **Roles** tab to link application roles
- Activities, attachments, logs, and insights from the record sidebar

## Best Practices

:::tip[Assign roles right after create]
A user without roles may sign in and see nothing. Attach the role before handing over the account.
:::

:::tip[Deactivate instead of delete]
When someone leaves, deactivate the user and keep the audit trail instead of hard delete.
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Application Roles](/docs/adm/application-role)
- [Glossary](/docs/adm/glossary)
