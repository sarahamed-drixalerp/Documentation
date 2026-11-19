---
sidebar_position: 13
title: المصطلحات
---

# المصطلحات

تعريفات مختصرة كما تظهر في مؤسسة Drixal ERP. الأسماء الإنجليزية كما في النظام بين قوسين.

| المصطلح | التعريف |
|---|---|
| المؤسسة (ORG) | وحدة الهيكل التشغيلي: أقسام، فرق، فروع، أهداف، عطلات، مواقع، أصول، أنظمة تقنية معلومات، وقيم مرجعية |
| القسم (Department) | عقدة في شجرة الهيكل؛ المستوى يتحدد بالمسار: قسم / شعبة / وحدة |
| شعبة (Section) | مستوى متوسط تحت القسم في الشجرة |
| وحدة (Unit) | المستوى الأخير في شجرة الأقسام |
| الفريق (Team) | مجموعة عمل بقائد اختياري وأعضاء |
| عضو فريق (Team Member) | ربط مستخدم بفريق عبر `memberUsrId` |
| الفرع (Branch) | سجل فرع؛ مفتاح Active يُحفظ عبر editBranch |
| الهدف (Objective) | هدف تنظيمي بنوع وحالة؛ Active يُحفظ عبر التعديل |
| العطلة (Holiday) | فترة عطلة مع تواريخ وتكرار سنوي اختياري؛ Active يُحفظ |
| الموقع (Location) | موقع تحت BranchId وParentId اختياريين؛ Active toast-only |
| الأصل (Asset) | أصل بتتبع رقم تسلسلي وقيم ≥ 0؛ Active toast-only |
| نظام تقنية المعلومات (IT System) | مثل الأصل مع SupplierId؛ Active toast-only |
| العملة (Currency) | سعر صرف ووقت تحديث وعملة أساسية؛ انظر أيضًا مسار ADM |
| isBaseCurrency | تمييز العملة الأساسية |
| معدل الضريبة (Tax Rate) | نسبة `taxValue_prc` وتسمية فاتورة وافتراضي |
| أولوية الخدمة (Service Priority) | أسماء وأوصاف ولون للعرض |
| EntityTypeId / EntityStatusId | نوع وحالة الكيان (إلزاميان في عدة نماذج ORG) |
| DataConfidentialityId | مستوى سرية البيانات (NCA)؛ موثّق في الإدارة |
| OwnerUsrId / ManagerUsrId | مالك السجل أو مدير القسم |
| CostCenterId / ProfitCenterId | روابط مالية اختيارية على القسم |
| LineItem | ليس له قائمة مستقلة تحت ORG؛ موثّق في بنود المشروع (PMO) |

## أقسام ذات صلة

- [مقدمة المؤسسة](/docs/org/introduction)
- [الأقسام](/docs/org/department)
- [الفرق](/docs/org/team)
- [الفروع](/docs/org/branch)
- [العملات](/docs/org/currency)
- [سرية البيانات](/docs/adm/data-confidentiality)
- [بنود المشروع](/docs/pmo/line-items)
