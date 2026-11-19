---
sidebar_position: 2
title: Locations
---

# Locations

A GPS **Location** is a geographic point with name, label, coordinates, and radius (geofence). It is reused by planned stops and by inside/outside attendance comparison.

**Path:** Side menu ← GPS ← Locations  
**Pages:** `/Entities/GPS/Location` · `/Entities/GPS/Location/{id}` · `/Entities/GPS/Location/360/{id}`

:::note[Not Organization Location]
This entity is different from [Organization Location (ORG Location)](/docs/org/location), which builds hierarchy without coordinates.
:::

## What this screen does

- Lists GPS locations with name, label, owner, coordinates, radius, and status
- Supports create, edit, and delete from the list or drawer
- Lets you pick coordinates with **MapPicker** (Google Maps pin + radius circle) or **Use Current Location**
- Opens the standard record or 360 view

## List columns

| Column | Meaning |
|---|---|
| **name** | Name |
| **label** | Label |
| **ownerUsrName** | Owner display name |
| **latitude** | Latitude |
| **longitude** | Longitude |
| **radius** | Radius |
| **entityStatusName** | Status name |
| **actions** | Edit / 360 view / Delete |

Click the name to open `/Entities/GPS/Location/{id}`.

## Filters and search

| Filter | Use |
|---|---|
| **search** (Name / Label) | Text search on name and label |
| **OwnerUsrId** | Owner |
| **EntityStatusId** | Status |
| **EntityTypeId** | Type |

## Actions from the list

1. **Create New Location** — opens the create drawer
2. **Edit** — pencil opens the drawer
3. **360 View** — opens `/Entities/GPS/Location/360/{id}`
4. **Delete** — requires confirmation and cannot be undone
5. Open by name — `/Entities/GPS/Location/{id}`

:::danger[Delete only unused records]
Do not delete a location tied to planned stops or relied on for attendance comparison. Correct coordinates or status instead when possible.
:::

## Required fields

| Field | Rules / use |
|---|---|
| **name** | Name |
| **label** | Label |
| **radius** | ≥ **0.01** — UI unit is **km**; values **≥ 50** are treated as meters on convert/save |
| **latitude** | **−90** to **90** |
| **longitude** | **−180** to **180** |
| **entityTypeId** | Entity type |
| **entityStatusId** | Entity status |

## Optional fields

| Field | Use |
|---|---|
| **nameAr** | Arabic name |
| **ownerUsrId** | Owner |
| **dataConfidentialityId** | Data confidentiality |
| **description** / **descriptionAr** | Descriptions |

## MapPicker

From the latitude or longitude fields open the map picker:

1. Google Maps shows a **pin** and a **radius circle**
2. Click the map or drag the pin to set coordinates
3. Use **Use Current Location** for the browser position (requires location permission)
4. Confirm to update **latitude** and **longitude** on the form

:::tip[Set radius before confirming on the map]
The preview circle follows **radius**. Check the km value on the form so it matches the real work area.
:::

:::warning[Radius unit]
The UI validates **radius** in **km** with a minimum of **0.01**. On save, values **≥ 50** are treated as meters. Do not mix kilometer and meter entry without this rule.
:::

## Record page and 360

### Standard view — `/Entities/GPS/Location/{id}`

- **Active** toggle
- **Type** and **status** pickers
- **Standard ↔ 360** switch
- Details form (SaveDetails) for save

### 360 view — `/Entities/GPS/Location/360/{id}`

Sidebar summary includes:

- **latitude** / **longitude** / **radius**
- **owner** (ownerUsrName)

Available panels:

- **Activities**
- **Attachments**
- **Logs**
- Details for edit

## Usage

1. Open `/Entities/GPS/Location`
2. Create a location or open a record to edit
3. Fill **name**, **label**, and **radius** (≥ 0.01 km)
4. Set **latitude** and **longitude** manually or via MapPicker / Use Current Location
5. Choose **entityTypeId** and **entityStatusId**
6. Add optional fields as needed, then save
7. Use 360 for summary, activities, attachments, and logs

## Best Practices

:::tip[Fix coordinates and radius before scheduling]
Do not link planned stops to a location with bad coordinates. Tracking uses the location point and radius for inside/outside comparison.
:::

:::note[Owner is optional]
**ownerUsrId** is optional; use it when you need clear ownership of the location record.
:::

## Related Sections

- [GPS introduction](/docs/gps/introduction)
- [Planned stops](/docs/gps/planned-stop)
- [Tracking](/docs/gps/tracking)
- [Glossary](/docs/gps/glossary)
- [Organization Locations](/docs/org/location)
