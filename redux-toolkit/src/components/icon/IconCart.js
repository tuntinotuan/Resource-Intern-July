import React from "react";

const IconCart = ({ className, onClick = () => {}, size = 20 }) => {
  return (
    <span className={className} onClick={onClick}>
      {/* <svg
        width="44"
        height="41"
        viewBox="0 0 44 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="20.9584"
          cy="37.7083"
          rx="3.125"
          ry="3.125"
          fill="#292D32"
        />
        <circle cx="33.4584" cy="37.7083" r="3.125" fill="#292D32" />
        <path
          d="M5.33333 13.75L3.25 13.75"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7.41671 26.25L5.33337 26.25"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7.41669 20H1.16669"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M11.0873 8.54167L15.7094 29.2435C15.8625 29.9291 16.4709 30.4167 17.1734 30.4167H36.7473C37.4498 30.4167 38.0582 29.9291 38.2113 29.2435L42.4255 10.3685C42.6347 9.43136 41.9218 8.54167 40.9615 8.54167H11.0873ZM11.0873 8.54167L9.40419 2.35616C9.2265 1.70315 8.63356 1.25 7.95682 1.25H1.16669"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        style={{ width: size, height: size }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </span>
  );
};

export default IconCart;
