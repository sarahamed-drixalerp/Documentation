---
sidebar_position: 1
title: CRM & Sales introduction
---

# CRM & Sales introduction

The **CRM & Sales** module in Drixal ERP manages the commercial path from inbound demand to cash: leads, customers, contacts, pipeline and deals, P&amp;L and quotations, customer purchase orders, sales orders, AR invoices and related notes, payments, and refunds.

Without this module, opportunities live in spreadsheets and email. Inside Drixal, each step becomes a connected record that hands off to the next document in the sales flow.

## What the module does for your business

- Captures inbound demand as a **Lead**, then qualifies it into a **Customer** (and optional **Contact**)
- Runs opportunities on a **Pipeline** / **Stage** with **Deal** actions through Won or Lost
- Builds commercial documents: **Pnl** → **Quote** → **CustomerPO** → **SalesOrder**
- Issues **InvoiceAR** (and Return / Credit / Debit) and records **PaymentAR** / **RefundAR**
- Gives management a read-only **Dashboard** of funnel and AR KPIs

## Sales flow

This order is not a built-in wizard; foreign keys and day-to-day use imply it:

```text
Lead
  └── Customer (+ Contact)
        └── Deal (Pipeline / Stage)
              └── Pnl
                    └── Quote
                          └── CustomerPO
                                └── SalesOrder
                                      └── InvoiceAR
                                            ├── ReturnInvoiceAR / CreditNoteAR / DebitNoteAR
                                            └── PaymentAR / RefundAR
```

| Step | Record | Purpose |
|---|---|---|
| 1 | **Lead** | Inbound opportunity; Qualify or Disqualify |
| 2 | **Customer** / **Contact** | Account master and person at customer or supplier |
| 3 | **Pipeline** / **Stage** | Stage container for deals |
| 4 | **Deal** | Opportunity; NextStage, CreatePnl, Won, Lost |
| 5 | **Pnl** | Cost/margin sheet from the deal; SendForApproval, CreateQuotation |
| 6 | **Quote** | Quotation; SendForApproval, SendtoCustomer, AcceptedByCustomer |
| 7 | **CustomerPO** | Customer purchase order; CreateSalesOrder, AddPayment |
| 8 | **SalesOrder** | Confirmed order; CreateInvoice, AddPayment, ConvertToAgreement |
| 9 | **InvoiceAR** | Sales invoice; Post, AddPayment, ViewInvoice, Return/Credit/Debit |
| 10 | **PaymentAR** / **RefundAR** | Receipts and refunds (CRM shells over FIN / SHRD) |

Won deals and sales orders can also feed an **Agreement** and project creation.

## Where to find it in the system

From the side menu, choose **Sales** (CRM), then:

- [CRM dashboard](/docs/crm/dashboard)
- [Leads](/docs/crm/lead)
- [Customers](/docs/crm/customer)
- [Contacts](/docs/crm/contact)
- [Pipelines](/docs/crm/pipeline)
- [Deals](/docs/crm/deal)
- [P&amp;L](/docs/crm/pnl)
- [Quotes](/docs/crm/quote)
- [Customer POs](/docs/crm/customer-po)
- [Sales orders](/docs/crm/sales-order)
- [Invoices AR](/docs/crm/invoice-ar)
- [Return invoices AR](/docs/crm/return-invoice-ar)
- [Credit notes AR](/docs/crm/credit-note-ar)
- [Debit notes AR](/docs/crm/debit-note-ar)
- [Payments AR](/docs/crm/payment-ar)
- [Refunds AR](/docs/crm/refund-ar)
- [Agreements](/docs/crm/agreement)
- [Reference data](/docs/crm/lookups)

## Who uses this section

| Role | Daily use |
|---|---|
| Sales / account manager | Leads, deals, quotes, customer PO, sales orders |
| Sales operations | Pipeline stages, lookups, dashboard filters |
| Finance / AR | InvoiceAR, notes, payments, refunds |
| Management | Dashboard KPIs and funnel |

## How this CRM guide is organized

1. Introduction and dashboard
2. Lead, customer, contact
3. Pipeline, deal, P&amp;L, quote
4. Customer PO, sales order, agreement
5. AR invoices, notes, payments, refunds
6. Lookups and glossary

## Best Practices

:::tip[Follow the chain before inventing shortcuts]
Qualify the lead, keep the customer master correct (including ZATCA type), then open the deal and documents in order. Skipping steps breaks filters and 360 tabs.
:::

:::warning[Read-only dashboard]
The CRM dashboard does not create or edit records. Open the entity pages for CRUD.
:::

:::note[Help from the header]
Select **Help** in the app header while on a CRM page to open the matching guide.
:::

## Related Sections

- [CRM dashboard](/docs/crm/dashboard)
- [Leads](/docs/crm/lead)
- [Customers](/docs/crm/customer)
- [Deals](/docs/crm/deal)
- [Invoices AR](/docs/crm/invoice-ar)
- [Glossary](/docs/crm/glossary)
