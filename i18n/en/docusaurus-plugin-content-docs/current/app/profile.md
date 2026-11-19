---
sidebar_position: 10
title: Profile
---

# Profile

From **Profile** you manage your photo, phone number, language, currency, time zone, and appearance, and you can open change-password and privacy links or sign out.

**Path:** `/profile`

## What This Screen Does

- Shows your current session data and saves edits
- Uploads or removes your profile photo
- Sets preferred language, currency, and time zone
- Toggles dark mode immediately
- Opens security and account links

## Screen Sections

1. **Header** — title, **Cancel**, **Save Changes** (enabled only when something changed)
2. **Photo card** — image or initials, name, email, seat-type badge when present, Upload/Remove
3. **Contact** — email (display-only in the current UI), phone
4. **Preferences** — preferred language, preferred currency, time zone
5. **Appearance** — dark mode switch
6. **Security** — **Change Password** and **Privacy Policy** links (new tab)
7. **Account** — sign out on this device

## Fields

| Field | Notes |
|---|---|
| Photo | PNG / JPEG / JPG / WEBP / GIF, max 5 MB; preview before save |
| Email | Visible and disabled for direct editing |
| Phone | Optional |
| Language | English or Arabic (required) |
| Currency | Optional select |
| Time zone | Lookup from time-zone options |
| Dark mode | Applies immediately without waiting for form save |

## How to Save Changes

1. Edit fields or upload a photo
2. Click **Save Changes**
3. On success the session updates; if language changed, the UI language updates
4. **Cancel** restores the last loaded values on the screen

## Photo

1. Click **Upload Image** or the camera overlay
2. Choose a file within allowed types and size
3. Review the preview, then save from the page header
4. **Remove** clears the photo on the next save

## Security and Account Links

- **Change Password** → [Change Password](/docs/app/change-password) in a new tab
- **Privacy Policy** → [Privacy Policy](/docs/app/privacy-policy) in a new tab
- **Sign out** → ends the session on this device

## Important Rules

| Rule | Detail |
|---|---|
| Save disabled until dirty | Button stays disabled until fields or photo change |
| Photo size | Over 5 MB is rejected |
| Language | Required among available options |
| Email OTP path | A verification dialog exists in the page; the email field itself is currently disabled for direct edit |

## Best Practices

:::tip[Set language and time zone first]
Dates and numbers elsewhere in the app follow your personal preferences after save.
:::

## Related Sections

- [Change Password](/docs/app/change-password)
- [Privacy Policy](/docs/app/privacy-policy)
