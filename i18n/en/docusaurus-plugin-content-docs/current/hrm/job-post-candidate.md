---
sidebar_position: 21
title: Job post candidate
---

# Job post candidate

A **job post candidate (JobPostCandidate)** is the link between a [job post](/docs/hrm/job-post) and a [candidate](/docs/hrm/candidate). It is managed from the **Candidates** tab inside the post record, not as a standalone main list for daily use.

**Location:** Inside `/Entities/HRM/Post/{id}` or `/Entities/HRM/JobPost/{id}` ← **Candidates** tab  
**Legacy path:** `/Entities/HRM/JobPostCandidate/{id}` redirects to the candidate record

## What this link does

- Adds a candidate to a specific post with a submission date
- Shows the current stage extracted from **actionComment**
- On edit, opens the **candidate** page to complete workflow and data

## Adding a candidate from the Candidates tab

1. Open the job post
2. Go to the **Candidates** tab
3. Select **Add New Candidate**
4. In the dialog fill the required fields and save

### Required fields in the add dialog

| Field | Why it is required |
|---|---|
| **Candidate** | Who is linked to this post |
| **Submission date (submissionDate)** | When the application was submitted for this vacancy |

## Stage in actionComment

The stage column in the list is read from **actionComment** (a payload that includes the stage). Stage updates happen through the candidate workflow on the candidate page (Submit & Next / Complete / Reject), not as a free-standing field in the add dialog.

## Edit and delete

| Action | Result |
|---|---|
| **Edit** | Opens `/Entities/HRM/Candidate/{id}` for candidate data and workflow |
| **Delete** | Removes the JobPostCandidate link after confirmation (subject to permission) |

## Redirect from JobPostCandidate

If you open `/Entities/HRM/JobPostCandidate/{id}`:

- The system tries to find the linked candidate id
- Redirects to `/Entities/HRM/Candidate/{id}`
- If that fails, redirects to the posts list `/Entities/HRM/Post`

:::note[Edit = candidate page]
Do not look for a separate JobPostCandidate edit form; daily work after adding happens on the candidate record.
:::

## Best Practices

:::tip[Set the submission date when adding]
submissionDate is the basis for candidate order and sourcing reports; do not leave it for later guessing.
:::

:::warning[Update the stage from the candidate workflow]
The stage shown in the tab follows actionComment after Submit & Next, Complete, or Reject on the candidate page.
:::

## Related Sections

- [Job post](/docs/hrm/job-post)
- [Candidates](/docs/hrm/candidate)
- [Jobs](/docs/hrm/job)
