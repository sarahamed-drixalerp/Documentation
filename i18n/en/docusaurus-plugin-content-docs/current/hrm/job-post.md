---
sidebar_position: 20
title: Job post
---

# Job post

A **job post (JobPost)** is the record for publishing a vacancy: job, department, period, hiring owners, then the candidate list. The interface is available on two routes that use the same JobPost entity in the API.

## Two routes for the same entity

| Route | Titles | List / record / 360 |
|---|---|---|
| **JobPost** | Job Posts | `/Entities/HRM/JobPost` · `/Entities/HRM/JobPost/{id}` · `/Entities/HRM/JobPost/360/{id}` |
| **Post** | Posts | `/Entities/HRM/Post` · `/Entities/HRM/Post/{id}` — **no** 360 view |

**Common path from the side menu:** Human Resources ← Job Posts ← `/Entities/HRM/Post`

:::note[Same API]
Both routes save and read the **JobPost** entity. The UI difference is the list title (Posts vs Job Posts) and that the **360** workspace exists only on the JobPost route.
:::

## What a job post does

- Defines the vacancy with bilingual names, job, department, period, and owners
- Starts as Draft, then is published with the **Post** button to **Published** with edit locked
- Collects candidates in the **Candidates** tab

## Required fields

| Field | Why it is required |
|---|---|
| **Name (name)** | Post title |
| **Arabic name (nameAr)** | Arabic display and reports |
| **Job (jobId)** | Linked vacancy |
| **Department (departmentId)** | Requesting unit |
| **Start date (startDate)** | Start of the posting period |
| **End date (endDate)** | End of the period (on or after start) |
| **Recruiter (recruiterUsrId)** | Who manages sourcing |
| **Hiring manager (hiringManagerUsrId)** | Approved hiring manager |
| **Type / status / confidentiality** | Header governance (EntityType / EntityStatus / DataConfidentiality) |

### Optional

| Field | Note |
|---|---|
| **Budget (budget)** | Optional when present on the JobPost form |

## Create and publish

1. From `/Entities/HRM/Post` or `/Entities/HRM/JobPost`, select create new
2. Fill the required fields
3. Save the record (status remains **Draft**)
4. When the post is ready, select **Post** (publish the announcement)
5. After publish the status becomes **Published** and field edits are locked

:::danger[Edit locks after Published]
Status path: **Draft → Post → Published**. Do not rely on a later edit after publish; review job, department, dates, and owners before selecting Post.
:::

## Tabs

On the record page (after save):

| Tab | Content |
|---|---|
| **Details** | Post data and fields |
| **Candidates** | Candidates for this post — see [Job post candidate](/docs/hrm/job-post-candidate) |

## 360 view

Available only on the JobPost route:

- `/Entities/HRM/JobPost/360/{id}`

The Post route does not provide a separate 360 workspace; the record page is the workspace.

## Best Practices

:::tip[Publish after owners and dates are complete]
Without a recruiter, hiring manager, and a valid period, candidate tracking and accountability weaken.
:::

:::tip[Add candidates from the Candidates tab]
Do not create a separate candidate without linking them to the post when the application is for this vacancy.
:::

## Related Sections

- [Job post candidate](/docs/hrm/job-post-candidate)
- [Candidates](/docs/hrm/candidate)
- [Jobs](/docs/hrm/job)
- [Glossary](/docs/hrm/glossary)
