---
sidebar_position: 5
title: Glossary
---

# Glossary

Short definitions as they appear in the Drixal ERP GPS module. English system names are shown in parentheses.

| Term | Definition |
|---|---|
| GPS | Module for geographic locations, planned stops, and field attendance day maps |
| GPS Location | Point with coordinates and radius (geofence) on `/Entities/GPS/Location` |
| Organization Location (ORG Location) | Hierarchy record without coordinates; documented in [Organization Locations](/docs/org/location), not a GPS entity |
| Geofence | Circle around location coordinates defined by **radius** for inside/outside checks |
| Radius | On the Location UI in **km** (≥ 0.01); values **≥ 50** are treated as meters on convert/save |
| PlannedStop | Planned visit to a location on **planDate** for an assigned user; coordinates and radius come from the location |
| Planned vs actual | Comparison of the day’s planned stops with recorded check-in/out points on the map |
| Unplanned | Attendance point on the tracking map not linked to a planned stop |
| Inside radius | Actual point that falls within the location/planned-stop radius circle |
| Outside radius | Actual point that falls outside the radius circle |
| Distance lines | Lines on the day map linking actual to planned and marked inside/outside |
| Tracking | Read-only work-day list and FieldMap on `/Entities/GPS/Tracking` — no CRUD |
| Standard view / record | Details, create, and edit page for Location or PlannedStop |
| 360 view | Record workspace with summary, activities, attachments, and logs |

## Related Sections

- [GPS introduction](/docs/gps/introduction)
- [Locations](/docs/gps/location)
- [Planned stops](/docs/gps/planned-stop)
- [Tracking](/docs/gps/tracking)
- [Attendance](/docs/app/attendance)
- [Organization Locations](/docs/org/location)
