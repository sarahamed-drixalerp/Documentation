---
sidebar_position: 24
title: Evaluation score
---

# Evaluation score

An **evaluation score (Evaluation Score)** is the scoring scale used in schemas and evaluations: a minimum and maximum, with subordinate levels between them.

**Path:** Sidebar ← Human Resources ← Evaluation scores  
**Pages:** `/Entities/HRM/EvaluationScore` · `/Entities/HRM/EvaluationScore/new` · `/Entities/HRM/EvaluationScore/{id}`

## What this screen does

- Defines a scale with bilingual names and min/max bounds
- Manages subordinate levels (Evaluation Score Levels)
- Is used as a “score type” inside [Evaluation schema](/docs/hrm/evaluation-schema)

## Required fields

| Field | Why it is required |
|---|---|
| **Name (name)** | Scale identity |
| **Arabic name (nameAr)** | Arabic display |
| **Minimum (min / Min Score Level)** | Start of the scale |
| **Maximum (max / Max Score Level)** | End of the scale (≥ minimum) |

## Subordinate levels

After save, score levels appear as child records. Intermediate levels can be added within the range.

:::warning[Scale endpoints cannot be deleted]
The **minimum** and **maximum** levels (scale endpoints) cannot be deleted from the UI. Delete only intermediate levels if needed.
:::

## Best Practices

:::tip[Choose a clear range before building]
A range such as 0–100 or 1–5 shapes the levels and Choose Level options in the evaluation.
:::

:::tip[Link the schema after levels are stable]
Do not publish a schema before the score levels are ready for evaluation.
:::

## Related Sections

- [Evaluation score level](/docs/hrm/evaluation-score-level)
- [Evaluation schema](/docs/hrm/evaluation-schema)
- [Evaluations](/docs/hrm/evaluation)
