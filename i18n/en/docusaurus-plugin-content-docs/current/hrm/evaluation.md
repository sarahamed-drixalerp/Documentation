---
sidebar_position: 22
title: Evaluations
---

# Evaluations

An **evaluation (Evaluation)** is a performance evaluation of an employee based on a published [evaluation schema](/docs/hrm/evaluation-schema), by choosing a level for each KPI and then submitting the evaluation.

**Path:** Sidebar ← Human Resources ← Evaluations  
**Pages:** `/Entities/HRM/Evaluation` · create `/Entities/HRM/Evaluation/new` · record `/Entities/HRM/Evaluation/{id}`

## What this screen does

- Shows employee evaluations with schema, score, dates, and status
- Creates an evaluation by linking employee + schema
- Lets you choose a level for each KPI via the **DlgChooseLevel** dialog
- Locks edits after **Submitted**

## List columns

| Column | Meaning |
|---|---|
| **Employee** | Who is evaluated |
| **Schema** | Goals and KPIs schema |
| **Score** | Overall result when available |
| **Dates** | Start, end, and evaluation period shown in the table |
| **Status** | Such as draft or Submitted |

## Required fields on create

| Field | Why it is required |
|---|---|
| **Evaluation schema (EvaluationSchemaId)** | Source of goals and KPIs |
| **Employee (EmployeeId)** | Who is evaluated |

The record name is often composed from the employee name and the schema name.

## Goals and KPIs on the record page

1. Open `/Entities/HRM/Evaluation/{id}`
2. In the **Goals and KPIs** section, goals and their KPIs from the schema appear
3. For each KPI select **Choose Level** to open **DlgChooseLevel**
4. Choose the appropriate level, then complete the remaining KPIs

:::warning[Submit Evaluation requires a level for every KPI]
Submit will not be accepted if a KPI remains without a level. Expected message: choose a level for every KPI before submit.
:::

## Submit evaluation and lock

1. After assigning a level for every KPI, select **Submit Evaluation**
2. Status changes to **Submitted**
3. Edits on levels and editable evaluation data are locked

:::danger[Edit locks after Submitted]
Review levels and comments before submit; do not rely on a direct edit after submission.
:::

## Best Practices

:::tip[Publish the schema before creating the evaluation]
Without complete goals and KPIs on the schema, no evaluable content appears. See [Evaluation schema](/docs/hrm/evaluation-schema).
:::

:::tip[Prepare score levels first]
Choose Level buttons depend on [evaluation score](/docs/hrm/evaluation-score) levels. Without levels, choice is not possible.
:::

## Related Sections

- [Evaluation schema](/docs/hrm/evaluation-schema)
- [Evaluation score](/docs/hrm/evaluation-score)
- [Evaluation score level](/docs/hrm/evaluation-score-level)
- [Employee evaluations tab](/docs/hrm/employee-evaluations-tab)
