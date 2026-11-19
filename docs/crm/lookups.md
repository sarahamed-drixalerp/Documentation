---
sidebar_position: 19
title: البيانات المرجعية
---

# البيانات المرجعية

**البيانات المرجعية (lookups)** في CRM قيم ثنائية اللغة تُختار في العملاء المحتملين والعملاء والصفقات والشاشات المرتبطة. النمط القياسي: **name** و**nameAr** إلزاميان مع مفتاح Active — إلا حيث يُذكر خلاف ذلك.

## Industry

**الصناعة (Industry)** تصنّف العملاء المحتملين والعملاء.

**الصفحة:** `/Entities/CRM/Industry`

| الحقل | إلزامي |
|---|---|
| **name** / **nameAr** | إلزامي |
| **Active** | مفتاح |

## Sector

**القطاع (Sector)** يصنّف العملاء المحتملين والعملاء بمزيد من التفصيل.

**الصفحة:** `/Entities/CRM/Sector`

| الحقل | إلزامي |
|---|---|
| **name** / **nameAr** | إلزامي |
| **Active** | مفتاح |

## Confidence

**الثقة (Confidence)** تُختار على الصفقات (مزيج ثقة الصفقات المفتوحة في اللوحة).

**الصفحة:** `/Entities/CRM/Confidence`

| الحقل | إلزامي |
|---|---|
| **name** / **nameAr** | إلزامي |
| **Active** | مفتاح |

## DealLostReason

**سبب خسارة الصفقة (DealLostReason)** إلزامي عند إغلاق الصفقة كـ Lost.

**الصفحة:** `/Entities/CRM/DealLostReason`

| الحقل | إلزامي |
|---|---|
| **name** / **nameAr** | إلزامي |
| **Active** | مفتاح |

## LeadSource

**مصدر العميل المحتمل (LeadSource)** يصنّف من أين أتت الفرصة.

**الصفحة:** `/Entities/CRM/LeadSource`

| الحقل | إلزامي |
|---|---|
| **name** / **nameAr** | إلزامي |
| **Active** | مفتاح |

## Competitor

**المنافس (Competitor)** يُستخدم عند Lost على الصفقة (المنافس ومبلغ فوز المنافس). للمنافسين صفحات قائمة وId (وليست index فقط).

**الصفحات:** `/Entities/CRM/Competitor` · `/Entities/CRM/Competitor/{رقم}`

| الحقل | إلزامي |
|---|---|
| **name** / **nameAr** | إلزامي |
| **type** / **status** | حوكمة السجل |

## DeliveryAddress (فرعي فقط)

**عنوان التسليم (DeliveryAddress)** له ListSub وSave فقط — **بدون صفحات مستقلة**. يُصان كسجل فرعي تحت الأب الذي يستخدم عناوين التسليم.

## الاستخدام الشائع

1. افتح صفحة الـ lookup المطلوبة (Industry أو Sector أو Confidence أو DealLostReason أو LeadSource أو Competitor)
2. أنشئ أو عدّل بالاسمين (وActive / النوع-الحالة حسب الاقتضاء)
3. اختر القيمة من الحقل المطابق في Lead أو Customer أو Deal أو الشاشات المرتبطة

## أفضل الممارسات

:::tip[أبقِ القوائم قصيرة ومتسقة]
تجنّب تكرار المعنى نفسه بأسماء مختلفة حتى تبقى الفلاتر وأسباب Lost نظيفة.
:::

:::warning[Lost يحتاج DealLostReason وCompetitor]
جهّزهما قبل أن تغلق فرق المبيعات الصفقات كـ Lost.
:::

## أقسام ذات صلة

- [العملاء المحتملون](/docs/crm/lead)
- [العملاء](/docs/crm/customer)
- [الصفقات](/docs/crm/deal)
- [المصطلحات](/docs/crm/glossary)
