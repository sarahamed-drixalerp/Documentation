---
sidebar_position: 7
title: Supplier quotes
---

# Supplier quotes

A **SupplierQuote** is the priced offer from a supplier. Accept or reject it, then convert an accepted quote into a purchase order.

**Navigation:** Sidebar → SRM & Procurement → Suppliers Quotes  
**Pages:** `/Entities/SRM/SupplierQuote` · `/Entities/SRM/SupplierQuote/new` · `/Entities/SRM/SupplierQuote/{id}`

## What a SupplierQuote does for your business

- Holds quote header, line items, and prices
- Supports **Accept** and **Reject**
- After accept, opens **Convert To Purchase Order**

## Supplier quote list

### Columns (key)

Name, supplier, status, amounts as shown on the list.

### Filters

Search and the status/supplier filters available on screen.

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Quote identity |
| **type** / **status** | Record governance |

## Lifecycle actions

| Action | Function |
|---|---|
| **Accept** | Accepts the quote (Accepted) |
| **Reject** | Rejects the quote (Rejected) |
| **Convert To Purchase Order** | Creates a purchase order; available only after accept |

## Record tabs

| Tab | Content |
|---|---|
| **LineItems** | Line items (default for an existing record) |
| **Details** | Header details and form |

:::note[Save from the Details tab]
Save Changes is disabled off the Details tab — switch to Details before saving.
:::

## How to process a supplier quote

1. Open the quote from the list or from a QuoteRequest / Bid path
2. Review **LineItems** and **Details**
3. **Accept** or **Reject**
4. If accepted, run **Convert To Purchase Order**

## Best Practices

:::tip[Accept before convert to PO]
Convert To Purchase Order stays disabled until status is Accepted.
:::

:::warning[Reject ends the PO path for this quote]
After Reject, do not expect a convert-to-PO path from the same quote.
:::

## Related Sections

- [Quote requests](/docs/srm/quote-request)
- [Bids](/docs/srm/bid)
- [Purchase orders](/docs/srm/purchase-order)
- [SRM & Procurement introduction](/docs/srm/introduction)
