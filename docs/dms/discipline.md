---
sidebar_position: 7
title: التخصصات
---

# التخصصات

**التخصص (Discipline)** مجال فني أو تشغيلي في DMS يُربط بمستخدم مسؤول (`DisciplineUsr`) ويمكن تعليمه كـ **فني (isTechnical)** لاختيار التخصصات على الوثائق متعددة التخصصات. الموظفون يُدارون عبر تبويب Employees أو مسار `DisciplineEmployee` المستقل.

**المسار:** القائمة الجانبية ← إدارة الوثائق ← التخصصات  
**الصفحات:** `/Entities/DMS/Discipline` · `/Entities/DMS/Discipline/new` · `/Entities/DMS/Discipline/{رقم}`

**موظف التخصص (مستقل):** `/Entities/DMS/DisciplineEmployee` · `/new` · `/{رقم}`

## ماذا تفعل هذه الشاشة

- تعرّف التخصصات المستخدمة في أنواع الوثائق ومشاريع DMS والوثائق
- تربط مستخدمًا افتراضيًا للتخصص (`DisciplineUsr`)
- تميّز التخصصات الفنية عبر **Is Technical**
- تدير موظفي التخصص (`DisciplineEmployee`: DisciplineId + DisciplineUsrId)

## قائمة التخصصات

### الأعمدة

| العمود | المعنى |
|---|---|
| **Name** | اسم التخصص |
| **DisciplineUsr** | المستخدم المرتبط |
| **Actions** | إجراءات الصف |

### التصفية

| التصفية | الاستخدام |
|---|---|
| **Name** | بحث بالاسم |
| **DisciplineUsrId** | المستخدم |

## الحقول

| الحقل | إلزامي؟ | الاستخدام |
|---|---|---|
| **name** | نعم | الاسم |
| **nameAr** | نعم | الاسم بالعربية |
| description / descriptionAr | لا | أوصاف |
| DisciplineUsrId | لا | المستخدم المسؤول عن التخصص |
| **isTechnical (Is Technical)** | — | مفتاح: تخصص فني (مطلوب اختياره على الوثائق متعددة التخصصات) |
| **EntityTypeId / EntityStatusId** | نعم (في SaveDetails) | نوع وحالة الكيان |

## التبويبات

| التبويب | الغرض |
|---|---|
| **Details** | هوية التخصص و`isTechnical` وDisciplineUsr |
| **Employees** | قائمة فرعية `DisciplineEmployee` (يظهر بعد الحفظ / لغير الجديد) |

### موظف التخصص (DisciplineEmployee)

| الحقل | إلزامي؟ | الاستخدام |
|---|---|---|
| **DisciplineId** | نعم | التخصص |
| **DisciplineUsrId** | نعم | الموظف / المستخدم |
| IsActive | — | نشط / غير نشط |

قائمة المسار المستقل تعرض أيضًا: DisciplineName، DisciplineUsrName، IsActive، CreateDate.

## كيف تستخدم الشاشة

1. أنشئ التخصص بالاسم و`nameAr`
2. عيّن DisciplineUsr وفعّل **Is Technical** إن كان فنيًا
3. احفظ ثم أضف موظفين من تبويب Employees أو من `/Entities/DMS/DisciplineEmployee`
4. اربط التخصص بمشروع DMS من تبويب Disciplines للمشروع
5. عند الوثائق متعددة التخصصات اختر تخصصًا فنيًا واحدًا على الأقل

## أفضل الممارسات

:::tip[علّم الفني قبل أنواع Multi-Discipline]
الوثائق متعددة التخصصات تطلب تخصصًا فنيًا واحدًا على الأقل — فعّل `isTechnical` على التخصصات الصحيحة.
:::

:::note[مساران لموظفي التخصص]
التبويب على سجل التخصص أو المسار المستقل `DisciplineEmployee` يديران نفس الربط DisciplineId + DisciplineUsrId.
:::

:::warning[تخصص المشروع منفصل]
ربط التخصص بمستخدم على المشروع يتم عبر `DMSProjectDiscipline` في [مشروع DMS](/docs/dms/dms-project)، وليس من قائمة التخصص وحدها.
:::

## أقسام ذات صلة

- [مقدمة إدارة الوثائق](/docs/dms/introduction)
- [مشروع DMS](/docs/dms/dms-project)
- [نوع الوثيقة](/docs/dms/document-type)
- [الوثائق](/docs/dms/document)
- [المصطلحات](/docs/dms/glossary)
