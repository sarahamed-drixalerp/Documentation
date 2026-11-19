---
sidebar_position: 9
title: المستخدمون الخارجيون
---

# المستخدمون الخارجيون

**المستخدم الخارجي (ExternalUser)** حساب بوابة مرتبط بمقاول وصلاحية ومشاريع معيَّنة. يتحكم في من يرى الوثائق أو يضيفها أو يدير مستخدمي المقاول في Aspire-Contractor.

**المسار:** القائمة الجانبية ← إدارة الوثائق ← المستخدمون الخارجيون  
**الصفحات:** `/Entities/DMS/ExternalUser` · `/Entities/DMS/ExternalUser/new` · `/Entities/DMS/ExternalUser/{رقم}`

## ماذا تفعل هذه الشاشة

- تنشئ مستخدمي بوابة المقاول بالاسم والبريد
- تعيّن **مستوى الصلاحية (permissionLevel)**
- تربط المقاول والمشاريع عبر **ProjectPicker**
- تفعّل أو تعطّل الحساب (**Active** / `isActive`)

## القائمة وبطاقات الملخص

### أعمدة القائمة

| العمود | المعنى |
|---|---|
| **Full Name** | الاسم الكامل |
| **Contractor** | المقاول |
| **Email** | البريد |
| **Phone** | الهاتف |
| **Assigned Projects** | المشاريع المعيَّنة |
| **Permission Level** | مستوى الصلاحية |
| **Status** | نشط (مفتاح Active) |
| **Actions** | إجراءات الصف |

### التصفية

| التصفية | الاستخدام |
|---|---|
| **بحث** | FullName / Name / Email / Phone |
| **Contractor** | المقاول |
| **PermissionLevel** | مستوى الصلاحية |

### بطاقات الإحصاء

Total Users · Active Users · Contractor Admins · Contractor Projects

## الحقول

| الحقل | إلزامي؟ | الاستخدام |
|---|---|---|
| **fullName** | نعم | الاسم الكامل |
| **email** | نعم | البريد (دخول البوابة) |
| phone | لا | الهاتف |
| **permissionLevel** | نعم | انظر الجدول أدناه (الافتراضي: View Only) |
| **Contractor** | — | المقاول المرتبط |
| **Assigned Projects** | — | اختيار مشاريع عبر ProjectPicker |
| **isActive (Active)** | — | تفعيل الحساب |

### مستويات الصلاحية (permissionLevel)

| القيمة | المعنى في البوابة |
|---|---|
| **View Only** | قراءة الوثائق والحالات |
| **Add New Document** | عرض وإرسال وثائق جديدة |
| **Admin** | إدارة المستخدمين والمشاريع والوثائق ضمن نطاق المقاول |

قيم قديمة مقبولة في بعض فحوصات التعديل: `upload and comment` (مطابقة غير حساسة لحالة الأحرف).

## كيف تستخدم الشاشة

1. أنشئ [المقاول](/docs/dms/contractor) والمشاريع أولًا
2. أنشئ المستخدم بـ fullName وemail
3. اختر permissionLevel والمقاول
4. عيّن Assigned Projects من ProjectPicker
5. اترك Active مفعّلاً للدخول إلى البوابة

## أفضل الممارسات

:::tip[أقل صلاحية كافية]
ابدأ بـ **View Only** أو **Add New Document**؛ احصر **Admin** على من يدير مستخدمي المقاول فعليًا.
:::

:::warning[Admin فقط يدير المستخدمين]
إدارة المستخدمين الخارجيين من البوابة تتطلب permissionLevel = **Admin**. غير ذلك يُرفض إنشاء/تحديث المستخدمين.
:::

:::note[المشاريع المعيَّنة تحدّ النطاق]
بدون مشاريع معيَّنة صحيحة يضيق أو يختل وصول المستخدم إلى وثائق المشاريع في البوابة.
:::

## أقسام ذات صلة

- [مقدمة إدارة الوثائق](/docs/dms/introduction)
- [المقاول](/docs/dms/contractor)
- [الوثائق](/docs/dms/document)
- [مشروع DMS](/docs/dms/dms-project)
- [المصطلحات](/docs/dms/glossary)
