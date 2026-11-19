---
sidebar_position: 3
title: Leads
---

# Leads

A **Lead** is the start of the sales funnel in Drixal ERP. Every inbound opportunity — individual (B2C) or company (B2B) — is recorded here before qualification to a customer or disqualification.

**Navigation:** Sidebar → Sales → Leads  
**Pages:** `/Entities/CRM/Lead` · `/Entities/CRM/Lead/new` · `/Entities/CRM/Lead/{id}`

There is no 360 view; the record page is the workspace (Details, Activities, Attachments, Logs, and Insights where available).

## What a Lead does for your business

- Captures inbound demand: name, industry, sector, account manager
- Separates individual (B2C) data from company (B2B) data
- Provides two formal actions: **Qualify** to a customer (optional contact) or **Disqualify** with a note
- Links qualified records to customer and contact pages from the list

## Lead list

### Views

List, cards, and tree (group by type, status, industry, or sector).

### Default columns

Name, domain, account manager, annual revenue, mobile, employees, and row actions.

When status is **Qualified**, quick links to customer and/or contact appear if present.

### Filters

Search, type, status, industry, sector.

## Create a Lead

1. From the list, create a new lead
2. Enter English and Arabic names
3. Set type and status
4. Fill Individual (B2C) and/or Company (B2B) sections for the opportunity type
5. Save before any Qualify or Disqualify action

### Required fields

| Field | Why |
|---|---|
| **name** / **nameAr** | Search and display |
| **type** / **status** | Record governance |

### Form sections

| Section | Useful content |
|---|---|
| **General** | Issue date, follow-up, industry, sector, account manager, country, city, description |
| **Individual (B2C)** | First/last name, email, job title, mobile, gender |
| **Company (B2B)** | Domain, website, employees, annual revenue, phone, company email |

Default confidentiality is often **Internal**.

## Qualify and Disqualify

| Action | Rules |
|---|---|
| **Qualify** | Must save first; disabled if already Qualified; choose B2C, B2B, or B2B + contact; **comment required**; creates a customer (and contact when needed) |
| **Disqualify** | Disabled if Qualified or unsaved; **note required** (up to 500 characters) |
| **Type / status** | Read-only after qualification |

:::warning[Save before Qualify]
Qualify and Disqualify require a saved record. A tooltip asks you to save the lead first if you try earlier.
:::

## After save

- Qualify → customer `/Entities/CRM/Customer/{id}` and maybe a contact
- Activities, attachments, and logs on the record page
- Continue later to [Deals](/docs/crm/deal) when opening an opportunity

## Common mistakes

- Trying to qualify before save
- Invalid email or mobile format
- Name longer than 150 characters
- Disqualify without a note

## Best Practices

:::tip[Separate B2C from B2B on day one]
Fill the individual or company section clearly so qualification creates the right records.
:::

:::tip[Assign an account manager and follow-up]
Without an owner and follow-up date, inbound leads stall in the list.
:::

## Related Sections

- [Customers](/docs/crm/customer)
- [Contacts](/docs/crm/contact)
- [Deals](/docs/crm/deal)
- [CRM & Sales introduction](/docs/crm/introduction)
