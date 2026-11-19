import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/Arrow';

export default function IconArrow(props: Props): ReactNode {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}>
      <rect
        x="3.5"
        y="4"
        width="17"
        height="16"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9.5 4v16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.25 9.25 11.5 12l2.75 2.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
