---
sidebar_position: 12
title: فواتير الذمم
---

# فواتير الذمم

**فاتورة الذمم (InvoiceAR)** فاتورة المبيعات (ذمم مدينة) في CRM. المكوّنات تحت SalesInvoices؛ المسارات تستخدم InvoiceAR بما فيها صفحة **new** المخصصة.

**المسار:** القائمة الجانبية ← المبيعات ← فواتير الذمم  
**الصفحات:** `/Entities/CRM/InvoiceAR` · `/Entities/CRM/InvoiceAR/new` · `/Entities/CRM/InvoiceAR/{رقم}`

## ماذا تفعل InvoiceAR لأعمالك

- تفوتر العميل على أمر بيع مع تواريخ الإصدار والاستحقاق والعملة وطريقة الشحن
- تدعم **Post** و**AddPayment** و**ViewInvoice**
- تنشئ مستندات **Return** و**Credit** و**Debit** من الفاتورة
- تحمل **LineItems** ومعاينة الوثيقة

## قائمة InvoiceAR

### الأعمدة (الأهم)

الاسم، العميل، أمر البيع، الشحن، تاريخ الاستحقاق، الحالة.

### التصفية

بحث، الحالة، العميل، أمر البيع، الشحن.

## الحقول الإلزامية

| الحقل | ملاحظات |
|---|---|
| **customer** | الطرف المفوتر |
| **sales order (SO)** | أمر المصدر |
| **issueDate** | تاريخ الفاتورة |
| **currency** | عملة الفاتورة |
| **dueDate** | تاريخ استحقاق الدفع |
| **shippingMethod** | طريقة الشحن |
| **confidentiality** / **status** | التصنيف والحوكمة |

## إجراءات دورة الحياة

| الإجراء | الوظيفة |
|---|---|
| **Post** | يرحّل الفاتورة (قفل حسب قواعد الترحيل) |
| **AddPayment** | يسجّل دفعة على الفاتورة |
| **ViewInvoice** | يفتح معاينة وثيقة الفاتورة |
| **Return / Credit / Debit** | ينشئ ReturnInvoiceAR أو CreditNoteAR أو DebitNoteAR |

## التبويبات / الإطار

التفاصيل، الأنشطة، المرفقات، السجلات، إضافة إلى **LineItems**.

## كيف تنشئ InvoiceAR

1. يُفضَّل **CreateInvoice** من أمر بيع، أو افتح `/Entities/CRM/InvoiceAR/new`
2. عيّن العميل وSO وissueDate والعملة وdueDate وshippingMethod والسرية والحالة
3. أكمل **LineItems**
4. راجع ثم **Post**
5. استخدم **AddPayment** أو أنشئ Return / Credit / Debit حسب الحاجة؛ **ViewInvoice** للوثيقة

:::danger[Post يقفل السجل]
راجع الرأس والبنود قبل Post. الفواتير المرحَّلة تتبع قواعد القفل/القراءة فقط.
:::

## أفضل الممارسات

:::tip[اربط دائمًا أمر البيع]
SO إلزامي ويحافظ على اتساق تبويبات الفاتورة في 360 العميل و360 أمر البيع.
:::

:::warning[تاريخ الاستحقاق والشحن إلزاميان]
لا تترك dueDate أو shippingMethod فارغين؛ التحقق يمنع الحفظ.
:::

## أقسام ذات صلة

- [أوامر البيع](/docs/crm/sales-order)
- [فواتير المرتجع](/docs/crm/return-invoice-ar)
- [إشعارات دائن](/docs/crm/credit-note-ar)
- [إشعارات مدين](/docs/crm/debit-note-ar)
- [مدفوعات الذمم](/docs/crm/payment-ar)
- [مقدمة المبيعات وCRM](/docs/crm/introduction)
