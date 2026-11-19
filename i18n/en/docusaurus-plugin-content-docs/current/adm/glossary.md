---
sidebar_position: 10
title: Glossary
---

# Glossary

Short definitions as they appear in Drixal ERP Administration. English system names are shown in parentheses.

| Term | Definition |
|---|---|
| Administration (ADM) | Module for users, roles, entity metadata, lookups, and monitoring |
| Application User (ApplicationUser) | Sign-in account: profile, seat, activate/deactivate, roles |
| Application Role (ApplicationRole) | Permission set with Details, Permission, and Users tabs |
| Claim | Permission flag such as GetAll, GetById, Create, Edit, Delete, 360 |
| GetAll / GetById | List access / single-record access; GetAll implies GetById |
| 360 | Workspace claim; implies GetById |
| NCA | Confidentiality levels 1 Public, 2 Internal, 3 Confidential, 4 Top Secret |
| Data Confidentiality (DataConfidentiality) | Lookup used with roles/records for NCA classification |
| Entity Management (Entity) | CAT → entity tree with Details, Status, Types, Attributes |
| Attribute | Entity field definition requiring dbFieldName and dataType |
| Country / Nationality | Lookups with Active persistence on edit |
| Currency | APP currency list via ADM route; Active is a toast stub only |
| Seat type | License assignment on an Application User (`changeSeatType`) |
| Activate / Deactivate | Re-enable or stop user access without deleting the record |
| NightlyJob / Monitoring | Daily job at 11:00 AM Cairo with ExchangeRates, FinancialDue, EntityTrend |
| Run Now | Manual NightlyJob trigger with confirmation |
| Workflow | Administration Workflow UI — incomplete; not documented in this guide |

## Related Sections

- [Administration introduction](/docs/adm/introduction)
- [Application Users](/docs/adm/application-user)
- [Application Roles](/docs/adm/application-role)
- [Entity Management](/docs/adm/entity-management)
- [Monitoring](/docs/adm/monitoring)
