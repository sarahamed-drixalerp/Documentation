---
sidebar_position: 9
title: فواتير المشتريات
---

# فواتير المشتريات

**فاتورة المشتريات (InvoiceAP)** فاتورة الحسابات الدائنة مقابل أمر شراء. المكوّنات تحت PurchaseInvoices؛ المسارات تستخدم InvoiceAP بما فيها صفحة **new**.

**المسار:** القائمة الجانبية ← المشتريات ← فواتير المشتريات  
**الصفحات:** `/Entities/SRM/InvoiceAP` · `/Entities/SRM/InvoiceAP/new` · `/Entities/SRM/InvoiceAP/{رقم}`

## ماذا تفعل InvoiceAP لأعمالك

- تفوتر المورد على أمر شراء مع تواريخ الإصدار والاستحقاق والعملة وطريقة الشحن
- تدعم **Post** و**Add Payment**
- تنشئ مستندات **Return** و**Credit** و**Debit** من الفاتورة
- تحمل **LineItems** وملخص المبالغ

## قائمة InvoiceAP

### الأعمدة (الأهم)

الاسم، المورد، أمر الشراء، الشحن، تاريخ الاستحقاق، الحالة.

### التصفية

بحث، الحالة، المورد، أمر الشراء، الشحن.

## الحقول الإلزامية

| الحقل | ملاحظات |
|---|---|
| **supplier** | الطرف المفوتر |
| **purchase order (PO)** | أمر المصدر |
| **issueDate** | تاريخ الفاتورة |
| **currency** | عملة الفاتورة |
| **dueDate** | تاريخ استحقاق الدفع |
| **shippingMethod** | طريقة الشحن |
| **confidentiality** / **status** / **type** | التصنيف والحوكمة |

## إجراءات دورة الحياة

| الإجراء | الوظيفة |
|---|---|
| **Post** | يرحّل الفاتورة (قفل حسب قواعد الترحيل) |
| **Add Payment** | يسجّل دفعة على الفاتورة |
| **Return / Credit / Debit** | ينشئ ReturnInvoiceAP أو CreditNoteAP أو DebitNoteAP |

## التبويبات / الإطار

التفاصيل، الأنشطة، المرفقات، السجلات، إضافة إلى **LineItems**.

## كيف تنشئ InvoiceAP

1. يُفضَّل **Create Invoice** من أمر شراء، أو افتح `/Entities/SRM/InvoiceAP/new`
2. عيّن المورد وPO وissueDate والعملة وdueDate وshippingMethod والسرية والحالة
3. أكمل **LineItems**
4. راجع ثم **Post**
5. استخدم **Add Payment** أو أنشئ Return / Credit / Debit حسب الحاجة

:::danger[Post يقفل السجل]
راجع الرأس والبنود قبل Post. الفواتير المرحَّلة تتبع قواعد القفل/القراءة فقط.
:::

## أفضل الممارسات

:::tip[اربط دائمًا أمر الشراء]
PO إلزامي ويحافظ على اتساق تبويبات الفاتورة في 360 المورد و360 أمر الشراء.
:::

:::warning[تاريخ الاستحقاق والشحن إلزاميان]
لا تترك dueDate أو shippingMethod فارغين؛ التحقق يمنع الحفظ.
:::

## أقسام ذات صلة

- [أوامر الشراء](/docs/srm/purchase-order)
- [فواتير المرتجع](/docs/srm/return-invoice-ap)
- [إشعارات دائن](/docs/srm/credit-note-ap)
- [إشعارات مدين](/docs/srm/debit-note-ap)
- [مدفوعات الموردين](/docs/srm/payment-ap)
- [مقدمة المشتريات وSRM](/docs/srm/introduction)
