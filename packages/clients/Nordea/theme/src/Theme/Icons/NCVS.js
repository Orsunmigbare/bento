import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Ncvs = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.778198 0.550781C0.731934 0.574219 0.689758 0.603516 0.653015 0.638672C0.558655 0.730469 0.5 0.859375 0.5 1V24C0.5 24.0918 0.524658 24.1777 0.567688 24.252C0.605164 24.3164 0.656555 24.3711 0.717773 24.4121L0.767334 24.4395L0.823975 24.4668C0.849976 24.4766 0.876953 24.4844 0.904785 24.4902C0.935608 24.4961 0.967468 24.5 1 24.5H24C24.1279 24.5 24.2445 24.4512 24.3329 24.373C24.4354 24.2812 24.5 24.1484 24.5 24V1C24.5 0.964844 24.4961 0.929688 24.4887 0.894531C24.4797 0.851562 24.4653 0.8125 24.4465 0.775391C24.3976 0.679688 24.3184 0.599609 24.2214 0.552734C24.1884 0.537109 24.1533 0.523438 24.1166 0.515625C24.0792 0.505859 24.0402 0.5 24 0.5H1C0.920349 0.5 0.845032 0.517578 0.778198 0.550781ZM1.5 23.5V1.5H23.5V23.5H1.5ZM6.63171 5.66211C6.60229 5.69531 6.57703 5.73047 6.5567 5.76953C6.52051 5.83789 6.5 5.91602 6.5 6C6.5 6.27539 6.72388 6.5 7 6.5H21C21.2761 6.5 21.5 6.27539 21.5 6C21.5 5.93164 21.486 5.86523 21.4607 5.80469C21.4379 5.75195 21.4061 5.70312 21.3671 5.66016C21.2757 5.5625 21.1451 5.5 21 5.5H7C6.85425 5.5 6.72308 5.5625 6.63171 5.66211ZM3.5 9C3.5 8.88672 3.53784 8.7832 3.60156 8.69922C3.69287 8.57812 3.8374 8.5 4 8.5H21C21.2761 8.5 21.5 8.72461 21.5 9C21.5 9.13672 21.4442 9.26172 21.354 9.35156C21.2635 9.44336 21.1383 9.5 21 9.5H4C3.95142 9.5 3.90448 9.49414 3.86005 9.48047C3.8277 9.4707 3.79675 9.45703 3.76752 9.44141C3.60846 9.35938 3.5 9.19141 3.5 9ZM4 11.5C3.72388 11.5 3.5 11.7246 3.5 12C3.5 12.2754 3.72388 12.5 4 12.5H21C21.1202 12.5 21.2306 12.457 21.3169 12.3867C21.3784 12.3359 21.4276 12.2715 21.4594 12.1973C21.4855 12.1367 21.5 12.0703 21.5 12C21.5 11.7246 21.2761 11.5 21 11.5H4ZM3.5 15C3.5 14.7246 3.72388 14.5 4 14.5H21C21.126 14.5 21.2411 14.5469 21.329 14.623C21.4338 14.7148 21.5 14.8496 21.5 15C21.5 15.0859 21.4778 15.168 21.4388 15.2402C21.3539 15.3945 21.1892 15.5 21 15.5H4C3.84711 15.5 3.71027 15.4316 3.61853 15.3242C3.54462 15.2363 3.5 15.123 3.5 15ZM4 17.5C3.72388 17.5 3.5 17.7246 3.5 18C3.5 18.123 3.54419 18.2344 3.61749 18.3203C3.70923 18.4297 3.84656 18.5 4 18.5H11C11.2761 18.5 11.5 18.2754 11.5 18C11.5 17.7246 11.2761 17.5 11 17.5H4Z"
    />
  </svg>
)

export const NcvsIcon = registerStyle({ [VARIANT_DEFAULT]: Ncvs }, "Ncvs")

export default Ncvs