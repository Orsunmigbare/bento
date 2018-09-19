import React from "react"
import styled from "styled-components"

const Logo = ({ inverted, isOnBlack, menuIsVisible }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(2 2)">
        <polygon
          stroke={
            menuIsVisible
              ? "#ffffff"
              : !inverted
                ? "#E6503F"
                : isOnBlack
                  ? "#E6503F"
                  : "#ffffff"
          }
          strokeWidth="3.5"
          points="0 11.503 0 34.497 19.462 46 38.923 34.497 38.923 11.503 19.462 0"
        />
        <path
          stroke={
            menuIsVisible
              ? "#ffffff"
              : !inverted
                ? "#E6503F"
                : isOnBlack
                  ? "#E6503F"
                  : "#ffffff"
          }
          strokeWidth="3.5"
          d="M0 11.5L19.46 23m19.46-11.5L19.46 23m0 23V23M29.2 5.75L9.73 17.25M0 23l19.46 11.5m9.74 5.75v-23"
        />
        <path
          fill={menuIsVisible ? "#ffffff" : !inverted ? "#2b2b2b" : "#ffffff"}
          fillRule="nonzero"
          d="M62.56 34c-1.64 0-3.25-.22-4.81-.67a11.87 11.87 0 0 1-3.75-1.7l1.82-3.75c.9.64 2 1.15 3.26 1.54 1.28.37 2.55.56 3.78.56 2.83 0 4.24-.78 4.24-2.33 0-.74-.36-1.25-1.1-1.54a17.5 17.5 0 0 0-3.44-.83 27.84 27.84 0 0 1-4.1-.9 6.44 6.44 0 0 1-2.72-1.78 5.28 5.28 0 0 1-1.13-3.6c0-2 .8-3.58 2.38-4.77 1.62-1.2 3.79-1.81 6.52-1.81 1.38 0 2.77.17 4.16.51 1.4.32 2.53.75 3.41 1.3l-1.82 3.75a10.87 10.87 0 0 0-5.8-1.58c-1.38 0-2.44.23-3.17.67-.71.43-1.06 1-1.06 1.7 0 .79.38 1.36 1.13 1.7.79.31 1.98.62 3.6.9 1.62.27 2.94.57 3.98.91 1.03.34 1.92.92 2.65 1.74a4.91 4.91 0 0 1 1.13 3.47c0 1.97-.82 3.55-2.46 4.73-1.64 1.19-3.87 1.78-6.7 1.78zm24.6-1.42c-.55.47-1.23.83-2.04 1.06a8.6 8.6 0 0 1-2.5.36c-2.22 0-3.94-.6-5.15-1.81-1.21-1.21-1.82-2.98-1.82-5.3V8h4.73v4.81h5.42v3.95h-5.42v10.02c0 1.03.24 1.81.72 2.37.5.52 1.2.79 2.09.79 1.06 0 1.94-.3 2.65-.87l1.32 3.51zm23.02-19.92v21.06h-4.5V31a7.33 7.33 0 0 1-2.92 2.25 9.3 9.3 0 0 1-3.79.75 10.5 10.5 0 0 1-5.3-1.34 9.53 9.53 0 0 1-3.64-3.79 12.02 12.02 0 0 1-1.29-5.68c0-2.16.43-4.04 1.3-5.64a9.53 9.53 0 0 1 3.63-3.79 10.5 10.5 0 0 1 8.9-.63 7.91 7.91 0 0 1 2.88 2.09v-2.56h4.73zM99.5 29.78c1.74 0 3.18-.6 4.32-1.82a6.69 6.69 0 0 0 1.7-4.77c0-1.97-.56-3.56-1.7-4.77a5.67 5.67 0 0 0-4.32-1.82c-1.74 0-3.18.6-4.32 1.82a6.78 6.78 0 0 0-1.66 4.77c0 1.97.55 3.56 1.66 4.77a5.67 5.67 0 0 0 4.32 1.82zM125.65 34c-2.1 0-3.97-.46-5.64-1.38a9.95 9.95 0 0 1-3.9-3.83 11.2 11.2 0 0 1-1.4-5.6 11 11 0 0 1 1.4-5.56c.93-1.63 2.22-2.91 3.86-3.83a11.55 11.55 0 0 1 5.68-1.38c2 0 3.74.42 5.23 1.26a8.02 8.02 0 0 1 3.4 3.63l-3.63 2.21a5.68 5.68 0 0 0-2.2-2.17c-.85-.5-1.8-.75-2.83-.75-1.77 0-3.24.6-4.4 1.82a6.52 6.52 0 0 0-1.74 4.77c0 2 .57 3.6 1.7 4.81a5.95 5.95 0 0 0 4.44 1.78c1.03 0 1.98-.24 2.84-.71a5.99 5.99 0 0 0 2.2-2.21l3.63 2.2a8.47 8.47 0 0 1-3.45 3.68 10.37 10.37 0 0 1-5.19 1.26zm21.72 0c-2.1 0-3.98-.46-5.65-1.38a9.95 9.95 0 0 1-3.9-3.83 11.21 11.21 0 0 1-1.4-5.6 11 11 0 0 1 1.4-5.56c.94-1.63 2.22-2.91 3.86-3.83a11.55 11.55 0 0 1 5.69-1.38c1.99 0 3.73.42 5.22 1.26a8.02 8.02 0 0 1 3.41 3.63l-3.64 2.21a5.7 5.7 0 0 0-2.2-2.17c-.85-.5-1.8-.75-2.83-.75-1.77 0-3.24.6-4.4 1.82a6.52 6.52 0 0 0-1.74 4.77c0 2 .57 3.6 1.7 4.81a5.94 5.94 0 0 0 4.44 1.78c1.03 0 1.98-.24 2.84-.71a6 6 0 0 0 2.2-2.21l3.63 2.2a8.48 8.48 0 0 1-3.45 3.68 10.37 10.37 0 0 1-5.19 1.26z"
        />
      </g>
    </g>
  </SVG>
)

const SVG = styled.svg`
  display: block;
  width: 158px;
  height: 50px;
  path,
  polygon {
    transition: stroke 0.4s ease, fill 0.2s ease;
  }
`

export default Logo
