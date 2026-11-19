---
sidebar_position: 9
title: Attendance
---

# Attendance

The **Attendance** page records your daily check-in and check-out and shows your attendance history. The clock updates live; the large button performs the next punch (Check In or Check Out) based on your current status.

**Path:** `/app/Attendance`

## What This Screen Does

- Shows the current time and date
- Records check-in or check-out and tries to attach device location when allowed
- Summarizes today’s check-in, check-out, and total hours
- Lists prior attendance records with status

## Screen Sections

### Left — Clock and Punch

1. Current time (`HH:mm:ss`) and date
2. Large circular button showing the next action: **Check In** or **Check Out**
3. Three summary tiles: check-in time, check-out time, total hours

### Right — Records

- **Attendance Records** title with count and Refresh
- Sortable table with paging when more than 10 rows

| Column | Content |
|---|---|
| Date | Record date and weekday |
| Check In | Check-in time |
| Check Out | Check-out time |
| Total Hrs | Calculated hours |
| Status | **Completed** when a valid check-out exists; otherwise **In Progress** |

## How to Check In or Out

1. Open `/app/Attendance`
2. Wait for current status and records to load
3. Click the circular button
4. Allow or deny browser location if prompted; on failure the punch is still sent without coordinates
5. On success, a toast appears and summaries/records refresh
6. Wait a few seconds before the next punch (duplicate protection)

## Important Rules

| Rule | Detail |
|---|---|
| Punch type | Taken from server status: if status matches Check Out, send `checkOut`; otherwise `checkIn` |
| Location | Optional from the browser (~5s timeout); failure does not block the attempt |
| Cooldown | About 5.5 seconds after a successful punch; attempts during cooldown show a wait warning |
| Duplicates | If the server ignores a duplicate punch, a wait message appears and the UI refreshes |
| Other errors | Failure toast with server detail when available |

:::note[Field tracking]
Paths under `/app/Attendance/Tracking` redirect to GPS Tracking at `/Entities/GPS/Tracking` for field-map views. That is separate from the daily punch button.
:::

## Best Practices

:::tip[Punch when work starts and when it ends]
Do not rely on remembering later. The button always reflects the next action for your status.
:::

:::warning[Do not click repeatedly]
The system protects against duplicate punches. Wait for success, then continue working.
:::

## Related Sections

- [Timesheet](/docs/app/timesheet)
- [Profile](/docs/app/profile)
