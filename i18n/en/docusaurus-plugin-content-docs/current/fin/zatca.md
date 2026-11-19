---
sidebar_position: 15
title: ZATCA E-Invoicing
---

# ZATCA E-Invoicing

Integration gateway for the Saudi Zakat, Tax and Customs Authority (**ZATCA**) Phase 2 e-invoicing compliance (Fatoora).

## Capabilities

- Manages cryptographic stamps, CSR generation, and cryptographic onboarding
- Complies with B2B (Standard tax invoice clearance) and B2C (Simplified tax invoice reporting)
- Tracks compliance status, error logs, and verification reporting

**Path:** Sidebar → Finance → ZATCA  
**Pages:** `/Entities/FIN/Zatca`

## Onboarding workflow

1. **Configuration**: Enter VAT number (15 digits), legal name, CR number, and official address.
2. **Environment**: Select Simulation or Production.
3. **Device CSR**: Provide device name, serial number, and generate CSR.
4. **OTP Verification**: Enter 6-digit OTP from Fatoora portal and complete device compliance check.

## Related sections

- [Finance introduction](/docs/fin/)
- [Sales invoices (CRM)](/docs/crm/invoice-ar)
- [Procurement invoices (SRM)](/docs/srm/invoice-ap)
