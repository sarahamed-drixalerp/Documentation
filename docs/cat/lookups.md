---
sidebar_position: 13
title: البيانات المرجعية
---

# البيانات المرجعية

قيم **Lookups** ثنائية اللغة تُختار من حقول المنتج أو الشاشات المرتبطة. النمط القياسي: **name** و**nameAr** إلزاميان، والأوصاف اختيارية — إلا حيث يُذكر خلاف ذلك.

## BillingFrequency

**تكرار الفوترة (BillingFrequency)** يُختار في المنتج عبر **billingFrequencyId**.

**الصفحة:** `/Entities/CAT/BillingFrequency`

| الحقل | الإلزام |
|---|---|
| **name** / **nameAr** | إلزامي |
| **description** / **descriptionAr** | اختياري |

## DeliveryProof

**إثبات التسليم (DeliveryProof)** يُختار في المنتج عبر **deliveryProofId**.

**الصفحة:** `/Entities/CAT/DeliveryProof`

| الحقل | الإلزام |
|---|---|
| **name** / **nameAr** | إلزامي |
| **description** / **descriptionAr** | اختياري |

## DiscountType

**نوع الخصم (DiscountType)** قيمة مرجعية للخصم في مسارات تعتمد هذا التصنيف.

**الصفحة:** `/Entities/CAT/DiscountType`

| الحقل | الإلزام |
|---|---|
| **name** / **nameAr** | إلزامي |
| **description** / **descriptionAr** | اختياري |

## ManagementBufferType

**نوع هامش الإدارة (ManagementBufferType)** قيمة مرجعية لهامش/مصدّة إدارية.

**الصفحة:** `/Entities/CAT/ManagementBufferType`

| الحقل | الإلزام |
|---|---|
| **name** / **nameAr** | اختياري في تحقق الواجهة الحالية (أضعف من باقي الـ lookups) |
| الأوصاف | حسب النموذج |

:::note[تحقق أضعف]
خلاف BillingFrequency وDeliveryProof وDiscountType وTradingType، تحقق Save لـ ManagementBufferType لا يفرض name/nameAr كإلزاميين في الواجهة الحالية.
:::

## TradingType

**نوع التداول (TradingType)** يُختار في المنتج عبر **tradingTypeId**. ظاهر في القائمة الجانبية للكتالوج.

**الصفحة:** `/Entities/CAT/TradingType`

| الحقل | الإلزام |
|---|---|
| **name** / **nameAr** | إلزامي |
| **description** / **descriptionAr** | اختياري |

## الاستخدام المشترك

1. افتح صفحة الـ lookup المطلوبة
2. أنشئ أو عدّل القيمة بالاسمين (حيث الإلزام)
3. اخترها من الحقل المناظر في [المنتج](/docs/cat/product) أو الشاشة ذات الصلة

## أفضل الممارسات

:::tip[أبقِ القوائم قصيرة وموحّدة]
تجنّب تكرار نفس المعنى بأسماء مختلفة حتى يبقى البحث والتصفية نظيفين.
:::

:::warning[الصلاحيات والمسارات]
بعض صفحات الـ lookup قد لا تظهر في القائمة الجانبية؛ المسار المباشر يعمل عند توفر الصلاحية.
:::

## أقسام ذات صلة

- [المنتج](/docs/cat/product)
- [وحدة السوق](/docs/cat/market-unit)
- [فئة المنتج](/docs/cat/product-category)
- [العلامة والموديل](/docs/cat/brand)
- [معدلات الضريبة](/docs/cat/tax-rate)
- [المصطلحات](/docs/cat/glossary)
