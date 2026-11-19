---
sidebar_position: 20
title: Glossary
---

# Glossary

Short definitions as they appear in the Drixal ERP CRM & Sales module. English system names are in parentheses.

| Term | Definition |
|---|---|
| CRM & Sales | Module for leads, customers, pipeline, commercial documents, and AR |
| Dashboard | Funnel and AR KPIs with period/customer filters; no CRUD |
| Lead | Inbound opportunity; Qualify or Disqualify |
| Customer | Account master; zatcaCustomerType; Id and 360 |
| Contact | Person at customer and/or supplier; Promote VIP |
| Pipeline | Stage container for deals |
| Stage | Named step on a pipeline; Stages tab / Stage entity |
| Deal | Opportunity on a pipeline; NextStage, CreatePnl, Won, Lost |
| Pnl | Deal cost/margin sheet; SendForApproval, CreateQuotation |
| Quote | Quotation; SendForApproval, SendtoCustomer, AcceptedByCustomer |
| CustomerPO | Customer purchase order; CreateSalesOrder, AddPayment |
| SalesOrder | Confirmed order; CreateInvoice, AddPayment, ConvertToAgreement |
| InvoiceAR | Sales invoice AR; Post, AddPayment, ViewInvoice; `/new` route |
| ReturnInvoiceAR | Return against invoice; Post, AddRefund |
| CreditNoteAR | Credit against invoice; Post, AddRefund |
| DebitNoteAR | Debit against invoice; Post, AddPayment |
| PaymentAR | CRM shell over FIN customer receipts; lock when posted |
| RefundAR | CRM shell over SHRD refunds; assign from return/credit |
| Agreement | Commercial agreement; CreateProject; LineItems/SalesOrders/Projects |
| Industry / Sector | Lookups for lead and customer classification |
| Confidence | Lookup for deal confidence |
| DealLostReason | Lookup required on Lost |
| LeadSource | Lookup for lead origin |
| Competitor | Party used on Lost; list + Id |
| DeliveryAddress | Child address only; no standalone pages |
| zatcaCustomerType | Required customer ZATCA classification |
| LineItems | Product/line rows on deal, Pnl, quote, PO, SO, AR docs |
| 360 | Operations workspace with related-entity tabs |
| Post | Status lock on AR documents (and FIN payment) |
| Qualify / Disqualify | Lead actions to customer or rejection |
| Won / Lost | Deal close actions |
| supplierName (CustomerPO list) | Naming quirk on CustomerPO list/filter |

## Related Sections

- [CRM & Sales introduction](/docs/crm/introduction)
- [Customers](/docs/crm/customer)
- [Deals](/docs/crm/deal)
- [Invoices AR](/docs/crm/invoice-ar)
- [Reference data](/docs/crm/lookups)
