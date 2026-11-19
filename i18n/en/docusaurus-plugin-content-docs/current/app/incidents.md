---
sidebar_position: 8
title: Incidents
---

# Incidents

**Incidents** lists only catalogue services of entity type **Incidents**. Open the matching incident form (workstation, login, email, Wi‑Fi, and others depending on what the catalogue provides).

**Path:** `/app/incidents`  
**Submit:** `/app/ServiceCatalogue/Submit?Service={incident service code}`

## What This Screen Does

- Loads service-catalogue cards filtered to `EntityType.Name = Incidents`
- Searches by name, code, or description
- Routes you into the same [Services](/docs/app/services) submit flow for that incident code

There are no extra tabs on the incidents list; classification is already applied by entity type.

## Browse and Submit an Incident

1. Open **Incidents**
2. Search for the problem type if needed
3. Click a card
4. On the submit screen: set **Request on behalf of**, complete the incident fields
5. **Save Draft**, then **Submit Request** after confirmation

## Common Fields on Incident Forms

Fields vary by incident type. INC* forms typically include:

| Field | Notes |
|---|---|
| Entity Type | Usually required |
| Urgency | Usually required |
| Impact | Usually required |
| Severity | Usually required |
| Description | Optional on many forms |
| Request on behalf of | From the shared sidebar |

Example codes present in the UI catalogue helpers: INCWorkstation, INCLogin, INCEmail, INCWIFI, INCPrinter, INCAccess, and others depending on catalogue setup.

## Status and Locking

- Draft remains editable
- After submit the submitter form locks (read-only)
- Track status in [My Requests](/docs/app/my-requests)
- Reviewers act from [Inbox](/docs/app/inbox)

## Important Rules

| Rule | Detail |
|---|---|
| Source | Same service catalogue with Incidents filter only |
| No admin edit from the card | Click opens submit; no end-user edit/delete menu is shown here |
| Search | Client-side over the loaded list |

## Best Practices

:::tip[Pick the closest incident type]
A login incident is not the same as a workstation incident. The right type routes review and resolution faster.
:::

:::warning[Set urgency, impact, and severity carefully]
These fields drive priority and handling. Do not inflate urgency without cause.
:::

## Related Sections

- [Services](/docs/app/services)
- [My Requests](/docs/app/my-requests)
- [Inbox](/docs/app/inbox)
