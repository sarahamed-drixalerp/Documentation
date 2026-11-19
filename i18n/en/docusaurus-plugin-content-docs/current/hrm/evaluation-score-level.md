---
sidebar_position: 25
title: Evaluation score level
---

# Evaluation score level

An **evaluation score level (Evaluation Score Level)** is a selectable value within an [evaluation score](/docs/hrm/evaluation-score) scale. Levels appear to the evaluator in the level-choice dialog during evaluation.

**Usual management:** From inside the evaluation score record  
**UI:** List with create/edit drawer (List + Drawer)

## What the level does

- Defines a numeric value within the scale (`levelValue_dec`)
- Links to an evaluation score record (`EvaluationScoreId`)
- Provides **Choose Level** options for each KPI

## Required fields

| Field | Why it is required |
|---|---|
| **Type (EntityTypeId)** | Record classification |
| **Status (EntityStatusId)** | Level status |

### Other primary fields

| Field | Rule |
|---|---|
| **Evaluation score (EvaluationScoreId)** | Parent scale |
| **Level value (levelValue_dec)** | ≥ 0 |

## From the list / drawer

1. From the evaluation score record or the levels list, open create
2. Fill type, status, value, and the evaluation score link
3. Save from the drawer
4. To edit, open the drawer from the row actions

:::note[Scale endpoints]
The minimum and maximum levels of the evaluation score cannot be deleted as endpoints. See [Evaluation score](/docs/hrm/evaluation-score).
:::

## Best Practices

:::tip[Keep values within min/max]
A value outside the evaluation score range confuses the evaluator and weakens result consistency.
:::

## Related Sections

- [Evaluation score](/docs/hrm/evaluation-score)
- [Evaluation schema](/docs/hrm/evaluation-schema)
- [Evaluations](/docs/hrm/evaluation)
