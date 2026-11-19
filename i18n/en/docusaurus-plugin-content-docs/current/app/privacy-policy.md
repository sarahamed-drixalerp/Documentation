---
sidebar_position: 12
title: Privacy Policy
---

# Privacy Policy

The **Privacy Policy** page shows how personal data is handled in the platform. Use the table of contents to jump between sections.

**Path:** `/privacyPolicy`

## What This Screen Does

- Shows the policy introduction and sections with a side table of contents
- Highlights when content is still a draft pending management approval
- Supports scroll-spy for the active section and a back-to-top control

## UI Sections

1. **Header** — title, Draft badge when applicable, subtitle, and last-updated date when available
2. **Draft notice** — explains that structural text is not yet an official approved policy (when the document is draft)
3. **On this page** — section links
4. **Content** — intro plus section cards
5. **Contact note** — placeholder for inquiry details after an official policy is approved
6. **Back to top** — appears after scrolling down

## Expected Document Sections

| Id | Topic |
|---|---|
| collect | Information We Collect |
| use | How We Use Your Information |
| storage | Data Storage and Security |
| sharing | Information Sharing |
| cookies | Cookies and Tracking |
| rights | User Rights and Data Privacy |
| updates | Policy Updates and Contact Information |

Each section may include paragraphs and bullets, and may carry a “pending approval” note while the document is draft.

## How to Browse

1. Open the policy from the user menu or the security link on [Profile](/docs/app/profile)
2. Read the draft notice if it appears
3. Use **On this page** to jump to a section
4. If loading fails, use **Retry**
5. Use **Back to top** after long scrolling

## Content Source and Rules

| Rule | Detail |
|---|---|
| Current draft | In the current app the page builds a draft document from UI text; no published CMS/API policy endpoint is wired yet |
| Draft badge | Shown when `isDraft = true` |
| Last updated | Shown only when a date is available |
| Language change | Rebuilds the text for the active UI language |

:::warning[Draft is not a final legal policy]
If the Draft badge or “pending management approval” notice is visible, do not treat the text as the company’s approved policy until the official version is published.
:::

## Best Practices

:::tip[Re-read after official approval]
When the draft badge disappears and a last-updated date appears, review the rights and contact sections again.
:::

## Related Sections

- [Profile](/docs/app/profile)
- [Change Password](/docs/app/change-password)
