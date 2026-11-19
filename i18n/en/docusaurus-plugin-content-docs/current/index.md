---
slug: /
title: Documentation
---

import Head from '@docusaurus/Head';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DocsHome() {
  const target = useBaseUrl('/docs/getting-started/introduction');
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </Head>
      <Redirect to={target} />
      <div style={{padding: '3rem 1.5rem', textAlign: 'center'}}>
        <h1>Drixal ERP Documentation</h1>
        <p>Redirecting to Getting Started...</p>
        <p><a href={target}>Click here if you are not redirected automatically</a></p>
      </div>
    </>
  );
}

<DocsHome />
