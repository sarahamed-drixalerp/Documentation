---
sidebar_position: 4
title: Tracking
---

# Tracking

**Tracking** is a read-only screen for field attendance days on the map: planned stops versus actual attendance points, with inside/outside radius counts and distance lines.

**Path:** Side menu ← GPS ← Tracking  
**Pages:** `/Entities/GPS/Tracking` · `/Entities/GPS/Tracking/{userId}/{date}`

Also reachable via Attendance Tracking redirects:

- `/app/Attendance/Tracking` → `/Entities/GPS/Tracking`
- `/app/Attendance/Tracking/{userId}/{date}` → `/Entities/GPS/Tracking/{userId}/{date}`

:::note[Read-only — no CRUD]
Tracking does **not** create, edit, or delete locations, planned stops, or attendance records. Use [Locations](/docs/gps/location), [Planned stops](/docs/gps/planned-stop), and [Attendance](/docs/app/attendance) to change data.
:::

## What this screen does

- Lists **work days** with date, employee, scenario, and **Open Map**
- Filters by search and by day
- Opens the day **FieldMap** for planned versus actual
- Links back to the Attendance app at `/app/Attendance`

## Days list

| Column | Meaning |
|---|---|
| **date** | Work day date |
| **employee** (userName) | Employee |
| **scenario** | Day scenario summary |
| **Open Map** | Open the day map |

### Filters

| Filter | Use |
|---|---|
| **search** | Search employee / role / scenario / date |
| **day** (date) | Filter by an available day |

### Actions

1. **Refresh** — reload the days list
2. **Open Map** — go to `/Entities/GPS/Tracking/{userId}/{date}`
3. **Attendance** link — `/app/Attendance`

## Day detail — FieldMap

On `/Entities/GPS/Tracking/{userId}/{date}` the map and side panels show:

| Element | Meaning |
|---|---|
| **Planned stops (blue + radius)** | Planned sites with radius circle |
| **Check-in / Check-out** | Actual attendance points |
| **Unplanned** | Unplanned points |
| **Inside / Outside radius** | Counts inside/outside radius |
| **Distance lines** | Lines between actual and planned (inside/outside) |

Top indicators usually include: planned stop count, actual point count, inside radius, outside radius.

:::tip[Click a card to zoom the map]
Clicking a planned stop or an attendance point with coordinates focuses the map on that position.
:::

:::warning[Points without coordinates]
Some attendance records may have no GPS. They cannot be zoomed as map coordinates.
:::

## Usage

1. Open `/Entities/GPS/Tracking` (or via Attendance app redirects)
2. Filter by search or day as needed
3. Press **Refresh** if you need updated data
4. Press **Open Map** for a day and employee
5. Review planned (blue + radius) versus attendance and distance lines
6. For operational attendance use `/app/Attendance` — see [Attendance](/docs/app/attendance)

## Best Practices

:::tip[Prepare locations and planned stops before map review]
Without [Locations](/docs/gps/location) and [Planned stops](/docs/gps/planned-stop), there is no meaningful blue planned layer for inside/outside comparison.
:::

:::note[Attendance is the data source]
Tracking shows what field attendance recorded. Fix time or missing punches from the attendance path, not from Tracking.
:::

## Related Sections

- [GPS introduction](/docs/gps/introduction)
- [Locations](/docs/gps/location)
- [Planned stops](/docs/gps/planned-stop)
- [Glossary](/docs/gps/glossary)
- [Attendance](/docs/app/attendance)
