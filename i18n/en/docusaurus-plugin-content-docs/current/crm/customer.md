---
sidebar_position: 4
title: Customers
---

# Customers

A **Customer** is the account master in CRM: commercial identity, ZATCA classification, pricing, blocking, and the hub for related deals, documents, and AR.

**Navigation:** Sidebar → Sales → Customers  
**Pages:** `/Entities/CRM/Customer` · `/Entities/CRM/Customer/{id}` · `/Entities/CRM/Customer/360/{id}`

## What a Customer does for your business

- Holds bilingual name, type, status, and **zatcaCustomerType**
- Separates B2B tax/address needs from lighter B2C profiles
- Supports Block / UnBlock, AssignPriceList, OpeningBalance, CreateInvoice, and AddPayment
- Exposes a **360** workspace for contacts and the full sales/AR chain

## Two types of Customer pages

| Page | When to use it |
|---|---|
| **Standard view** `/Entities/CRM/Customer/{id}` | Focus on details and record chrome |
| **360 view** `/Entities/CRM/Customer/360/{id}` | Daily operations across related entities |

## Customer list

### Columns (key)

Name, status, account manager, domain, industry, sector, amount, due.

### Filters

Search, type, status, account manager, industry, sector, country.

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Account identity |
| **type** / **status** | Record governance |
| **zatcaCustomerType** | Required for ZATCA classification |

### B2B address / VAT

For **B2B**, complete VAT and address fields: VAT, city, state, street, zip (as required by the form for that type).

## Lifecycle actions

| Action | Function |
|---|---|
| **Block** / **UnBlock** | Restrict or restore commercial activity on the account |
| **AssignPriceList** | Link a price list to the customer |
| **OpeningBalance** | Set or adjust opening balance |
| **CreateInvoice** | Start an AR invoice for the customer |
| **AddPayment** | Record a customer payment |

## After save — 360 tabs

| Tab | Content |
|---|---|
| **Details** | Customer form |
| **Contacts** | People linked to the account |
| **Deal** | Opportunities |
| **Pnl** | P&amp;L sheets |
| **Quote** | Quotations |
| **CustomerPO** | Customer purchase orders |
| **SalesOrder** | Sales orders |
| **InvoiceAR** | Sales invoices |
| **ReturnInvoiceAR** / **CreditNoteAR** / **DebitNoteAR** | AR adjustments |
| **Agreement** | Agreements |
| **Project** | Related projects |

## How to create or maintain a Customer

1. Open the customers list and create a customer, or open an existing record
2. Enter names, type, status, and **zatcaCustomerType**
3. For B2B, complete VAT and address fields
4. Save, then use Id or 360 for actions and related tabs
5. Block only when commercial activity must stop; UnBlock when restored

## Best Practices

:::tip[Set zatcaCustomerType before issuing invoices]
Missing or wrong ZATCA type blocks clean invoicing later.
:::

:::warning[B2B needs tax and address]
Do not leave VAT or address empty on B2B accounts that will receive formal invoices.
:::

:::note[360 is the operations hub]
Use 360 when working across contacts, deals, and AR documents for one account.
:::

## Related Sections

- [Leads](/docs/crm/lead)
- [Contacts](/docs/crm/contact)
- [Deals](/docs/crm/deal)
- [Invoices AR](/docs/crm/invoice-ar)
- [Payments AR](/docs/crm/payment-ar)
- [CRM & Sales introduction](/docs/crm/introduction)
