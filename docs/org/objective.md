---
sidebar_position: 5
title: الأهداف
---

# الأهداف

**الهدف (Objective)** سجل هدف تنظيمي بنوع وحالة، مع مالك وسرية بيانات اختيارية.

**المسار:** القائمة الجانبية ← المؤسسة ← الأهداف  
**الصفحة:** `/Entities/ORG/Objective`

## ماذا تفعل هذه الشاشة

- تعرض قائمة الأهداف بالاسمين والأوصاف والمالك
- تتيح إنشاء وتعديل وحذف من درج
- توفّر مفتاح **Active?** يُحفظ عبر تعديل الهدف (**editObjective**)

## أعمدة القائمة

| العمود | المعنى |
|---|---|
| name / nameAr | الاسم بالإنجليزية والعربية |
| ownerUsr | المالك |
| description / descriptionAr | الأوصاف |
| Active? | مفتاح النشاط — يُحفظ |
| actions | تعديل / حذف |

## الحقول

| الحقل | إلزامي؟ | الاستخدام |
|---|---|---|
| **EntityTypeId** | نعم | نوع الكيان |
| **EntityStatusId** | نعم | حالة الكيان |
| name / nameAr | في SaveDetails: نعم | الاسم باللغتين |
| description / descriptionAr | لا | الأوصاف |
| OwnerUsrId | لا | المالك |
| DataConfidentialityId | لا | سرية البيانات (في درج الحفظ) |

## كيف تستخدم الشاشة

1. افتح `/Entities/ORG/Objective`
2. أنشئ هدفًا أو عدّل سجلًا
3. عبّئ **EntityTypeId** و**EntityStatusId** ثم الاسمين عند الحفظ التفصيلي
4. أضف المالك وسرية البيانات عند الحاجة
5. احفظ من الدرج
6. استخدم مفتاح **Active?** عند الحاجة؛ التغيير يُpersist عبر التعديل

## أفضل الممارسات

:::tip[ثبّت النوع والحالة أولًا]
بدون **EntityTypeId** و**EntityStatusId** لا يكتمل الحفظ من النموذج.
:::

:::note[سرية البيانات اختيارية]
**DataConfidentialityId** اختياري؛ راجع [سرية البيانات](/docs/adm/data-confidentiality) عند استخدام التصنيف.
:::

## أقسام ذات صلة

- [مقدمة المؤسسة](/docs/org/introduction)
- [الفرق](/docs/org/team)
- [سرية البيانات](/docs/adm/data-confidentiality)
- [المصطلحات](/docs/org/glossary)
