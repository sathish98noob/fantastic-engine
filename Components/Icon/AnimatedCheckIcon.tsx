
import React from 'react';

const AnimatedCheckIcon: React.FC = () => {
    return (
        <svg
            className="h-20 w-20"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>
                {`
                    .checkmark-circle {
                        stroke-dasharray: 166;
                        stroke-dashoffset: 166;
                        stroke-width: 2;
                        stroke-miterlimit: 10;
                        stroke: #4ade80; /* green-400 */
                        fill: none;
                        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
                    }
                    .checkmark {
                        transform-origin: 50% 50%;
                        stroke-dasharray: 48;
                        stroke-dashoffset: 48;
                        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
                    }
                    .checkmark-check {
                        stroke-width: 4;
                        stroke-linecap: round;
                        stroke: #fff;
                        fill: none;
                    }
                    @keyframes stroke {
                        100% {
                            stroke-dashoffset: 0;
                        }
                    }
                `}
            </style>
            <circle className="checkmark-circle" cx="26" cy="26" r="25" />
            <path
                className="checkmark-check checkmark"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
        </svg>
    );
};

export default AnimatedCheckIcon;
