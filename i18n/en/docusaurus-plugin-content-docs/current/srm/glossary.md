---
sidebar_position: 15
title: Glossary
---

# Glossary

Short definitions as they appear in the SRM & Procurement module in Drixal ERP. System English names are in parentheses where useful.

| Term | Definition |
|---|---|
| SRM & Procurement | Module for suppliers, requisitions, quotes, orders, and accounts payable |
| Dashboard | Commitment and AP KPIs with supplier filter; no CRUD |
| Supplier | Supplier account master; Id and 360; Block / UnBlock, AssignPriceList, OpeningBalance, CreateInvoice, AddPayment |
| PurchaseRequisition | Internal demand; Submit; Convert to QuoteRequest / Bid |
| QuoteRequest | Single-supplier RFQ; Send to Supplier; Convert to SupplierQuote |
| Bid | Multi-supplier bid; Publish → Close/Evaluate → Award; Cancel; stages Planning / Published / Closed / Awarded |
| SupplierQuote | Priced offer; Accept / Reject; Convert to PurchaseOrder |
| PurchaseOrder | Buying commitment; Send, Accept, Create Invoice, Add Payment; LineItems / Details / Invoices tabs |
| InvoiceAP | AP purchase invoice; Post, Add Payment; Return / Credit / Debit; `/new` route |
| ReturnInvoiceAP | Return against an original invoice; Post |
| DebitNoteAP | Debit against an invoice; Post |
| CreditNoteAP | Credit against an invoice; Post |
| PaymentAP | SRM shell over FIN payments; Assign and Post; lock when posted |
| RefundAP | SRM shell over SHRD refunds (AP side); Assign and Post |
| LineItems | Product/line rows on requests, quotes, orders, and AP documents |
| 360 | Operating workspace with related-entity tabs (e.g. POs and invoices on supplier) |
| Post | Status lock on AP documents (and FIN/SHRD payment/refund) |
| Send to Supplier | Send RFQ/PO document to the supplier (needs lines where the system requires them) |
| Accept / Reject | Accept or reject a supplier quote (or accept a PO after send) |
| Publish / Close / Award / Cancel | Bid lifecycle actions |
| CustomerPO | Customer purchase order — in [CRM](/docs/crm/customer-po), not SRM |

## Related Sections

- [SRM & Procurement introduction](/docs/srm/introduction)
- [Suppliers](/docs/srm/supplier)
- [Purchase orders](/docs/srm/purchase-order)
- [Invoices AP](/docs/srm/invoice-ap)
