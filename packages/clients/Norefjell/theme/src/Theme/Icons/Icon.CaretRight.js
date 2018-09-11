import React from "react"
import PropTypes from "prop-types"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const CaretRight = ({ className }) => (
  <svg className={className} width="7" height="12" viewBox="0 0 20 33">
    <path d="M12.15 16.5L.87 4.81c-.5-.52-.5-1.35.01-1.87L2.9.9a1.3 1.3 0 0 1 1.86 0l14.36 14.67a1.36 1.36 0 0 1 0 1.88L4.76 32.1a1.3 1.3 0 0 1-1.86.01L.88 30.06c-.5-.52-.5-1.34 0-1.87L12.14 16.5h.01z" />
  </svg>
)

CaretRight.propTypes = { className: PropTypes.string }

export const IconCaretRight = registerStyle(
  { [VARIANT_DEFAULT]: CaretRight },
  "IconCaretRight"
)

export default IconCaretRight
