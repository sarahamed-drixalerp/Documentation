---
sidebar_position: 15
title: المصطلحات
---

# المصطلحات

تعريفات مختصرة كما تظهر في وحدة المشتريات وSRM في Drixal ERP. الأسماء الإنجليزية كما في النظام بين قوسين.

| المصطلح | التعريف |
|---|---|
| المشتريات وSRM (SRM & Procurement) | وحدة الموردين وطلبات الشراء والعروض والأوامر والذمم الدائنة |
| اللوحة (Dashboard) | مؤشرات الالتزام والذمم الدائنة بفلتر مورد؛ بلا CRUD |
| مورد (Supplier) | سجل حساب المورد؛ Id و360؛ Block / UnBlock، AssignPriceList، OpeningBalance، CreateInvoice، AddPayment |
| طلب شراء (PurchaseRequisition) | احتياج داخلي؛ Submit؛ Convert to QuoteRequest / Bid |
| طلب عرض أسعار (QuoteRequest) | RFQ لمورد واحد؛ Send to Supplier؛ Convert to SupplierQuote |
| مناقصة (Bid) | طرح لعدة موردين؛ Publish → Close/Evaluate → Award؛ Cancel؛ مراحل Planning / Published / Closed / Awarded |
| عرض مورد (SupplierQuote) | عرض تسعير؛ Accept / Reject؛ Convert to PurchaseOrder |
| أمر شراء (PurchaseOrder) | التزام الشراء؛ Send، Accept، Create Invoice، Add Payment؛ تبويبات LineItems / Details / Invoices |
| فاتورة مشتريات (InvoiceAP) | فاتورة ذمم دائنة؛ Post، Add Payment؛ Return / Credit / Debit؛ مسار `/new` |
| فاتورة مرتجع (ReturnInvoiceAP) | مرتجع مقابل فاتورة أصلية؛ Post |
| إشعار مدين (DebitNoteAP) | مدين مقابل فاتورة؛ Post |
| إشعار دائن (CreditNoteAP) | دائن مقابل فاتورة؛ Post |
| دفعة موردين (PaymentAP) | غلاف SRM فوق مدفوعات FIN؛ Assign وPost؛ قفل عند الترحيل |
| مردود موردين (RefundAP) | غلاف SRM فوق مردودات SHRD (جانب AP)؛ Assign وPost |
| بنود خط (LineItems) | صفوف منتج/بند على الطلبات والعروض والأوامر ومستندات الذمم الدائنة |
| 360 | مساحة تشغيل بتبويبات كيانات مرتبطة (مثل أوامر الشراء والفواتير على المورد) |
| ترحيل (Post) | قفل الحالة على مستندات الذمم الدائنة (ودفعة/مردود FIN/SHRD) |
| Send to Supplier | إرسال مستند الشراء/RFQ/أمر الشراء للمورد (يتطلب بنودًا حيث يفرضها النظام) |
| Accept / Reject | قبول أو رفض عرض المورد (أو قبول أمر الشراء بعد الإرسال) |
| Publish / Close / Award / Cancel | إجراءات دورة حياة المناقصة |
| CustomerPO | أمر شراء العميل — في [CRM](/docs/crm/customer-po) وليس SRM |

## أقسام ذات صلة

- [مقدمة المشتريات وSRM](/docs/srm/introduction)
- [الموردون](/docs/srm/supplier)
- [أوامر الشراء](/docs/srm/purchase-order)
- [فواتير المشتريات](/docs/srm/invoice-ap)
