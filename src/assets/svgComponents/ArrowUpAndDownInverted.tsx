import React from 'react';

const ArrowUpAndDownInverted = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g id="Icon" transform="rotate(180, 12, 12)">
            <path
                id="Vector"
                d="M14 6.99V14H16V6.99H19L15 3L11 6.99H14Z"
                fill="#007AFF"
            />
            <path
                id="Vector_2"
                d="M13 17.01H10V10H8V17.01H5L9 21L13 17.01Z"
                fill="#A7A8AB"
            />
        </g>
    </svg>
);

export default ArrowUpAndDownInverted;
