import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import IconArrow from '@theme/Icon/Arrow';
import type {Props} from '@theme/DocSidebar/Desktop/CollapseButton';

import styles from './styles.module.css';

export default function CollapseButton({onClick}: Props): ReactNode {
  return (
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'طي الشريط الجانبي',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'طي الشريط الجانبي',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      className={clsx(styles.collapseSidebarButton)}
      onClick={onClick}>
      <IconArrow className={styles.collapseSidebarButtonIcon} />
    </button>
  );
}
