---
sidebar_position: 2
title: SLA Matrix
---

# SLA Matrix

The **SLA Matrix** defines response and resolution times per service priority (days / hours / minutes).

![SLA Matrix](/img/sla/sla-matrix.svg)

## What the Matrix Does for Your Business

- Links each priority to response and resolution targets
- Lets you load common defaults, then save
- Adds new priorities via the Service Priority drawer
- Blocks save when times are invalid or resolution is shorter than response

**Navigation:** Sidebar → Services Catalogue → SLA Matrix  
**Page:** `/Entities/SLA/SLAMatrix`

## Workspace

| Element | Behavior |
|---|---|
| **Title** | SLA Matrix + priority count |
| **Unsaved changes** | Badge when dirty |
| **Initialize Defaults** | Shown when all times are zero; loads values to review, then save |
| **Add Priority** | Service Priority drawer (APP) |
| **Refresh / Cancel** | Reload or discard edits |
| **Save Changes** | Enabled when dirty and valid |

### Columns

Priority | Response time (days / hours 0–23 / minutes 0–59) | Resolution time (same units)

### Validation rules

| Rule | Detail |
|---|---|
| Days | ≥ 0 |
| Hours | 0–23 |
| Minutes | 0–59 |
| Resolution ≥ response | Resolution must be greater than or equal to response |
| Minimum priorities | Keep at least two priorities when deleting |

Common defaults on initialize (not persisted until Save): High ≈ 4h response / 1d resolution; Medium ≈ 8h / 2d; Low ≈ 1d / 3d.

### Add Priority

Drawer uses the Service Priority form: name, nameAr, descriptions, color (optional in validation). Admin reference also: [Service Priority](/docs/org/service-priority).

## Best Practices

:::tip[Review defaults, then save]
Initialize Defaults alone does not persist — click **Save Changes** after review.
:::

:::warning[Keep at least two priorities]
The system rejects deleting below two priorities in the matrix.
:::

## Related

- [SLA introduction](/docs/sla/introduction)
- [Service Priority](/docs/org/service-priority)
- [Services Catalogue introduction](/docs/srv/introduction)
