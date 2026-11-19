---
sidebar_position: 5
title: Services
---

# Services

**My Services** is the internal service catalogue. Pick a service, open its request form, save a draft, and submit.

**Path:** `/app/ServiceCatalogue`  
**Submit / edit:** `/app/ServiceCatalogue/Submit?Service={service code}`  
**Open a saved request:** add `&Id={request id}`

## What This Screen Does

- Shows active catalogue cards by entity-type tab
- Searches locally by name, code, or description
- Opens the service-specific request form

## Catalogue Tabs

| System tab value | UI label |
|---|---|
| Organizational | Organizational |
| HR Services | HR |
| Systems Access Services | Systems Access |
| End User Services | End User |
| Active Directory Services | Active Directory |
| Email Services | Email |
| ID Services | IDs |
| Gate Pass Services | Gate Pass |

Each tab loads catalogue items whose `EntityType.Name` matches that value.

## Browse Services

1. Open **My Services**
2. Select the right tab
3. Search if needed
4. Click a service card to open the submit form

The card shows the name, description (or a default “Submit a request for…” text), and an icon or photo.

:::note[ORG Suggestion]
On the Organizational tab, if no ORG Suggestion item exists, the page may create or stub a helper card so the request can still be started.
:::

## Submit Request Screen

Layout: sidebar + main content.

### Sidebar

- Back to Services
- Service name, request number after save, and status pill
- **Save Draft** (when editable)
- **Submit Request** (after a saved or ready draft exists)
- **Request on behalf of** — beneficiary user (required)
- Record tabs after save: Activities, Attachments, Logs, Insights
- **Conditions & Rules** — catalogue terms when present; otherwise default guidance about manager review and required fields

After submit, a **Submitted (Read Only)** banner appears.

### Main Content

1. Read-only status **Stepper**
2. **Overview** tab with the dynamic service form
3. **Attach** tab for some non–annual vacation requests
4. **Workflow** and **Approvals** tabs exist as structure; live status is driven by the stepper and related panels

## Create a Request

1. Choose a service from the catalogue
2. Confirm **Request on behalf of** (defaults to you)
3. Complete the service-specific fields
4. Click **Save Draft**
5. Review, then click **Submit Request** and confirm
6. After success the request locks and the view refreshes

## Important Rules

| Rule | Detail |
|---|---|
| Editing | Draft remains editable; non-draft (or session submit lock) is read-only |
| Vacation attachments | Non–annual leave types require at least one attachment before submit |
| Different forms | Each service has its own form; required fields vary |
| After submit | Track in [My Requests](/docs/app/my-requests); approvers act in [Inbox](/docs/app/inbox) |

## Best Practices

:::tip[Save draft before submit]
Save first so attachments and activities can bind to the request, then submit when complete.
:::

:::warning[Submit locks the form]
After confirmation the submitter form becomes read-only. Review fields before confirming.
:::

## Related Sections

- [My Requests](/docs/app/my-requests)
- [Inbox](/docs/app/inbox)
- [Incidents](/docs/app/incidents)
