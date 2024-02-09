import React from 'react'

import { Co2TagTextStyle, Co2TagContainer, Co2TagItem } from './styles'
import { CustomTooltip } from '../CustomToolTip'

export type CO2TagProps = {
  positive: boolean
  wording?: string
  tooltip?: boolean
  modalText?: string
}

const CO2Tag = ({ positive, wording, tooltip, modalText }: CO2TagProps) => {
  return (
    <Co2TagContainer>
      <Co2TagItem positive={positive}>
        <Co2TagTextStyle>{wording}</Co2TagTextStyle>
        {tooltip && <CustomTooltip content={modalText} />}
      </Co2TagItem>
    </Co2TagContainer>
  )
}

export default CO2Tag
