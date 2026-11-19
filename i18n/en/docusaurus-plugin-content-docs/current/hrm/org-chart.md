---
sidebar_position: 39
title: Organizational chart
---

# Organizational chart

The **organizational chart (Org Chart)** shows the employee hierarchy by direct manager (direct reports), with search, expand/collapse, pan, zoom, and an employee panel.

**Path:** Sidebar ← Human Resources ← Organizational chart  
**Page:** `/Entities/HRM/OrgChart`

## What this screen does

- Builds the tree from direct manager relationships
- Shows **Employees** and **Unassigned** counters (no direct manager)
- Supports search, expand all, collapse all, refresh, and pan/zoom on the canvas
- Opens **EmployeePopup** for a quick view of the selected employee

## Counters

| Counter | Meaning |
|---|---|
| **Employees** | Number of nodes in the loaded tree |
| **Unassigned** | Employees without a visible direct manager |

## Canvas tools

1. Open `/Entities/HRM/OrgChart`
2. Use the search box to find an employee; matching results are highlighted
3. **Expand all** / **Collapse all** to control branches
4. **Refresh** to reload the tree
5. Pan and zoom the canvas to review the structure
6. Select a node to open **EmployeePopup** when available

:::tip[Correct the direct manager first]
An incomplete tree or a high Unassigned count usually means the direct manager field is empty on employee records.
:::

:::warning[Do not use the chart as a substitute for permissions]
The structure is for operational display; system permissions are managed separately from the Org Chart drawing.
:::

## Best Practices

:::tip[Review Unassigned after every bulk hire]
After importing or creating new employees, refresh the chart and confirm managers are linked.
:::

## Related Sections

- [Human Resources dashboard](/docs/hrm/dashboard)
- [Employee list](/docs/hrm/employee-list)
- [Employee details and fields](/docs/hrm/employee-details)
