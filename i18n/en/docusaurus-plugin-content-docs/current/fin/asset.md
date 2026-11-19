---
sidebar_position: 10
title: Assets
---

# Assets

An **Asset** is a fixed asset with purchase and depreciation configurations. Saving persists data; there is no post button on the asset screen itself.

## What Assets do for your business

- Registers assets with name, main account, and service start date
- Configures purchase price, cash account, and optional tax rate
- Sets up automatic depreciation (percentage or fixed amount), frequency, and start date

**Path:** Sidebar → Finance → Assets  
**Pages:** `/Entities/FIN/Asset` · `/new` · `/{id}`

## Asset list

| Area | Content |
|---|---|
| **Columns** | Name, serial number, purchase date, purchase price, salvage value, actions |
| **Filters** | Search (name/serial/number), status, type, purchase date |
| **Views** | Table or cards |

## Creating an asset

1. Click **Create New Asset**
2. Fill in **General Information**, **Purchase Details**, and **Depreciation Settings**
3. Set confidentiality, type, and status in header, then click **Save Changes**

### General information

| Field | Notes |
|---|---|
| **Name** | Required |
| **Main Account** | Required |
| **In Service Date** | Required |
| **Useful Life** | Optional (days/months/years) |
| **Quantity** | Optional |

### Purchase details

| Field | Notes |
|---|---|
| **Purchase Price + Currency** | Required |
| **Purchase Date** | Required |
| **Cash Account** | Required |
| **Tax Rate** | Optional |

### Depreciation

| Field | Notes |
|---|---|
| **Depreciation Type** | Straight line, etc. |
| **Depreciation Rate / Value** | Percentage or fixed amount |
| **Frequency** | Monthly, quarterly, yearly |
| **Start Date** | Depreciation start date |
| **Salvage Value** | Estimated scrap value |

## Best practices

:::tip[Verify main account before saving]
Ensure the main asset account and accumulated depreciation accounts are correctly assigned in your chart of accounts.
:::

## Related sections

- [Finance introduction](/docs/fin/)
- [Chart of Accounts](/docs/fin/account)
- [Journal entries](/docs/fin/journal)
