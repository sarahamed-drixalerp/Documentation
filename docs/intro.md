---
title: مقدمة
slug: /intro
---

import Head from '@docusaurus/Head';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function IntroRedirect() {
  const target = useBaseUrl('/docs/getting-started/introduction');
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </Head>
      <Redirect to={target} />
      <div style={{padding: '3rem 1.5rem', textAlign: 'center'}}>
        <h1>مقدمة إلى Drixal ERP</h1>
        <p>جاري تحويلك إلى صفحة البداية...</p>
        <p><a href={target}>انقر هنا إذا لم يتم التحويل تلقائيًا</a></p>
      </div>
    </>
  );
}

<IntroRedirect />
