import React from "react"
import { theming } from "@staccx/base"

const Invoice = () => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.6 0.692308L14.2 0L12.8 0.692308L11.4 0L10 0.692308L8.6 0L7.2 0.692308L5.8 0L4.4 0.692308L3 0V16.6154C3 17.3804 3.6265 18 4.4 18H15.6C16.3735 18 17 17.3804 17 16.6154V0L15.6 0.692308ZM10.7 14.5385H6.5C6.1136 14.5385 5.8 14.2283 5.8 13.8462C5.8 13.464 6.1136 13.1538 6.5 13.1538H10.7C11.0864 13.1538 11.4 13.464 11.4 13.8462C11.4 14.2283 11.0864 14.5385 10.7 14.5385ZM5.8 11.0769C5.8 10.6948 6.1136 10.3846 6.5 10.3846H9.3C9.6864 10.3846 10 10.6948 10 11.0769C10 11.4591 9.6864 11.7692 9.3 11.7692H6.5C6.1136 11.7692 5.8 11.4591 5.8 11.0769ZM10.7 9H6.5C6.1136 9 5.8 8.68985 5.8 8.30769C5.8 7.92554 6.1136 7.61539 6.5 7.61539H10.7C11.0864 7.61539 11.4 7.92554 11.4 8.30769C11.4 8.68985 11.0864 9 10.7 9ZM13.5 14.5385C13.1136 14.5385 12.8 14.2283 12.8 13.8462C12.8 13.464 13.1136 13.1538 13.5 13.1538C13.8864 13.1538 14.2 13.464 14.2 13.8462C14.2 14.2283 13.8864 14.5385 13.5 14.5385ZM13.5 11.7692C13.1136 11.7692 12.8 11.4591 12.8 11.0769C12.8 10.6948 13.1136 10.3846 13.5 10.3846C13.8864 10.3846 14.2 10.6948 14.2 11.0769C14.2 11.4591 13.8864 11.7692 13.5 11.7692ZM13.5 9C13.1136 9 12.8 8.68985 12.8 8.30769C12.8 7.92554 13.1136 7.61539 13.5 7.61539C13.8864 7.61539 14.2 7.92554 14.2 8.30769C14.2 8.68985 13.8864 9 13.5 9ZM13.5 4.84615H6.5C6.1136 4.84615 5.8 4.536 5.8 4.15385C5.8 3.77169 6.1136 3.46154 6.5 3.46154H13.5C13.8864 3.46154 14.2 3.77169 14.2 4.15385C14.2 4.536 13.8864 4.84615 13.5 4.84615Z"
      fill="#3297BF"
    />
  </svg>
)

export const IconInvoice = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Invoice },
  "IconInvoice"
)

export default IconInvoice
