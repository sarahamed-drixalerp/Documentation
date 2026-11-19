---
sidebar_position: 23
title: Evaluation schema
---

# Evaluation schema

An **evaluation schema (Evaluation Schema)** defines the evaluation structure: name, score type, owner, then a tree of Goals and KPIs, and can be linked to evaluation cycles from the Cycles tab.

**Path:** Sidebar ← Human Resources ← Evaluation schemas  
**Pages:** `/Entities/HRM/EvaluationSchema` · `/Entities/HRM/EvaluationSchema/new` · `/Entities/HRM/EvaluationSchema/{id}`

## What the schema does

- Sets the schema name and score type (EvaluationScore)
- Adds goals, and each goal holds one or more KPIs
- Is published after content is complete for use in [Evaluations](/docs/hrm/evaluation)
- Shows a **Cycles** tab for linked evaluation cycles

## Required fields

| Field | Why it is required |
|---|---|
| **Name (name)** | Schema identity |
| **Score type (evaluationScoreId)** | Score scale for the schema |

### Owner

The owner is shown as read-only. Edit is allowed only when the record is **Draft** and the current user is the owner.

:::note[Draft + owner only]
UI message: the schema is read-only if you are not the owner or it is no longer in Draft.
:::

## Goals and KPIs

1. Save the schema first if it is new
2. Add a goal with a name and score type
3. Inside each goal add at least one KPI
4. Repeat until the evaluation structure is complete

## Publish

The **Publish** button requires publishable content:

- At least one goal
- Every goal contains **at least one KPI**
- Complete names and score types for goals and KPIs

:::danger[Do not publish an incomplete structure]
Without a complete goal and KPI, the schema will not support meaningful evaluations.
:::

## Cycles tab

On the record page the **Evaluation Cycles** tab manages cycles linked to the schema (assignment, publishing a cycle when UI conditions are met, such as assignees where required).

## Best Practices

:::tip[Fix the score type before building goals]
Changing the score type after a large structure is built increases confusion about levels at evaluation time.
:::

:::tip[Publish once the structure is stable]
After Publish it is used in evaluations; review goals and logical weights before publishing.
:::

## Related Sections

- [Evaluations](/docs/hrm/evaluation)
- [Evaluation score](/docs/hrm/evaluation-score)
- [Evaluation score level](/docs/hrm/evaluation-score-level)
- [Glossary](/docs/hrm/glossary)
