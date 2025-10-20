
import React from 'react';

const YelpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#d32323" d="M14.46 20.229c-1.25.333-2.5.5-3.75.5-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10c0 3.75-2.062 7.031-5.156 8.75l-1.094-2.531z"/>
        <path fill="#fff" d="M12.924 16.589l1.789-3.778h-2.126l-2.071 4.194c.489.052.983.08 1.48.08.35 0 .696-.013 1.037-.039a.747.747 0 00-.109-.457zM11.75 8.16l2.164 4.57 1.496-3.15-2.179-4.39-1.481 3.03v-.06z"/>
    </svg>
);

export default YelpIcon;
