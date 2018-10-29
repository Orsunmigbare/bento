import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Card = () => (
  <svg
    width="30"
    height="28"
    viewBox="0 0 30 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.5 10.25v2.53a2.9 2.9 0 0 1 2.5 2.94v1.56a2.9 2.9 0 0 1-2.5 2.94v2.53a5 5 0 0 1-5 5H3.12A3.13 3.13 0 0 1 0 24.62V8.37c0-1.72 1.4-3.12 3.13-3.12h2.41L21.71.9a.63.63 0 0 1 .77.45l1 4a5 5 0 0 1 4.02 4.9zm-5.33-5l-.75-2.98-11.07 2.98h11.82zM3.12 26.5H22.5a3.75 3.75 0 0 0 3.75-3.75v-2.5h-4.09c-1.53 0-2.79-1.33-2.79-2.97v-1.56c0-1.64 1.26-2.97 2.8-2.97h4.08v-2.5A3.75 3.75 0 0 0 22.5 6.5H3.12c-1.03 0-1.87.84-1.87 1.87v16.25c0 1.04.84 1.88 1.88 1.88zm24.1-7.5c.84 0 1.53-.77 1.53-1.72v-1.56c0-.95-.69-1.72-1.54-1.72h-5.05c-.84 0-1.53.77-1.53 1.72v1.56c0 .95.69 1.72 1.54 1.72h5.04zm-2.84-2.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zm-20-8.75H3.13a.62.62 0 1 0 0 1.25h1.25a.62.62 0 1 0 0-1.25zm2.5 0h1.25a.62.62 0 1 1 0 1.25H6.87a.62.62 0 1 1 0-1.25zm5 0h-1.26a.62.62 0 1 0 0 1.25h1.26a.62.62 0 1 0 0-1.25zm2.5 0h1.24a.62.62 0 1 1 0 1.25h-1.24a.62.62 0 1 1 0-1.25zM18.12 9h1.25a.62.62 0 1 0 0-1.25h-1.25a.62.62 0 1 0 0 1.25zm5.63-.63c0 .35-.28.63-.63.63h-1.25a.62.62 0 1 1 0-1.25h1.25c.35 0 .63.28.63.62zM4.37 24H3.13a.62.62 0 1 0 0 1.25h1.25a.62.62 0 1 0 0-1.25zm2.5 0h1.25a.62.62 0 1 1 0 1.25H6.88a.62.62 0 1 1 0-1.25zm5 0h-1.24a.62.62 0 1 0 0 1.25h1.24a.62.62 0 1 0 0-1.25zm2.5 0h1.26a.62.62 0 1 1 0 1.25h-1.26a.62.62 0 1 1 0-1.25zm5 0h-1.25a.62.62 0 1 0 0 1.25h1.25a.62.62 0 1 0 0-1.25zm1.88.62c0-.34.28-.62.63-.62h1.25a.62.62 0 1 1 0 1.25h-1.25a.62.62 0 0 1-.63-.63z"
    />
  </svg>
)

export const CardIcon = registerStyle({ [VARIANT_DEFAULT]: Card }, "Card")

export default Card