---
sidebar_position: 1
title: مقدمة المبيعات وCRM
---

# مقدمة المبيعات وCRM

وحدة **المبيعات وعلاقات العملاء (CRM & Sales)** في Drixal ERP تدير المسار التجاري من الطلب الوارد إلى التحصيل: العملاء المحتملون، العملاء، جهات الاتصال، المسار والصفقات، P&amp;L والعروض، أوامر شراء العميل، أوامر البيع، فواتير الذمم والمستندات المرتبطة، المدفوعات، والمردودات.

بدون هذه الوحدة تبقى الفرص في جداول وبريد. داخل Drixal يصبح كل خطوة سجلًا متصلًا يسلّم للمستند التالي في مسار البيع.

## ماذا تفعل الوحدة لأعمالك

- تلتقط الطلب الوارد كـ **Lead** ثم تؤهّله إلى **Customer** (و**Contact** اختياري)
- تدير الفرص على **Pipeline** / **Stage** بإجراءات **Deal** حتى Won أو Lost
- تبني المستندات التجارية: **Pnl** ← **Quote** ← **CustomerPO** ← **SalesOrder**
- تصدر **InvoiceAR** (وReturn / Credit / Debit) وتسجّل **PaymentAR** / **RefundAR**
- تعطي الإدارة **Dashboard** للقراءة فقط بمؤشرات القمع والذمم

## مسار البيع

الترتيب ليس معالجًا مدمجًا؛ يفرضه الاعتماد والاستخدام اليومي:

```text
Lead
  └── Customer (+ Contact)
        └── Deal (Pipeline / Stage)
              └── Pnl
                    └── Quote
                          └── CustomerPO
                                └── SalesOrder
                                      └── InvoiceAR
                                            ├── ReturnInvoiceAR / CreditNoteAR / DebitNoteAR
                                            └── PaymentAR / RefundAR
```

| الخطوة | السجل | الغرض |
|---|---|---|
| 1 | **Lead** | فرصة واردة؛ تأهيل أو استبعاد |
| 2 | **Customer** / **Contact** | حساب العميل والشخص لدى العميل أو المورد |
| 3 | **Pipeline** / **Stage** | حاوية المراحل للصفقات |
| 4 | **Deal** | الفرصة؛ NextStage، CreatePnl، Won، Lost |
| 5 | **Pnl** | ورقة تكلفة/هامش من الصفقة؛ SendForApproval، CreateQuotation |
| 6 | **Quote** | عرض سعر؛ SendForApproval، SendtoCustomer، AcceptedByCustomer |
| 7 | **CustomerPO** | أمر شراء العميل؛ CreateSalesOrder، AddPayment |
| 8 | **SalesOrder** | أمر بيع مؤكَّد؛ CreateInvoice، AddPayment، ConvertToAgreement |
| 9 | **InvoiceAR** | فاتورة مبيعات؛ Post، AddPayment، ViewInvoice، Return/Credit/Debit |
| 10 | **PaymentAR** / **RefundAR** | مقبوضات ومردودات (أغلفة CRM فوق FIN / SHRD) |

صفقات Won وأوامر البيع قد تغذّي أيضًا **Agreement** وإنشاء مشروع.

## أين تجده في النظام

من القائمة الجانبية اختر **المبيعات** (CRM) ثم:

- [لوحة CRM](/docs/crm/dashboard)
- [العملاء المحتملون](/docs/crm/lead)
- [العملاء](/docs/crm/customer)
- [جهات الاتصال](/docs/crm/contact)
- [المسارات](/docs/crm/pipeline)
- [الصفقات](/docs/crm/deal)
- [P&amp;L](/docs/crm/pnl)
- [عروض الأسعار](/docs/crm/quote)
- [أوامر شراء العميل](/docs/crm/customer-po)
- [أوامر البيع](/docs/crm/sales-order)
- [فواتير الذمم](/docs/crm/invoice-ar)
- [فواتير المرتجع](/docs/crm/return-invoice-ar)
- [إشعارات دائن](/docs/crm/credit-note-ar)
- [إشعارات مدين](/docs/crm/debit-note-ar)
- [مدفوعات الذمم](/docs/crm/payment-ar)
- [مردودات الذمم](/docs/crm/refund-ar)
- [الاتفاقيات](/docs/crm/agreement)
- [البيانات المرجعية](/docs/crm/lookups)

## من يستخدم هذا القسم

| الدور | الاستخدام اليومي |
|---|---|
| مبيعات / مدير حساب | عملاء محتملون، صفقات، عروض، أمر شراء عميل، أوامر بيع |
| عمليات المبيعات | مراحل المسار، lookups، فلاتر اللوحة |
| مالية / ذمم | InvoiceAR، الإشعارات، المدفوعات، المردودات |
| الإدارة | مؤشرات اللوحة والقمع |

## كيف يُنظَّم دليل CRM

1. المقدمة واللوحة
2. العميل المحتمل، العميل، جهة الاتصال
3. المسار، الصفقة، P&amp;L، العرض
4. أمر شراء العميل، أمر البيع، الاتفاقية
5. فواتير الذمم والإشعارات والمدفوعات والمردودات
6. البيانات المرجعية والمصطلحات

## أفضل الممارسات

:::tip[اتبع السلسلة قبل اختصار الطريق]
أهّل العميل المحتمل، صحّح بيانات العميل (بما فيها نوع زاتكا)، ثم افتح الصفقة والمستندات بالترتيب. تخطّي الخطوات يكسر الفلاتر وتبويبات 360.
:::

:::warning[اللوحة للقراءة فقط]
لوحة CRM لا تنشئ ولا تعدّل سجلات. افتح صفحات الكيانات للإنشاء والتعديل.
:::

:::note[المساعدة من الترويسة]
اضغط **المساعدة** من ترويسة التطبيق وأنت على صفحة CRM لفتح الدليل المطابق.
:::

## أقسام ذات صلة

- [لوحة CRM](/docs/crm/dashboard)
- [العملاء المحتملون](/docs/crm/lead)
- [العملاء](/docs/crm/customer)
- [الصفقات](/docs/crm/deal)
- [فواتير الذمم](/docs/crm/invoice-ar)
- [المصطلحات](/docs/crm/glossary)
