import React from 'react';

export type ArrowIconElement = SVGSVGElement;
export type ArrowIconProps = React.SVGAttributes<SVGSVGElement>;

const ArrowIcon = React.forwardRef<ArrowIconElement, ArrowIconProps>(
  (props, forwardedRef) => (
    <svg 
      width="480" 
      height="80" 
      viewBox="0 0 480 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      ref={forwardedRef} 
      {...props}
    >
      {/* First Arrow - Points to Simple */}
      <path 
        d="M120 75 L120 15 M115 20 L120 15 L125 20" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Second Arrow - Points to Detailed */}
      <path 
        d="M240 75 L240 15 M235 20 L240 15 L245 20" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Third Arrow - Points to Developer */}
      <path 
        d="M360 75 L360 15 M355 20 L360 15 L365 20" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
);

ArrowIcon.displayName = "ArrowIcon";

export default ArrowIcon;