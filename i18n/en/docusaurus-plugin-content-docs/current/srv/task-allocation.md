---
sidebar_position: 4
title: Task Allocation
---

# Task Allocation

**Task Allocation** is a lookup used to link workflow activities to an assignment method. Managed as list + drawer under Services Catalogue in the sidebar (route lives under PMO).

![Task Allocation](/img/srv/task-allocation.svg)

## What It Does for Your Business

- Defines English/Arabic names for task allocation methods
- Activates or deactivates records from the list
- Is selected later on workflow activities (`TaskAllocationId`) when a workflow editor is available

**Navigation:** Sidebar → Services Catalogue → Task Allocation  
**Page:** `/Entities/PMO/TaskAllocation`

## List

| Area | Content |
|---|---|
| **Columns** | English name, Arabic name, EN/AR description, Active?, actions |
| **Filters** | Search on name |
| **Active?** | List toggle saved immediately (not in the drawer) |

Actions: create, edit (drawer), delete with confirmation.

## Drawer Fields

| Field | Notes |
|---|---|
| **name** | Required |
| **nameAr** | Required |
| **description / descriptionAr** | Optional |

Drawer buttons: Save, Save & Close.

## Best Practices

:::tip[Clear bilingual names]
Use a name that describes the assignment rule (role or team) because activities will reference this lookup.
:::

## Related

- [Workflows](/docs/srv/workflows)
- [Services Catalogue introduction](/docs/srv/introduction)
