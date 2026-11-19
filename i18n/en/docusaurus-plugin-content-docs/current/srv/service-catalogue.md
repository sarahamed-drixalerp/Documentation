---
sidebar_position: 2
title: Service Catalogue (Admin)
---

# Service Catalogue (Admin)

The sidebar **Services** item points to `/Entities/SRV/ServiceCatalogue` for managing catalogue entries (service name, type, status, and workflow/SLA links when available).

![Service catalogue](/img/srv/service-catalogue.svg)

## Current Portal Status

:::warning[No hosted admin page]
There is no `pages/Entities/SRV/ServiceCatalogue` route in the current UI. The menu item may not open a full admin screen.
:::

What works today for employees:

| Path | Use |
|---|---|
| `/app/ServiceCatalogue` | Browse by category and search |
| `/app/ServiceCatalogue/Submit?Service=…` | Fill, save, and submit a request |

See the full employee guide: [Services in Apps](/docs/app/services).

## Catalogue Item Fields (when the save form is available)

From the app catalogue save form (`App/ServiceCatalogue/Save`) — not wired to an admin page today:

| Field | Notes |
|---|---|
| **Service name (name)** | Required |
| **EntityTypeId / EntityStatusId** | Required |
| **nameAr / description** | Optional |

Logical links may include `WorkflowId`, `SLAId`, and `ServName` at the data/API layer.

## Best Practices

:::tip[Use Apps for daily requests]
Until an admin screen is hosted, create requests from **My Services** in Apps.
:::

## Related

- [Workflows](/docs/srv/workflows)
- [SLA Matrix](/docs/sla/sla-matrix)
- [Services in Apps](/docs/app/services)
- [Services Catalogue introduction](/docs/srv/introduction)
