
import React from 'react';

const TrustpilotIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M32.4,128.5l80-57.1a7.9,7.9,0,0,1,9.2,0l80,57.1a8.1,8.1,0,0,1-4.6,14.6H37A8.1,8.1,0,0,1,32.4,128.5Z" fill="#00b67a"/>
        <polygon points="128 32 32 104 224 104 128 32" fill="#00b67a"/>
        <rect x="32" y="152" width="192" height="64" fill="#00b67a"/>
    </svg>
);

export default TrustpilotIcon;
