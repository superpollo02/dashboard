import * as React from "react";

export const ChevronDownIcon = ({
  width = 14,
  height = 14,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
