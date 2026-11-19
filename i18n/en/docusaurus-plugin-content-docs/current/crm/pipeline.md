---
sidebar_position: 6
title: Pipelines and stages
---

# Pipelines and stages

A **Pipeline** is the stage container for deals. A **Stage** belongs to a pipeline and defines where opportunities sit until Won or Lost.

**Navigation:** Sidebar → Sales → Pipelines  
**Pages:** `/Entities/CRM/Pipeline` · `/Entities/CRM/Pipeline/{id}` · `/Entities/CRM/Stage` · `/Entities/CRM/Stage/{id}`

Stages are managed from the pipeline **Stages** tab (ListSub) and also have their own Stage entity pages.

## What Pipeline and Stage do for your business

- Define the sales path used on every deal
- Roll up amounts and GP% on the pipeline list
- Let you create stages from the pipeline Id page
- Drive **Move to next stage** on deals

## Pipeline list

### Columns (key)

Name, account manager, amount, pipeline amount, GP%.

### Filters

Search, type, status, account manager.

## Required fields — Pipeline

| Field | Why |
|---|---|
| **name** / **nameAr** | Pipeline identity |
| **type** / **status** | Record governance |

## Required fields — Stage

| Field | Why |
|---|---|
| **name** | Stage identity (required) |
| **pipeline** | Optional on the Stage form; stages under a pipeline Id are already scoped |

## Pipeline tabs

| Tab | Content |
|---|---|
| **Details** | Pipeline form |
| **Stages** | Child stages for this pipeline |

## How to set up a Pipeline

1. Create a pipeline with bilingual names, type, and status
2. Open the pipeline Id and use the **Stages** tab (or Stage pages) to add stages
3. Ensure each stage has a **name**
4. Select this pipeline (and a stage) when creating [Deals](/docs/crm/deal)

:::warning[Stage needs a pipeline on the deal]
On a deal, stage is cleared when the pipeline changes and stays disabled until a pipeline is selected.
:::

## Best Practices

:::tip[Define stages before opening many deals]
Deals depend on pipeline and stage. Incomplete stage lists confuse NextStage and reporting.
:::

:::note[Stage entity pages]
Stage has list and Id pages even when you mainly work from the pipeline Stages tab.
:::

## Related Sections

- [Deals](/docs/crm/deal)
- [CRM dashboard](/docs/crm/dashboard)
- [Reference data](/docs/crm/lookups)
- [CRM & Sales introduction](/docs/crm/introduction)
