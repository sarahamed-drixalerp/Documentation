import React, {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {Props} from '@theme/DocRoot/Layout/Sidebar/ExpandButton';

import styles from './styles.module.css';

/**
 * Collapsed-sidebar affordance — matches Aspire app: show smalllogo when the
 * docs sidebar is hidden, click to expand.
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
        width={36}
        height={36}
        decoding="async"
      />
    </div>
  );
}
