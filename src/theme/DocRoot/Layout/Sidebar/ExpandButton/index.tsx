import React, { type ReactNode } from 'react';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/DocRoot/Layout/Sidebar/ExpandButton';

import styles from './styles.module.css';

/**
 * Collapsed-sidebar affordance: show smalllogo and an expand icon badge
 * when the docs sidebar is hidden, click to expand.
 */
export default function DocRootLayoutSidebarExpandButton({
  toggleSidebar,
}: Props): ReactNode {
  const smallLogo = useBaseUrl('/img/smalllogo.png');

  return (
    <div
      className={styles.expandButton}
      title={translate({
        id: 'theme.docs.sidebar.expandButtonTitle',
        message: 'إظهار الشريط الجانبي',
        description:
          'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.expandButtonAriaLabel',
        message: 'إظهار الشريط الجانبي',
        description:
          'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      tabIndex={0}
      role="button"
      onKeyDown={toggleSidebar}
      onClick={toggleSidebar}>
      <img
        className={styles.expandLogo}
        src={smallLogo}
        alt=""
        width={34}
        height={34}
        decoding="async"
      />
      <div className={styles.expandIconBadge}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  );
}
