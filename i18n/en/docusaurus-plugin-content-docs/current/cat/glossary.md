---
sidebar_position: 14
title: Glossary
---

# Glossary

Short definitions as they appear in the Drixal ERP Product Catalogue. English system names are in parentheses.

| Term | Definition |
|---|---|
| Product Catalogue (CAT) | Module for products, services, pricing, inventory, and reference data |
| Market unit (MarketUnit) | Tree classification root; lookup with optional color |
| Product category (ProductCategory) | Group under an optional market unit |
| Brand | Classification level under category |
| Brand model (BrandModel) | Level under brand; id page without a usual standalone sidebar item |
| Product | Catalogue record: price, cost, capabilities, tax, classification |
| Product Tree | Hierarchical browse + warehouse balance grid without create |
| CAT Dashboard | Catalogue KPIs and charts with no CRUD |
| Unit of measure (UOM) | Base unit (quantity 1) or sub-unit (quantity > 1 with parent) |
| Product UOM (ProductUOM) | Product–UOM link with price/cost on the product tab |
| Price list | Pricing header + product lines with price and quantity band |
| Inventory | Storage location; no Post on the inventory record itself |
| Inventory transaction | Add / Withdraw / Transfer with post and journal preview |
| Post | Status lock of the form (product by name; transaction by name or statusId 159) |
| Product capabilities | CanBeSold / Purchased / Expensed / Stored / Decimal |
| Tax rate | Percentage, invoice label, default; CAT and ORG UIs |
| Billing frequency (BillingFrequency) | Lookup selected on the product |
| Delivery proof (DeliveryProof) | Lookup selected on the product |
| Trading type (TradingType) | Lookup selected on the product |
| Discount type (DiscountType) | Lookup for discount classification |
| Management buffer type (ManagementBufferType) | Buffer/margin lookup; weaker name validation |
| Deliverable | Child record by name on the product tab |
| Sub-product / bundle | Child product links on the SubProducts tab |
| Data confidentiality | Required classification on inventory, price list, and inventory transaction |
| DlgView | Quick read-only product preview from the list |
| Journal Entry preview | Debit/credit lines with inventory transaction post |

## Related Sections

- [Product Catalogue introduction](/docs/cat/introduction)
- [Product](/docs/cat/product)
- [Inventory transaction](/docs/cat/inventory-transaction)
- [Lookups](/docs/cat/lookups)
