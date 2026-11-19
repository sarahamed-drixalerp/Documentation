---
sidebar_position: 16
title: Payments AR
---

# Payments AR

**PaymentAR** in CRM is a thin shell over the **FIN** payment list and Id chrome. Use it from Sales to work customer receipts without leaving the CRM menu.

**Navigation:** Sidebar → Sales → Payments AR  
**Pages:** `/Entities/CRM/PaymentAR` · `/Entities/CRM/PaymentAR/{id}`

## What PaymentAR does for your business

- Lists customer receipts (name, code, customer, reference, amount, status) via the FIN list
- Opens create/edit through FIN payment forms
- Locks the record when **posted**
- Is reachable from customer, SO, invoice, and debit-note **AddPayment** actions

## List and filters

| Area | Content |
|---|---|
| **Columns** | Name, code, customer, reference, amount, status (FIN list) |
| **Filters** | Search, customer, status |

## Lifecycle

| Step | Behavior |
|---|---|
| Create / edit | Via FIN payment forms from the CRM shell |
| **Post** | Locks the payment when posted |

:::danger[Posted payments are locked]
Do not expect free edit after post. Correct mistakes through the allowed FIN/CRM correction path for your role.
:::

## How to record a payment

1. Open Payments AR, or use **AddPayment** from customer, sales order, invoice, or debit note
2. Complete the FIN payment form (customer, amount, reference, status)
3. Save, then post according to FIN rules so the payment locks

## Best Practices

:::tip[Start AddPayment from the source document]
Opening payment from invoice or SO keeps the commercial link clear.
:::

:::note[CRM shell, FIN engine]
Menus and routes are CRM; list and Id chrome are FIN-backed.
:::

## Related Sections

- [Invoices AR](/docs/crm/invoice-ar)
- [Debit notes AR](/docs/crm/debit-note-ar)
- [Customers](/docs/crm/customer)
- [Sales orders](/docs/crm/sales-order)
- [CRM & Sales introduction](/docs/crm/introduction)
