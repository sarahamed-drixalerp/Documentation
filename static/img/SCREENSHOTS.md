# Help screenshots

Place real UI captures from **Aspire-Frontend** here. Markdown docs reference `/img/{module}/{name}.svg` (placeholders today).

## How to capture

1. Open the matching page in Aspire (same route as in the help article).
2. Use the app locale you want to show (Arabic or English). Prefer one set of images; captions are translated in the markdown.
3. Capture the full main content area (avoid personal data).
4. Export PNG, then either:
   - Replace the matching `.svg` placeholder with a `.png` of the **same base name** and update the markdown `![...](/img/...)` extension, or
   - Overwrite by converting/exporting to the same path the markdown already uses.

## Expected files (batch 1)

| Module | File | Capture from |
|---|---|---|
| hrm | `employee-list` | `/Entities/HRM/Employee` list |
| hrm | `employee-filters` | Employee filters open |
| hrm | `employee-create` | `/Entities/HRM/Employee/new` |
| hrm | `employee-actions` | Employee header actions |
| hrm | `payroll-list` | `/Entities/HRM/Payroll` |
| hrm | `payroll-create` | Payroll create/edit |
| hrm | `payroll-generate-publish` | Generate / Publish controls |
| crm | `lead-list` | `/Entities/CRM/Lead` |
| crm | `lead-create` | Lead form |
| crm | `lead-qualify` | Qualify dialog |
| crm | `deal-list` | `/Entities/CRM/Deal` |
| crm | `deal-create` | Deal form |
| crm | `deal-actions` | Won / Lost / stage actions |
| fin | `journal-list` | `/Entities/FIN/Journal` |
| fin | `journal-create` | Journal lines |
| fin | `journal-post` | Post dialog |
| fin | `account-tree` | Chart of Accounts tree |
| fin | `account-details` | Account details tab |
| fin | `account-settings` | Account settings switches |
| fin | `centers-tree` | `/Entities/FIN/CostCenter` tree |
| fin | `transfer-list` | `/Entities/FIN/Transfer` |
| fin | `transfer-post` | Transfer Post dialog |
| fin | `cash-masters` | `/Entities/FIN/Treasury` or Bank |
| fin | `expense-list` | `/Entities/FIN/Expense` |
| fin | `custody-list` | `/Entities/FIN/Custody` |
| fin | `loan-list` | `/Entities/FIN/Loan` |
| fin | `asset-list` | `/Entities/FIN/Asset` |
| fin | `lookups` | `/Entities/FIN/PaymentTerm` |
| fin | `reports-hub` | `/Entities/FIN/Reports` |
| fin | `zatca-config` | `/Entities/FIN/Zatca` configuration tab |
| srv | `introduction` | Services Catalogue sidebar group |
| srv | `service-catalogue` | `/app/ServiceCatalogue` (admin page missing) |
| srv | `workflows` | Workflow gap note / related screens |
| srv | `task-allocation` | `/Entities/PMO/TaskAllocation` |
| sla | `introduction` | SLA section hub |
| sla | `sla-matrix` | `/Entities/SLA/SLAMatrix` |
| app | `services-browse` | `/app/ServiceCatalogue` |
| app | `services-submit` | `/app/ServiceCatalogue/Submit` |
| dms | `document-list` | `/Entities/DMS/Document` |
| dms | `document-create` | Document create |
| dms | `document-workflow` | Workflow tab |
| srm | `purchase-order-list` | `/Entities/SRM/PurchaseOrder` |
| srm | `purchase-order-create` | PO form |
| srm | `purchase-order-send-accept` | Send / Accept actions |
| adm | `application-user-list` | `/Entities/ADM/ApplicationUser` |
| adm | `application-user-filters` | User filters |
| adm | `application-user-create` | User form |

## Help routing

Frontend map: `Aspire-Frontend/utils/helpDocsMap.ts`  
Docs site: set `DOCS_BASE_URL` (local default `http://localhost:3001`).
