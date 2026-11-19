---
sidebar_position: 11
title: Change Password
---

# Change Password

Use this page to update your account password according to the UI security rules.

**Path:** `/changepassword`

## What This Screen Does

- Asks for current password, new password, and confirmation
- Shows a live strength meter and requirement checklist while you type
- On success clears the form and returns you to Profile

## Fields

| Field | Required |
|---|---|
| Current password | Yes |
| New password | Yes |
| Confirm password | Yes — must match the new password |

Each field supports show/hide.

## New Password Rules

The new password must meet **all** of the following:

| Rule | Detail |
|---|---|
| Length | At least 12 characters |
| Lowercase | At least one Latin lowercase letter (`a–z`) |
| Uppercase | At least one Latin uppercase letter (`A–Z`) |
| Number or symbol | At least one digit, symbol, or whitespace |

Strength levels are based on how many rules are met: Weak / Fair / Good / Strong.

## Steps

1. From [Profile](/docs/app/profile) open **Change Password** (or go directly to the path)
2. Enter your current password
3. Enter a new password until every rule is met
4. Confirm the new password
5. Click **Change Password**
6. On success you are redirected to Profile

**Cancel** or **Back to Profile** returns without saving.

## Important Rules

| Rule | Detail |
|---|---|
| Match | Confirmation must match the new password exactly |
| Server | Sends `{ oldPassword, newPassword }`; server rejection shows as a failure with message |
| After success | Fields reset, then navigate to `/profile` |

## Best Practices

:::tip[Prefer a longer passphrase]
Twelve or more characters with mixed case and a number/symbol is easier to remember than a short complex string.
:::

:::warning[Do not share your password]
Never send the new password by email or chat. Change it yourself on this page only.
:::

## Related Sections

- [Profile](/docs/app/profile)
- [Privacy Policy](/docs/app/privacy-policy)
