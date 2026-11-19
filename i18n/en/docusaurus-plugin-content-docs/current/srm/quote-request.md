---
sidebar_position: 5
title: Quote requests
---

# Quote requests

A **QuoteRequest** sends a pricing request to one supplier, then converts into a supplier quote after send.

**Navigation:** Sidebar → SRM & Procurement → Quote Requests  
**Pages:** `/Entities/SRM/QuoteRequest` · `/Entities/SRM/QuoteRequest/new` · `/Entities/SRM/QuoteRequest/{id}`

## What a QuoteRequest does for your business

- Links the request to a supplier and owner
- Sends the document with **Send to Supplier** (needs at least one line item)
- Converts to a **SupplierQuote** via **Convert To Supplier Quote**

## Quote request list

### Columns (key)

Number/name, supplier, status, as shown on the list.

### Filters

Search and the status/supplier filters available on screen.

## Required fields

| Field | Notes |
|---|---|
| **name** / **nameAr** | Request identity |
| **supplier** | Target supplier (required) |
| **owner** | Owner / responsible user |
| **type** / **status** | Record governance |

## Lifecycle actions

| Action | Function |
|---|---|
| **Send to Supplier** | Emails/sends the RFQ; needs ≥1 line item; unavailable after convert or final receipt per status rules |
| **Convert To Supplier Quote** | Creates a supplier quote from the sent request |

:::warning[No lines, no send]
Send stays disabled until at least one line item exists.
:::

## How to process a quote request

1. Prefer convert from a submitted purchase requisition, or create from the QuoteRequest list
2. Set supplier, owner, and names
3. Add **LineItems**, then **Send to Supplier**
4. After send, use **Convert To Supplier Quote**

## Best Practices

:::tip[Lock the supplier before send]
supplier is required; sending without a correct supplier breaks the quote chain.
:::

:::note[Single-supplier path]
For several suppliers use a [Bid](/docs/srm/bid) instead of repeating RFQs without a bid structure.
:::

## Related Sections

- [Purchase requisitions](/docs/srm/purchase-requisition)
- [Supplier quotes](/docs/srm/supplier-quote)
- [Bids](/docs/srm/bid)
- [SRM & Procurement introduction](/docs/srm/introduction)
