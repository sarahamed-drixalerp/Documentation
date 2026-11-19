---
sidebar_position: 9
title: Monitoring
---

# Monitoring

**Monitoring** shows the Administration **NightlyJob** operations dashboard: schedule health, step progress, history, and manual runs.

**Path:** Sidebar ← Administration ← Monitoring  
**Page:** `/Entities/ADM/monitoring`

## What Monitoring Does for Your Business

- Shows whether the nightly job is healthy
- Lists the last full success, next scheduled run, and last failure
- Tracks step outcomes for ExchangeRates, FinancialDue, and EntityTrend
- Lets operators **Run Now** when a manual trigger is needed

## Schedule

| Setting | Value |
|---|---|
| Cadence | Daily |
| Time | 11:00 AM |
| Time zone | Cairo |

## KPI cards

| KPI | Meaning |
|---|---|
| System Health | Overall job health |
| Last Full Success | Most recent successful full run |
| Next Scheduled Run | Upcoming scheduled time |
| Last Failure | Most recent failure |

## Steps

The nightly job includes these steps:

1. **ExchangeRates**
2. **FinancialDue**
3. **EntityTrend**

## Actions

| Action | Meaning |
|---|---|
| **Refresh** | Reload dashboard data |
| **Run Now** | Start a manual run (confirm in the dialog) |
| **Details** | Open run / step detail |

## History

History columns:

| Column | Meaning |
|---|---|
| Started At | When the run or step started |
| Step Name | ExchangeRates / FinancialDue / EntityTrend |
| Status | Success / Failed / Skipped |
| Trigger | Scheduled or Manual |
| Duration | How long it took |
| Metrics | Step metrics |

### Filters

- Date range: **7** / **14** / **30** days
- Step
- Status: Success / Failed / Skipped
- Trigger: Scheduled | Manual

## Usage

1. Open Monitoring
2. Check the KPI cards and next scheduled run (Daily 11:00 AM Cairo)
3. Review recent history with filters as needed
4. Use **Refresh** after waiting for an in-progress run
5. Use **Run Now** only when a manual trigger is required, then confirm

## Best Practices

:::tip[Prefer the scheduled run]
Use **Run Now** for recovery or urgent refresh—not as a substitute for the daily Cairo schedule.
:::

:::note[Confirm before Run Now]
Run Now asks for confirmation so a manual trigger is intentional.
:::

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Currencies](/docs/adm/currency)
- [Entity Management](/docs/adm/entity-management)
- [Glossary](/docs/adm/glossary)
