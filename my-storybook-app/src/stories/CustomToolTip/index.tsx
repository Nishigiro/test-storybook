import React, { CSSProperties, MouseEvent, useState } from 'react'

import {
  Overlay,
  TooltipContentStyle,
  TooltipIconStyle,
  DivTooltip,
  TooltipNoIconStyle
} from './styles/index'

type CustomTooltipProps = {
  content?: string | JSX.Element
  dark?: boolean
  hover?: boolean
  hasIcon?: boolean
  iconStyle?: CSSProperties
}

export const CustomTooltip = ({
  content,
  dark,
  hover,
  hasIcon,
  iconStyle
}: CustomTooltipProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const openTooltip = (event: MouseEvent) => {
    event.preventDefault()
    setIsTooltipOpen(true)
  }

  const closeTooltip = (event: MouseEvent) => {
    event.preventDefault()
    setIsTooltipOpen(false)
  }

  const eventHandlers = hover
    ? {
        onMouseEnter: openTooltip,
        onMouseLeave: closeTooltip
      }
    : {
        onClick: openTooltip
      }

  return (
    <>
      {hasIcon === undefined || hasIcon ? (
        <TooltipIconStyle
          {...eventHandlers}
          dark={dark}
          style={iconStyle}
          hover={hover}
        >
          i
        </TooltipIconStyle>
      ) : (
        <TooltipNoIconStyle {...eventHandlers}></TooltipNoIconStyle>
      )}

      {isTooltipOpen && (
        <>
          {!hover && <Overlay onClick={closeTooltip} />}
          <DivTooltip>
            <TooltipContentStyle>{content}</TooltipContentStyle>
          </DivTooltip>
        </>
      )}
    </>
  )
}
