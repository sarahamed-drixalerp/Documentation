---
sidebar_position: 19
title: Candidates
---

# Candidates

A **candidate (Candidate)** is the applicant record for hiring in Drixal ERP. From it you create the file, update personal, hiring, and financial data, then manage review stages through the workflow until completion or rejection.

**Path:** Sidebar ← Human Resources ← (via a job post or the direct link)  
**Pages:** `/Entities/HRM/Candidate` · record `/Entities/HRM/Candidate/{id}`

## What this screen does

- Shows the candidate list with create, edit, and delete from the Drawer
- Opens the record page to complete data and follow hiring stages
- Links the candidate to a job post via the Candidates tab on [Job post](/docs/hrm/job-post)

## List and drawer

1. Open `/Entities/HRM/Candidate`
2. Select **Create New Candidate** to open the save drawer
3. Fill the required fields and save
4. From the row: **Edit** opens the drawer or the record depending on the action, and **Delete** requires confirmation

## Required fields

| Field | Why it is required |
|---|---|
| **Type (EntityTypeId)** | Candidate record classification |
| **Status (EntityStatusId)** | Starting point in the lifecycle |

## Form sections on save

The save form (drawer / details) includes sections such as:

| Section | Typical content |
|---|---|
| **Hiring Information** | Start/end and join/exit dates, manager, shift, grade, job, branch, department, medical insurance, resume source |
| **Financials** | Currency, basic salary, total, cost, net, pending loans, overtime, working hours |
| **Personal Information** | Names and personal parts shown in the interface |

:::note[Sections exist on save]
Hiring, financial, and personal sections are part of the candidate form on save; fill what you know now and complete later from the record page.
:::

## Record page and workflow

On `/Entities/HRM/Candidate/{id}` the review stages appear. The current stage and comment are saved via **actionComment** (with stage/comment).

### Workflow actions

| Action | Meaning |
|---|---|
| **Submit & Next** | Move the candidate to the next stage with a comment if needed |
| **Complete** | Complete the workflow when the last stage is reached |
| **Reject** | Close the workflow as rejection or withdrawal according to the selected status |

1. Open the candidate record
2. Review the current stage
3. Choose the next status and add a comment when needed
4. Run **Submit & Next**, **Complete**, or **Reject**

:::warning[Cannot edit after completion]
When the workflow is complete, the active stage is locked and review cannot be edited as in ongoing stages.
:::

## Best Practices

:::tip[Link the candidate to a job post]
Add the candidate from the Candidates tab on [Job post](/docs/hrm/job-post) so submission date and stage stay under the same post. Details in [Job post candidate](/docs/hrm/job-post-candidate).
:::

:::tip[Update data before Complete]
Correct the job, grade, and expected salary before completing the workflow so conversion to an employee later is easier.
:::

## Related Sections

- [Job post](/docs/hrm/job-post)
- [Job post candidate](/docs/hrm/job-post-candidate)
- [Resume source](/docs/hrm/resume-source)
- [Glossary](/docs/hrm/glossary)
