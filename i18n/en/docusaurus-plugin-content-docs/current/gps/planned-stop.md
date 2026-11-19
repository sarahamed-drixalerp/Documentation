---
sidebar_position: 3
title: Planned stops
---

# Planned stops

A **PlannedStop** is a planned field visit: name and label, a **GPS Location**, plan date, and assigned user. Latitude, longitude, and radius are read from the linked location and are not editable inputs on the form.

**Path:** Side menu ← GPS ← Planned Stops  
**Pages:** `/Entities/GPS/PlannedStop` · `/Entities/GPS/PlannedStop/{id}` · `/Entities/GPS/PlannedStop/360/{id}`

## What this screen does

- Lists planned stops with name, label, location, plan date, assignee, and coordinates
- Supports create, edit, and delete from the list or drawer
- Selecting a **Location** can auto-fill **Label** when it is empty
- Opens the standard record or 360 view

## List columns

| Column | Meaning |
|---|---|
| **name** | Name |
| **label** | Label |
| **locationName** | Linked location name |
| **planDate** | Plan date |
| **assignedToUsrName** | Assigned user name |
| **latitude** | Latitude (from location) |
| **longitude** | Longitude (from location) |
| **actions** | Edit / 360 view / Delete |

Click the name to open `/Entities/GPS/PlannedStop/{id}`.

## Filters and search

| Filter | Use |
|---|---|
| **search** (Name / Label) | Text search on name and label |
| **LocationId** | Location |
| **AssignedToUsrId** | Assigned user |
| **EntityStatusId** | Status |
| **EntityTypeId** | Type |

## Actions from the list

1. **Create New Planned Stop** — opens the create drawer
2. **Edit** — pencil opens the drawer
3. **360 View** — opens `/Entities/GPS/PlannedStop/360/{id}`
4. **Delete** — requires confirmation and cannot be undone
5. Open by name — `/Entities/GPS/PlannedStop/{id}`

:::danger[Delete only incorrect drafts]
Do not delete a stop that tracking reviews depend on for the day. Correct date, location, or assignment instead when possible.
:::

## Required fields

| Field | Rules / use |
|---|---|
| **name** | Name |
| **label** | Label |
| **planDate** | Plan date — **date only** (no time) |
| **locationId** | Linked GPS Location |
| **assignedToUsrId** | Assigned user |
| **entityTypeId** | Entity type |
| **entityStatusId** | Entity status |

## Optional fields

| Field | Use |
|---|---|
| **nameAr** | Arabic name |
| **description** / **descriptionAr** | Descriptions |

## Coordinates and radius (read-only)

| Field | Source |
|---|---|
| **latitude** | From linked **Location** — read-only |
| **longitude** | From linked **Location** — read-only |
| **radius** | From linked **Location** — read-only |

These values appear in the list and in the 360 summary. To change them, edit the [Location](/docs/gps/location) itself.

:::tip[Selecting Location can fill Label]
When you select a **Location**, if **Label** is empty it can be filled automatically with the selected location name. You can edit it afterward.
:::

:::note[planDate is date-only]
**planDate** is saved as a calendar day without time. Use the planned visit day, not a timestamp.
:::

## Record page and 360

### Standard view — `/Entities/GPS/PlannedStop/{id}`

- **Active** toggle
- **Type** and **status** pickers
- **Standard ↔ 360** switch
- Details form (SaveDetails) for save

### 360 view — `/Entities/GPS/PlannedStop/360/{id}`

Sidebar summary includes:

- **locationName**
- **planDate**
- **latitude** / **longitude** / **radius** (from location)

Available panels:

- **Activities**
- **Attachments**
- **Logs**
- Details for edit

## Usage

1. Open `/Entities/GPS/PlannedStop`
2. Ensure a valid [GPS Location](/docs/gps/location) exists first
3. Create a stop or open a record to edit
4. Fill **name**, **label**, and **planDate**
5. Choose **locationId**, **assignedToUsrId**, **entityTypeId**, and **entityStatusId**
6. Confirm coordinates and radius appear from the location (read-only)
7. Save, then follow execution in [Tracking](/docs/gps/tracking) on the plan date

## Best Practices

:::tip[Link location and assignee before the plan date]
Without correct **locationId**, **assignedToUsrId**, and **planDate**, the stop will not show clearly on the work-day map.
:::

:::warning[Do not edit coordinates here]
If coordinates or radius are wrong, fix them on the [Location](/docs/gps/location) record. Planned stops do not edit those fields.
:::

## Related Sections

- [GPS introduction](/docs/gps/introduction)
- [Locations](/docs/gps/location)
- [Tracking](/docs/gps/tracking)
- [Glossary](/docs/gps/glossary)
- [Attendance](/docs/app/attendance)
