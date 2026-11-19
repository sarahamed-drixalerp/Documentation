---
sidebar_position: 1
title: GPS introduction
---

# GPS introduction

The **GPS** module in Drixal ERP is the hub for geographic locations (geofence), planned stops, and the field attendance tracking map. It ties work sites to a radius, schedules employee visits, then shows planned versus actual points on the map.

Without this module, site coordinates, field stops, and geographic attendance stay scattered. Inside Drixal, a GPS location becomes a record with coordinates and radius, a planned stop links location, employee, and date, and tracking is read from attendance records without create/edit from the tracking screen itself.

:::note[ORG Location is hierarchy without geo]
An **Organization Location (ORG Location)** is a hierarchy record (branch and parent) **without** geographic coordinates or radius. Do not use it as a substitute for GPS Locations. See [Organization Locations](/docs/org/location).
:::

:::note[FLT and FMS are not part of GPS]
**Fleet (FLT)** and **Facilities (FMS)** are separate modules and are not part of GPS.
:::

## What the module does for your business

- Defines **GPS Locations** with coordinates and radius (geofence)
- Schedules **Planned Stops** for an employee on a date at a location
- Shows **Tracking** on a map: planned versus actual attendance
- Links day-to-day work to the [Attendance](/docs/app/attendance) app

## Operating hierarchy

```text
GPS Location
  └── PlannedStop ← employee + date
        └── Tracking (day) ← planned vs actual attendance
```

| Level | Purpose |
|---|---|
| **Location** | Geographic point with radius for inside/outside checks |
| **PlannedStop** | Planned visit to a location on a date for an assigned user |
| **Tracking** | Work-day list and planned-vs-actual map — read-only |

## Where to find it in the system

From the side menu choose **GPS**, then:

- **Attendance** ← `/app/Attendance` (attendance app; documented in the app guide)
- **Tracking** ← `/Entities/GPS/Tracking`
- **Planned Stops** ← `/Entities/GPS/PlannedStop`
- **Locations** ← `/Entities/GPS/Location`

## Who uses this section

| Role | Daily use |
|---|---|
| Field / HR operator | Define locations and radius; schedule planned stops |
| Supervisor | Open tracking days and compare planned vs actual on the map |
| Employee (Attendance app) | Check in / check out; location appears in tracking when coordinates exist |

## How the GPS guide is organized

1. Understand GPS Location vs Organization Location
2. Create locations with radius and coordinates
3. Schedule planned stops linked to location and employee
4. Read tracking days and the field map
5. Review glossary terms (geofence, inside/outside, unplanned)

## Best Practices

:::tip[Create locations before planned stops]
Create a [Location](/docs/gps/location) with coordinates and radius first, then create a [Planned Stop](/docs/gps/planned-stop). The stop inherits coordinates and radius from the location.
:::

:::warning[Tracking is read-only]
The [Tracking](/docs/gps/tracking) screen does not create or edit records. Correct data in locations, planned stops, or via [Attendance](/docs/app/attendance).
:::

## Related Sections

- [Locations](/docs/gps/location)
- [Planned stops](/docs/gps/planned-stop)
- [Tracking](/docs/gps/tracking)
- [Glossary](/docs/gps/glossary)
- [Attendance](/docs/app/attendance)
- [Organization Locations](/docs/org/location)
