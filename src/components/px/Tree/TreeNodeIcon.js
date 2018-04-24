import React from 'react';

export default ({ className = 'chevron', open }) => (
  <svg
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width={16}
    height={16}
  >
    <defs>
      <g id="open">
        <path d="M2.4 6.2l5.5 5.5 5.5-5.5" fill="black" />
      </g>
      <g id="closed">
        <path strokeLinejoin="round" d="M6.2 13.2l5.4-5.5-5.5-5.5" fill="black" />
      </g>
    </defs>
    {open && <use href="#open" />}
    {!open && <use href="#closed" />}
  </svg>
);
