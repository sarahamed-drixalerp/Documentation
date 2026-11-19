---
sidebar_position: 40
title: Human Resources settings
---

# Human Resources settings

**Human Resources settings (HRM Settings)** on this screen cover registering a **ZKTeco** biometric device for the tenant, to link attendance to the device.

**Path:** Sidebar ← Human Resources ← Settings  
**Page:** `/Entities/HRM/Settings`

## What this screen does

- Registers a ZKTeco biometric device for the tenant
- Shows device status and last heartbeat when available
- Allows enabling/disabling the device

## Required fields

| Field | Why it is required |
|---|---|
| **Device name (deviceName)** | Device identity in the UI |
| **Serial number (serialNumber)** | Match to the physical device |

### Optional

| Field | Meaning |
|---|---|
| **IP address (ipAddress)** | Network connection when used |
| **Location (location)** | Installation place |
| **Name (name)** | Extra name; may be filled from the device name |
| **Active (isActive)** | Enable or disable the device |

### Read-only

| Field | Meaning |
|---|---|
| **LastHeartbeat** | Last heartbeat from the device; do not edit manually |

## How to register the device

1. Open `/Entities/HRM/Settings`
2. If no device exists, start registration from the screen
3. Fill **deviceName** and **serialNumber**
4. Add IP and location as needed
5. Set **isActive**, then save
6. Review **LastHeartbeat** after starting the device to confirm connectivity

:::warning[The serial number must match the device]
An incorrect serialNumber prevents attendance from linking to this tenant.
:::

:::note[One device for the tenant on this screen]
The UI is designed to register the tenant’s ZKTeco biometric device and show its status.
:::

## Best Practices

:::tip[Test the heartbeat after installation]
After save and device startup, watch LastHeartbeat before relying on attendance in reports.
:::

## Related Sections

- [Employee attendance](/docs/hrm/employee-attendance)
- [Work shifts](/docs/hrm/work-shift)
- [Human Resources dashboard](/docs/hrm/dashboard)
