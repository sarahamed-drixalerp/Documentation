---
sidebar_position: 20
title: المصطلحات
---

# المصطلحات

تعريفات مختصرة كما تظهر في وحدة المبيعات وCRM في Drixal ERP. الأسماء الإنجليزية كما في النظام بين قوسين.

| المصطلح | التعريف |
|---|---|
| المبيعات وCRM (CRM & Sales) | وحدة العملاء المحتملين والعملاء والمسار والمستندات التجارية والذمم |
| اللوحة (Dashboard) | مؤشرات القمع والذمم بفلاتر فترة/عميل؛ بلا CRUD |
| عميل محتمل (Lead) | فرصة واردة؛ Qualify أو Disqualify |
| عميل (Customer) | سجل الحساب؛ zatcaCustomerType؛ Id و360 |
| جهة اتصال (Contact) | شخص لدى عميل و/أو مورد؛ Promote VIP |
| مسار (Pipeline) | حاوية المراحل للصفقات |
| مرحلة (Stage) | خطوة مسماة على المسار؛ تبويب Stages / كيان Stage |
| صفقة (Deal) | فرصة على مسار؛ NextStage، CreatePnl، Won، Lost |
| Pnl | ورقة تكلفة/هامش الصفقة؛ SendForApproval، CreateQuotation |
| عرض سعر (Quote) | عرض؛ SendForApproval، SendtoCustomer، AcceptedByCustomer |
| أمر شراء عميل (CustomerPO) | أمر شراء العميل؛ CreateSalesOrder، AddPayment |
| أمر بيع (SalesOrder) | أمر مؤكَّد؛ CreateInvoice، AddPayment، ConvertToAgreement |
| فاتورة ذمم (InvoiceAR) | فاتورة مبيعات؛ Post، AddPayment، ViewInvoice؛ مسار `/new` |
| فاتورة مرتجع (ReturnInvoiceAR) | مرتجع مقابل فاتورة؛ Post، AddRefund |
| إشعار دائن (CreditNoteAR) | دائن مقابل فاتورة؛ Post، AddRefund |
| إشعار مدين (DebitNoteAR) | مدين مقابل فاتورة؛ Post، AddPayment |
| دفعة ذمم (PaymentAR) | غلاف CRM فوق مقبوضات FIN؛ قفل عند الترحيل |
| مردود ذمم (RefundAR) | غلاف CRM فوق مردودات SHRD؛ تعيين من مرتجع/دائن |
| اتفاقية (Agreement) | اتفاق تجاري؛ CreateProject؛ LineItems/SalesOrders/Projects |
| صناعة / قطاع (Industry / Sector) | lookups لتصنيف العميل المحتمل والعميل |
| ثقة (Confidence) | lookup لثقة الصفقة |
| سبب خسارة (DealLostReason) | lookup إلزامي عند Lost |
| مصدر عميل محتمل (LeadSource) | lookup لأصل الفرصة |
| منافس (Competitor) | طرف يُستخدم عند Lost؛ قائمة + Id |
| عنوان تسليم (DeliveryAddress) | عنوان فرعي فقط؛ بلا صفحات مستقلة |
| zatcaCustomerType | تصنيف زاتكا الإلزامي للعميل |
| بنود خط (LineItems) | صفوف منتج/بند على الصفقة وPnl والعرض والأوامر ومستندات الذمم |
| 360 | مساحة تشغيل بتبويبات كيانات مرتبطة |
| ترحيل (Post) | قفل الحالة على مستندات الذمم (ودفعة FIN) |
| Qualify / Disqualify | إجراءات العميل المحتمل إلى عميل أو رفض |
| Won / Lost | إجراءات إغلاق الصفقة |
| supplierName (قائمة CustomerPO) | خصوصية تسمية في قائمة/فلتر CustomerPO |

## أقسام ذات صلة

- [مقدمة المبيعات وCRM](/docs/crm/introduction)
- [العملاء](/docs/crm/customer)
- [الصفقات](/docs/crm/deal)
- [فواتير الذمم](/docs/crm/invoice-ar)
- [البيانات المرجعية](/docs/crm/lookups)
